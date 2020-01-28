import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: '#fff',
    },
    link:{
      color: '#fff',
    },
}));

const MainMenu=()=>{
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar >
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <nav className={classes.title}>
                        <Button variant='contained' color='primary' href='/' className={classes.link} >Главная</Button>
                        <Button variant="contained" color="primary" href="/equipment" className={classes.link}>Оборудование</Button>
                        <Button variant="contained" color="primary" href="/troubles" className={classes.link}>Неисправности</Button>
                    </nav>
                    <strong>Отдел</strong>
                    <br/>
                    <label>Пользователь</label>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default MainMenu;