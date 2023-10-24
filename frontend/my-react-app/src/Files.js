
// Popup.js
import { React, useState, useEffect } from 'react';
import './Upload.css';
import { useDarkMode } from './DarkModeContext';
import XLSXFileHandler from './XLSXFileHandler';
import CSVFileHandler from './CSVFileHandler'
import JSONfileHandler from './JSONfileHandler'


const Files = ({ updateForm }) => {
  const { isDarkMode } = useDarkMode();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`popup-container ${isDarkMode ? 'dark-mode' : ''}`}>
    <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        Files &or;
      </button>
      <div className="dropdown-content">
        <div className="dropdown-item">Report 1</div>
        <div className="dropdown-item">Q3 Report</div>
        <div className="dropdown-item">Q2 2023 Report</div>
        {/* Add other dropdown items here */}
      </div>
    </div>
    </div>
  );
};

export default Files;
