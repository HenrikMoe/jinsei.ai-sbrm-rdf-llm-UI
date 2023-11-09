import React, { useState, useEffect, useRef } from 'react';
import './StructureInstanceTable.css'; // Import the CSS file for styling
import { useDarkMode } from './DarkModeContext'; // Import the DarkModeContext
import DeploymentTable from './DeploymentTable'

const PrototypeSideMenu = ({ handlePipelineInstanceSelection, sheetTitles, onSheetSelect, sheetData, xlsxTitle, dataStore, handleSelectedSheet, schemaConfigSelected }) => {


 return (
   <div className="elementTitle9">Processes / Pipelines

   <div className='balance-sheet'>

      <DeploymentTable />
     </div>
     </div>
   );
};

export default PrototypeSideMenu;
