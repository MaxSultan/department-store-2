import React from 'react';
import { Menu, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';


const NavBar = () => {
    return(
        <Menu>
            <Link to='/'>
                <Menu.Item>Home</Menu.Item>
            </Link>
            <Link to='/departments'>
                <Menu.Item>Departments</Menu.Item>
            </Link>
        </Menu>
    )
}

export default NavBar;