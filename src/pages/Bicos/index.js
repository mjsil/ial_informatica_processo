import React, { useContext, useState, useEffect, useRef } from 'react';
import { useObserver } from 'mobx-react';
import {
    TextField,
    FormControlLabel,
    FormControl,
    InputLabel,
    MenuItem,
} from '@material-ui/core';
import { StoreContext, StoreProvider } from '../../store';
import localStorage from 'mobx-localstorage';

import {
    MyForm,
    MyCard,
    MyTypography,
    MyButton,
    MySelect,
    MyListItem,
    MyListItemText,
} from './styles';

const BicoForm = () => {
    const store = useContext(StoreContext);
    const [bico, setBico] = useState({ code: '', name: '' });
    const [prices, setPrices] = useState([]);
    const [products, setProducts] = useState([]);
    const [price, setPrice] = useState({ code: '', name: '' });
    const [product, setProduct] = useState({ code: '', name: '' });
    const inputRef = useRef();

    const handleSend = (e) => {
        e.preventDefault();

        const data = {
            ...bico,
            price,
            product,
        };

        store.addBico(data);
        setBico({ code: '', name: '' });
        setPrice({ code: '', name: '' });
        setProduct({ code: '', name: '' });
    };

    useEffect(() => {
        const data = localStorage.getItem('bicos');
        const loadPrices = localStorage.getItem('prices');
        const loadProducts = localStorage.getItem('products');

        if (data) {
            data.map((bico) => store.addBico(bico));
        }

        if (loadPrices) {
            setPrices(loadPrices);
        }

        if (loadProducts) {
            setProducts(loadProducts);
        }
    }, [store]);

    return (
        <form onSubmit={(e) => handleSend(e)}>
            <MyTypography variant="h5">Novo Bico</MyTypography>
            <MyForm>
                <FormControlLabel
                    value={bico.code}
                    control={<TextField required label="Código" />}
                    onChange={(e) => setBico({ ...bico, code: e.target.value })}
                />
                <FormControlLabel
                    value={bico.name}
                    control={<TextField required label="Nome" />}
                    onChange={(e) => setBico({ ...bico, name: e.target.value })}
                />
                <FormControl>
                    <InputLabel id="demo-simple-select-label">
                        Produto
                    </InputLabel>
                    <MySelect
                        required
                        labelId="demo-simple-select-label"
                        value={product ? product.code : ''}
                    >
                        {products.map((product, index) => (
                            <MenuItem
                                onClick={() => setProduct(product)}
                                key={index}
                                value={product.code}
                            >
                                {product.name}
                            </MenuItem>
                        ))}
                    </MySelect>
                </FormControl>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Preço</InputLabel>
                    <MySelect
                        required
                        labelId="demo-simple-select-label"
                        value={price ? price.code : ''}
                    >
                        {prices.map((price, index) => (
                            <MenuItem
                                onClick={() => setPrice(price)}
                                key={index}
                                value={price.code}
                            >
                                {price.name}
                            </MenuItem>
                        ))}
                    </MySelect>
                </FormControl>
            </MyForm>
            <MyButton type="submit" variant="contained" color="secondary">
                Cadastrar
            </MyButton>
        </form>
    );
};

export const ListBicos = () => {
    const { bicos } = useContext(StoreContext);

    return useObserver(() => (
        <MyListItem>
            {bicos.map((bico, index) => (
                <MyListItemText
                    key={index}
                    primary={`${bico.code} - ${bico.name}`}
                    secondary={`Preço: ${bico.price.name} - Produto: ${bico.product.name}`}
                />
            ))}
        </MyListItem>
    ));
};

const Bicos = () => {
    return (
        <StoreProvider>
            <MyCard>
                <BicoForm />
                <MyTypography variant="h5">Lista de Bicos</MyTypography>
                <ListBicos />
            </MyCard>
        </StoreProvider>
    );
};

export default Bicos;
