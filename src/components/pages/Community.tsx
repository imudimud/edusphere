import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Button,
  TextField,
  Tabs,
  Tab,
  Chip,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import ForumIcon from '@mui/icons-material/Forum';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';

const Community = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const discussionTopics = [
    {
      id: 1,
      title: 'Tips for Learning Multiple Languages',
      author: 'Sarah Johnson',
      replies: 23,
      tags: ['Language Learning', 'Study Tips'],
      avatar: '/path/to/avatar1.jpg',
    },
    {
      id: 2,
      title: 'Arabic Grammar Questions',
      author: 'Ahmed Hassan',
      replies: 15,
      tags: ['Arabic', 'Grammar'],
      avatar: '/path/to/avatar2.jpg',
    },
    {
      id: 3,
      title: 'French Pronunciation Practice Group',
      author: 'Marie Claire',
      replies: 45,
      tags: ['French', 'Speaking'],
      avatar: '/path/to/avatar3.jpg',
    },
  ];

  const studyGroups = [
    {
      id: 1,
      name: 'Advanced English Conversation',
      members: 12,
      meetingTime: 'Tuesdays 7PM GMT',
      level: 'Advanced',
    },
    {
      id: 2,
      name: 'French Book Club',
      members: 8,
      meetingTime: 'Thursdays 6PM GMT',
      level: 'Intermediate',
    },
    {
      id: 3,
      name: 'Arabic Writing Workshop',
      members: 15,
      meetingTime: 'Saturdays 3PM GMT',
      level: 'All Levels',
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
            {t('community.title')}
          </Typography>

          <Box sx={styles.tabContainer}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              centered
              sx={styles.tabs}
            >
              <Tab icon={<ForumIcon />} label={t('community.discussions')} />
              <Tab icon={<GroupsIcon />} label={t('community.studyGroups')} />
              <Tab icon={<EventIcon />} label={t('community.events')} />
            </Tabs>
          </Box>

          <Box sx={styles.content}>
            {activeTab === 0 && (
              <Grid container spacing={3}>
                {discussionTopics.map((topic) => (
                  <Grid item xs={12} key={topic.id}>
                    <Card sx={styles.card}>
                      <CardContent>
                        <Box sx={styles.topicHeader}>
                          <Box sx={styles.authorInfo}>
                            <Avatar src={topic.avatar} />
                            <Typography variant="subtitle1" sx={styles.author}>
                              {topic.author}
                            </Typography>
                          </Box>
                          <Typography variant="caption">
                            {topic.replies} {t('community.replies')}
                          </Typography>
                        </Box>
                        <Typography variant="h6" sx={styles.topicTitle}>
                          {topic.title}
                        </Typography>
                        <Box sx={styles.tags}>
                          {topic.tags.map((tag) => (
                            <Chip
                              key={tag}
                              label={tag}
                              size="small"
                              sx={styles.tag}
                            />
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}

            {activeTab === 1 && (
              <Grid container spacing={3}>
                {studyGroups.map((group) => (
                  <Grid item xs={12} sm={6} md={4} key={group.id}>
                    <Card sx={styles.groupCard}>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          {group.name}
                        </Typography>
                        <Divider sx={styles.divider} />
                        <Box sx={styles.groupInfo}>
                          <Typography variant="body2">
                            {group.members} {t('community.members')}
                          </Typography>
                          <Typography variant="body2">
                            {group.meetingTime}
                          </Typography>
                          <Chip
                            label={group.level}
                            size="small"
                            sx={styles.levelChip}
                          />
                        </Box>
                        <Button
                          variant="contained"
                          fullWidth
                          sx={styles.joinButton}
                        >
                          {t('community.joinGroup')}
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}
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
  title: {
    textAlign: 'center',
    marginBottom: 4,
    color: '#212529',
    fontWeight: 700,
  },
  tabContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    marginBottom: 4,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  tabs: {
    '& .MuiTab-root': {
      minHeight: 64,
    },
  },
  content: {
    marginTop: 4,
  },
  card: {
    backgroundColor: '#FFFFFF',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
  },
  topicHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  authorInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },
  author: {
    fontWeight: 500,
  },
  topicTitle: {
    marginBottom: 2,
  },
  tags: {
    display: 'flex',
    gap: 1,
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: 'rgba(33, 150, 243, 0.1)',
    color: '#2196F3',
  },
  groupCard: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
  },
  divider: {
    margin: '12px 0',
  },
  groupInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    marginBottom: 2,
  },
  levelChip: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(245, 0, 87, 0.1)',
    color: '#F50057',
  },
  joinButton: {
    marginTop: 2,
    background: 'linear-gradient(to right, #2196F3, #21CBF3)',
    '&:hover': {
      background: 'linear-gradient(to right, #21CBF3, #2196F3)',
    },
  },
};

export default Community;