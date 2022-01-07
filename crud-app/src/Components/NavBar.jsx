import { AppBar, makeStyles } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
    header: {
        background: '#000000',
        color: '#ffffff'
    },
    tabs: {
        color: '#ffffff',
        textDecoration: 'none',
        fontSize: 20,
        marginRight: 20
    }
});

const NavBar = () => {
    const classes = useStyles();

    return (
        <AppBar className = {classes.header} position = 'static'>
            <Toolbar>
                <NavLink className = {classes.tabs} to="./">Created by Ayush Kumar</NavLink>
                <NavLink className = {classes.tabs} to = "all">All Users</NavLink>
                <NavLink className = {classes.tabs} to="add">Add Users</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;