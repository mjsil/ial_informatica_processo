import React, { useContext, useState, useEffect } from 'react';
import { TextField, FormControlLabel } from '@material-ui/core';
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

const ProductForm = () => {
    const store = useContext(StoreContext);
    const [product, setProduct] = useState({ code: '', name: '' });

    const handleSend = (e) => {
        e.preventDefault();

        store.addProduct(product);
        setProduct({ code: '', name: '' });
    };

    useEffect(() => {
        const data = localStorage.getItem('products');

        if (data) {
            data.map((product) => store.addProduct(product));
        }
    }, [store]);

    return (
        <form onSubmit={(e) => handleSend(e)}>
            <MyTypography variant="h5">Novo Produto</MyTypography>
            <MyForm>
                <FormControlLabel
                    value={product.code}
                    control={<TextField required label="Código" />}
                    onChange={(e) =>
                        setProduct({ ...product, code: e.target.value })
                    }
                />
                <FormControlLabel
                    value={product.name}
                    control={<TextField required label="Nome" />}
                    onChange={(e) =>
                        setProduct({ ...product, name: e.target.value })
                    }
                />
            </MyForm>
            <MyButton type="submit" variant="contained" color="secondary">
                Cadastrar
            </MyButton>
        </form>
    );
};

export const ListProducts = () => {
    const { products } = useContext(StoreContext);

    return useObserver(() => (
        <MyListItem>
            {products.map((product, index) => (
                <MyListItemText
                    key={index}
                    primary={`${product.code} - ${product.name}`}
                />
            ))}
        </MyListItem>
    ));
};

const Products = () => {
    return (
        <StoreProvider>
            <MyCard>
                <ProductForm />
                <MyTypography variant="h5">Lista de Produtos</MyTypography>
                <ListProducts />
            </MyCard>
        </StoreProvider>
    );
};

export default Products;
