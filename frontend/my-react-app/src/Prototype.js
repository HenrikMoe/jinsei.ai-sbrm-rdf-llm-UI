import React, { useState,  useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import PrototypeHeader from './PrototypeHeader';
import PrototypeSideMenu from './PrototypeSideMenu';
import './Prototype.css';
import { useAuthentication } from './AuthenticationContext';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { useDarkMode } from './DarkModeContext'; // Import the DarkModeContext
import XLSXSheetRenderer from './XLSXSheetRenderer'; // Import the new component
import * as XLSX from 'xlsx'; // Import the entire xlsx library
import { DataStoreProvider, useDataStore } from './DataStore'; // Import the DataStoreProvider
import DeploymentTable from './DeploymentTable'
import SubReports from './SubReports'
import SchemaConfigRenderer from './SchemaConfigRenderer'
import StructureInstanceRenderer from './StructureInstanceRenderer'
import PipelineMenu from './PipelineMenu'
import PipelineProcessPageElement from './PipelineProcessPageElement'
import CanvasSideMenu from './CanvasSideMenu'
import CanvasPageElement from './CanvasPageElement'
import TabSelector from './TabSelector'
import AISummary from './AISummary'
import Modal from './Modal'

import AISummarySideMenu from './AISummarySideMenu'

function Prototype({listLoginInfo}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAuthenticated, login, logout } = useAuthentication();
  const { isDarkMode } = useDarkMode(); // Get the dark mode status

  //const [firstSheetData, setFirstSheetData] = useState(null);
  //const [secondSheetData, setSecondSheetData] = useState(null);

  const [sheetTitles, setSheetTitles] = useState(null);

  const [sheetTitle, setSheetTitle] = useState(null);

  //LUCA
  const [schemaConfigSelected, setSchemaConfigSelected] = useState(true);
  const [structureInstanceSelected, setStructureInstanceSelected] = useState(null);


  const [selectedSheetData, setSelectedSheetData] = useState(null);
  const [workbook, setWorkbook] = useState(null);
  const [selectedSheet, setSelectedSheet] = useState(null);


  const handleSelectedSheet = (sheetTitle) => {
    setSelectedSheet(sheetTitle);
  };

  const [xlsxTitle, setxlsxTitle] = useState(null);

  const dataStore = useDataStore(); // Access dataStore from the context

  const [overlaidModel, setOverlaidModel] = useState(null);

  console.log('overlaycurrent')
  console.log(dataStore.overlaidModelName)

  useEffect(() => {
     console.log('DATASTORE');
     console.log(dataStore);
     setOverlaidModel(dataStore.overlaidModelName)

     console.log('datastoreoverlaidmodelsheet');
     console.log(dataStore.overlaidModelName);

     // Your additional side effects or logic based on dataStore changes

     // Make sure to include any dependencies that should trigger the effect
   }, [dataStore]); // Add any additional dependencies if needed


  const handleSheetSelect = (selectedSheetTitle) => {

    if (dataStore.overLaidModelSheet) {
      // Find the data of the selected sheet in the workbook
      //this is now showing the dited title
      console.log('newTitleDone')
      console.log(selectedSheetTitle)
      console.log(dataStore.overLaidModelSheet)
      console.log('newTitleDone')

      const selectedSheetData = XLSX.utils.sheet_to_json(dataStore.overLaidModelSheet.Sheets[selectedSheetTitle], { header: 1 });

      console.log(XLSX.utils.sheet_to_json(dataStore.overLaidModelSheet.Sheets[selectedSheetTitle], { header: 1 }))
      // Set the selected sheet's data in the state
      setSelectedSheetData(selectedSheetData);
      console.log(selectedSheetData)

      //const selectedSheetDataManagmentSystem = XLSX.utils.sheet_to_json(dataStore.workbook.Sheets[selectedSheetTitle], { header: 1 });
      //setSelectedXLSXDataTaxonomyItem(selectedSheetDataManagmentSystem)
    }
  };
  //
  // useEffect(()=>{
  //   if(dataStore.overLaidModelSheet){
  //     if (dataStore.overLaidModelSheet.length > 2) {
  //       // Find the data of the selected sheet in the workbook
  //       //this is now showing the dited title
  //       console.log('nahtitanasd')
  //       console.log(dataStore.overLaidModelSheet)
  //
  //       const selectedSheetData = dataStore.overLaidModelSheet
  //
  //       // Set the selected sheet's data in the state
  //       setSelectedSheetData(selectedSheetData);
  //       console.log(selectedSheetData)
  //
  //       //const selectedSheetDataManagmentSystem = XLSX.utils.sheet_to_json(dataStore.workbook.Sheets[selectedSheetTitle], { header: 1 });
  //       //setSelectedXLSXDataTaxonomyItem(selectedSheetDataManagmentSystem)
  //     }
  //   }
  //
  // }, [dataStore.overLaidModelSheet])





  const handleXLSXUpload = (workbook) => {

    //update this to populate everything into the datamanagemnet system

    //dataStore.addWorkbook(workbook)
    console.log('handlingfileupload')
    console.log(workbook);
    // Store the workbook in the state
    setWorkbook(workbook);

    //STORE THE WORKBOOK IN THE STATEMANAGEMTN
    dataStore.addWorkbook(workbook);
    dataStore.initializeDataTaxonomyXLSX()
    console.log('ADDED WORKBOOK TO DATASTORE')
    console.log(dataStore)



    // Extract the first sheet and pass it to the rendering parent component
    const firstSheetName = dataStore.workbookXLSX.SheetNames[0];
    const firstSheetData = XLSX.utils.sheet_to_json(dataStore.workbookXLSX.Sheets[firstSheetName], { header: 1 });
    //setFirstSheetData(firstSheetData);

    // Also store the sheet titles
    setSheetTitles(dataStore.workbookXLSX.SheetNames);

    // Set the selected sheet's data initially to the first sheet
    //setSelectedSheetData(firstSheetData);
    setxlsxTitle(dataStore.workbookXLSX.Props.Title)

  };


  const [count, setCount] = useState(0);

  console.log('PrototypeChange')
  console.log(sheetTitle)

  const handleOverlaidSelection = () =>{
    console.log('boogieiewww')
    console.log(dataStore.overlaidModelName)
    setOverlaidModel(dataStore.overlaidModelName)
    console.log(sheetTitle)

    if(sheetTitle){
    }
    else{
      console.log('settingsite')
      setSheetTitle('Terms')
    }
    //update dataStore addSemanticWorkbook and updateSemanticWorkbookSheet

  }



  console.log(sheetTitle)
  console.log(dataStore.semanticWorkbook)

  //
  // useEffect(() => {
  //   console.log('sematntioanosidf')
  //   console.log(dataStore.semanticWorkbook)
  //   if(dataStore.semanticWorkbook){
  //     const selectedSheetData = XLSX.utils.sheet_to_json(
  //       dataStore.semanticWorkbook.Sheets['BaseInformation'],
  //       { header: 1 }
  //     );
  //     setSelectedSheetData(selectedSheetData);
  //      // Make sure to include any dependencies that
  //   }
  // }, [dataStore.semanticWorkbook]); // Add a
  const [overlayChange, setOverlayChange] = useState('')

  const handleOverlayChange = (model) =>{
    setOverlayChange(model)
    const selectedSheetData = XLSX.utils.sheet_to_json(
          dataStore.semanticWorkbook.Sheets['BaseInformation'],
          { header: 1 }
        );
    console.log('overlayasdal')

    console.log(selectedSheetData)
    setSelectedSheetData(selectedSheetData);
  }



  // useEffect(() => {
  //     const selectedSheetData = XLSX.utils.sheet_to_json(
  //           dataStore.semanticWorkbook.Sheets['BaseInformation'],
  //           { header: 1 }
  //         );
  //     console.log('overlayasdal')
  //
  //     console.log(selectedSheetData)
  //     setSelectedSheetData(selectedSheetData);

   //}, [dataStore.semanticWorkbook]);


  const handleSchemaConfigSelection = (sheetTitle) => {
    setSchemaConfigSelected(true)
    setStructureInstanceSelected(false)
    setSheetTitle(sheetTitle)
    console.log(sheetTitle)
    dataStore.updateSemanticWorkbookSheet(sheetTitle)
    //if datastore.semantic sheet
    //extract sheet data from ...XLSX.utils.sheet_to_json(
    //   dataStore.overLaidModelWorkbook.Sheets[sheetTitle[0]],
    //   { header: 1 }
    // );, to setSelectedSheetData
    console.log(dataStore.semanticWorkbookSheet)
    if (dataStore.semanticWorkbookSheet) {
      if (
        dataStore.semanticWorkbook &&
        dataStore.semanticWorkbook.Sheets
      ) {
        if(!sheetTitle){
          const selectedSheetData = XLSX.utils.sheet_to_json(
            dataStore.semanticWorkbook.Sheets['BaseInformation'],
            { header: 1 }
          );
          setSelectedSheetData(selectedSheetData);
        }else{


        console.log(sheetTitle)
        console.log(sheetTitle[0])
        if(sheetTitle[0] === 'Base Information'){
          const selectedSheetData = XLSX.utils.sheet_to_json(
            dataStore.semanticWorkbook.Sheets['BaseInformation'],
            { header: 1 }
          );
          setSelectedSheetData(selectedSheetData);
          console.log(selectedSheetData);
        }
        else if(sheetTitle[0] === 'Rules'){
          const selectedSheetData = XLSX.utils.sheet_to_json(
            dataStore.semanticWorkbook.Sheets['Rules-Consistency'],
            { header: 1 }
          );
          setSelectedSheetData(selectedSheetData);
          console.log(selectedSheetData);
        }
        else if(sheetTitle[0] === 'Facts'){
          const selectedSheetData = XLSX.utils.sheet_to_json(
            dataStore.semanticWorkbook.Sheets['Facts'],
            { header: 1 }
          );
          setSelectedSheetData(selectedSheetData);
          console.log(selectedSheetData);
        }
        else{
          //dataStore.updateSemanticWorkbookSheet(sheetTitle[0])
          const selectedSheetData = XLSX.utils.sheet_to_json(
            dataStore.semanticWorkbook.Sheets[sheetTitle[0]],
            { header: 1 }
          );
          console.log('newSheetyo')
          console.log(sheetTitle[0])
          setSelectedSheetData(selectedSheetData);
          console.log(selectedSheetData);
        }

      }} else {
        // Handle the case where the selected sheet doesn't exist
        console.error('Selected sheet not found or is invalid.');
        console.log(dataStore.semanticWorkbook.Sheets)
        console.log(dataStore.semanticWorkbook.Sheets[sheetTitle[0]])
      }
    }
    else{console.log('basdbasdf')}
  }

 useEffect(()=>{
  //  handleSchemaConfigSelection()
console.log('hasidfasdfssss')
}, [handleSheetSelect])


  const [selectedSubSheet, setSelectedSubSheet]= useState([])
//viewing semanticworkbook with subsheet
  const handleSchemaSubConfigSelection = (subSheet) => {
    const selectedSheetData = XLSX.utils.sheet_to_json(
      dataStore.semanticWorkbook.Sheets[subSheet],
      { header: 1 }
    );
    console.log('subSheet selected')
    console.log(selectedSheetData)
    setSelectedSheetData(selectedSheetData);
    setSelectedSubSheet(subSheet)
  }

  const handleStructureInstanceSelection = (structTitle) => {
    setStructureInstanceSelected(true)
    console.log(structureInstanceSelected)
    console.log(structTitle)
    setSchemaConfigSelected(false)
    //depcerecated -NOT YET
    if (dataStore.workbookXLSX) {
      // Find the data of the selected sheet in the workbook
      //this is now showing the dited title
      console.log('newTitleDone')
      console.log(structTitle)
      const selectedSheetData = XLSX.utils.sheet_to_json(dataStore.workbookXLSX.Sheets[structTitle], { header: 1 });

      console.log(XLSX.utils.sheet_to_json(dataStore.workbookXLSX.Sheets[structTitle], { header: 1 }))
      // Set the selected sheet's data in the state
      setSelectedSheetData(selectedSheetData);
      console.log(selectedSheetData)
      //const selectedSheetDataManagmentSystem = XLSX.utils.sheet_to_json(dataStore.workbook.Sheets[selectedSheetTitle], { header: 1 });
      //setSelectedXLSXDataTaxonomyItem(selectedSheetDataManagmentSystem)
    }

    //some sort of new rendering table
  }

  const [pipelineSheetSelected, setPipelineSheetSelected] = useState(null)

  const handlePipelineInstanceSelection = (pipelineTitle) => {
  //  setStructureInstanceSelected(true)
    setPipelineSheetSelected(true)
    console.log(pipelineTitle)
  //  setSchemaConfigSelected(false)

  }


  const [canvasSheetSelected, setCanvasSheetSelected] = useState(null)

  const handleCanvasSheetSelection = (pipelineTitle) => {
  //  setStructureInstanceSelected(true)
    setCanvasSheetSelected(true)
    console.log(pipelineTitle)
  //  setSchemaConfigSelected(false)

  }

  const [aiSummarySheetSelected, setAiSummarySheetSelected] = useState(null)


  const handleAISummarySheetSelection = (pipelineTitle) => {
  //  setStructureInstanceSelected(true)
    setAiSummarySheetSelected(true)
    console.log(pipelineTitle)
  //  setSchemaConfigSelected(false)

  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeAndSetAuthenticated = (info) => {
    setIsModalOpen(false);
    login();
    listLoginInfo(info)
  };

  const handleTabSelection= (selection) =>{
    if(selection === 'Structure'){
      setStructureInstanceSelected(true)
      setCanvasSheetSelected(false)
      setPipelineSheetSelected(false)
      setSchemaConfigSelected(false)
      setAiSummarySheetSelected(false)
    }
    else if(selection === 'Canvas'){
      setCanvasSheetSelected(true)
      setPipelineSheetSelected(false)
      setSchemaConfigSelected(false)
      setStructureInstanceSelected(false)
      setAiSummarySheetSelected(false)
    }
    else if(selection === 'Schema'){
      setSchemaConfigSelected(true)
      setCanvasSheetSelected(false)
      setPipelineSheetSelected(false)
      setStructureInstanceSelected(false)
      setAiSummarySheetSelected(false)
    }
    else if(selection === 'Pipeline'){
      setPipelineSheetSelected(true)
      setCanvasSheetSelected(false)
      setSchemaConfigSelected(false)
      setStructureInstanceSelected(false)
      setAiSummarySheetSelected(false)
    }
    else if(selection === 'AI'){
      setPipelineSheetSelected(false)
      setCanvasSheetSelected(false)
      setSchemaConfigSelected(false)
      setStructureInstanceSelected(false)
      setAiSummarySheetSelected(true)
    }
  }

  //<XLSXSheetRenderer  sheetData={selectedSheetData} sheetTitle={sheetTitle} sheetTitle={xlsxTitle} dataStore={dataStore} selectedSheet={selectedSheet}  handleSelectedSheet={handleSelectedSheet} />
  console.log('shouldbesheettielbeo')
  console.log(sheetTitle)



//</DataStoreProvider>
  return (
    <div className={`prototype-container ${isDarkMode ? 'dark-mode' : ''}`}>
      {isAuthenticated ? (
        // Content for authenticated users
        //pass a lot of vars to prototype header for each functionality

        <div className='content-grid'>
          <PrototypeHeader handleOverlayChange={handleOverlayChange} sheetTitle={sheetTitle} handleOverlaidSelection={handleOverlaidSelection} onFileUpload={handleXLSXUpload} dataStore={dataStore} />
          <TabSelector handleTabSelection={handleTabSelection} structureInstanceSelected={structureInstanceSelected} schemaConfigSelected={schemaConfigSelected} />
          {schemaConfigSelected ? <PrototypeSideMenu  overlaidModelName={overlaidModel} handleSchemaConfigSelection={handleSchemaConfigSelection} sheetTitles={sheetTitles} sheetTitle={sheetTitle}  onSheetSelect={handleSheetSelect}  sheetData={selectedSheetData} xlsxTitle={xlsxTitle} dataStore={dataStore} selectedSheet={selectedSheet} handleSelectedSheet={handleSelectedSheet} schemaConfigSelected={schemaConfigSelected} /> : <div className='fillerClass'></div>}
          {schemaConfigSelected ? <SchemaConfigRenderer handleSchemaConfigSelection={handleSchemaConfigSelection} handleSheetSelect={handleSheetSelect} handleTabSelection={handleTabSelection} handleOverlayChange={handleOverlayChange} handleOverlaidSelection={handleOverlaidSelection} onFileUpload={handleXLSXUpload}  overlaidModelName={overlaidModel} dataStore={dataStore} sheetTitle={sheetTitle} selectedSheetData={selectedSheetData} handleSchemaSubConfigSelection={handleSchemaSubConfigSelection} stateSubSheet={selectedSubSheet} /> : <div className='fillerClass'></div>}
          {structureInstanceSelected ? <SubReports handleTabSelection={handleTabSelection}handleStructureInstanceSelection={handleStructureInstanceSelection} sheetTitles={sheetTitles} onSheetSelect={handleSheetSelect} sheetTitle={xlsxTitle} sheetData={selectedSheetData} xlsxTitle={xlsxTitle} dataStore={dataStore} selectedSheet={selectedSheet} handleSelectedSheet={handleSelectedSheet} schemaConfigSelected={schemaConfigSelected} />: <div className='fillerClass'></div>}
          {structureInstanceSelected ? <StructureInstanceRenderer dataStore={dataStore}  sheetData={selectedSheetData} sheetTitle={sheetTitle} sheetTitle={xlsxTitle} dataStore={dataStore} selectedSheet={selectedSheet}  handleSelectedSheet={handleSelectedSheet} /> : <div className='fillerClass'>filler</div>}
          {pipelineSheetSelected ? <PipelineMenu handlePipelineInstanceSelection={handlePipelineInstanceSelection} dataStore={dataStore}/>:<div className='fillerClass'></div>}
          {pipelineSheetSelected ? <PipelineProcessPageElement /> : <div className='fillerClass'></div>}
          {canvasSheetSelected ? <CanvasSideMenu handleCanvasSheetSelection={handleCanvasSheetSelection} dataStore={dataStore}/>: <div className='fillerClass'></div>}
          {canvasSheetSelected ? <CanvasPageElement />: <div className='fillerClass'></div>}
          {aiSummarySheetSelected ? <AISummarySideMenu handleAISummarySheetSelection={handleAISummarySheetSelection} dataStore={dataStore}/>: <div className='fillerClass'></div>}
          {aiSummarySheetSelected ? <AISummary />: <div className='fillerClass'></div>}
        </div>

      ) : (
        // Content for non-authenticated users
        <div>
          {isModalOpen && (
            <div className={`modal7 ${isDarkMode ? 'dark-mode' : ''}`}>
              <h2 className={isDarkMode ? 'dark-mode-text' : ''}>Login with Google</h2>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log('credresponse')
                  console.log(credentialResponse);
                  const token = credentialResponse.credential; // Replace with the actual JWT token
                  // Split the token into its parts
                  const parts = token.split('.');
                  const encodedPayload = parts[1];
                  // Decode the payload (Base64Url encoded JSON)
                  const decodedPayload = atob(encodedPayload.replace('-', '+').replace('_', '/'));
                  // Parse the JSON payload
                  const payload = JSON.parse(decodedPayload);
                  // The email is usually in the "email" field of the payload
                  console.log(payload)
                  const email = payload.email;
                  //.family_name .given_name

                  console.log(email);
                  closeAndSetAuthenticated(payload);
                }}
                onError={() => {
                  console.log('Authentication failed');
                }}
                scope="email"
              />
            </div>
          )}
          {!isModalOpen && (
            <div className={`modal2 ${isDarkMode ? 'dark-mode' : ''}`}>
              <button className="arrive-button" onClick={openModal}>
                Login for Access
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Prototype;
