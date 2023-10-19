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


function Prototype() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAuthenticated, login, logout } = useAuthentication();
  const { isDarkMode } = useDarkMode(); // Get the dark mode status

  const [firstSheetData, setFirstSheetData] = useState(null);
  //const [secondSheetData, setSecondSheetData] = useState(null);

  const [sheetTitles, setSheetTitles] = useState(null);

  const [selectedSheetData, setSelectedSheetData] = useState(null);
  const [workbook, setWorkbook] = useState(null);

  const [xslxTitle, setxslxTitle] = useState(null);



  const handleSheetSelect = (selectedSheetTitle) => {
    if (workbook) {
      // Find the data of the selected sheet in the workbook
      const selectedSheetData = XLSX.utils.sheet_to_json(workbook.Sheets[selectedSheetTitle], { header: 1 });

      // Set the selected sheet's data in the state
      setSelectedSheetData(selectedSheetData);

      // Do something with the selected sheet data, or pass it to another component
      console.log('Selected sheet data in Prototype:', selectedSheetData);

    }
  };


  const handleXLSXUpload = (workbook) => {
    console.log(workbook);
    // Store the workbook in the state
    setWorkbook(workbook);


    // Extract the first sheet and pass it to the parent component
    const firstSheetName = workbook.SheetNames[0];
    const firstSheetData = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheetName], { header: 1 });
    setFirstSheetData(firstSheetData);

    // Also store the sheet titles
    setSheetTitles(workbook.SheetNames);

    // Set the selected sheet's data initially to the first sheet
    setSelectedSheetData(firstSheetData);
    setxslxTitle(workbook.Props.Title)

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
        <div className='content-grid'>
          <PrototypeHeader onFileUpload={handleXLSXUpload} />
          <PrototypeSideMenu  sheetTitles={sheetTitles} onSheetSelect={handleSheetSelect} selectedSheetData={selectedSheetData} xslxTitle={xslxTitle} />
          <XLSXSheetRenderer sheetData={selectedSheetData} />

        </div>
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
