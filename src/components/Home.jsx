import React from 'react';
import { Container, Box } from '@mui/material';
import HeroSection from './HeroSection';
import ValuePropsSection from './ValuePropsSection';
import FeaturedCourses from './FeaturedCourses';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';

const Home = () => {
  return (
    <Box component="main" role="main">
      <HeroSection />
      <Container maxWidth="lg">
        <Box sx={{ py: 8 }}>
          <ValuePropsSection />
        </Box>
        <Box sx={{ py: 8 }}>
          <FeaturedCourses />
        </Box>
        <Box sx={{ py: 8 }}>
          <Testimonials />
        </Box>
      </Container>
      <CallToAction />
    </Box>
  );
};

export default Home;
