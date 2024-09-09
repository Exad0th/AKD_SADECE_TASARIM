import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from '@mui/material';
import TitleAndDesc from '../About/TitleAndDesc'
import TeamSection from '../About/TeamSection'
import FunFactSection from './FunFactSection';
import Testimonials from '../About/Testimonials';

const AboutPage = ({isEnglish,isTurkish}) => {

const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

  return (
    <div>
      <TitleAndDesc isEnglish={isEnglish} isTurkish={isTurkish}/>
      <br></br>
      <br></br>
      <TeamSection isEnglish={isEnglish} isTurkish={isTurkish} />
      <br></br>
      <FunFactSection isEnglish={isEnglish} isTurkish={isTurkish} />
      <br></br>
      <Testimonials isEnglish={isEnglish} isTurkish={isTurkish} />
      <br></br>
      <br></br>

    </div>
  )
}

export default AboutPage