import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { Home, Help } from '../content';
import { Link, Route } from 'react-router-dom';
import List from '@material-ui/core/List';
import HomeIcon from '@material-ui/icons/Home';
import UserIcon from '@material-ui/icons/SupervisorAccount';
import HelpIcon from '@material-ui/icons/Help';
import ProductIcon from '@material-ui/icons/ViewWeek'
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import ClassIcon from '@material-ui/icons/Class'
import ListItem from '@material-ui/core/ListItem';
import Users from '../users';
import Categories from '../categories';
// import Products from '../products';


export default class SideBar extends React.Component {
    render() {
        const { classes, onSelected, showMenu } = this.props;
        return (
            <div>
                <Drawer variant='temporary' anchor='left' open={showMenu} onClick={() => onSelected()}>
                    <div className={classes.toolbar} >
                        <IconButton>
                            <ChevronLeftIcon />
                        </IconButton>
                        Menu
                    </div>
                    <Divider />
                    <List onClick={() => onSelected()}>
                        <ListItem className={classes.ListItem}><HomeIcon className={classes.MenuIcon} /><Link to="/" className={classes.MenuList}> Home</Link></ListItem>
                        <ListItem className={classes.ListItem}><UserIcon className={classes.MenuIcon} /><Link to="/users" className={classes.MenuList}> Users</Link></ListItem>
                        <ListItem className={classes.ListItem}><HelpIcon className={classes.MenuIcon} /><Link to="/help" className={classes.MenuList}> Help</Link></ListItem>
                        <ListItem className={classes.ListItem}><ClassIcon className={classes.MenuIcon} /><Link to="/categories" className={classes.MenuList}> Categories</Link></ListItem>
                        {/* <ListItem className={classes.ListItem}><ProductIcon className={classes.MenuIcon} /><Link to="/products" className={classes.MenuList}> Products</Link></ListItem> */}
                    </List>
                </Drawer>
                <Route exact path="/" component={Home} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/help" component={Help} />
                <Route exact path="/categories" component={Categories} />
                {/* <Route exact path="/products" component={Products} /> */}
            </div>
        )
    }
}