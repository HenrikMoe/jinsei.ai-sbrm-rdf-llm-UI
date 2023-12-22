import React, { useState, useEffect, useRef } from 'react';
import './StructureInstanceTable.css'; // Import the CSS file for styling
import { useDarkMode } from './DarkModeContext'; // Import the DarkModeContext
import DeploymentTable from './DeploymentTable'
import ChatGBT from './ChatGBT'
import { gpt35turbo, gpt35turboTest2d } from './frontendApi'; // Import the frontend API


const PrototypeSideMenu = ({ summaryLogSheet, handle, sheetTitles, onSheetSelect, sheetData, xlsxTitle, dataStore, handleSelectedSheet, schemaConfigSelected }) => {

  // <DeploymentTable />

  // <div className="elementTitle21">Co-pilot Q & A</div>
  //
  //    <div className="elementTitle9">Co-pilot Q & A</div>
  //    <div className="elementTitle9">Current LLM: PlaceHolder </div>
  //    <form className="chat-form" onSubmit={handleSubmit}>
  //      <label htmlFor="input">Test Prompt Trained Zone 1:</label>
  //      <input
  //        type="text"
  //        id="input"
  //
  //      />
  //      <button type="submit">Go</button>
  //    </form>
  //    <form className="chat-form" onSubmit={handleSubmit2}>
  //      <label htmlFor="input">Test Chat Zone 2:</label>
  //      <input
  //        type="text"
  //        id="input"
  //
  //      />
  //      <button type="submit">Go</button>
  //    </form>
  //
  //    <ChatGBT />
  //   </div>
  const [chatAnswer, setChatAnswer] = useState('')

  const [overlaidModelName, setOverlaidModelName] = useState('')

  // useEffect(()=>{
  //   if(dataStore.overlaidModelName){
  //     setOverlaidModelName(dataStore.overlaidModelName)
  //   }
  // }, [dataStore])


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('gpt35ruboresp')
    const userInput = document.getElementById('input').value;
    console.log('User Input:', userInput);

    const chatResponse = await gpt35turbo(userInput);
    console.log('gpt35ruboresp')
    console.log(chatResponse)
    console.log(chatResponse.data.choices[0].message.content)
    setChatAnswer(chatResponse.data.choices[0].message.content)
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();

  const chatResponse = await gpt35turboTest2d();
  };

 return (

     <div>

     {summaryLogSheet ? <div className="elementTitle19">Notifications<div className='balance-sheet3'>
      <table className='xlsx-table6'>
      <tr><th><td>1</td><td>test</td><td>test</td><td>test</td><td>test</td><td>test</td><td><div className='table-button2'>Test</div></td></th></tr>
      <tr><th><td>2</td><td>test</td><td>test</td><td>test</td><td>test</td><td>test</td><td><div className='table-button2'>Test</div></td></th></tr>
      <tr><th><td>3</td><td>test</td><td>test</td><td>test</td><td>test</td><td>test</td><td><div className='table-button2'>Test</div></td></th></tr>
      <tr><th><td>4</td><td>test</td><td>test</td><td>test</td><td>test</td><td>test</td><td><div className='table-button2'>Test</div></td></th></tr>
      <tr><th><td>5</td><td>test</td><td>test</td><td>test</td><td>test</td><td>test</td><td><div className='table-button2'>Test</div></td></th></tr>
      </table>

     </div></div>:
<div className="elementTitle19">State Summary
     <div className='stateSummaryWrap'>
     <div className='balance-sheet2'>
     <div className="elementTitle21">Jinsei.ai Chat</div>

     <div className="elementTitle9">Ask something like,</div>
     <div className="elementTitle9">"Is my Net Cash Flow statement complete and filed with the SEC?"</div>
     <div className="elementTitle9">or</div>

     <div className="elementTitle9">"How can I better profile my corporation for disclosure?"</div>

     <form className="chat-form" onSubmit={handleSubmit}>
       <label htmlFor="input" ></label>
       <input
       placeholder="Ask About Your Jinsei File"
         type="text"
         id="input"

       />
       <button type="submit">Go</button>
     </form>
     {chatAnswer ? <div className="elementTitle9">{chatAnswer}</div> :
     <div></div>}



       </div>

       <div className='balance-sheet4'>
       <div className='element-status-wrap'>

       <div className='status-element'>
       <div className='elementTitle20'>SBRM SFAC6 Status</div>
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
       </div> </div>}


       </div>
   );
};

export default PrototypeSideMenu;
