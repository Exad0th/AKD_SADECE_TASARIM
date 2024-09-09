import React from 'react';
import { Box, Typography, Grid, TextField, Button, InputAdornment, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Footer = ({ isEnglish, isTurkish }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const footerText = {
    en: {
      contactUs: "Contact Us",
      usefulLinks: "Useful Links",
      latestBlog: "Latest From Blog",
      newsletter: "Newsletter",
      address: "Avsallar, Avsallar Neighborhood, Duranlar Street, No:36, Yazar Street, No:1 No:36, 07410 Alanya/Antalya",
      phone: "0 (242) 517 34 40",
      email: "bilgi@kepenekinsaat.com",
      home: "Home",
      about: "About hotels",
      blog: "Blog posts",
      contact: "Contact us",
      blogPost1: "--",
      blogPost2: "--",
      newsletterText: "Enter your email and receive the latest news from us. We'll never share your email address",
      placeholder: "Your Email Address",
      subscribe: "Subscribe"
    },
    tr: {
      contactUs: "İletişim",
      usefulLinks: "Faydalı Bağlantılar",
      latestBlog: "Blogdan Son Yazılar",
      newsletter: "Bülten",
      address: "Avsallar Mah. İncekum Cad. Kübra 1 İş Merkezi, No:61/2 Alanya/Antalya",
      phone: "0 (242) 517 34 40",
      email: "bilgi@kepenekinsaat.com",
      home: "Anasayfa",
      about: "Oteller hakkında",
      blog: "Blog yazıları",
      contact: "İletişim",
      blogPost1: "--",
      blogPost2: "--",
      newsletterText: "E-posta adresinizi girin ve en son haberleri alın. E-posta adresinizi asla paylaşmayacağız",
      placeholder: "E-posta Adresiniz",
      subscribe: "Abone Ol"
    }
  };

  const selectedText = isEnglish ? footerText.en : footerText.tr;

  return (
    <Box sx={{ backgroundColor: 'black', color: 'white', py: isMobile ? 1 : 3, px: 3 }}>
      <Grid container spacing={4} sx={{ textAlign: isMobile ? 'center' : 'left'}}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>{selectedText.contactUs}</Typography>
          <Box display="flex" alignItems="center" mb={2} justifyContent={isMobile ? 'center' : 'flex-start'}>
            <LocationOnIcon sx={{ mr: 1 }} />
            <Typography variant="body2">{selectedText.address}</Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={2} justifyContent={isMobile ? 'center' : 'flex-start'}>
            <PhoneIcon sx={{ mr: 1 }} />
            <Typography variant="body2">{selectedText.phone}</Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent={isMobile ? 'center' : 'flex-start'}>
            <EmailIcon sx={{ mr: 1 }} />
            <Typography variant="body2">{selectedText.email}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>{selectedText.latestBlog}</Typography>
          <Typography variant="body2">{selectedText.blogPost1}</Typography>
          <Typography variant="caption">{isEnglish ? "March 9, 2020" : "9 Mart 2024"}</Typography>
          <Typography variant="body2">{selectedText.blogPost2}</Typography>
          <Typography variant="caption">{isEnglish ? "March 9, 2020" : "9 Mart 2024"}</Typography>
        </Grid>
        {/* İlgili alanlar yorum satırı içinde bırakılmıştır, istenirse aktif hale getirilebilir */}
        {/* 
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>{selectedText.newsletter}</Typography>
          <Typography variant="body2" paragraph>{selectedText.newsletterText}</Typography>
          <TextField
            fullWidth
            placeholder={selectedText.placeholder}
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SendIcon sx={{ color: 'white' }} />
                  </IconButton>
                </InputAdornment>
              ),
              sx: { backgroundColor: 'grey', color: 'white' }
            }}
          />
          <Button variant="contained" color="warning" sx={{ mt: 2, backgroundColor: 'grey', color: 'white' }}>
            {selectedText.subscribe}
          </Button>
        </Grid>
        */}
      </Grid>
    </Box>
  );
};

export default Footer;
