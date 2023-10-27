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

function Prototype() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAuthenticated, login, logout } = useAuthentication();
  const { isDarkMode } = useDarkMode(); // Get the dark mode status

  //const [firstSheetData, setFirstSheetData] = useState(null);
  //const [secondSheetData, setSecondSheetData] = useState(null);

  const [sheetTitles, setSheetTitles] = useState(null);

  const [sheetTitle, setSheetTitle] = useState(null);


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


  const handleSheetSelect = (selectedSheetTitle) => {
    if (dataStore.workbook) {
      // Find the data of the selected sheet in the workbook
      //this is now showing the dited title
      console.log('newTitleDone')
      console.log(selectedSheetTitle)
      const selectedSheetData = XLSX.utils.sheet_to_json(dataStore.workbook.Sheets[selectedSheetTitle], { header: 1 });

      console.log(XLSX.utils.sheet_to_json(dataStore.workbook.Sheets[selectedSheetTitle], { header: 1 }))
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
    const firstSheetName = dataStore.workbook.SheetNames[0];
    const firstSheetData = XLSX.utils.sheet_to_json(dataStore.workbook.Sheets[firstSheetName], { header: 1 });
    //setFirstSheetData(firstSheetData);

    // Also store the sheet titles
    setSheetTitles(dataStore.workbook.SheetNames);

    // Set the selected sheet's data initially to the first sheet
    //setSelectedSheetData(firstSheetData);
    setxlsxTitle(dataStore.workbook.Props.Title)

  };




  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeAndSetAuthenticated = () => {
    setIsModalOpen(false);
    login();
  };

  return (
    <div className={`prototype-container ${isDarkMode ? 'dark-mode' : ''}`}>
      {isAuthenticated ? (
        // Content for authenticated users
        //pass a lot of vars to prototype header for each functionality
        <DataStoreProvider>
        <div className='content-grid'>
          <PrototypeHeader onFileUpload={handleXLSXUpload} dataStore={dataStore}/>
          <PrototypeSideMenu  dataStore={dataStore} sheetTitles={sheetTitles} onSheetSelect={handleSheetSelect} selectedSheetData={selectedSheetData} xlsxTitle={xlsxTitle} selectedSheet={selectedSheet} handleSelectedSheet={handleSelectedSheet} />
          <XLSXSheetRenderer  sheetData={selectedSheetData} sheetTitle={sheetTitle} sheetTitle={xlsxTitle} dataStore={dataStore} selectedSheet={selectedSheet}  handleSelectedSheet={handleSelectedSheet} />
          <DeploymentTable />
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
