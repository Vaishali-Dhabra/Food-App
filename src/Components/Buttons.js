import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Buttons = ({buttonText,button_radius}) => {
    const Buttons = styled.button`
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        padding: 16px 0px;
        width: 236px;
        height: 60px;
        background: transparent;
        box-shadow: 0px 5px 20px rgba(183, 50, 39, 0.2);
        border-radius: ${button_radius};
        &:hover {
        background: #FA4A0C;
        cursor: pointer;
        }
    `;
  return (
    <>
    <Buttons>
      <Typography>
        {buttonText}
      </Typography>
      </Buttons>
    </>
  )
}

export default Buttons
