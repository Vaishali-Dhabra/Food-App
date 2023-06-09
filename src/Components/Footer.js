import React from 'react';
import StyledIcon from '../Styles/Icons';
import { Box, Typography } from '@mui/material';
import Footer_Logo from '../Assets/Footer_Logo.svg';
import twitter_icon from '../Assets/Twitter_icon.svg';
import fb_icon from '../Assets/Fb_icon.svg';
import insta_icon from '../Assets/Instagram_icon.svg';
import '../Styles/Footer.css';

const Footer = (FooterImage) => {
  return (
    <Box className='footer' sx={{background:`url(${FooterImage})`}} padding={3}>
        <div>
            <img src={Footer_Logo} alt=''/>
        </div>

            <div className='flex'>
            <StyledIcon src={twitter_icon} />
            <StyledIcon src={fb_icon} />
            <StyledIcon src={insta_icon} />
            </div>

            <div className='flex'>
            <Typography>Copywright 2020 Bella Onojie.com</Typography>
            </div>
    </Box>
  )
}

export default Footer;
