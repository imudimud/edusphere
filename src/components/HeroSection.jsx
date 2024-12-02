import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, MenuItem, Select, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Box sx={styles.hero}>
      <motion.img
        src="path/to/hero-image.jpg"
        alt="Students learning"
        style={styles.heroImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <Typography variant="h1" sx={styles.headline}>
        {t('hero.headline')}
      </Typography>
      <Typography variant="h5" sx={styles.subheadline}>
        {t('hero.subheadline')}
      </Typography>
      <Box sx={styles.buttons}>
        <Button variant="contained" color="primary" sx={styles.joinButton}>
          {t('hero.joinNow')}
        </Button>
        <Button variant="outlined" color="secondary" sx={styles.investorButton}>
          {t('hero.investorInfo')}
        </Button>
      </Box>
      <Select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        sx={styles.languageSwitcher}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="ar">العربية</MenuItem>
        <MenuItem value="fr">Français</MenuItem>
      </Select>
    </Box>
  );
};

const styles = {
  hero: {
    textAlign: 'center',
    padding: '100px 20px',
    background: 'linear-gradient(135deg, #2196F3 0%, #21CBF3 100%)',
    position: 'relative',
    overflow: 'hidden',
    animation: 'scrollBackground 10s linear infinite',
  },
  '@keyframes scrollBackground': {
    '0%': { backgroundPosition: '0% 0%' },
    '100%': { backgroundPosition: '100% 100%' },
  },
  heroImage: {
    display: 'none',
  },
  headline: {
    marginTop: '150px',
    color: '#FFFFFF',
    fontWeight: 700,
  },
  subheadline: {
    margin: '20px 0',
    color: '#FFFFFF',
    fontWeight: 500,
  },
  buttons: {
    margin: '20px 0',
  },
  joinButton: {
    marginRight: '10px',
    backgroundColor: '#FF4081',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#F50057',
    },
  },
  investorButton: {
    borderColor: '#FFFFFF',
    color: '#FFFFFF',
    '&:hover': {
      borderColor: '#FF4081',
      color: '#FF4081',
    },
  },
  languageSwitcher: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: '#FFFFFF',
  },
};

export default HeroSection;
