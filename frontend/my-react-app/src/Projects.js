
// Popup.js
import React, { useState, useEffect, useRef } from 'react';
import './Upload.css';
import { useDarkMode } from './DarkModeContext';
import XLSXFileHandler from './XLSXFileHandler';
import CSVFileHandler from './CSVFileHandler'
import JSONfileHandler from './JSONfileHandler'


const Projects = ({ updateForm }) => {
  const { isDarkMode } = useDarkMode();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dropdownRef = useRef(null);

  const [org, setOrg] = useState('AB Co'); // Initial title

  const handleOrgChange = (event) => {
    setOrg(event.target.value);
  };


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

  return (
    <div className={`popup-container ${isDarkMode ? 'dark-mode' : ''}`}>
    <input
      type="text"
      className="title-input"
      value={org}
      onChange={handleOrgChange}
    />
    <div ref={dropdownRef} className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        <span className="button-text">Projects</span>
        <span className="arrow">&or;</span>
      </button>
      <div className="dropdown-content">
        <div className="dropdown-item">Company 1</div>
        <div className="dropdown-item">Company 2</div>
        {/* Add other dropdown items here */}
      </div>
    </div>
    </div>
  );
};

export default Projects;
