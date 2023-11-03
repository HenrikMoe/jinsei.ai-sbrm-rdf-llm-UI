import React, { useState, useEffect, useRef } from 'react';
import './Upload.css';
import { useDarkMode } from './DarkModeContext';
import XLSXFileHandler from './XLSXFileHandler';
import CSVFileHandler from './CSVFileHandler';
import JSONfileHandler from './JSONfileHandler';

const Model = ({ updateForm, dataStore }) => {
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
    console.log(model)
    dataStore.changeOverLaidModel('PROOF (Platinum)')
    dataStore.initDefaultSemanticStrucutreInstanceTaxonomy()
    dataStore.initDefaultSemanticStrucutreInstance()
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
          <div className="dropdown-item" onClick={() => handleModelSelect('Accounting Equation (Platinum)')}>
            Accounting Equation (Platinum)
          </div>
          <div className="dropdown-item" onClick={() => handleModelSelect('SFAC 6 (Platinum)')}>
            SFAC 6 (Platinum)
          </div>
          <div className="dropdown-item" onClick={() => handleModelSelect('SFAC 8 (Platinum)')}>
            SFAC 8 (Platinum)
          </div>
          <div className="dropdown-item" onClick={() => handleModelSelect('Common (Platinum)')}>
            Common (Platinum)
          </div>
          <div className="dropdown-item" onClick={() => handleModelSelect('MINI (Platinum)')}>
            MINI (Platinum)
          </div>
          <div className="dropdown-item" onClick={() => handleModelSelect('PROOF (Platinum)')}>
            PROOF (Platinum)
          </div>
          <div className="dropdown-item" onClick={() => handleModelSelect('AASB 1060')}>
            Simplified Disclosures for For-Profit and Not-for-Profit Tier 2 Entities (AASB 1060) (Seattle Method, Golden Version)
          </div>
          <div className="dropdown-item" onClick={() => handleModelSelect('Local Report Scheme')}>
            Local Report Scheme
          </div>
          {/* Add other dropdown items here */}
        </div>
      </div>
    </div>
  );
};

export default Model;
