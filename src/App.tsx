/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Reviews } from './pages/Reviews';
import { Location } from './pages/Location';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="location" element={<Location />} />
        </Routes>
      </Layout>
      <WhatsAppButton />
    </>
  );
}
