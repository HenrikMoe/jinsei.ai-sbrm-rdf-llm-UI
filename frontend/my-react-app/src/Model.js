import React, { useState, useEffect, useRef } from 'react';
import './Upload.css';
import { useDarkMode } from './DarkModeContext';
import XLSXFileHandler from './XLSXFileHandler';
import CSVFileHandler from './CSVFileHandler';
import JSONfileHandler from './JSONfileHandler';

const Model = ({ updateForm }) => {
  const { isDarkMode } = useDarkMode();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModel, setSelectedModel] = useState(''); // State to store the selected model

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleModelSelect = (model) => {
    setSelectedModel(model); // Set the selected model when an item is clicked
    closeDropdown(); // Close the dropdown
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
      <div ref={dropdownRef} className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
        <button className="dropdown-button" onClick={toggleDropdown}>
        {selectedModel ? (
          <div>{selectedModel} &or;</div>
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
          <div className="dropdown-item" onClick={() => handleModelSelect('Platinum XBRL')}>
            Accounting Equation (Platinum)
          </div>
          <div className="dropdown-item" onClick={() => handleModelSelect('Asset Standard')}>
            SFAC 6 (Platinum)
          </div>
          <div className="dropdown-item" onClick={() => handleModelSelect('Liability Standard')}>
            SFAC 8 (Platinum)
          </div>
          <div className="dropdown-item" onClick={() => handleModelSelect('Liability Standard')}>
            Common (Platinum)
          </div>
          <div className="dropdown-item" onClick={() => handleModelSelect('Liability Standard')}>
            MINI (Platinum)
          </div>
          <div className="dropdown-item" onClick={() => handleModelSelect('Liability Standard')}>
            PROOF (Platinum)
          </div>
          <div className="dropdown-item" onClick={() => handleModelSelect('Liability Standard')}>
            Simplified Disclosures for For-Profit and Not-for-Profit Tier 2 Entities (AASB 1060) (Seattle Method, Golden Version)
          </div>
          <div className="dropdown-item" onClick={() => handleModelSelect('Liability Standard')}>
            No Scheme/Local Development
          </div>
          {/* Add other dropdown items here */}
        </div>
      </div>
    </div>
  );
};

export default Model;
