import React from 'react';
import { Box, Typography } from '@mui/material';

const ContactAndAccess = ({ isEnglish }) => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', p: 3, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
        {isEnglish ? 'Contact and Access' : 'İletişim ve Erişim'}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1132.163453407613!2d31.770431367787786!3d36.62056540926969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAvsallar%20Mah.%20%C4%B0ncekum%20Cad.%20K%C3%BCbra%201%20%C4%B0%C5%9F%20Merkezi%2C%20No%3A61%2F2%20Alanya%2FAntalya!5e0!3m2!1str!2str!4v1725903246838!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: '16px' }}
          allowFullScreen=""
          loading="lazy"
          title={isEnglish ? "Google Maps - London" : "Google Haritalar - Antalya / Avsallar"}
        ></iframe>
      </Box>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h6">
          {isEnglish ? 'Call Us' : 'Bizi Arayın'}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          0 (242) 517 34 40
        </Typography>

        <Typography variant="h6" sx={{ mt: 2 }}>
          {isEnglish ? 'Email Us' : 'Bize Email Gönderin'}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          bilgi@kepenekinsaat.com
        </Typography>

        <Typography variant="h6" sx={{ mt: 2 }}>
          {isEnglish ? 'Address' : 'Adres'}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {isEnglish
            ? 'Avsallar District Incekum Street Kubra 1 Business Center, No:61/2 Alanya/Antalya'
            : 'Avsallar Mah. İncekum Cad. Kübra 1 İş Merkezi, No:61/2 Alanya/Antalya'}
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactAndAccess;
