import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App';
    import { I18nextProvider } from 'react-i18next';
    import i18n from './i18n';
    import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

    const theme = createTheme({
      palette: {
        primary: {
          main: '#007BFF',
        },
        secondary: {
          main: '#FF7F50',
        },
        background: {
          default: '#F8F9FA',
        },
        text: {
          primary: '#212529',
        },
      },
      typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
          fontFamily: '"Poppins", "Lato", sans-serif',
        },
        h2: {
          fontFamily: '"Poppins", "Lato", sans-serif',
        },
        h3: {
          fontFamily: '"Poppins", "Lato", sans-serif',
        },
        h4: {
          fontFamily: '"Poppins", "Lato", sans-serif',
        },
        h5: {
          fontFamily: '"Poppins", "Lato", sans-serif',
        },
        h6: {
          fontFamily: '"Poppins", "Lato", sans-serif',
        },
      },
    });

    ReactDOM.createRoot(document.getElementById('root')).render(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </ThemeProvider>
    );
