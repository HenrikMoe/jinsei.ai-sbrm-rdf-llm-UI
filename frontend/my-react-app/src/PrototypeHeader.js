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
//<Project onFileUpload={onFileUpload}/>
// <Upload onFileUpload={onFileUpload}/>
// <Delete onFileUpload={onFileUpload} />

const PrototypeHeader = ({onFileUpload}) => {
  const { isDarkMode } = useDarkMode();
  const [xlsxData, setXLSXData] = useState(null);
console.log(onFileUpload)

const [title, setTitle] = useState('File 1'); // Initial title
const [org, setOrg] = useState('AB Co'); // Initial title


const handleTitleChange = (event) => {
  setTitle(event.target.value);
};

const handleOrgChange = (event) => {
  setOrg(event.target.value);
};

  return (
    <div className={`prototype-header ${isDarkMode ? 'dark-mode' : ''}`}>
      <img className={`header-image ${isDarkMode ? 'dark-mode' : ''}`} src={image} alt="My Image" />
      <div className='title'>Luciano - git:main | version 0.80</div>

      <div className='button-wrap'>

        <Popup onFileUpload={onFileUpload} />
        <Upload />
        <Transform />
        <Delete  />
        <Pipeline />

      </div>
      <div>Share</div>
      <div> <input
        type="text"
        className="title-input"
        value={org}
        onChange={handleOrgChange}
      /> Org</div>
      <div> <input
        type="text"
        className="title-input"
        value={title}
        onChange={handleTitleChange}
      /> FileTree</div>

    </div>
  );
};

export default PrototypeHeader;
