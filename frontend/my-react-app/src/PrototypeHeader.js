// PrototypeHeader.js
import React, { useState } from 'react';
import './PrototypeHeader.css';
import image from './favicon.png';
import { useDarkMode } from './DarkModeContext';
import Popup from './Popup';
import Upload from './Upload';

const PrototypeHeader = ({onFileUpload}) => {
  const { isDarkMode } = useDarkMode();
  const [xlsxData, setXLSXData] = useState(null);


  return (
    <div className={`prototype-header ${isDarkMode ? 'dark-mode' : ''}`}>
      <img className={`header-image ${isDarkMode ? 'dark-mode' : ''}`} src={image} alt="My Image" />
      <div className='title'>Luciano - git:main | version 0.59</div>
      <div className='button-wrap'>
        <Popup onFileUpload={onFileUpload} />
        <Upload />
      </div>
    </div>
  );
};

export default PrototypeHeader;
