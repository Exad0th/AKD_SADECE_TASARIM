import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { Grid, Typography, Button, Box, Container } from '@mui/material';
import arkaplan1 from '../images/arkaplan1.jpg';

const ResortSection = ({ isEnglish }) => {

    const content = {
        en: {
            title: "Relax in our Resort",
            subtitle: "Your Comfort is Our Priority.",
            description: "Experience the perfect blend of tranquility and comfort amidst the unique nature and sea of Alanya. With our customer satisfaction-focused service approach, we offer our esteemed guests an unforgettable holiday experience. This is the perfect place to relax and rejuvenate!.",
            buttonText: "Learn About Us"
        },
        tr: {
            title: "Resortumuzda Rahatlayın",
            subtitle: "Sizin Konforunuz Bizim Önceliğimiz.",
            description: "Alanya'nın eşsiz doğası ve denizi eşliğinde huzur ve konforu bir arada yaşayın. Müşteri memnuniyeti odaklı hizmet anlayışımızla, siz değerli misafirlerimize unutulmaz bir tatil deneyimi sunuyoruz. Dinlenmek ve yenilenmek için en doğru adres burası!",
            buttonText: "Hakkımızda Bilgi Edinin"
        }
    };

    const selectedContent = isEnglish ? content.en : content.tr;

    // Blur seviyesini yönetmek için state
    const [blurLevel, setBlurLevel] = useState(1);

    useEffect(() => {
        let increment = true;
        const interval = setInterval(() => {
            setBlurLevel((prevBlur) => {
                if (prevBlur >= 8) {
                    increment = false;
                } else if (prevBlur <= 0) {
                    increment = true;
                }
                return increment ? prevBlur + 1 : prevBlur - 1;
            });
        }, 2000); // Blur seviyesi her 2 saniyede bir değişir.

        // Temizleme fonksiyonu
        return () => clearInterval(interval);
    }, []);

    return (
        <Container
            maxWidth="lg"
            sx={{
                my: 5,
                position: "relative",
                padding: "20px",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    //backgroundImage: `url(${arkaplan1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    filter: `blur(${blurLevel}px)`, // Blur seviyesini dinamik olarak uygula
                    transition: "filter 2s ease-in-out", // Yumuşak geçiş
                    zIndex: -1,
                },
            }}
        >
            <Grid container spacing={4} alignItems="center" justifyContent='center'>
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        transition: 'opacity 2s ease-in-out',
                        opacity: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center', // Yatayda ortalamak için
                        justifyContent: 'center', // Dikeyde ortalamak için
                    }}>
                        <Typography variant="h6" gutterBottom sx={{color:'orange', fontSize:'50px', fontWeight: 'bold',  fontFamily: '"Brush Script MT", cursive', textAlign:'center'}}>
                            {selectedContent.subtitle}
                        </Typography>
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            paragraph
                            sx={{
                                color: 'black',
                                textAlign: 'center',
                                fontSize:'36px',
                                fontFamily: '"Brush Script MT", cursive'
                            }}
                            >
                            {selectedContent.description}
                        </Typography>

                        <Button variant="contained" color="warning" to='/about' component={Link} >
                            {selectedContent.buttonText}
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ResortSection;
