import React from "react";
import InputText from "./TwoColumnInput";
import "../Styles/TwoColumnSection.css";
import { Box } from "@mui/material";

const TwoColumnSectionLayout = ({
  title,
  heading,
  subheading,
  MobileImage,
  direction,
}) => {
  return (
    <>
      <Box className="flex" flexDirection={direction}>
        <div className="ImageSection">
          <img src={MobileImage} alt="" />
        </div>
        <div className="textcontainer">
          <InputText title={title} heading={heading} subheading={subheading} />
        </div>
      </Box>
    </>
  );
};

export default TwoColumnSectionLayout;
