import React, { useState } from 'react';
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

function Prototype() {
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
  console.log('DATASTORE')
  console.log(dataStore)

  //const runTogether


  const handleSheetSelect = (selectedSheetTitle) => {
    if (dataStore.overLaidModelSheet) {
      // Find the data of the selected sheet in the workbook
      //this is now showing the dited title
      console.log('newTitleDone')
      console.log(selectedSheetTitle)
      const selectedSheetData = XLSX.utils.sheet_to_json(dataStore.overLaidModelSheet.Sheets[selectedSheetTitle], { header: 1 });

      console.log(XLSX.utils.sheet_to_json(dataStore.overLaidModelSheet.Sheets[selectedSheetTitle], { header: 1 }))
      // Set the selected sheet's data in the state
      setSelectedSheetData(selectedSheetData);
      console.log(selectedSheetData)
      //const selectedSheetDataManagmentSystem = XLSX.utils.sheet_to_json(dataStore.workbook.Sheets[selectedSheetTitle], { header: 1 });
      //setSelectedXLSXDataTaxonomyItem(selectedSheetDataManagmentSystem)
    }
  };



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


  const handleSchemaConfigSelection = (sheetTitle) => {
    setSchemaConfigSelected(true)
    setStructureInstanceSelected(false)
    setSheetTitle(sheetTitle)
    //if datastore.semantic sheet
    //extract sheet data from ...XLSX.utils.sheet_to_json(
    //   dataStore.overLaidModelWorkbook.Sheets[sheetTitle[0]],
    //   { header: 1 }
    // );, to setSelectedSheetData
    if (dataStore.semanticWorkbookSheet) {
      if (
        dataStore.semanticWorkbook &&
        dataStore.semanticWorkbook.Sheets
      ) {
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

      } else {
        // Handle the case where the selected sheet doesn't exist
        console.error('Selected sheet not found or is invalid.');
        console.log(dataStore.semanticWorkbook.Sheets)
        console.log(dataStore.semanticWorkbook.Sheets[sheetTitle[0]])
      }
    }
  }

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
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeAndSetAuthenticated = () => {
    setIsModalOpen(false);
    login();
  };

  //<XLSXSheetRenderer  sheetData={selectedSheetData} sheetTitle={sheetTitle} sheetTitle={xlsxTitle} dataStore={dataStore} selectedSheet={selectedSheet}  handleSelectedSheet={handleSelectedSheet} />


  return (
    <div className={`prototype-container ${isDarkMode ? 'dark-mode' : ''}`}>
      {isAuthenticated ? (
        // Content for authenticated users
        //pass a lot of vars to prototype header for each functionality
        <DataStoreProvider>
        <div className='content-grid'>
          <PrototypeHeader onFileUpload={handleXLSXUpload} dataStore={dataStore} />
          <PrototypeSideMenu  handleSchemaConfigSelection={handleSchemaConfigSelection} sheetTitles={sheetTitles} onSheetSelect={handleSheetSelect} sheetTitle={xlsxTitle} sheetData={selectedSheetData} xlsxTitle={xlsxTitle} dataStore={dataStore} selectedSheet={selectedSheet} handleSelectedSheet={handleSelectedSheet} schemaConfigSelected={schemaConfigSelected} />
          {schemaConfigSelected ? <SchemaConfigRenderer dataStore={dataStore} sheetTitle={sheetTitle} selectedSheetData={selectedSheetData} handleSchemaSubConfigSelection={handleSchemaSubConfigSelection} stateSubSheet={selectedSubSheet} />  : null}
          {structureInstanceSelected ? <StructureInstanceRenderer dataStore={dataStore}  sheetData={selectedSheetData} sheetTitle={sheetTitle} sheetTitle={xlsxTitle} dataStore={dataStore} selectedSheet={selectedSheet}  handleSelectedSheet={handleSelectedSheet} /> : null}
          <SubReports handleStructureInstanceSelection={handleStructureInstanceSelection} sheetTitles={sheetTitles} onSheetSelect={handleSheetSelect} sheetTitle={xlsxTitle} sheetData={selectedSheetData} xlsxTitle={xlsxTitle} dataStore={dataStore} selectedSheet={selectedSheet} handleSelectedSheet={handleSelectedSheet} schemaConfigSelected={schemaConfigSelected} />
        </div>
        </DataStoreProvider>
      ) : (
        // Content for non-authenticated users
        <div>
          {isModalOpen && (
            <div className={`modal ${isDarkMode ? 'dark-mode' : ''}`}>
              <h2 className={isDarkMode ? 'dark-mode-text' : ''}>Login with Google</h2>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                  closeAndSetAuthenticated();
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
