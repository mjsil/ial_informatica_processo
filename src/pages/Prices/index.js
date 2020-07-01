import React, { useContext, useState, useEffect } from 'react';
import { TextField, FormControlLabel, Switch } from '@material-ui/core';
import { StoreContext, StoreProvider } from '../../store';
import { useObserver } from 'mobx-react';
import localStorage from 'mobx-localstorage';

import {
    MyForm,
    MyCard,
    MyTypography,
    MyButton,
    MyListItem,
    MyListItemText,
} from './styles';

const PriceForm = () => {
    const store = useContext(StoreContext);
    const [price, setPrice] = useState({ code: '', name: '' });
    const [standard, setStandard] = useState(false);

    const handleSend = (e) => {
        e.preventDefault();

        store.addPrice(price);
        setPrice({ code: '', name: '' });
        setStandard(false);
    };

    useEffect(() => {
        const data = localStorage.getItem('prices');

        if (data) {
            data.map((price) => store.addPrice(price));
        }
    }, [store]);

    return (
        <form onSubmit={(e) => handleSend(e)}>
            <MyTypography variant="h5">Novo Preço</MyTypography>
            <MyForm>
                <FormControlLabel
                    value={price.code}
                    control={<TextField required label="Código" />}
                    onChange={(e) =>
                        setPrice({ ...price, code: e.target.value })
                    }
                />
                <FormControlLabel
                    value={price.name}
                    control={<TextField required label="Nome" />}
                    onChange={(e) =>
                        setPrice({ ...price, name: e.target.value })
                    }
                />
                <FormControlLabel
                    onClick={() => setStandard(!standard)}
                    control={<Switch color="primary" />}
                    label="Padrão"
                    labelPlacement="top"
                    checked={standard}
                />
            </MyForm>
            <MyButton
                onClick={() => setPrice({ ...price, standard })}
                type="submit"
                variant="contained"
                color="secondary"
            >
                Cadastrar
            </MyButton>
        </form>
    );
};

const ListPrices = () => {
    const { prices } = useContext(StoreContext);

    return useObserver(() => (
        <MyListItem>
            {prices.map((price, index) => (
                <MyListItemText
                    key={index}
                    primary={`${price.code} - ${price.name}`}
                    secondary={price.standard ? 'padrão' : 'não padrão'}
                />
            ))}
        </MyListItem>
    ));
};

const Prices = () => {
    return (
        <StoreProvider>
            <MyCard>
                <PriceForm />
                <MyTypography variant="h5">Lista de Preços</MyTypography>
                <ListPrices />
            </MyCard>
        </StoreProvider>
    );
};

export default Prices;
