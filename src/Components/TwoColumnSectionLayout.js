import React from 'react';
import InputText from './InputText';

const TwoColumnSectionLayout = ({title, heading, subheading,MobileImage}) => {
  return (
    <>
    <div>
    <div>
      <InputText title={title} 
        heading={heading} 
        subheading={subheading} 
        />
    </div>

    <div>
        <img src={MobileImage} alt=''/>
    </div>
    </div>
    </>
  )
}

export default TwoColumnSectionLayout;
