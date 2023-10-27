// PrototypeHeader.js
import React, { useState } from 'react';
import './PrototypeHeader.css';
import image from './favicon.png';
import { useDarkMode } from './DarkModeContext';
import Popup from './Popup';
import Upload from './Upload';
import Delete from './Delete'
import Project from './Project'
import Transform from './Transform'
import Pipeline from './Pipeline'
import Files from './Files'
import Projects from './Projects'
import Model from './Model'
//<Project onFileUpload={onFileUpload}/>
// <Upload onFileUpload={onFileUpload}/>
// <Delete onFileUpload={onFileUpload} />

const PrototypeHeader = ({onFileUpload, dataStore}) => {
  const { isDarkMode } = useDarkMode();
  const [xlsxData, setXLSXData] = useState(null);
console.log(onFileUpload)






  return (

    <div className={`prototype-header ${isDarkMode ? 'dark-mode' : ''}`}>
      <img className={`header-image ${isDarkMode ? 'dark-mode' : ''}`} src={image} alt="My Image" />
      <div className='titlez'>Luciano - git:main | version 0.108</div>

      <div className='button-wrap'>
        <Model />
        <Popup onFileUpload={onFileUpload} />
        <Delete  dataStore={dataStore} />
        <Upload />
        <Transform />
        <Pipeline />

      </div>
      <div className='importButton1'>Share</div>
      <div className='container'>
       <Projects /></div>
      <div className='container'>
      <Files /></div>
      <div className='importButton1'>New</div>

    </div>
  );
};

export default PrototypeHeader;
