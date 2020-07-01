import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Prices from './pages/Prices';
import Products from './pages/Products';
import Bicos from './pages/Bicos';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Prices} />
            <Route path="/products" component={Products} />
            <Route path="/bicos" component={Bicos} />
        </Switch>
    );
};

export default Routes;
