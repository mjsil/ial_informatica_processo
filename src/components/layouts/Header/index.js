import React from 'react';
import { Link } from 'react-router-dom';

import { MyAppBar, MyToolbar, MyLink, MyTypography } from './styles';

export default function ButtonAppBar() {
    return (
        <MyAppBar>
            <MyToolbar>
                <MyTypography variant="h5">IAL Informática</MyTypography>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <MyLink>preços</MyLink>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/products">
                    <MyLink>produtos</MyLink>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/bicos">
                    <MyLink>bicos</MyLink>
                </Link>
            </MyToolbar>
        </MyAppBar>
    );
}
