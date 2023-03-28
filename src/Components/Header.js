import React from 'react';
import Logo from '../Assets/Nav_Logo.svg';
import { AppBar, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const menu = ["Home", "Product", "Faq", "Contact"];
    return (
        <>
        <AppBar>
            <div>
                <div>
                    <img src={Logo} alt=''/>
                </div>

                <div>
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
