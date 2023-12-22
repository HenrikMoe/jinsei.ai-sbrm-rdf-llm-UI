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
     <div className="error-log-table">
       <h2 className='error-log'>Notification Log</h2>
       <table className='xlsx-table6'>
         <thead>
           <tr>
             <th>ID</th>
             <th>Error Type</th>
             <th>Description</th>
             <th>Timestamp</th>
             <th>Module</th>
             <th>Action</th>
             <th>Details</th>
           </tr>
         </thead>
         <tbody>
         <tr>
           <td>1</td>
           <td>Report Module Notification</td>
           <td>Report module detected: "Your reports' facts don't add up, particularly the net assets are higher than the total equity in Rule 2 and Fact 12."</td>
           <td>2023-01-08 09:45:30</td>
           <td>Report Module</td>
           <td>Alert</td>
           <td>Flagging a discrepancy in the user's reports for further attention.</td>
         </tr>

         <tr>
  <td>2</td>
  <td>Report Module Notification</td>
  <td>Report module status: "Report approval pending for the latest financial summary. Review and approve to finalize."</td>
  <td>2023-01-12 14:40:30</td>
  <td>Report Module</td>
  <td>Information</td>
  <td>Notifying about the pending approval status of the latest financial summary report.</td>
</tr>

<tr>
  <td>3</td>
  <td>Report Module Notification</td>
  <td>Report module identified: "Data anomaly detected in Rule 5. Please review the data sources for accuracy."</td>
  <td>2023-01-11 08:55:15</td>
  <td>Report Module</td>
  <td>Warning</td>
  <td>Notifying about a potential data anomaly in Rule 5 of the user's reports.</td>
</tr>


         <tr>
     <td>4</td>
     <td>Ontology Module Report</td>
     <td>Ontology module update: "Mapping completed successfully for imported data. Ready for report generation."</td>
     <td>2023-01-13 09:20:40</td>
     <td>Ontology Module</td>
     <td>Success</td>
     <td>Confirming the successful completion of ontology mapping for imported data.</td>
   </tr>

   <tr>
<td>5</td>
<td>Ontology Module Report</td>
<td>Ontology module alert: "Missing entities detected during data import. Check ontology mapping for completeness."</td>
<td>2023-01-14 12:15:25</td>
<td>Ontology Module</td>
<td>Warning</td>
<td>Providing a warning about missing entities during the ontology mapping process.</td>
</tr>

         </tbody>
       </table>
     </div>


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
     {chatAnswer ? <div className="elementTitle9">Jinsei.ai Chat: {chatAnswer}</div> :
     <div></div>}



       </div>

       <div className='balance-sheet4'>
       <div className='element-status-wrap'>

       <div className='status-element'>
       <div className='elementTitle20'>Local Derived SBRM-SFAC6 Report </div>
       <img className='statusImage' src={`${process.env.PUBLIC_URL}/notWorkingStatus.png`} />
       <div className='elementTitle20'>Down: 1: [Audit Process] Fact Instantiaion + Rule Verification </div>
       <div className='elementTitle20'>Elements: 1, 19, 2345</div>

       <div className='table-button2'>Inspect</div>

       </div>

       <div className='status-element'>
       <div className='elementTitle20'>Deployed Report HTML Host 1 Net Cash Flow</div>

       <img className='statusImage' src={`${process.env.PUBLIC_URL}/workingStatus1.png`} />
       <div className='elementTitle20'>Available at: https://jinsei.ai/xvbawr86vz</div>
       <div className='elementTitle20'>Authtication Group: 1</div>
       <div className='elementTitle20'>Editable, Auto-Save</div>

       <div className='table-button2'>Inspect</div>
      </div>
      <div className='status-element'>
      <div className='elementTitle20'>SEC Upload</div>
      <img className='statusImage' src={`${process.env.PUBLIC_URL}/workingStatus1.png`} />
      <div className='elementTitle20'>Scheduled for: 12/29/2023</div>
      <div className='elementTitle20'>Formats: XBRL, xbri</div>
      <div className='elementTitle20'>Auth Group 1</div>

      <div className='elementTitle20'>Instances: Local Derived Custom SFAC6-SBRM (All Sheets) & Deployed Report HTML Host 1</div>


      <div className='table-button2'>Inspect</div>

      </div>
      <div className='status-element'>
      <div className='elementTitle20'>Ontology Modeling From Upload</div>

      <img className='statusImage' src={`${process.env.PUBLIC_URL}/workingStatus1.png`} />
      <div className='elementTitle20'>Model: ACTUS</div>
      <div className='elementTitle20'>Upload uri: https://Abco.co/specialcsvRoute </div>
      <div className='elementTitle20'>Entity 1</div>

      <div className='table-button2'>Inspect</div>
     </div>
         <div className='status-element'>
         <div className='elementTitle20'>Shock Test 1</div>

         <img className='statusImage' src={`${process.env.PUBLIC_URL}/workingStatus1.png`} />
         <div className='elementTitle20'>Instance: ACTUS Mapping</div>
         <div className='elementTitle20'>Shock Test Parameters: Oil and Gas Price Collapse </div>
         <div className='elementTitle20'>Entity 1</div>

         <div className='table-button2'>Inspect</div>
        </div>


      <div className='status-element'>
      <div className='elementTitle20'>Deployed Report HTML Host 2 Net Assets</div>

      <img className='statusImage' src={`${process.env.PUBLIC_URL}/workingStatus1.png`} />
      <div className='elementTitle20'>Available at: https://jinsei.ai/xvzzwr86vz</div>
      <div className='elementTitle20'>Authtication Group: 1</div>
      <div className='elementTitle20'>Editable, Auto-Save</div>

      <div className='table-button2'>Inspect</div>
     </div>


     <div className='status-element'>
     <div className='elementTitle20'>Deployed Report HTML Host 3 Equity Changes</div>

     <img className='statusImage' src={`${process.env.PUBLIC_URL}/workingStatus1.png`} />
     <div className='elementTitle20'>Available at: https://jinsei.ai/xvzzwr15vz</div>
     <div className='elementTitle20'>Authtication Group: 1</div>
     <div className='elementTitle20'>Editable, Auto-Save</div>

     <div className='table-button2'>Inspect</div>
    </div>





       </div>
       </div>
       </div> </div>}


       </div>
   );
};

export default PrototypeSideMenu;
