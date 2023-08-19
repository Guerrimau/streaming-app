import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { HomePage } from './pages/homepage';
import { LoginPage } from './pages/login';
import { theme } from './utils/theme';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-xpih3wy6bfwa6fzy.us.auth0.com"
      clientId="jzowyFweyiH3eGtxfJrlhtdLoK6kVpD7"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LoginPage />
      </ThemeProvider>
    </Auth0Provider>
  </React.StrictMode>
);