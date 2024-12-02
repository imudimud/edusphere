import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    { photo: 'path/to/photo1.jpg', quote: 'Testimonial 1', name: 'Student 1' },
    { photo: 'path/to/photo2.jpg', quote: 'Testimonial 2', name: 'Student 2' },
    { photo: 'path/to/photo3.jpg', quote: 'Testimonial 3', name: 'Student 3' },
  ];

  return (
    <Box sx={styles.section}>
      <Typography variant="h2" sx={styles.headline}>
        {t('testimonials.headline')}
      </Typography>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Card sx={styles.card}>
              <CardContent>
                <Avatar src={testimonial.photo} sx={styles.avatar} />
                <Typography variant="body1">
                  {testimonial.quote}
                </Typography>
                <Typography variant="h6">
                  {testimonial.name}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

const styles = {
  section: {
    padding: '80px 20px',
    textAlign: 'center',
    backgroundColor: '#F5F5F5',
  },
  headline: {
    marginBottom: '40px',
    color: '#212529',
    fontWeight: 700,
  },
  card: {
    maxWidth: 345,
    margin: 'auto',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  avatar: {
    width: 60,
    height: 60,
    margin: '0 auto 20px',
  },
};

export default Testimonials;
