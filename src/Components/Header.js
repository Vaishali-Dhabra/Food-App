import React from 'react';
import Logo from '../Assets/Nav_Logo.svg';
import { AppBar, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../Styles/header.css';

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
                        <Button key={item}>
                            <NavLink to={`/${item}`}>{item}</NavLink>
                        </Button>
                        ))}
                </div>
            </div>
        </AppBar>
        </>
    )
}

export default Header;
