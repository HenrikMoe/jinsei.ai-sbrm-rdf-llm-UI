import React, { useState, useEffect, useRef } from 'react';
import './Upload.css';
import { useDarkMode } from './DarkModeContext';
import XLSXFileHandler from './XLSXFileHandler';
import CSVFileHandler from './CSVFileHandler';
import JSONfileHandler from './JSONfileHandler';
import Modal from './Modal'

const Model = ({  handleSheetSelect, handleOverlayChange, handleClearFalse, clear, sheetTitle, handleOverlaidSelection, updateForm, dataStore, setIsModal, setFlipContentFalse, handleSchemaConfigSelection }) => {
  const { isDarkMode } = useDarkMode();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);


  console.log('modelofbaseinformation')
  console.log(handleSheetSelect)

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModel, setSelectedModel] = useState(''); // State to store the selected model



  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };



  const handleOverlaidWizardSelect = () =>{
    setIsModal()
  }

  const handleModelSelect = (model) => {

    handleClearFalse()

    setSelectedModel(model); // Set the selected model when an item is clicked
    closeDropdown(); // Close the dropdown
    console.log('yooooo')
    console.log(model)
    dataStore.changeOverLaidModel(model)
    //overlaid model is activated, everything up to 236 runs
    //overlaidModelWorkbook.sheets undefined

    dataStore.changeOverLaidModelName(model)
    dataStore.updateOverLaidModelSheet('Terms')

    console.log(dataStore.overlaidModelName)
    console.log(dataStore.overLaidModelWorkbook)
    console.log(dataStore.overLaidModelSheet)

    console.log(sheetTitle)
    handleOverlayChange(model)
    if(dataStore.semanticWorkbookSheet){
      dataStore.updateSemanticWorkbookSheet(sheetTitle)
    }

    dataStore.initDefaultSemanticStrucutreInstanceTaxonomy()
    dataStore.initDefaultSemanticStrucutreInstance()

    //semanticWorkbook
    handleOverlaidSelection()
    console.log('beforethepointineedit')
    console.log(dataStore.overLaidModelSheet)
    dataStore.updateOverLaidModelSheet('Terms')
    //handleSheetSelect('Terms')
    setIsModal()
  //  handleSchemaConfigSelection()

  };


  useEffect(() => {
    if(clear === true){
      setSelectedModel('Local Report Scheme')
    }
  }, [clear]);




  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`popup-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <div ref={dropdownRef} className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
        <button className="dropdown-button4" onClick={toggleDropdown}>
        {dataStore.overlaidModelName ? (
          <div>Overlaid: {dataStore.overlaidModelName} &or;</div>
        ) : (
          <div>Overlay Reporting Schemes &or;</div>
        )}
        </button>
        <div className="dropdown-content">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {selectedModel ? (
            <div className="dropdown-item2" onClick={() => handleOverlaidWizardSelect()}>View {selectedModel} Settings</div>
          ) : (
            <div></div>
          )}
          <div className="dropdown-item" onClick={() => handleModelSelect('Accounting Equation')}>
            Accounting Equation - SBRM (OMG)
          </div>
          <div className="dropdown-item" onClick={() => handleModelSelect('SFAC 6')}>
            SFAC 6 - SBRM (OMG)
          </div>
          <div className="dropdown-item" onClick={() => handleModelSelect('SFAC 8')}>
             SFAC 8 - SBRM (OMG)
          </div>
          <div className="dropdown-item" onClick={() => handleModelSelect('Common')}>
            Common - SBRM (OMG)
          </div>
          <div className="dropdown-item" onClick={() => handleModelSelect('MINI')}>
            MINI - SBRM (OMG)
          </div>
          <div className="dropdown-item" onClick={() => handleModelSelect('PROOF')}>
          PROOF - SBRM (OMG)
          </div>
          <div className="dropdown-item" onClick={() => handleModelSelect('PROOF')}>
            ASB 1060 - SBRM (OMG)
          </div>


          <div className="dropdown-item" onClick={() => handleModelSelect('Local Report Scheme')}>
            Local Scheme
          </div>
          {/* Add other dropdown items here */}
        </div>
      </div>
    </div>
  );
};

export default Model;
