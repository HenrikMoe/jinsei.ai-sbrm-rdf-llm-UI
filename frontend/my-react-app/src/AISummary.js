import React, { useState, useEffect, useRef } from 'react';
import './StructureInstanceTable.css'; // Import the CSS file for styling
import { useDarkMode } from './DarkModeContext'; // Import the DarkModeContext
import DeploymentTable from './DeploymentTable'
import ChatGBT from './ChatGBT'
import { gpt35turbo, gpt35turboTest2d } from './frontendApi'; // Import the frontend API


const PrototypeSideMenu = ({ summaryLogSheet, handle, sheetTitles, onSheetSelect, sheetData, xlsxTitle, dataStore, handleSelectedSheet, schemaConfigSelected }) => {

  // <DeploymentTable />

  const handleSubmit = async (e) => {
    e.preventDefault();

  const chatResponse = await gpt35turbo();

  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();

  const chatResponse = await gpt35turboTest2d();

  };

 return (

     <div className="elementTitle19">State Summary

     {summaryLogSheet ? <div className='balance-sheet3'>
      <table className='xlsx-table6'>
      <tr><th><td>test</td><td>test</td><td>test</td></th></tr>
      <tr><th><td>test</td><td>test</td><td>test</td></th></tr>
      <tr><th><td>test</td><td>test</td><td>test</td></th></tr>
      <tr><th><td>test</td><td>test</td><td>test</td></th></tr>
      <tr><th><td>test</td><td>test</td><td>test</td></th></tr>
      </table>

     </div>:

     <div className='stateSummaryWrap'>
     <div className='balance-sheet2'>
        <div className="elementTitle9">Co-pilot Q & A</div>
        <div className="elementTitle9">Current LLM: PlaceHolder </div>
        <form className="chat-form" onSubmit={handleSubmit}>
          <label htmlFor="input">Test Prompt Trained Zone 1:</label>
          <input
            type="text"
            id="input"

          />
          <button type="submit">Go</button>
        </form>
        <form className="chat-form" onSubmit={handleSubmit2}>
          <label htmlFor="input">Test Chat Zone 2:</label>
          <input
            type="text"
            id="input"

          />
          <button type="submit">Go</button>
        </form>

        <ChatGBT />
       </div>
       <div className='balance-sheet4'>
       <div className='element-status-wrap'>

       <div className='status-element'>
       <div className='elementTitle20'>TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest</div>
       <img className='statusImage' src={`${process.env.PUBLIC_URL}/notWorkingStatus.png`} />
       <div className='elementTitle20'>Test</div>
       <div className='elementTitle20'>Test</div>

       </div>

       <div className='status-element'>
       <div className='elementTitle20'>test</div>

       <img className='statusImage' src={`${process.env.PUBLIC_URL}/workingStatus1.png`} />
       <div className='elementTitle20'>Test</div>
       <div className='elementTitle20'>Test</div>
       <div className='table-button2'>Test</div>
      </div>
      <div className='status-element'>
      <div className='elementTitle20'>TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest</div>
      <img className='statusImage' src={`${process.env.PUBLIC_URL}/notWorkingStatus.png`} />
      <div className='elementTitle20'>Test</div>
      <div className='elementTitle20'>Test</div>

      </div>

      <div className='status-element'>
      <div className='elementTitle20'>test</div>

      <img className='statusImage' src={`${process.env.PUBLIC_URL}/workingStatus1.png`} />
      <div className='elementTitle20'>Test</div>
      <div className='elementTitle20'>Test</div>
      <div className='table-button2'>Test</div>
     </div>
     <div className='status-element'>
     <div className='elementTitle20'>TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest</div>
     <img className='statusImage' src={`${process.env.PUBLIC_URL}/notWorkingStatus.png`} />
     <div className='elementTitle20'>Test</div>
     <div className='elementTitle20'>Test</div>

     </div>

     <div className='status-element'>
     <div className='elementTitle20'>test</div>

     <img className='statusImage' src={`${process.env.PUBLIC_URL}/workingStatus1.png`} />
     <div className='elementTitle20'>Test</div>
     <div className='elementTitle20'>Test</div>
     <div className='table-button2'>Test</div>
    </div>

    <div className='status-element'>
    <div className='elementTitle20'>TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest</div>
    <img className='statusImage' src={`${process.env.PUBLIC_URL}/notWorkingStatus.png`} />
    <div className='elementTitle20'>Test</div>
    <div className='elementTitle20'>Test</div>

    </div>

    <div className='status-element'>
    <div className='elementTitle20'>test</div>

    <img className='statusImage' src={`${process.env.PUBLIC_URL}/workingStatus1.png`} />
    <div className='elementTitle20'>Test</div>
    <div className='elementTitle20'>Test</div>
    <div className='table-button2'>Test</div>
   </div>

       </div>
       </div>
       </div>}


       </div>
   );
};

export default PrototypeSideMenu;
