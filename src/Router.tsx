import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { ROUTES } from './constants/routes';
import { Layout } from './components/layout/Layout/Layout';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};