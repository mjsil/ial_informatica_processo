import React, { createContext } from 'react';
import { useLocalStore } from 'mobx-react';
import localStorage from 'mobx-localstorage';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const store = useLocalStore(() => ({
        prices: [],
        addPrice: (price) => {
            store.prices.push(price);
            localStorage.setItem('prices', store.prices);
        },
        products: [],
        addProduct: (product) => {
            store.products.push(product);
            localStorage.setItem('products', store.products);
        },
        bicos: [],
        addBico: (bico) => {
            store.bicos.push(bico);
            localStorage.setItem('bicos', store.bicos);
        },
    }));

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};
