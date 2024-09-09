import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from '@mui/material';
import ResortSection from './ResortSection';
import Estates from './Estates';
import Discover from './Discover';
import ImageSlider from './ImageSlider';
import ManuelSlider from './ManuelSlider';


const HomePage = ({isEnglish,isTurkish}) => {

const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

  return (
    <div>
      <Estates isTurkish={isTurkish} isEnglish={isEnglish}/>
      <br></br>
      <ImageSlider isEnglish={isEnglish} isTurkish={isTurkish}/>
      <br></br>
      <br></br>
      <ResortSection isTurkish={isTurkish} isEnglish={isEnglish}/>
      <br></br>
      <ManuelSlider/>
      <br></br>
      <br></br>
      <Discover isTurkish={isTurkish} isEnglish={isEnglish}/>
    </div>
  )
}

export default HomePage