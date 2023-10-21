// Popup.js
import { React, useState, useEffect } from 'react';
import './Popup.css';
import { useDarkMode } from './DarkModeContext';
import XLSXFileHandler from './XLSXFileHandler';
import CSVFileHandler from './CSVFileHandler'
import JSONfileHandler from './JSONfileHandler'


const Popup = ({ onFileUpload }) => {
  const { isDarkMode } = useDarkMode();
  console.log(onFileUpload)

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`popup-container ${isDarkMode ? 'dark-mode' : ''}`}>
    <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        Import &or;
      </button>
      <div className="dropdown-content">
        <XLSXFileHandler onFileUpload={onFileUpload} />
        <CSVFileHandler onFileUpload={onFileUpload} />
        <JSONfileHandler onFileUpload={onFileUpload} />
        {/* Add other dropdown items here */}
      </div>
    </div>
    </div>
  );
};

export default Popup;
