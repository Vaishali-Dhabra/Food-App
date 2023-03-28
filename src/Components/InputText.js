import React from 'react';
import { Typography } from '@mui/material';

const InputText = ({ title, heading, subheading }) => {
    return (
    <>
    <Typography variant='subtitle' color='#FA4A0C'>
        {title}
    </Typography>
    <Typography variant='h2'>
        {heading}
    </Typography>
    <Typography variant='h3'>
        {subheading}
    </Typography>
    </>
    )
}

export default InputText;
