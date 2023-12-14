import React, { useState, useEffect, useRef } from 'react';
import './StructureInstanceTable.css'; // Import the CSS file for styling
import { useDarkMode } from './DarkModeContext'; // Import the DarkModeContext
import DeploymentTable from './DeploymentTable'

const PrototypeSideMenu = ({ handlePipelineInstanceSelection, sheetTitles, onSheetSelect, sheetData, xlsxTitle, dataStore, handleSelectedSheet, schemaConfigSelected }) => {

  // <DeploymentTable />

 return (

     <div className="elementTitle10">Maps

     <div className='balance-sheet2'>


    <div className='notes'>Ontology Upoad </div>
    <div className='notes'>Model: LEI  </div>
    <div className='notes'>Model: Fibo </div>
    <div className='notes'>Model: ACTUS </div>

    <div className='notes'>Element: ACTUS </div>


    <div className='notes2'>Konva of revenue operations, basically product terms sheets with quantity data. Multi-brnach companies - the ai will train to aggreagate the product and quantity functions of revenue for these companies and likewise with costs into the standard visualization. </div>
   </div>

       </div>
   );
};

export default PrototypeSideMenu;
