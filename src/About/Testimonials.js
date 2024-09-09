import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import './TestimonialSlider.css';

const testimonials = [
  {
    nameEN: "İsmail Kuyucu",
    nameTR: "İsmail Kuyucu",
    titleEN: "Founder and CEO",
    titleTR: "Kurucu ve CEO",
    textEN: "I liked your hotel because: It was good in terms of hygiene. Air conditioners worked without any problems. We connected to the internet without any interruptions. Thanks to the location of the hotel, we easily met many of our needs. Your renewed decor is very stylish. Your hotel was suitable for us in terms of price and performance. We even extended our holiday for one more day because of this. We were pleased with your service. Our holiday was nice. Thank you for having a comfortable and enjoyable holiday.",
    textTR: "Otelinizi beğendim, çünkü: Hijyen açısından iyiydi.Klimalar problemsiz bir şekilde çalıştı.Kesintiye uğramadan internete bağlandık.Otelin konumu sayesinde birçok ihtiyacımızı kolayca karşıladık.Yenilenen dekorunuz gayet şık olmuş.Fiyat performans noktasında oteliniz bize uygun geldi. Hatta bundan dolayı tatilimizi bir gün daha uzattık. Hizmetinizden memnun kaldık. Tatilimiz güzel geçti. Rahat ve keyifli bir tatil geçirdiğimiz için teşekkür ederiz.",
    avatar: "path_to_avatar1"
  },
  {
    nameEN: "Ahmet Olmez",
    nameTR: "Ahmet Olmez",
    titleEN: "Chief Operating Officer",
    titleTR: "Operasyon Müdürü",
    textEN: "This is our 5th visit to this apart hotel. We were already satisfied with the location and service. This year we had our holiday in the renovated rooms. It was very nice. We would like to thank Mr. Ahmet and his staff.",
    textTR: "Bizim bu apart otele 5. gidişimiz konum ve hizmetten zaten memnunduk bu yıl tatilimizi yenilenmiş odalarda yaptık gayet güzeldi Ahmet Bey ve personeline teşekkür ederiz..",
    avatar: "path_to_avatar2"
  },
  {
    nameEN: "İlkay Diker",
    nameTR: "İlkay Diker",
    titleEN: "Head of Marketing",
    titleTR: "Pazarlama Müdürü",
    textEN: "We came here with our family for the holiday. The staff is friendly and you can stay with peace of mind.",
    textTR: "Bayramda ailecek geldik personel güler yüzlü karşılama gönül rahatlığıyla kalabilirsiniz.",
    avatar: "path_to_avatar3"
  }
];

const TestimonialSlider = ({ isEnglish }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Box sx={{ py: 5, textAlign: 'center', px: isMobile ? 2 : 10 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        {isEnglish ? "Our Testimonials" : "Görüşlerimiz"}
      </Typography>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} className="testimonial-slide">
            <Typography variant="body1" paragraph>
              {isEnglish ? testimonial.textEN : testimonial.textTR}
            </Typography>
            <Typography variant="h6">
              {isEnglish ? testimonial.nameEN : testimonial.nameTR}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default TestimonialSlider;
