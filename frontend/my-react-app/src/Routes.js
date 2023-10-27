import React, { useEffect, useState } from 'react'; // Import useEffect
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'; // Import Outlet
import Header from './Header'; // Import the Header component
import Homepage from './Homepage';
import Prototype from './Prototype';
import PrivacyPolicy from './PrivacyPolicy'; // Import PrivacyPolicy component
import TermsOfService from './TermOfService'; // Import TermsOfService component
import Timeline from './Timeline'; // Import TermsOfService component
import About from './About'; // Import TermsOfService component
import Footer from './Footer'; // Replace with the actual path to your Footer component file
import { DarkModeProvider } from './DarkModeContext';
import { DataStoreProvider } from './DataStore'; // Import the DataStoreProvider
import ChatGBT from './ChatGBT';

const AppRoutes = () => {
  const location = useLocation(); // Get the current location


  useEffect(() => {
    document.title = 'Jinsei.ai - Standards Based Taxonomy GUI'; // Change this title
  }, []);

  return (
    <div>
    <DarkModeProvider>
    <DataStoreProvider>
      <Header currentRoute={location.pathname} /> {/* Include the Header component */}
      <ChatGBT />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/prototype" element={<Prototype />} />
        <Route path="/privacy" element={<PrivacyPolicy />} /> {/* Add PrivacyPolicy component */}
        <Route path="/tos" element={<TermsOfService />} /> {/* Add TermsOfService component */}
        <Route path="/timeline" element={<Timeline />} /> {/* Add TermsOfService component */}
        <Route path="/about" element={<About />} /> {/* Add TermsOfService component */}
      </Routes>
      <Footer /> {/* Include the Header component */}
      </DataStoreProvider>
    </DarkModeProvider>
    </div>
  );
};

export default AppRoutes;
