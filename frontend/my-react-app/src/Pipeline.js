
// Popup.js
import { React, useState, useEffect } from 'react';
import './Upload.css';
import { useDarkMode } from './DarkModeContext';
import XLSXFileHandler from './XLSXFileHandler';
import CSVFileHandler from './CSVFileHandler'
import JSONfileHandler from './JSONfileHandler'


const Pipeline = ({ updateForm }) => {
  const { isDarkMode } = useDarkMode();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`popup-container ${isDarkMode ? 'dark-mode' : ''}`}>
    <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        Pipeline &or;
      </button>
      <div className="dropdown-content">
        <div className="dropdown-item">Process Canvas</div>
        <div className="dropdown-item">Rendering</div>
        <div className="dropdown-item">Write Config</div>
        {/* Add other dropdown items here */}
      </div>
    </div>
    </div>
  );
};

export default Pipeline;
