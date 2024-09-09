import React, { useState } from 'react';
import { Box, Typography, Button, Modal, IconButton, Grid } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import luxuryImage from '../images/alanya.jpg';
import AlanyaVideo from '../images/AlanyaVideo.mp4';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Discover = ({ isEnglish, isTurkish }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const texts = {
    en: {
      discoverTitle: "Explore Our Destinations",
      mainTitle: "20 Years of Excellence in Hospitality",
      description: "For two decades, we've been perfecting the art of hospitality, ensuring every stay is memorable and every experience is unparalleled. Our commitment to luxury and comfort is evident in every corner of our resorts.",
      listItems: [
        "We prioritize the best for all our guests",
        "Experience the luxury of our resorts",
        "Discover top-tier hotels and resorts",
        "Enjoy double rooms and family suites",
        "Immerse yourself in a luxury experience"
      ],
      buttonText: "Explore All Packages"
    },
    tr: {
      discoverTitle: "Lokasyonlarımızı Keşfedin",
      mainTitle: "20 Yıllık Konaklama Mükemmelliği",
      description: "İki on yıldır, her konaklamanın unutulmaz ve her deneyimin eşsiz olmasını sağlamak için konukseverlik sanatını mükemmelleştiriyoruz. Lüks ve konfora olan bağlılığımız, tesislerimizin her köşesinde kendini gösterir.",
      listItems: [
        "Tüm misafirlerimiz için en iyisini önceliklendiriyoruz",
        "Tatil köylerimizin lüksünü deneyimleyin",
        "Birinci sınıf otel ve tatil köylerini keşfedin",
        "Çift kişilik odalar ve aile süitleri",
        "Lüks bir deneyime dalın"
      ],
      buttonText: "Tüm Paketleri İnceleyin"
    }
  };

  const selectedText = isEnglish ? texts.en : texts.tr;

  return (
    <Grid container spacing={3} alignItems="center" sx={{ my: 5, maxWidth: '75%', margin: '0 auto'  }} justifyContent="center">
      <Grid item xs={12} md={4}>
        <Box sx={{ position: 'relative', width: '100%', height: 'auto' }}>
          <img 
            src={luxuryImage} 
            alt="Luxury Room" 
            style={{ 
              width: '100%', 
              height: isMobile ? '250px' : '100%', 
              objectFit: 'cover', 
              borderRadius: '16px' 
            }} 
          />
          <IconButton
            onClick={handleOpen}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(255, 165, 0, 0.8)',
              '&:hover': {
                backgroundColor: 'rgba(255, 165, 0, 1)',
              },
            }}
          >
            <PlayArrowIcon sx={{ fontSize: isMobile ? '30px' : '40px', color: 'white' }} />
          </IconButton>
        </Box>
      </Grid>

      <Grid item xs={12} md={8}>
        <Box sx={{ pl: isMobile ? 0 : 2 }}>
          <Typography variant="h6" color="secondary" gutterBottom>
            {selectedText.discoverTitle}
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom>
            {selectedText.mainTitle}
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            {selectedText.description}
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            {selectedText.listItems.map((text, index) => (
              <Box component="li" display="flex" alignItems="center" key={index}>
                <CheckCircleOutlineIcon sx={{ mr: 1, color: 'textSecondary' }} />
                <Typography variant="body1" color="textSecondary">{text}</Typography>
              </Box>
            ))}
          </Box>
          {/* <Button variant="contained" color="warning" sx={{ mt: 3 }}>
            {selectedText.buttonText}
          </Button> */}
        </Box>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="video-modal-title"
        aria-describedby="video-modal-description"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Box 
          sx={{ 
            width: isMobile ? '90%' : '80%', 
            maxWidth: 800, 
            height: isMobile ? '60%' : '80%', 
            maxHeight: 450, 
            backgroundColor: 'black',
            borderRadius: '8px',
            overflow: 'hidden'
          }}
        >
          <iframe
            src={AlanyaVideo}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Hotel Video"
          ></iframe>
        </Box>
      </Modal>
    </Grid>
  );
};

export default Discover;
