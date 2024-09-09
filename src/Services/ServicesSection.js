import * as React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import WifiIcon from '@mui/icons-material/Wifi';
import PoolIcon from '@mui/icons-material/Pool';

const ServicesSection = ({ isEnglish, isTurkish }) => {
  const servicesContent = isEnglish
    ? {
        headline: "Doing the right thing, at the right time",
        services: [
          { icon: <EmojiEventsIcon fontSize="large" sx={{ color: 'orange' }} />, title: "Home comfort", description: "Feel at home in all our facilities" },
          { icon: <DirectionsBikeIcon fontSize="large" sx={{ color: 'orange' }} />, title: "Bike Rental", description: "Explore the city with various means of transport" },
          { icon: <WifiIcon fontSize="large" sx={{ color: 'orange' }} />, title: "WIFI Areas", description: "Access free internet in all our facilities" },
          { icon: <PoolIcon fontSize="large" sx={{ color: 'orange' }} />, title: "Swimming Pool", description: "Enjoy the swimming pool at our Sevgi Sitesi and Avsallar Kepenek Village facilities" }
        ]
      }
    : {
        headline: "Doğru zamanda, doğru şeyi yapmak",
        services: [
          { icon: <EmojiEventsIcon fontSize="large" sx={{ color: 'orange' }} />, title: "Ev Konforu", description: "Tüm tesislerimizde evinizde gibi hissedin" },
          { icon: <DirectionsBikeIcon fontSize="large" sx={{ color: 'orange' }} />, title: "Bisiklet Kiralama", description: "Çeşitli ulaşım araçları ile şehri keşfedin" },
          { icon: <WifiIcon fontSize="large" sx={{ color: 'orange' }} />, title: "WIFI Alanları", description: "Tüm tesislerimizde ücretsiz internete erişin" },
          { icon: <PoolIcon fontSize="large" sx={{ color: 'orange' }} />, title: "Yüzme Havuzu", description: "Sevgi Sitesi ve Avsallar Kepenek Village tesislerimizde yüzme havuzunun keyfini çıkartın" }
        ]
      };

  return (
    <Box sx={{ backgroundImage: `url(https://source.unsplash.com/random)`, backgroundSize: 'cover', padding: '50px 0', color: '#fff', paddingLeft: '50px', paddingRight: '50px' }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          {servicesContent.headline}
        </Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {servicesContent.services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ backgroundColor: 'white', color: 'black', textAlign: 'center', p: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50px' }}>
                  {service.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;
