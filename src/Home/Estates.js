import React from 'react';
import { Grid, Typography, Button, Box, Container, Card, CardContent, CardMedia } from '@mui/material';
import luxuryImage1 from '../images/EsmaApart.jpg';
import luxuryImage2 from '../images/KepenekVilla.jpg';
import luxuryImage3 from '../images/SevgiSitesi.jpg';

const roomsData = {
    en: [
        {
            title: "Esma Apart Hotel",
            description: "The Address of Comfort and Peace in Avsallar Located in the Avsallar neighborhood of Alanya, one of the popular holiday resorts of Antalya, Esma Apart Hotel offers its guests an unforgettable accommodation experience.",
            guests: "4 Guests",
            bed: "Double bed",
            size: "55sqft",
            buttonText: "Book Now",
            link: "https://esma-apart-hotel.hotelrunner.com/bv3/search"
        },
        {
            title: "Kepenek Villages",
            description: "Avsallar Kepenek Villas attract attention with their contemporary architecture and carefully designed details. Each villa offers a comfortable life with its spacious and airy interiors.",
            guests: "7 Guests",
            bed: "King bed",
            size: "168sqft",
            buttonText: "Book Now",
            link: "https://avsallar-kepenek-village.hotelrunner.com/bv3/search"
        },
        {
            title: "Sevgi Complex",
            description: "Sevgi Sitesi, Alanya'nın Avsallar beldesinde bulunan ve aileler için mükemmel bir konaklama seçeneği sunan bir tesistir.",
            guests: "4 Guests",
            bed: "Queen bed",
            size: "110sqft",
            buttonText: "Book Now",
            link: "https://sevgi-sitesi.hotelrunner.com/bv3/search"
        }
    ],
    tr: [
        {
            title: "Esma Apart Otel",
            description: "Avsallar’da Konfor ve Huzurun Adresi Antalya’nın gözde tatil beldelerinden Alanya’nın Avsallar mahallesinde yer alan Esma Apart Otel, misafirlerine unutulmaz bir konaklama deneyimi sunuyor.",
            guests: "4 Misafir",
            bed: "Çift kişilik yatak",
            size: "55 metrekare",
            buttonText: "Şimdi Rezervasyon Yap",
            link: "https://esma-apart-hotel.hotelrunner.com/bv3/search?locale=tr"
        },
        {
            title: "Kepenek Villaları",
            description: "Avsallar Kepenek Villaları, çağdaş mimarisi ve özenle tasarlanmış detaylarıyla dikkat çeker. Her villa, geniş ve ferah iç mekanlarıyla konforlu bir yaşam sunar.",
            guests: "7 Misafir",
            bed: "King yatak",
            size: "168 metrekare",
            buttonText: "Şimdi Rezervasyon Yap",
            link: "https://avsallar-kepenek-village.hotelrunner.com/bv3/search?locale=tr"
        },
        {
            title: "Sevgi Tatil Sitesi",
            description: "Sevgi Sitesi, Alanya'nın Avsallar beldesinde bulunan ve aileler için mükemmel bir konaklama seçeneği sunan bir tesistir.",
            guests: "4 Misafir",
            bed: "Queen yatak",
            size: "110 metrekare",
            buttonText: "Şimdi Rezervasyon Yap",
            link: "https://sevgi-sitesi.hotelrunner.com/bv3/search?locale=tr"
        }
    ]
};

const images = [luxuryImage1, luxuryImage2, luxuryImage3];

const Estates = ({ isEnglish }) => {
    const selectedRooms = isEnglish ? roomsData.en : roomsData.tr;

    return (
        <Container maxWidth="lg" sx={{ my: 5 }}>
            <Typography variant="h4" gutterBottom textAlign="center">
                {isEnglish ? "Quick Rezervation" : "Hızlı Rezervasyon"}
            </Typography>
            <Grid container spacing={4} alignItems="stretch" display="flex">
                {selectedRooms.map((room, index) => (
                    <Grid item xs={12} md={4} key={index} display="flex">
                        <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={images[index]}
                                alt={room.title}
                            />
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {room.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {room.description}
                                </Typography>
                                <Box display="flex" justifyContent="space-between" mt={2} mb={2}>
                                    <Typography variant="body2">{room.guests}</Typography>
                                    <Typography variant="body2">{room.bed}</Typography>
                                    <Typography variant="body2">{room.size}</Typography>
                                </Box>
                                <Box 
                                    sx={{ 
                                    display: 'flex', 
                                    justifyContent: 'center', 
                                    alignItems: 'center', 
                                    marginTop: 2 
                                    }}>
                                        <Button 
                                        variant="contained" 
                                        color="warning"
                                        sx={{ 
                                            backgroundColor: '#e67e22', 
                                            '&:hover': {
                                            backgroundColor: '#c9302c'
                                            }
                                        }}
                                        href={room.link} // Butona tıklandığında yönlendirilecek link
                                        target="_blank" // Linkin yeni bir sekmede açılması için
                                        >
                                        {room.buttonText}
                                        </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Estates;
