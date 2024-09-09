import React, { useState } from 'react';
import { Box, Grid, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, Divider } from '@mui/material';
import tesis from '../images/tesis4.jpg';
import tesis3 from '../images/tesis3.jpg';
import tur from '../images/tur.mp4';
import gemitur from '../images/gemitur.jpg';
import wp1 from '../images/wp1.jpg';

const RoomCard = ({ image, titleEN, titleTR, descriptionEN, descriptionTR, isEnglish, onReadMore }) => (
  <Grid item xs={12} sm={4}>
    <Box sx={{ 
      borderRadius: '16px', 
      overflow: 'hidden', 
      boxShadow: 3, 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between', 
      height: '100%' 
    }}>
      <Box sx={{ height: 200, overflow: 'hidden' }}>
        <img src={image} alt={isEnglish ? titleEN : titleTR} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Box>
      <Box sx={{ p: 2, flexGrow: 1 }}>
        <Typography variant="h6">
          {isEnglish ? titleEN : titleTR}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {isEnglish ? descriptionEN : descriptionTR}
        </Typography>
      </Box>
      <Box sx={{ p: 2 }}>
        <Button onClick={onReadMore} sx={{ mt: 1, fontSize: '15px'}} color="warning">
          {isEnglish ? 'Read More' : 'Daha Fazlasını Oku'}
        </Button>
      </Box>
    </Box>
  </Grid>
);

const RoomSection = ({ isEnglish }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState({ title: '', content: '', subimage: '' });

  const handleReadMore = (title, content, subimage) => {
    setSelectedRoom({ title, content, subimage });
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', p: 3, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
        {isEnglish ? 'Our Contents' : 'İçeriklerimiz'}
      </Typography>
      <Grid container spacing={4}>
        <RoomCard
          image={tesis}
          titleEN="Sport Center"
          titleTR="Spor Salonu"
          descriptionEN="You can continue to stay fit in our residences. We provide opportunities for everyone who wishes to exercise."
          descriptionTR="Konutlarımızda formunuzu korumaya devam edebilirsiniz. Spor yapmak isteyen herkese imkan sağlıyoruz."
          isEnglish={isEnglish}
          onReadMore={() => handleReadMore(
            isEnglish ? "Sport Center" : "Spor Salonu",
            isEnglish ? 
              "As a tourism agency, the comfort and satisfaction of our guests are our top priorities. That’s why we offer modern and well-equipped fitness centers in our residences, where you can maintain your exercise routine. Our fitness centers cater to both those who want to stay fit and sports enthusiasts alike.\n\nOur gyms are equipped with the latest fitness technology. From cardio machines to weight equipment, stretching areas to group exercise classes, we provide everything you need to achieve your fitness goals. Our fitness centers, available 24/7, offer a convenient and supportive environment for all your exercise needs.\n\nIn addition to promoting physical health, our fitness centers also provide an ideal space for mental relaxation. With spacious and modern designs, plenty of natural light, and a calming atmosphere, our gyms stand out as unique places to work out.\n\nOur trainers are here to support you in maintaining your fitness. Whether you want to create personalized training programs or join group classes, our expert staff is always ready to assist.\n\nWe ensure that every guest staying in our residences has the opportunity to stay active and fit throughout their stay by enjoying our fitness centers. These wellness amenities will make your holiday even more enjoyable."
              : 
              "Bir turizm acentası olarak, misafirlerimizin konforu ve memnuniyeti bizim için en öncelikli konudur. Bu nedenle, konutlarımızda modern ve tam donanımlı spor salonları sunuyoruz, böylece spor rutininizi sürdürebilirsiniz. Spor salonlarımız, hem formda kalmak isteyenlere hem de spor meraklılarına hitap etmektedir.\n\nSpor salonlarımız, en son teknoloji fitness ekipmanları ile donatılmıştır. Kardiyo makinelerinden ağırlık ekipmanlarına, esneme alanlarından grup egzersiz derslerine kadar, fitness hedeflerinize ulaşmanız için ihtiyacınız olan her şeyi sağlıyoruz. 7/24 kullanılabilen spor salonlarımız, tüm egzersiz ihtiyaçlarınız için uygun ve destekleyici bir ortam sunar.\n\nFiziksel sağlığı teşvik etmenin yanı sıra, spor salonlarımız zihinsel rahatlama için de ideal bir ortam sağlar. Ferah ve modern tasarımlar, bol doğal ışık ve rahatlatıcı bir atmosfer ile spor salonlarımız, benzersiz bir spor yapma alanı olarak öne çıkar.\n\nEğitmenlerimiz, formunuzu korumanızda size destek olmak için burada. İster kişiselleştirilmiş antrenman programları oluşturmak isteyin, ister grup derslerine katılın; uzman kadromuz her zaman yardıma hazır.\n\nKonutlarımızda kalan her misafirin, spor salonlarımızdan faydalanarak aktif ve formda kalma imkanı bulmasını sağlıyoruz. Bu sağlık ve zindelik imkanları, tatilinizi daha da keyifli hale getirecek.",
            tesis
          )}
        />
        <RoomCard
          image={gemitur}
          titleEN="Tours"
          titleTR="Turlar"
          descriptionEN="Discover the city of Alanya with our guided tours. Whether it's a historical journey or an adventurous day trip, our tours are designed to provide an unforgettable experience."
          descriptionTR="Alanya şehrini rehberli turlarımızla keşfedin. İster tarihi bir yolculuk, ister macera dolu bir günlük gezi olsun, turlarımız unutulmaz bir deneyim sunmak için tasarlanmıştır."
          isEnglish={isEnglish}
          onReadMore={() => handleReadMore(
            isEnglish ? "Tours" : "Turlar",
            isEnglish ? 
              "Explore the city of Alanya with our guided tours. Whether it's a historical journey or an adventure-filled day trip, our tours are designed to offer an unforgettable experience."
              : 
              "Alanya şehrini rehberli turlarımızla keşfedin. İster tarihi bir yolculuk, ister macera dolu bir günlük gezi olsun, turlarımız unutulmaz bir deneyim sunmak için tasarlanmıştır.",
            tur
          )}
        />
        <RoomCard
          image={tesis3}
          titleEN="Design and Architecture"
          titleTR="Tasarım ve Mimari"
          descriptionEN={`TR Suite combines Turkey's unique cultural heritage and aesthetics with a modern design language. In this special room, we offer our guests a unique experience in terms of both visual and comfort by blending traditional Turkish motifs with contemporary design elements.`}
          descriptionTR={`TR Suite, Türkiye'nin eşsiz kültürel mirasını ve estetik anlayışını modern bir tasarım diliyle buluşturuyor. Bu özel odada, geleneksel Türk motifleri ve çağdaş tasarım unsurları harmanlanarak misafirlerimize hem görsel hem de konfor anlamında eşsiz bir deneyim sunuyoruz.`}
          isEnglish={isEnglish}
          onReadMore={() => handleReadMore(
            isEnglish ? "Design and Architecture" : "Tasarım ve Mimari",
            isEnglish ? 
              `The Elegant Face of Turkey: A Journey to the Pinnacle of Aesthetics and Comfort with the TR Suite

              In our hotel, we constantly work on innovations and special designs not only to offer a comfortable stay to our guests but also to provide an unforgettable experience. The TR Suite, a result of these special efforts, stands out as a special room type where we bring together Turkey's elegant and cultural richness with a modern touch.

              TR Suite: Elegance Reflecting the Spirit of Turkey

              The TR Suite combines Turkey's unique cultural heritage and aesthetic understanding with a modern design language. In this special room, we offer our guests a unique experience both visually and in terms of comfort by blending traditional Turkish motifs with contemporary design elements.

              The interior design of our room is equipped with special objects reflecting the elegant details of traditional Turkish art, while also offering modern comfort impeccably. Luxurious furniture, textiles crafted with fine workmanship, and a color palette that ensures perfect aesthetic harmony can be felt in every corner of the TR Suite.`
              : 
              `Türkiye'nin Zarif Yüzü: TR Suite ile Estetik ve Konforun Zirvesine Yolculuk

              Otelimizde misafirlerimizi sadece konforlu bir konaklama değil, aynı zamanda unutulmaz bir deneyim sunmak için sürekli olarak yenilikler ve özel tasarımlar üzerine çalışıyoruz. İşte bu özel çabaların bir ürünü olarak karşınıza çıkan TR Suite, Türkiye'nin zarif ve kültürel zenginliklerini modern bir dokunuşla bir araya getirdiğimiz özel bir oda türü olarak öne çıkıyor.

              TR Suite: Türkiye'nin Ruhunu Yansıtan Şıklık

              TR Suite, Türkiye'nin eşsiz kültürel mirasını ve estetik anlayışını modern bir tasarım diliyle buluşturuyor. Bu özel odada, geleneksel Türk motifleri ve çağdaş tasarım unsurları harmanlanarak misafirlerimize hem görsel hem de konfor anlamında eşsiz bir deneyim sunuyoruz.

              Odamızın iç tasarımı, geleneksel Türk sanatının zarif detaylarını yansıtan özel objelerle donatılmış olup, aynı zamanda modern konforu da eksiksiz bir şekilde sunmaktadır. Lüks mobilyalar, ince işçilikle yapılmış tekstil ürünleri ve estetik açıdan mükemmel bir uyum sağlayan renk paletleri, TR Suite’in her köşesinde kendini hissettiriyor.`,
            wp1
          )}
        />
      </Grid>

      <Dialog open={openDialog} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          <Typography variant="h5" gutterBottom>{selectedRoom.title}</Typography>
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="body1" paragraph>
            {
              selectedRoom.subimage === tur ? (
                <video width="100%" height="400px" controls>
                  <source src={selectedRoom.subimage} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={selectedRoom.subimage} alt='room' style={{width:'100%'}}/>
              )
            }
          </Typography>
          <Typography variant="body1" paragraph>
            {selectedRoom.content}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6" gutterBottom>
            {isEnglish ? "More About This Topic" : "Bu Konu Hakkında Daha Fazla"}
          </Typography>
          <Typography variant="body2">
            {isEnglish 
              ? "Explore more details about this service and find out why it's one of our most popular offerings."
              : "Bu hizmet hakkında daha fazla detay keşfedin ve neden en popüler tekliflerimizden biri olduğunu öğrenin."
            }
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {isEnglish ? 'Close' : 'Kapat'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default RoomSection;
