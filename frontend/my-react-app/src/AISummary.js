import React, { useState, useEffect, useRef } from 'react';
import './StructureInstanceTable.css'; // Import the CSS file for styling
import { useDarkMode } from './DarkModeContext'; // Import the DarkModeContext
import DeploymentTable from './DeploymentTable'
import ChatGBT from './ChatGBT'
import { gpt35turbo, gpt35turboTest2d } from './frontendApi'; // Import the frontend API


const PrototypeSideMenu = ({ handle, sheetTitles, onSheetSelect, sheetData, xlsxTitle, dataStore, handleSelectedSheet, schemaConfigSelected }) => {

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

     <div className="elementTitle9">AI Q & A

     <div className='balance-sheet2'>

        <div>Co-pilot Q & A</div>
        <div>Current LLM: </div>
        <div>Upload File</div>
        <form className="chat-form" onSubmit={handleSubmit}>
          <label htmlFor="input">GBT3.5turbo:</label>
          <input
            type="text"
            id="input"

          />
          <button type="submit">Go</button>
        </form>
        <form className="chat-form" onSubmit={handleSubmit2}>
          <label htmlFor="input">GBT3.5turbo:</label>
          <input
            type="text"
            id="input"

          />
          <button type="submit">Go</button>
        </form>
        <div>Use Overlay</div>
        <div> “Is proof:Assets part of the balance sheet”</div>
        <div>Use Overlay</div>
        <div>“Please give me a list of the specializations of “proof:NetCashFlow”.</div>
        <ChatGBT />
       </div>
       </div>
   );
};

export default PrototypeSideMenu;
