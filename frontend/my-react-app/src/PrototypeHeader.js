// PrototypeHeader.js
import React, { useState } from 'react';
import './PrototypeHeader.css';
import image from './favicon.png';
import { useDarkMode } from './DarkModeContext';
import Popup from './Popup';
import Upload from './Upload';
import Delete from './Delete'
import Project from './Project'
//<Project onFileUpload={onFileUpload}/>
// <Upload onFileUpload={onFileUpload}/>
// <Delete onFileUpload={onFileUpload} />

const PrototypeHeader = ({onFileUpload}) => {
  const { isDarkMode } = useDarkMode();
  const [xlsxData, setXLSXData] = useState(null);
console.log(onFileUpload)

  return (
    <div className={`prototype-header ${isDarkMode ? 'dark-mode' : ''}`}>
      <img className={`header-image ${isDarkMode ? 'dark-mode' : ''}`} src={image} alt="My Image" />
      <div className='title'>Luciano - git:main | version 0.78</div>
      <div className='button-wrap'>

        <Popup onFileUpload={onFileUpload} />
        <Upload />
        <Delete  />

      </div>
    </div>
  );
};

export default PrototypeHeader;
