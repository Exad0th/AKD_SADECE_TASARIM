import React from 'react';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { Grid, Typography, Button, Box, Container } from '@mui/material';
import TRDeluxeSuit1 from '../ImgAKD/TRDeluxeSuit1.jpg';
import TRDeluxeSuit2 from '../ImgAKD/TRDeluxeSuit2.jpg';
import TRDeluxeSuit3 from '../ImgAKD/TRDeluxeSuit3.jpg';
import TRDeluxeSuit4 from '../ImgAKD/TRDeluxeSuit4.jpg';
import TRDeluxeSuit5 from '../ImgAKD/TRDeluxeSuit5.jpg';
import TRDeluxeSuit6 from '../ImgAKD/TRDeluxeSuit6.jpg';
import TRDeluxeSuit7 from '../ImgAKD/TRDeluxeSuit7.jpg';
import TRDeluxeSuit8 from '../ImgAKD/TRDeluxeSuit8.jpg';
import TRDeluxeSuit9 from '../ImgAKD/TRDeluxeSuit9.jpg';
import TRDeluxeSuit10 from '../ImgAKD/TRDeluxeSuit10.jpg';
import TRDeluxeSuit11 from '../ImgAKD/TRDeluxeSuit11.jpg';
import arkaplan1 from '../images/arkaplan1.jpg'

function ManuelSlider(){
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // 3 saniyede bir geçiş yapar
    };

    return(
        <Grid item xs={12} md={6}>
                    <Box sx={{ width: '100%', borderRadius: '8px', boxShadow: 3 , justifyContent:'center'}}>
                        <Slider {...sliderSettings}>
                            <Box
                                component="img"
                                src={TRDeluxeSuit1}
                                alt="Resort Image 1"
                                sx={{
                                    width: '100%',
                                    borderRadius: '8px',
                                }}
                            />
                            <Box
                                component="img"
                                src={TRDeluxeSuit2}
                                alt="Resort Image 2"
                                sx={{
                                    width: '100%',
                                    borderRadius: '8px',
                                }}
                            />
                            <Box
                                component="img"
                                src={TRDeluxeSuit3}
                                alt="Resort Image 2"
                                sx={{
                                    width: '100%',
                                    borderRadius: '8px',
                                }}
                            />
                            <Box
                                component="img"
                                src={TRDeluxeSuit4}
                                alt="Resort Image 2"
                                sx={{
                                    width: '100%',
                                    borderRadius: '8px',
                                }}
                            />
                            <Box
                                component="img"
                                src={TRDeluxeSuit5}
                                alt="Resort Image 2"
                                sx={{
                                    width: '100%',
                                    borderRadius: '8px',
                                }}
                            />
                            <Box
                                component="img"
                                src={TRDeluxeSuit6}
                                alt="Resort Image 2"
                                sx={{
                                    width: '100%',
                                    borderRadius: '8px',
                                }}
                            />
                            <Box
                                component="img"
                                src={TRDeluxeSuit7}
                                alt="Resort Image 2"
                                sx={{
                                    width: '100%',
                                    borderRadius: '8px',
                                }}
                            />
                            <Box
                                component="img"
                                src={TRDeluxeSuit8}
                                alt="Resort Image 2"
                                sx={{
                                    width: '100%',
                                    borderRadius: '8px',
                                }}
                            />
                            <Box
                                component="img"
                                src={TRDeluxeSuit9}
                                alt="Resort Image 2"
                                sx={{
                                    width: '100%',
                                    borderRadius: '8px',
                                }}
                            />
                            <Box
                                component="img"
                                src={TRDeluxeSuit10}
                                alt="Resort Image 2"
                                sx={{
                                    width: '100%',
                                    borderRadius: '8px',
                                }}
                            />
                            <Box
                                component="img"
                                src={TRDeluxeSuit11}
                                alt="Resort Image 2"
                                sx={{
                                    width: '100%',
                                    borderRadius: '8px',
                                }}
                            />
                            
                        </Slider>
                    </Box>
                </Grid>
    )
}

export default ManuelSlider;