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

     <div className="elementTitle19">AI Q & A

     {summaryLogSheet ? <div></div>:<div className='balance-sheet2'>

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
       </div>}


       </div>
   );
};

export default PrototypeSideMenu;
