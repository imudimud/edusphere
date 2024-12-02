import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Select,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { text: t('nav.home'), href: '/' },
    { text: t('nav.courses'), href: '/courses' },
    { text: t('nav.community'), href: '/community' },
    { text: t('nav.about'), href: '/about' },
    { text: t('nav.contact'), href: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem 
          button 
          key={item.text} 
          component={Link} 
          to={item.href}
          selected={location.pathname === item.href}
          onClick={handleDrawerToggle}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="sticky" sx={styles.appBar} component={motion.nav}>
      <Toolbar>
        <Typography 
          variant="h6" 
          component={Link} 
          to="/" 
          sx={styles.logo}
        >
          EduSphere
        </Typography>

        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label={t('nav.openMenu')}
            edge="start"
            onClick={handleDrawerToggle}
            sx={styles.menuButton}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={styles.navItems}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component={Link}
                to={item.href}
                sx={{
                  ...styles.navButton,
                  ...(location.pathname === item.href && styles.activeNavButton),
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        )}

        <Select
          value={i18n.language}
          onChange={(e) => changeLanguage(e.target.value)}
          sx={styles.languageSelect}
          variant="standard"
        >
          <MenuItem value="en">EN</MenuItem>
          <MenuItem value="fr">FR</MenuItem>
          <MenuItem value="ar">AR</MenuItem>
        </Select>
      </Toolbar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={styles.drawer}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

const styles = {
  appBar: {
    backgroundColor: 'background.paper',
    color: 'text.primary',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  logo: {
    flexGrow: 1,
    fontWeight: 700,
    textDecoration: 'none',
    color: 'inherit',
  },
  menuButton: {
    display: { sm: 'none' },
  },
  navItems: {
    display: 'flex',
    alignItems: 'center',
  },
  navButton: {
    mx: 1,
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.04)',
    },
  },
  activeNavButton: {
    borderBottom: '2px solid',
    borderColor: 'primary.main',
  },
  languageSelect: {
    mx: 2,
    color: 'inherit',
    '& .MuiSelect-icon': {
      color: 'inherit',
    },
  },
  drawer: {
    display: { xs: 'block', sm: 'none' },
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: 240,
    },
  },
};

export default Navigation;
