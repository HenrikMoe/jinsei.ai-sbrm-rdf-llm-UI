import React, { useState, useEffect, useRef } from 'react';
import './StructureInstanceTable.css'; // Import the CSS file for styling
import { useDarkMode } from './DarkModeContext'; // Import the DarkModeContext
import DeploymentTable from './DeploymentTable'
import ChatGBT from './ChatGBT'

const PrototypeSideMenu = ({ handle, sheetTitles, onSheetSelect, sheetData, xlsxTitle, dataStore, handleSelectedSheet, schemaConfigSelected }) => {

  // <DeploymentTable />

 return (

     <div className="elementTitle9">AI Q & A

     <div className='balance-sheet2'>

        <div>Co-pilot Q & A</div>
        <ChatGBT />
       </div>
       </div>
   );
};

export default PrototypeSideMenu;
