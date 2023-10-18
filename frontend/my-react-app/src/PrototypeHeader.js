import React from 'react';
import Popup from './Popup';
import './PrototypeHeader.css'; // Import the CSS file for styling
import image from './favicon.png'; // Import the image
import { useDarkMode } from './DarkModeContext'; // Import the DarkModeContext


const PrototypeHeader = () => {

  const { isDarkMode } = useDarkMode(); // Get the dark mode status

  return (
    <div className={`prototype-header ${isDarkMode ? 'dark-mode' : ''}`}>
      <img className={`header-image ${isDarkMode ? 'dark-mode' : ''}`} src={image} alt="My Image" />
      <h2>Atlas - main|version 0.49 </h2>
      <Popup />
    </div>
  );
};

export default PrototypeHeader;
