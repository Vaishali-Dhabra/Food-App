import React from 'react';
import InputText from '../Components/InputText';
import Buttons from './Buttons';
const ColumnSectionLayout = ({ title, heading, subheading,radius}) => {
    const btn_radius = radius;
  return (
    <>
    <div>
      <InputText title={title} 
        heading={heading} 
        subheading={subheading} 
      />
    </div>

    <div>
    <Buttons buttonText="Playstore" button_radius={btn_radius} />
        <Buttons buttonText="App store" button_radius={btn_radius} />
    </div>
    </>
  )
}

export default ColumnSectionLayout;
