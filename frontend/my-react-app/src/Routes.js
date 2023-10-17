// Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './Homepage';
import Prototype from './Prototype';
import PrivacyPolicy from './PrivacyPolicy'; // Import PrivacyPolicy component
import TermsOfService from './TermOfService'; // Import TermsOfService component

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/prototype" element={<Prototype />} />
      <Route path="/privacy" element={<PrivacyPolicy />} /> {/* Add PrivacyPolicy component */}
      <Route path="/tos" element={<TermsOfService />} /> {/* Add TermsOfService component */}
    </Routes>
  );
};

export default AppRoutes;
