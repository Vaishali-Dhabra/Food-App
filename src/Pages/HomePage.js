import React from 'react';
import Header from '../Components/Header';
import HeroImage from '../Assets/HeroSection_Background.svg';
import ColumnSectionLayout from '../Components/ColumnSectionLayout';
import { Box } from '@mui/system';
import Rectangle_Mobiles from '../Assets/Hero_Mobiles.svg';
import { Typography } from '@mui/material';
import TwoColumnSectionLayout from '../Components/TwoColumnSectionLayout';
import Mobile1 from '../Assets/Mobile1.svg';
import Mobile2 from '../Assets/Mobile2.svg';
import Mobile3 from '../Assets/Mobile3.svg';
import Footer from '../Components/Footer';
import { ThemeProvider } from '@emotion/react';
import Theme from '../Styles/Theme';
import FooterImage from '../Assets/Footer_Background.svg';


const HomePage = () => {
    return (
        <>
        <ThemeProvider theme={Theme}>
        <Header/>

        <ColumnSectionLayout 
            BackgroundImage={HeroImage}
            title="Food App" 
            Heading="Why stay hungry when 
            you can order form Bella Onojie"
            SubHeading="Download the bella onoje's food app now on"
            radius="30px"
        />

        <Box
            sx={{
            display: "flex",
            width: "50%",
            marginInline: "auto",
            height: "820px",
            borderBottom: "1px solid grey",
            backgroundImage: `url(${Rectangle_Mobiles})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            }}
        />

        <Typography variant="h2" textAlign="center" marginY={4}>
            How the app works
        </Typography>

        <TwoColumnSectionLayout
            MobileImage={Mobile1}
            direction="row"
            title="Create an account"
            heading="Create/login to an existing
                account to get started"
            subheading="An account is created with your email
                and a desired password"
        />

        <TwoColumnSectionLayout
            MobileImage={Mobile2}
            direction="row-reverse"
            title="Explore varieties"
            heading="Shop for your favorites
                meal as e dey hot."
            subheading="Shop for your favorite meals or drinks
                and enjoy while doing it."
        />

        <TwoColumnSectionLayout
            MobileImage={Mobile3}
            direction="row"
            title="Checkout"
            heading="When you done check out
                and get it delivered."
            subheading="When you done check out and get it 
                delivered with ease."
        />

        <ColumnSectionLayout
            BackgroundImage={FooterImage}
            Heading="Download the app now."
            SubHeading="Available on your favorite store. Start your premium experience now"
            radius="10px"
        />

        <Footer/>
        </ThemeProvider>
        </>
    )
}

export default HomePage;
