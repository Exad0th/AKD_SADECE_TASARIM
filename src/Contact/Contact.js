import React from 'react';
import TitleAndDesc from './TitleAndDesc';
import ContactAndAccess from './ContactAndAccess';


const Contact = ({isEnglish,isTurkish}) => {

  return (
    <div>
      <TitleAndDesc isEnglish={isEnglish} isTurkish={isTurkish}/>
      <ContactAndAccess isEnglish={isEnglish}/>
    </div>
  )
}

export default Contact