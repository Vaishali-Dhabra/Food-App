import React from 'react';
import InputText from './InputText';
import '../Styles/TwoColumnSection.css';

const TwoColumnSectionLayout = ({title, heading, subheading,MobileImage}) => {
  return (
    <>
    <div className='flex'>
    <div className='ImageSection'>
        <img src={MobileImage} alt=''/>
    </div>
    <div className='textcontainer'>
      <InputText title={title} 
        heading={heading} 
        subheading={subheading} 
        />
    </div>

    
    </div>
    </>
  )
}

export default TwoColumnSectionLayout;
