import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  content: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  const contactInfo: ContactInfo[] = [
    {
      icon: <EmailIcon sx={styles.contactIcon} />,
      title: t('contact.email'),
      content: 'contact@edusphere.com',
    },
    {
      icon: <LocationOnIcon sx={styles.contactIcon} />,
      title: t('contact.address'),
      content: '123 Education Street, Digital City',
    },
    {
      icon: <PhoneIcon sx={styles.contactIcon} />,
      title: t('contact.phone'),
      content: '+1 (555) 123-4567',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    setOpenSnackbar(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={styles.page}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" sx={styles.title}>
            {t('contact.title')}
          </Typography>
          <Typography variant="h5" sx={styles.subtitle}>
            {t('contact.subtitle')}
          </Typography>

          <Grid container spacing={4} sx={styles.contentContainer}>
            {/* Contact Information */}
            <Grid item xs={12} md={4}>
              <Box sx={styles.contactInfoContainer}>
                {contactInfo.map((info, index) => (
                  <Card key={index} sx={styles.infoCard}>
                    <CardContent sx={styles.infoCardContent}>
                      {info.icon}
                      <Typography variant="h6" sx={styles.infoTitle}>
                        {info.title}
                      </Typography>
                      <Typography variant="body1" sx={styles.infoContent}>
                        {info.content}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}

                <Box sx={styles.socialLinks}>
                  <IconButton
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={styles.socialButton}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={styles.socialButton}
                  >
                    <TwitterIcon />
                  </IconButton>
                  <IconButton
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={styles.socialButton}
                  >
                    <FacebookIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={8}>
              <Card sx={styles.formCard}>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label={t('contact.form.name')}
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label={t('contact.form.email')}
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label={t('contact.form.subject')}
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label={t('contact.form.message')}
                          name="message"
                          multiline
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          fullWidth
                          sx={styles.submitButton}
                        >
                          {t('contact.form.submit')}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={styles.alert}>
          {t('contact.form.successMessage')}
        </Alert>
      </Snackbar>
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
    color: '#212529',
    fontWeight: 700,
    marginBottom: 2,
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 6,
  },
  contentContainer: {
    marginTop: 4,
  },
  contactInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  },
  infoCard: {
    background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    },
  },
  infoCardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  contactIcon: {
    fontSize: 40,
    color: '#2196F3',
    marginBottom: 1,
  },
  infoTitle: {
    color: '#212529',
    marginBottom: 1,
  },
  infoContent: {
    color: '#666',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: 2,
    marginTop: 2,
  },
  socialButton: {
    color: '#2196F3',
    '&:hover': {
      color: '#1976D2',
      transform: 'scale(1.1)',
    },
  },
  formCard: {
    background: '#FFFFFF',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  submitButton: {
    background: 'linear-gradient(to right, #2196F3, #21CBF3)',
    height: 48,
    '&:hover': {
      background: 'linear-gradient(to right, #21CBF3, #2196F3)',
    },
  },
  alert: {
    width: '100%',
  },
};

export default Contact;