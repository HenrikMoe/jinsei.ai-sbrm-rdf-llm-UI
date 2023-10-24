
// Popup.js
import { React, useState, useEffect } from 'react';
import './Upload.css';
import { useDarkMode } from './DarkModeContext';
import XLSXFileHandler from './XLSXFileHandler';
import CSVFileHandler from './CSVFileHandler'
import JSONfileHandler from './JSONfileHandler'


const Transform = ({ updateForm }) => {
  const { isDarkMode } = useDarkMode();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`popup-container ${isDarkMode ? 'dark-mode' : ''}`}>
    <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        Transform &or;
      </button>
      <div className="dropdown-content">
        <CSVFileHandler />
        <JSONfileHandler />
        {/* Add other dropdown items here */}
      </div>
    </div>
    </div>
  );
};

export default Transform;
