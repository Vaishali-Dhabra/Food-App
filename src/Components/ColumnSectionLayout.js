import React from "react";
import Buttons from "./Buttons";
import "../Styles/ColumnSectionLayout.css";
import { Box, Typography } from "@mui/material";

const ColumnSectionLayout = ({ title,Heading,SubHeading,
  radius,
  BackgroundImage,
}) => {
  const btn_radius = radius;
  return (
    <>
      <Box 
        className="ColumnSectionLayoutCSS"
        sx={{ background: `url(${BackgroundImage})`,backgroundSize:"cover"  }}  
      >
        <div className="TextContainer" >
          <Typography variant="h5" color={"white"} >{title}</Typography>
          <Typography variant="h2"color={"white"} >{Heading}</Typography>
          <Typography varian="h4"color={"white"} >{SubHeading}</Typography>
        </div>

        <div className="ButtonsContainer" >
          <Buttons buttonText="Playstore" button_radius={btn_radius} />
          <Buttons buttonText="App store" button_radius={btn_radius} />
        </div>
      </Box>
    </>
  );
};

export default ColumnSectionLayout;
