import React from 'react';
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import CameraIcon from '@mui/icons-material/Camera';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';

const FunFactSection = ({ isEnglish, isTurkish }) => {
  const content = isEnglish
    ? {
        title: 'We have a great funfact! Relax & Enjoy your Holiday',
        description:'With the experience we have gained in the sector for many years, we do not only construct buildings, but also add value to businesses operating in the hotel sector. We prioritize quality at every stage, from the materials used in our projects to the expertise of the working teams. In this way, we offer our customers safe, durable and functional structures. Kepenek Construction continues to write new success stories in the hotel sector with the power it derives from the past and its belief in the future. If you are looking for an experienced partner in your projects, we are with you as Kepenek Construction.',
        stats: [
          { icon: <PeopleIcon />, value: '1200+', label: 'Happy Clients' },
          { icon: <CameraIcon />, value: '18k+', label: 'Luxury Rooms' },
          { icon: <WorkIcon />, value: '158', label: 'Employers' },
          { icon: <ChatIcon />, value: '879+', label: 'Services' },
        ],
      }
    : {
        title: 'Harika bir gerçek var! Rahatlayın ve Tatilinizin Keyfini Çıkarın',
        description:
          'Uzun yıllar boyunca sektörde edindiğimiz tecrübeyle, sadece binalar inşa etmiyor, aynı zamanda otelcilik alanında faaliyet gösteren işletmelere de değer katıyoruz. Projelerimizde kullanılan malzemelerden, çalışan ekiplerin uzmanlığına kadar her aşamada kaliteyi ön planda tutuyoruz. Bu sayede, müşterilerimize güvenli, dayanıklı ve fonksiyonel yapılar sunuyoruz.Kepenek İnşaat, geçmişten aldığı güç ve geleceğe olan inancı ile otelcilik sektöründe yeni başarı hikayeleri yazmaya devam ediyor. Siz de projelerinizde tecrübeli bir ortak arıyorsanız, Kepenek İnşaat olarak yanınızdayız.',
        stats: [
          { icon: <PeopleIcon />, value: '1200+', label: 'Mutlu Müşteriler' },
          { icon: <CameraIcon />, value: '50+', label: 'Lüks Odalar' },
          { icon: <WorkIcon />, value: '100+', label: 'Çalışanlar' },
          { icon: <ChatIcon />, value: '50+', label: 'Hizmetler' },
        ],
      };

  return (
    <Box sx={{ my: 5, mx: 3, backgroundColor: '#f0f0f0', py: 5, borderRadius: 2, paddingRight: '50px' }}>
      <Grid container spacing={4} alignItems="center" sx={{paddingLeft: '50px'}}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h2" gutterBottom>
            {content.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {content.description}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {content.stats.map((stat, index) => (
              <Grid item xs={6} key={index}>
                <Card>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box sx={{ fontSize: 50, color: '#E67E22' }}>{stat.icon}</Box>
                    <Typography variant="h5" component="h3">
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FunFactSection;
