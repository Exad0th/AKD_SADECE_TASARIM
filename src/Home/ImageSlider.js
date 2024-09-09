import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Box, Typography } from '@mui/material';
import alanya1 from '../images/alanya.jpg';
import akd1 from '../images/akd1.jpg';
import akd2 from '../images/akd2.jpg';
import akd3 from '../images/akd3.jpg';
import akd4 from '../images/akd4.jpg';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ 
                ...style, 
                display: "block", 
                background: "rgba(0, 0, 0, 0.5)", 
                borderRadius: "50%",
                fontSize: "20px",
                right: "40px",  
                zIndex: 1
            }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ 
                ...style, 
                display: "block", 
                background: "rgba(0, 0, 0, 0.5)", 
                borderRadius: "50%", 
                fontSize: "20px",
                left: "40px",  
                zIndex: 1
            }}
            onClick={onClick}
        />
    );
}

const ImageSlider = ({ isEnglish, isTurkish }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Mobil cihazları kontrol eder

    const sliderTR = [
        "Her yolculuk yeni bir maceradır.",
        "Denizin ve güneşin tadını çıkarın.",
        "Unutulmaz anılar biriktirin.",
        "Ruhunuzu dinlendirin, doğanın keyfini çıkarın.",
        "Alanya'da huzuru bulun."
    ];

    const sliderEN = [
        "Every journey is a new adventure.",
        "Enjoy the sea and the sun.",
        "Create unforgettable memories.",
        "Relax your soul, enjoy nature.",
        "Find peace in Alanya."
    ];
    const images = [alanya1, akd1, akd2, akd3, akd4]; // Görselleri sırayla göstermek için dizi olarak tanımladık

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000, // 10 saniye
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const sliderContent = isEnglish ? sliderEN : sliderTR;

    return (
        <Box width="100%" height="100%">
            <Slider {...settings}>
                {sliderContent.map((text, index) => (
                    <Box key={index} position="relative" height={isMobile ? "400px" : "700px"}>
                        <img 
                            src={images[index]} 
                            alt={`Slide ${index + 1}`} 
                            style={{ 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover' 
                            }} 
                        />
                        <Box 
                            position="absolute" 
                            top="0" 
                            left="0"
                            display="flex" 
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            width="100%"
                            height="100%"
                            color="#fff"
                        >
                            <Typography 
                                variant={isMobile ? "h5" : "h4"} 
                                align="center"
                                sx={{
                                    fontSize: isMobile ? "18px" : "32px",
                                    marginBottom: isMobile ? "10px" : "20px"
                                }}
                            >
                                {text}
                            </Typography>
                            <Button 
                                variant="contained" 
                                color="primary"
                                component={Link}
                                to="/services"
                                sx={{ 
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                                    color: '#fff', 
                                    padding: isMobile ? '8px 16px' : '10px 20px', 
                                    borderRadius: '5px',
                                    fontSize: isMobile ? "14px" : "16px"
                                }}                            
                            >
                                {isEnglish ? "Our Services" : "Hizmetlerimiz"}
                            </Button>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

export default ImageSlider;
