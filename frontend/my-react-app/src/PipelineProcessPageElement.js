import React, { useState, useEffect, useRef } from 'react';
import './StructureInstanceTable.css'; // Import the CSS file for styling
import { useDarkMode } from './DarkModeContext'; // Import the DarkModeContext
import DeploymentTable from './DeploymentTable'

const PrototypeSideMenu = ({ handlePipelineInstanceSelection, sheetTitles, onSheetSelect, sheetData, xlsxTitle, dataStore, handleSelectedSheet, schemaConfigSelected }) => {


 return (
   <div className="elementTitle11">Processes / Pipelines


   <div className='processTablesWrapper2'>
   <table className='xlsx-table2'>
   <tr><th><td>Report ID</td></th><th><td>Ab Co BalanceSheet</td></th></tr>
   <tr><td>Process ID</td><td>URI View and Edit Deployment</td></tr>
   <tr><td>Domain</td><td>abco.co/report/BalanceSheet</td></tr>
   <tr><td>Credentials</td><td>AuthLinkConfig1</td></tr>
   <tr><td>TTL</td><td>80000000</td></tr>
   </table>

   <table className='xlsx-table2'>
   <tr><th><td>Report ID</td></th><th><td>Ab Co BalanceSheet</td></th></tr>
   <tr><td>Process ID</td><td>XBRL Verification</td></tr>
   <tr><td>Domain</td><td>abco.co/report/BalanceSheet.xbri</td></tr>
   <tr><td>Credentials</td><td></td></tr>
   <tr><td>TTL</td><td>80000000</td></tr>
   </table>

   <table className='xlsx-table2'>
   <tr><th><td>Report ID</td></th><th><td>Ab Co BalanceSheet</td></th></tr>
   <tr><td>Process ID</td><td>XBRL Verification</td></tr>
   <tr><td>Domain</td><td>abco.co/report/BalanceSheet.xbri</td></tr>
   <tr><td>Credentials</td><td></td></tr>
   <tr><td>TTL</td><td>80000000</td></tr>
   </table>

   </div>

   <div className='balance-sheet2'>

      <DeploymentTable />
     </div>
     </div>
   );
};

export default PrototypeSideMenu;
