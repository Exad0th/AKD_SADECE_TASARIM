import React from 'react';
import ServicesSection from '../Services/ServicesSection';
import TitleAndDesc from './TitleAndDesc';
import HotelFacilities from './HotelFacilities';
import RoomCard from './RoomCard';

const AboutPage = ({isEnglish,isTurkish}) => {

  return (
    <div>
      <TitleAndDesc isEnglish={isEnglish} isTurkish={isTurkish}/>
      <ServicesSection isEnglish={isEnglish} isTurkish={isTurkish}/>
      <HotelFacilities isEnglish={isEnglish}/>
      <RoomCard isEnglish={isEnglish}/>

    </div>
  )
}

export default AboutPage