import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
// import history from './services/history';
import Continer from './components/layouts/Container';
import Header from './components/layouts/Header';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Continer>
                <Routes />
            </Continer>
        </BrowserRouter>
    );
}

export default App;
