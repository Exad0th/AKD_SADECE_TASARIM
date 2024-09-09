import React from 'react';
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
import Slider from "react-slick";
import TvIcon from '@mui/icons-material/Tv';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import BedIcon from '@mui/icons-material/Bed';
import SignalWifi4BarIcon from '@mui/icons-material/SignalWifi4Bar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tesis from '../images/tesis.jpg';
import tesis2 from '../images/tesis2.jpg';
import tesis3 from '../images/tesis3.jpg';


const HotelFacilities = ({ isEnglish }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', p: 3, borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom sx={{marginLeft:'16.5%', fontSize:'40px'}}> 
        {isEnglish ? 'Our Hotel Facilities' : 'Otel Tesislerimiz'}
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Slider {...settings}>
            <div>
              <img
                src={tesis}
                alt="Facility 1"
                style={{ width: '50%', borderRadius: '16px', marginLeft: '25%' }}
              />
            </div>
            <div>
              <img
                src={tesis2}
                alt="Facility 2"
                style={{ width: '50%', borderRadius: '16px', marginLeft: '25%' }}
              />
            </div>
            <div>
              <img
                src={tesis3}
                alt="Facility 3"
                style={{ width: '50%', borderRadius: '16px', marginLeft: '25%' }}
              />
            </div>
          </Slider>
        </Grid>
        <Grid item xs={12} sm={6} sx={{textAlign: 'center'}}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={6}>
              <Card sx={{ margin: '0 auto' }}>
                <TvIcon fontSize="large" sx={{ marginTop: '20px' }} color="warning" />
                <CardContent>
                  <Typography variant="h6">
                    {isEnglish ? 'Tv' : 'Tv'}
                  </Typography>
                  <Typography color="textSecondary">
                    {isEnglish ? 'Satellite' : 'Uydu'}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card sx={{ margin: '0 auto' }}>
                <DirectionsBikeIcon fontSize="large" sx={{ marginTop: '20px' }} color="warning" />
                <CardContent>
                  <Typography variant="h6">
                    {isEnglish ? 'Bike' : 'Bisiklet'}
                  </Typography>
                  <Typography color="textSecondary">
                    {isEnglish ? 'Rental' : 'Kiralama'}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card sx={{ margin: '0 auto' }}>
                <SignalWifi4BarIcon fontSize="large" sx={{ marginTop: '20px' }} color="warning" />
                <CardContent>
                  <Typography variant="h6">
                    {isEnglish ? 'Wi-Fi' : 'Wi-Fi'}
                  </Typography>
                  <Typography color="textSecondary">
                    {isEnglish ? 'Included' : 'Dahil'}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card sx={{ margin: '0 auto' }}>
                <BedIcon fontSize="large" sx={{ marginTop: '20px' }} color="warning" />
                <CardContent>
                  <Typography variant="h6">
                    {isEnglish ? 'Bed' : 'Yatak'}
                  </Typography>
                  <Typography color="textSecondary">
                    {isEnglish ? 'King size' : 'King size'}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HotelFacilities;
