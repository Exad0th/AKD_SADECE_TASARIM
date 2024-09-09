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
        breadcrumbCurrent: 'About',
        pageTitle: 'About Us',
        headline: 'Best family suit Hotels in Alanya since 1988. Our hotel has been present for over 20 years.',
        paragraph1:
          'As Kepenek Construction, we have been providing services in construction, real estate and tourism accommodation in Alanya for many years. We believe that the dynamics of all sectors are creativity and approach differences. We believe that the elements that make the pioneers who provide the development of sectors different from others are innovation, vision difference and customer focus.',
        paragraph2:
          'While taking our company to the next level with our AKD Project, we are targeting all the residences in the Alanya region. Our apartments, which will be in a spacious location special to your request above the sector standards, will be at your service soon.',
        imageCaption: 'Best Luxury Rooms Hotels',
      }
    : {
        breadcrumbHome: 'Ana Sayfa',
        breadcrumbCurrent: 'Hakkımızda',
        pageTitle: 'Hakkımızda',
        headline: '1988 Yılından beri Avsallar bölgesinde otellerimiz ile hizmet vermekteyiz.',
        paragraph1:
          'Kepenek İnşaat olarak inşaat, emlak ve turizm konaklama alanlarında Alanya’da  uzun yıllardır hizmet vermekteyiz. Tüm sektörlerin dinamiğinin yaratıcılık ve yaklaşım farkı olduğu inancındayız. Sektörlerin gelişimini sağlayan öncüleri diğerlerinden farklı yapan unsurun, yenilikçilik, vizyon farkı ve müşteri odaklılık olduğuna inanıyoruz. ',
        paragraph2:
          'AKD Projemiz ile şirketimizi bir sonraki seviyeye taşırken Alanya bölgesindeki tüm konutları hedefimize alıyoruz. Sektör standartlarının üstünde isteğinize özel geniş bir konumda olacak dairelerimiz yakında hizmetinizde.',
        imageCaption: 'En Lüks Odalar Otelleri',
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

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" component="h2" gutterBottom sx={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
            fontWeight: 400,
            lineHeight: 1.5,
            color: '#212529',
            marginTop: '10%'
          }}>
            {content.headline}
          </Typography>
          <Typography variant="body1" paragraph sx={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
            fontWeight: 400,
            lineHeight: 1.5,
            color: '#212529',
            top: '16px'
          }}>
            {content.paragraph1}
          </Typography>
          <Typography variant="body1" paragraph sx={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
            fontWeight: 400,
            lineHeight: 1.5,
            color: '#212529',
            top: '16px'
          }}>
            {content.paragraph2}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ position: 'relative' }}>
            <img
              src={luxuryImage}
              alt="Luxury Room"
              style={{ width: '100%', borderRadius: '8px' }}
            />
            {/* <Typography
              sx={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '8px',
                borderRadius: '4px',
              }}
              variant="h6"
            >
              {content.imageCaption}
            </Typography> */}
          </Box>
          
        </Grid>
      </Grid>
    </Box>
  );
};

export default TitleAndDesc;
