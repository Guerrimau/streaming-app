import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { HomePage } from './pages/homepage';
import { LoginPage } from './pages/login';
import { theme } from './utils/theme';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './components/protected-route';
import { Auth0ProviderWithNavigate } from './context/auth-0-provider-with-history';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route index element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
            <Route path="login" element={<LoginPage />} />
          </Routes>
        </ThemeProvider>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>
);