// Popup.js
import React from 'react';
import './Upload.css';
import { useDarkMode } from './DarkModeContext';

const Upload = ({ updateForm }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`popup-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="updateButton">Update XLSX</div>
    </div>
  );
};

export default Upload;
