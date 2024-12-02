import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Chip,
  TextField,
  MenuItem,
} from '@mui/material';
import { motion } from 'framer-motion';

const Courses = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const courses = [
    {
      id: 1,
      title: 'Advanced English Communication',
      level: 'Advanced',
      duration: '12 weeks',
      price: '$299',
      image: 'path/to/english.jpg',
      category: 'language',
    },
    {
      id: 2,
      title: 'Business French',
      level: 'Intermediate',
      duration: '8 weeks',
      price: '$249',
      image: 'path/to/french.jpg',
      category: 'language',
    },
    {
      id: 3,
      title: 'Modern Standard Arabic',
      level: 'Beginner',
      duration: '16 weeks',
      price: '$349',
      image: 'path/to/arabic.jpg',
      category: 'language',
    },
  ];

  return (
    <Box sx={styles.page}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" sx={styles.title}>
            {t('courses.exploreOurCourses')}
          </Typography>

          <Box sx={styles.filters}>
            <TextField
              label={t('courses.search')}
              variant="outlined"
              size="small"
              sx={styles.searchField}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <TextField
              select
              label={t('courses.filterByLevel')}
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              size="small"
              sx={styles.filterField}
            >
              <MenuItem value="all">{t('courses.allLevels')}</MenuItem>
              <MenuItem value="beginner">{t('courses.beginner')}</MenuItem>
              <MenuItem value="intermediate">{t('courses.intermediate')}</MenuItem>
              <MenuItem value="advanced">{t('courses.advanced')}</MenuItem>
            </TextField>
          </Box>

          <Grid container spacing={4}>
            {courses.map((course) => (
              <Grid item xs={12} sm={6} md={4} key={course.id}>
                <motion.div whileHover={{ scale: 1.03 }}>
                  <Card sx={styles.card}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={course.image}
                      alt={course.title}
                    />
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        {course.title}
                      </Typography>
                      <Box sx={styles.courseInfo}>
                        <Chip label={course.level} sx={styles.chip} />
                        <Typography variant="body2" color="text.secondary">
                          {course.duration}
                        </Typography>
                      </Box>
                      <Typography variant="h6" sx={styles.price}>
                        {course.price}
                      </Typography>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={styles.enrollButton}
                      >
                        {t('courses.enroll')}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

const styles = {
  page: {
    backgroundColor: '#F5F5F5',
    minHeight: '100vh',
    paddingY: 8,
  },
  title: {
    textAlign: 'center',
    marginBottom: 4,
    color: '#212529',
    fontWeight: 700,
  },
  filters: {
    display: 'flex',
    gap: 2,
    marginBottom: 4,
    flexWrap: 'wrap',
  },
  searchField: {
    flexGrow: 1,
    minWidth: '200px',
  },
  filterField: {
    minWidth: '150px',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  courseInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginY: 2,
  },
  chip: {
    backgroundColor: '#2196F3',
    color: '#FFFFFF',
  },
  price: {
    color: '#F50057',
    marginY: 2,
  },
  enrollButton: {
    marginTop: 2,
    background: 'linear-gradient(to right, #2196F3, #21CBF3)',
    '&:hover': {
      background: 'linear-gradient(to right, #21CBF3, #2196F3)',
    },
  },
};

export default Courses;