import React from 'react';
import InputText from '../Components/InputText';
import Buttons from './Buttons';
import '../Styles/ColumnSectionLayout.css';
import { Box } from '@mui/material'; 
import { red } from '@mui/material/colors';

const ColumnSectionLayout = ({ title, heading, subheading,radius,BackgroundImage}) => {
    const btn_radius = radius;
  return (
    <>
    <Box className='ColumnSectionLayoutCSS' sx={{background:`url(${BackgroundImage})`}}>
    <div className='TextContainer'>
      <InputText title={title} 
        heading={heading} 
        subheading={subheading} 
      />
    </div>

    <div className='ButtonsContainer'>
      <Buttons buttonText="Playstore" button_radius={btn_radius} />
      <Buttons buttonText="App store" button_radius={btn_radius} />
    </div>
    </Box>
    </>
  )
}

export default ColumnSectionLayout;
