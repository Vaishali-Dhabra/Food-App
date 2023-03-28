import React from 'react';
import StyledIcon from '../Styles/Icons';
import { Typography } from '@mui/material';
import Footer_Logo from '../Assets/Footer_Logo.svg';
import twitter_icon from '../Assets/Twitter_icon.svg';
import fb_icon from '../Assets/Fb_icon.svg';
import insta_icon from '../Assets/Instagram_icon.svg';

const Footer = () => {
  return (
    <div>
        <div>
            <img src={Footer_Logo} alt=''/>
        </div>

        <div>
            <div>
            <StyledIcon src={twitter_icon} />
            <StyledIcon src={fb_icon} />
            <StyledIcon src={insta_icon} />
            </div>

            <div>
            <Typography>Copywright 2020 Bella Onojie.com</Typography>
            </div>
        </div>
    </div>
  )
}

export default Footer;
