import React from 'react';
import Logo from '../Assets/Nav_Logo.svg';
import { AppBar, Button, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../Styles/header.css';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const menu = ["Home", "Product", "Faq", "Contact"];
    
    return (
        <>
        <AppBar> 
            <div className='flex'>
                <div className='logo'>
                    <img src={Logo} alt=''/>
                </div>

                <div className='MenuItem'>
                {menu.map((item) => (
                        <Button sx={{ display: { xs: "none", sm: "none", md: "block" } }} key={item}>
                            <NavLink to={`/${item}`}>{item}</NavLink>
                        </Button>
                        ))}
                </div>

                <Box sx={{ display: { md: "none" }}} paddingRight={10}>
                    <MenuIcon/>
                </Box>
            </div>
        </AppBar>
        </>
    )
}

export default Header;
