import { styled } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

export const MyAppBar = styled(AppBar)({
    background: '#3f51b5',
    position: 'relative',
});

export const MyToolbar = styled(Toolbar)({
    padding: '0 100px',
});

export const MyLink = styled(Button)({
    color: '#fff',
    padding: '0 15px;',
    fontSize: '14px',
    fontWeight: 'bold',
});

export const MyTypography = styled(Typography)({
    flexGrow: 1,
    marginRight: '10px',
});
