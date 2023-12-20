// Popup.js
import React, { useState, useEffect, useRef } from 'react';
import './Popup.css';
import { useDarkMode } from './DarkModeContext';
import XLSXFileHandler from './XLSXFileHandler';
import CSVFileHandler from './CSVFileHandler'
import JSONfileHandler from './JSONfileHandler'


const Delete = ({ handleClearTrue, onFileUpload, dataStore }) => {
  const { isDarkMode } = useDarkMode();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dropdownRef = useRef(null);


  // Function to close the dropdown.
const closeDropdown = () => {
  setIsDropdownOpen(false);
};

const deleteFile = () =>{
  // dataStore.clearSemantic()
  // dataStore.clearStructure()
  console.log('delelting')
  dataStore.changeOverLaidModelDefault()
  dataStore.overlaidModelName = null
  handleClearTrue()
}

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
        Clear &or;
      </button>
      <div className="dropdown-content">
        <div className="dropdown-item" onClick={deleteFile}>Clear This Sheet</div>
        <div className="dropdown-item" onClick={deleteFile}>Clear Workspace</div>

        {/* Add other dropdown items here */}
      </div>
    </div>
    </div>
  );
};

export default Delete;
