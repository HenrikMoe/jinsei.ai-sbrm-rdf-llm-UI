// PrototypeHeader.js
import React, { useState } from 'react';
import './PrototypeHeader.css';
import image from './favicon.png';
import { useDarkMode } from './DarkModeContext';
import Popup from './Popup';

const PrototypeHeader = ({onFileUpload}) => {
  const { isDarkMode } = useDarkMode();
  const [xlsxData, setXLSXData] = useState(null);


  return (
    <div className={`prototype-header ${isDarkMode ? 'dark-mode' : ''}`}>
      <img className={`header-image ${isDarkMode ? 'dark-mode' : ''}`} src={image} alt="My Image" />
      <h2>Luciano - git:main | version 0.59</h2>
      <Popup onFileUpload={onFileUpload} />
      {/* Other components for rendering and editing */}
    </div>
  );
};

export default PrototypeHeader;
