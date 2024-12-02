import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const CallToAction = () => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.section}>
      <Typography variant="h2" sx={styles.headline}>
        {t('cta.headline')}
      </Typography>
      <Box sx={styles.buttons}>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Button variant="contained" color="primary" sx={styles.signUpButton}>
            {t('cta.signUp')}
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Button variant="outlined" color="secondary" sx={styles.requestInfoButton}>
            {t('cta.requestInfo')}
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

const styles = {
  section: {
    padding: '80px 20px',
    textAlign: 'center',
    background: 'linear-gradient(to right, #FF4081, #F50057)',
  },
  headline: {
    marginBottom: '40px',
    color: '#FFFFFF',
    fontWeight: 700,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  signUpButton: {
    backgroundColor: '#FFFFFF',
    color: '#F50057',
    '&:hover': {
      backgroundColor: '#FF4081',
      color: '#FFFFFF',
    },
  },
  requestInfoButton: {
    borderColor: '#FFFFFF',
    color: '#FFFFFF',
    '&:hover': {
      borderColor: '#FF4081',
      color: '#FF4081',
    },
  },
};

export default CallToAction;
