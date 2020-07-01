import React, { useState } from 'react';
import { useTheme, makeStyles, IconButton, Paper } from '@material-ui/core';
import { observer } from 'mobx-react';
import { app } from '../storage';
// import PropEditor from './propeditor';
// import { MainMenu, MenuItem } from '../iface';
import { TabNav, TabPanel } from './tabnavigator';
import Resources from './resources';
import Login from '../login';

const Builder = observer(() => {
    const cls = useStyles();
    const [page, setPage] = useState(0);

    const showBuilder = () => (
        <TabNav
            tabs={['Recusros', 'Menus', 'Apps']}
            pageIndex={page}
            onTabChange={(e, idx) => setPage(idx)}
        >
            <TabPanel pageIndex={0} currentPage={page}>
                <Resources Items={app.model.builder.ResourceTree.slice()} />
            </TabPanel>
            <TabPanel pageIndex={1} currentPage={page}></TabPanel>
            <TabPanel pageIndex={2} currentPage={page}></TabPanel>
        </TabNav>
    );

    return (
        <div className={cls.erp_system}>
            {app.session.logged.ok ? showBuilder() : <Login />}
        </div>
    );
});

const useStyles = makeStyles((theme) => ({
    // 'flex !important' as 'flex', //!important usecase exemple
    erp_system: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        backgroundColor: theme.palette.primary.light,
        [theme.breakpoints.up('sm')]: {
            //flexDirection: 'row',
            //alignItems: 'center'
        },
    },
}));

export default Builder;
