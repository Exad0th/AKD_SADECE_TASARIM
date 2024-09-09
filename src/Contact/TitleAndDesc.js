import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Breadcrumbs, Link, Typography, Box, Grid } from '@mui/material';
import luxuryImage from '../images/HavadanGorsel.jpg';

const StyledBreadcrumb = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.secondary,
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const TitleAndDesc = ({ isEnglish, isTurkish }) => {
  const content = isEnglish
    ? {
        breadcrumbHome: 'Home',
        breadcrumbCurrent: 'Contact Us',
        pageTitle: 'Contact Us',
        
      }
    : {
        breadcrumbHome: 'Ana Sayfa',
        breadcrumbCurrent: 'Bize Ulaşın',
        pageTitle: 'Bize Ulaşın',
        
      };

  return (
    <Box sx={{ my: 5, mx: 3 }}>
      <Box
        sx={{
          backgroundColor: 'lightgray',
          py: 5,
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        <Breadcrumbs aria-label="breadcrumb" sx={{ justifyContent: 'center', display: 'flex', my: 2 }}>
          <StyledBreadcrumb href="/" underline="none">{content.breadcrumbHome}</StyledBreadcrumb>
          <Typography color="textPrimary">{content.breadcrumbCurrent}</Typography>
        </Breadcrumbs>
        <Typography variant="h4" component="h1" sx={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
          fontWeight: 400,
          lineHeight: 1.5,
          color: '#212529',
        }}>
          {content.pageTitle}
        </Typography>
      </Box>

      
    </Box>
  );
};

export default TitleAndDesc;
