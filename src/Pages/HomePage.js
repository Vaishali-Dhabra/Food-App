import React from 'react';
import Header from '../Components/Header';
import ColumnSectionLayout from '../Components/ColumnSectionLayout';
import { Box } from '@mui/system';
import Rectangle_Mobiles from '../Assets/Hero_Mobiles.svg';
import { Typography } from '@mui/material';
import TwoColumnSectionLayout from '../Components/TwoColumnSectionLayout';
import Mobile1 from '../Assets/Mobile1.svg';
import Mobile2 from '../Assets/Mobile2.svg';
import Mobile3 from '../Assets/Mobile3.svg';
import Footer from '../Components/Footer';


const HomePage = () => {
    return (
        <>
        <Header/>

        <ColumnSectionLayout
            title="Food App"
            heading="Why stay hungry when 
            you can order form Bella Onojie"
            subheading="Download the bella onoje's food app now on"
            radius="30px"
        />

        <Box
            sx={{
            display: "flex",
            width: "60%",
            marginInline: "auto",
            height: "820px",
            borderBottom: "1px solid grey",
            marginTop: "-30",
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
            title="Create an account"
            heading="Create/login to an existing
                account to get started"
            subheading="An account is created with your email
                and a desired password"
        />

        <TwoColumnSectionLayout
            MobileImage={Mobile2}
            title="Explore varieties"
            heading="Shop for your favorites
                meal as e dey hot."
            subheading="Shop for your favorite meals or drinks
                and enjoy while doing it."
        />

        <TwoColumnSectionLayout
            MobileImage={Mobile3}
            title="Checkout"
            heading="When you done check out
                and get it delivered."
            subheading="When you done check out and get it 
                delivered with ease."
        />

        <ColumnSectionLayout
            heading="Download the app now."
            subheading="Available on your favorite store. Start your premium experience now"
            radius="10px"
        />

        <Footer
        />
        </>
    )
}

export default HomePage;
