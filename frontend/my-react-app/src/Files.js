
// Popup.js
import React, { useState, useEffect, useRef } from 'react';
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

  const dropdownRef = useRef(null);


  // Function to close the dropdown.
const closeDropdown = () => {
  setIsDropdownOpen(false);
};

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
  const [title, setTitle] = useState('File 1'); // Initial title

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className={`popup-container ${isDarkMode ? 'dark-mode' : ''}`}>
    <input
      type="text"
      className="title-input"
      value={title}
      onChange={handleTitleChange}
    />
    <div ref={dropdownRef} className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
      <button className="dropdown-button" onClick={toggleDropdown}>
      <span className="button-text">Reports</span>
        <span className="arrow">&or;</span>
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
