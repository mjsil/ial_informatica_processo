import React from 'react';
import { CssBaseline } from '@material-ui/core';

import { MyContiner } from './styles';

const Container = ({ children }) => {
    return (
        <MyContiner>
            <CssBaseline />
            {children}
        </MyContiner>
    );
};

export default Container;
