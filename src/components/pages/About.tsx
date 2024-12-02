import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import PublicIcon from '@mui/icons-material/Public';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const About = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: <SchoolIcon sx={styles.statIcon} />,
      value: '10,000+',
      label: t('about.studentsEnrolled'),
    },
    {
      icon: <GroupIcon sx={styles.statIcon} />,
      value: '50+',
      label: t('about.expertInstructors'),
    },
    {
      icon: <PublicIcon sx={styles.statIcon} />,
      value: '30+',
      label: t('about.countries'),
    },
    {
      icon: <EmojiObjectsIcon sx={styles.statIcon} />,
      value: '100+',
      label: t('about.courses'),
    },
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: t('about.roles.founder'),
      image: '/path/to/sarah.jpg',
      linkedin: 'https://linkedin.com/in/sarah-johnson',
      twitter: 'https://twitter.com/sarahjohnson',
    },
    {
      name: 'Prof. Ahmed Hassan',
      role: t('about.roles.academicDirector'),
      image: '/path/to/ahmed.jpg',
      linkedin: 'https://linkedin.com/in/ahmed-hassan',
      twitter: 'https://twitter.com/ahmedhassan',
    },
    {
      name: 'Marie Claire',
      role: t('about.roles.languageExpert'),
      image: '/path/to/marie.jpg',
      linkedin: 'https://linkedin.com/in/marie-claire',
      twitter: 'https://twitter.com/marieclaire',
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
          {/* Hero Section */}
          <Box sx={styles.hero}>
            <Typography variant="h2" sx={styles.title}>
              {t('about.title')}
            </Typography>
            <Typography variant="h5" sx={styles.subtitle}>
              {t('about.subtitle')}
            </Typography>
          </Box>

          {/* Mission Section */}
          <Box sx={styles.section}>
            <Typography variant="h4" sx={styles.sectionTitle}>
              {t('about.ourMission')}
            </Typography>
            <Typography variant="body1" sx={styles.missionText}>
              {t('about.missionStatement')}
            </Typography>
          </Box>

          {/* Stats Section */}
          <Box sx={styles.section}>
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card sx={styles.statCard}>
                      <CardContent sx={styles.statContent}>
                        {stat.icon}
                        <Typography variant="h3" sx={styles.statValue}>
                          {stat.value}
                        </Typography>
                        <Typography variant="body1" sx={styles.statLabel}>
                          {stat.label}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Team Section */}
          <Box sx={styles.section}>
            <Typography variant="h4" sx={styles.sectionTitle}>
              {t('about.ourTeam')}
            </Typography>
            <Grid container spacing={4}>
              {team.map((member) => (
                <Grid item xs={12} sm={6} md={4} key={member.name}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Card sx={styles.teamCard}>
                      <CardContent sx={styles.teamContent}>
                        <Avatar
                          src={member.image}
                          sx={styles.teamAvatar}
                          alt={member.name}
                        />
                        <Typography variant="h6" sx={styles.teamName}>
                          {member.name}
                        </Typography>
                        <Typography variant="subtitle1" sx={styles.teamRole}>
                          {member.role}
                        </Typography>
                        <Box sx={styles.socialLinks}>
                          <IconButton
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={styles.socialButton}
                          >
                            <LinkedInIcon />
                          </IconButton>
                          <IconButton
                            href={member.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={styles.socialButton}
                          >
                            <TwitterIcon />
                          </IconButton>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
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
  hero: {
    textAlign: 'center',
    marginBottom: 8,
  },
  title: {
    color: '#212529',
    fontWeight: 700,
    marginBottom: 2,
  },
  subtitle: {
    color: '#666',
    maxWidth: '800px',
    margin: '0 auto',
  },
  section: {
    marginBottom: 8,
  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: 4,
    fontWeight: 600,
    color: '#212529',
  },
  missionText: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    color: '#666',
    fontSize: '1.1rem',
    lineHeight: 1.8,
  },
  statCard: {
    height: '100%',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)',
    transition: 'transform 0.2s',
    '&:hover': {
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    },
  },
  statContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 1,
  },
  statIcon: {
    fontSize: 40,
    color: '#2196F3',
    marginBottom: 1,
  },
  statValue: {
    fontWeight: 700,
    color: '#212529',
    fontSize: { xs: '2rem', md: '2.5rem' },
  },
  statLabel: {
    color: '#666',
    fontSize: '0.9rem',
  },
  teamCard: {
    height: '100%',
    background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)',
    transition: 'transform 0.2s',
    '&:hover': {
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    },
  },
  teamContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  teamAvatar: {
    width: 120,
    height: 120,
    marginBottom: 2,
    border: '4px solid #FFFFFF',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  teamName: {
    fontWeight: 600,
    color: '#212529',
    marginBottom: 0.5,
  },
  teamRole: {
    color: '#666',
    marginBottom: 2,
  },
  socialLinks: {
    display: 'flex',
    gap: 1,
  },
  socialButton: {
    color: '#2196F3',
    '&:hover': {
      color: '#1976D2',
    },
  },
};

export default About;