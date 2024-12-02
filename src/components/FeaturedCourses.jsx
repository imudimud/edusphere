import React from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const FeaturedCourses = () => {
  const { t } = useTranslation();

  const courses = [
    { image: 'path/to/course1.jpg', title: 'Course 1', instructor: 'Instructor 1', description: 'Description 1', level: 'Beginner', price: '$100' },
    { image: 'path/to/course2.jpg', title: 'Course 2', instructor: 'Instructor 2', description: 'Description 2', level: 'Intermediate', price: '$200' },
    { image: 'path/to/course3.jpg', title: 'Course 3', instructor: 'Instructor 3', description: 'Description 3', level: 'Advanced', price: '$300' },
  ];

  return (
    <Box sx={styles.section}>
      <Typography variant="h2" sx={styles.headline}>
        {t('featuredCourses.headline')}
      </Typography>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            <Card sx={styles.card}>
              <CardMedia
                component="img"
                sx={styles.cardMedia}
                image={course.image}
                alt={course.title}
              />
              <CardContent sx={styles.cardContent}>
                <Typography variant="h5" component="div">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.instructor}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.level} - {course.price}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <Button variant="contained" color="primary" sx={styles.viewAllButton}>
        {t('featuredCourses.viewAll')}
      </Button>
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
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  cardMedia: {
    height: 140,
  },
  cardContent: {
    textAlign: 'left',
  },
  viewAllButton: {
    marginTop: '20px',
    background: 'linear-gradient(to right, #2196F3, #21CBF3)',
    color: '#FFFFFF',
    padding: '10px 20px',
    borderRadius: '8px',
    transition: 'transform 0.3s ease, background 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      background: 'linear-gradient(to right, #21CBF3, #2196F3)',
    },
  },
};

export default FeaturedCourses;
