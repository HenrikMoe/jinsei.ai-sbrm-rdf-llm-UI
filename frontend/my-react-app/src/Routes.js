// Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Use 'Routes' and 'Route'

import Homepage from './Homepage';
import Prototype from './Prototype';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} /> {/* Use 'element' prop */}
      <Route path="/prototype" element={<Prototype />} /> {/* Use 'element' prop */}
    </Routes>
  );
};

export default AppRoutes;
