// Popup.js
import React from 'react';
import './Popup.css';
import { useDarkMode } from './DarkModeContext';
import XLSXFileHandler from './XLSXFileHandler';

const Popup = ({ onFileUpload }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`popup-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <XLSXFileHandler onFileUpload={onFileUpload} />
    </div>
  );
};

export default Popup;
