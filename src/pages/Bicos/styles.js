import { styled } from '@material-ui/core/styles';
import {
    FormGroup,
    Card,
    Typography,
    Button,
    Select,
    ListItem,
    ListItemText,
} from '@material-ui/core';

export const MyForm = styled(FormGroup)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: '10px',
    maxWidth: '700px',
});

export const MyCard = styled(Card)({
    display: 'flex',
    flexDirection: 'column',
    width: '700px',
    padding: '10px 30px',
});

export const MyTypography = styled(Typography)({
    marginBottom: '5px',
});

export const MyButton = styled(Button)({
    width: '100%',
    marginBottom: '50px',
});

export const MySelect = styled(Select)({
    minWidth: '80px',
});

export const MyListItem = styled(ListItem)({
    display: 'flex',
    flexDirection: 'column',
});

export const MyListItemText = styled(ListItemText)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    maxHeight: '80px',
    borderRadius: '4px',
    background: '#eee',
    padding: '10px 20px',
});
