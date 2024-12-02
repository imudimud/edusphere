import React from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const ValuePropsSection = () => {
  const { t } = useTranslation();

  const valueProps = [
    { icon: '🌐', title: t('valueProps.internationalStandards'), description: t('valueProps.internationalStandardsDesc') },
    { icon: '🧠', title: t('valueProps.personalizedLearning'), description: t('valueProps.personalizedLearningDesc') },
    { icon: '🌍', title: t('valueProps.globalCommunity'), description: t('valueProps.globalCommunityDesc') },
    { icon: '📱', title: t('valueProps.flexibleLearning'), description: t('valueProps.flexibleLearningDesc') },
  ];

  return (
    <Box sx={styles.section}>
      <Typography variant="h2" sx={styles.headline}>
        {t('valueProps.headline')}
      </Typography>
      <Grid container spacing={3}>
        {valueProps.map((prop, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div whileHover={{ scale: 1.05, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <Card sx={styles.card}>
                <CardContent>
                  <Typography variant="h4" component="div" sx={styles.icon}>
                    {prop.icon}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {prop.title}
                  </Typography>
                  <Typography variant="body2">
                    {prop.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const styles = {
  section: {
    padding: '80px 20px',
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
  },
  headline: {
    marginBottom: '40px',
    color: '#212529',
    fontWeight: 700,
  },
  card: {
    backgroundColor: '#F5F5F5',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  icon: {
    fontSize: '3rem',
    color: '#FF4081',
    marginBottom: '10px',
  },
};

export default ValuePropsSection;
