import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomePage } from './pages/homepage';
import './index.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './utils/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  </React.StrictMode>
);