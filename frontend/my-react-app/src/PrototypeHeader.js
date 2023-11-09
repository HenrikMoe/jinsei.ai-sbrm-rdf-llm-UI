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
import Modal from './Modal'
import ProcessModal from './ProcessModal'
//<Project onFileUpload={onFileUpload}/>
// <Upload onFileUpload={onFileUpload}/>
// <Delete onFileUpload={onFileUpload} />

const PrototypeHeader = ({onFileUpload, dataStore}) => {
  const { isDarkMode } = useDarkMode();
  const [xlsxData, setXLSXData] = useState(null);
console.log(onFileUpload)


// <Transform />
// <Pipeline />


// <div className='button-wrap2'>
// <ProcessModal />
// <Modal />
// </div>
  return (

    <div className={`prototype-header ${isDarkMode ? 'dark-mode' : ''}`}>
      <img className={`header-image ${isDarkMode ? 'dark-mode' : ''}`} src={image} alt="My Image" />


      <div className='button-wrap2'>
        <div className='container'>
         <Projects /></div>
        <div className='container'>
        <Files /></div>
        </div>

        <div className='button-wrap'>
        <Model  dataStore={dataStore}/>
        <Popup onFileUpload={onFileUpload} />
        <Delete  dataStore={dataStore} />
        <Upload />
      </div>



      <div className='button-wrap'>
      <div className='popup-container'>
      <div className='dropdown-button'>Share</div></div>
      <div className='popup-container'>
      <div className='dropdown-button'>New</div></div>
      </div>






      <div className='titlez'>Luciano - git:main | version 0.184</div>


    </div>
  );
};

export default PrototypeHeader;
