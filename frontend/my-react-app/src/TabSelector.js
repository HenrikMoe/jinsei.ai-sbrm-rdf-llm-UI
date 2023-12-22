// PrototypeHeader.js
import React, { useState, useEffect } from 'react';
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

const PrototypeHeader = ({onFileUpload, dataStore, handleTabSelection, structureInstanceSelected, schemaConfigSelected}) => {
  const { isDarkMode } = useDarkMode();
  const [xlsxData, setXLSXData] = useState(null);
console.log(onFileUpload)


// <Transform />
// <Pipeline />
//
// <div className='button-wrap'>
//   <div className='container'>
//    <Projects /></div>
//   <div className='container'>
//   <Files /></div>
//   <Model  dataStore={dataStore}/>
//   <Popup onFileUpload={onFileUpload} />
//   <Delete  dataStore={dataStore} />
//   <Upload />
// </div>
//
// <div className='button-wrap2'>
// <ProcessModal />
// <Modal />
// </div>
//
// <div className='button-wrap2'>
// <div className='popup-container'>
// <div className='dropdown-button'>Share</div></div>
// <div className='popup-container'>
// <div className='dropdown-button'>New</div></div>
// </div>

const [tabClicked, setTabClicked] = useState(null);


useEffect(() => {
  // Set the default tab to 'Configuration' if no tab has been selected
  if (structureInstanceSelected) {
    setTabClicked('Structure')
  }
}, [structureInstanceSelected]);


useEffect(() => {
  // Set the default tab to 'Configuration' if no tab has been selected
  if (schemaConfigSelected) {
    setTabClicked('Schema')
  }
}, [schemaConfigSelected]);

const handleTabClick = (selection)=>{
  handleTabSelection(selection)
  setTabClicked(selection)
}

useEffect(() => {
  // Set the default tab to 'Configuration' if no tab has been selected
  if (tabClicked === null) {
    handleTabSelection('Schema');
    setTabClicked('Schema');
  }
}, [tabClicked, handleTabSelection]);

// <div className='title9'>Tab:</div>
// <div className='title8'>Workspace</div>



  return (

    <div className={`prototype-header2 ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className='button-wrap3'>
      <div className='title9'>Control Center:</div>

     <div
       className={`dropdown-button9 ${tabClicked === 'AI' ? 'selected-tab' : ''}`}
       onClick={() => handleTabClick('AI')}
     >
       AI State Summary
     </div>
     <div className="button-group">

     <div
       className={`dropdown-button3 ${tabClicked === 'Schema' ? 'selected-tab' : ''}`}
       onClick={() => handleTabClick('Schema')}
     >
       Configuration
     </div>
     <div
       className={`dropdown-button2 ${tabClicked === 'Structure' ? 'selected-tab' : ''}`}
       onClick={() => handleTabClick('Structure')}
     >
       Report
     </div>
   </div>

   <div
     className={`dropdown-button8 ${tabClicked === 'Pipeline' ? 'selected-tab' : ''}`}
     onClick={() => handleTabClick('Pipeline')}
   >
     Process Management
   </div>
   <div className="button-group2">

   <div
     className={`dropdown-button3 ${tabClicked === 'Canvas' ? 'selected-tab' : ''}`}
     onClick={() => handleTabClick('Canvas')}
   >
     Ontologies
   </div>
   </div>
   <div
     className={`dropdown-button8 ${tabClicked === 'MarketPlace' ? 'selected-tab' : ''}`}
     onClick={() => handleTabClick('MarketPlace')}
   >
     MarketPlace
   </div>
   <div
     className={`dropdown-button2 ${tabClicked === 'Documentation' ? 'selected-tab' : ''}`}
     onClick={() => handleTabClick('Documentation')}
   >
     Documentation
   </div>
      </div>








    </div>
  );
};

export default PrototypeHeader;
