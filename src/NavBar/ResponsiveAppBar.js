import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import turkishFlag from '../images/turkishFlag.png';
import americanFlag from '../images/americanFlag.png';
import akdLogo from '../ImgAKD/akdLogo.jpg';
import Estates from '../Home/Estates';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const pages = [
  { name: 'Ana Sayfa', path: '/' },
  { name: 'Hakkımızda', path: '/about' },
  { name: 'Hizmetlerimiz', path: '/services' },
  { name: 'İletişim', path: '/contact' },
];

const pagesEN = [
  { name: 'Home Page', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

function ResponsiveAppBar({ isEnglish, isTurkish, setIsEnglish, setIsTurkish }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Mobil cihazları kontrol eder

  const [openDialog, setOpenDialog] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false); // Drawer için state

  const convertLangEN = () => {
    setIsEnglish(true);
    setIsTurkish(false);
  };

  const convertLangTR = () => {
    setIsEnglish(false);
    setIsTurkish(true);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <List>
                    {(isEnglish ? pagesEN : pages).map((page) => (
                      <ListItem button key={page.name} component={Link} to={page.path}>
                        <ListItemText primary={page.name} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>

              <Box
                component="img"
                sx={{
                  height: 80,
                  width: 120,
                  mx: 'auto',
                  display: 'block',
                }}
                alt="AKD Logo"
                src={akdLogo}
              />

              <Grid container justifyContent="center" alignItems="center" spacing={2} m={2}>
                <Grid item>
                  <ButtonBase href="#" sx={{ p: 1 }}>
                    <Box
                      component="img"
                      sx={{ height: 25, width: 35 }}
                      alt="Türk Bayrağı"
                      src={turkishFlag}
                      onClick={convertLangTR}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item>
                  <ButtonBase href="#" sx={{ p: 1 }}>
                    <Box
                      component="img"
                      sx={{ height: 25, width: 35 }}
                      alt="Amerika Bayrağı"
                      src={americanFlag}
                      onClick={convertLangEN}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    onClick={handleOpenDialog}
                    sx={{
                      backgroundColor: '#E67E22',
                      color: 'white',
                      borderRadius: '5px',
                      padding: '8px 16px',
                      '&:hover': {
                        backgroundColor: '#D35400',
                      },
                    }}
                  >
                    {isEnglish ? 'Book Now' : 'Rezervasyon Yap'}
                  </Button>
                </Grid>
              </Grid>
            </>
          ) : (
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Box
                  component="img"
                  sx={{
                    height: 80,
                    width: 120,
                    mr: 1,
                  }}
                  alt="AKD Logo"
                  src={akdLogo}
                />
              </Grid>

              <Grid item>
                <Grid container spacing={2}>
                  {(isEnglish ? pagesEN : pages).map((page) => (
                    <Grid item key={page.name}>
                      <Button
                        component={Link}
                        to={page.path}
                        sx={{ color: 'black', display: 'block' }}
                      >
                        {page.name}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              <Grid item>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase href="#" sx={{ p: 1 }}>
                      <Box
                        component="img"
                        sx={{ height: 25, width: 35 }}
                        alt="Türk Bayrağı"
                        src={turkishFlag}
                        onClick={convertLangTR}
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item>
                    <ButtonBase href="#" sx={{ p: 1 }}>
                      <Box
                        component="img"
                        sx={{ height: 25, width: 35 }}
                        alt="Amerika Bayrağı"
                        src={americanFlag}
                        onClick={convertLangEN}
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      onClick={handleOpenDialog}
                      sx={{
                        backgroundColor: '#E67E22',
                        color: 'white',
                        borderRadius: '5px',
                        padding: '8px 16px',
                        '&:hover': {
                          backgroundColor: '#D35400',
                        },
                      }}
                    >
                      {isEnglish ? 'Book Now' : 'Rezervasyon Yap'}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </Container>

      {/* Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="md">
        <DialogTitle>
          {isEnglish ? 'Quick Rezervation' : 'Hızlı Rezervasyon'}
          <IconButton
            aria-label="close"
            onClick={handleCloseDialog}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Estates isEnglish={isEnglish} isTurkish={isTurkish} />
        </DialogContent>
      </Dialog>
    </AppBar>
  );
}

export default ResponsiveAppBar;
