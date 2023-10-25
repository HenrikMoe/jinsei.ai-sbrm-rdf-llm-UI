import React, { useRef } from 'react';
import * as XLSX from 'xlsx'; // Import the entire xlsx library
import './XLSXFileHandler.css'

const XLSXFileHandler = ({ onFileUpload, closeDropdown }) => {
  const fileInputRef = useRef(null);
  console.log(onFileUpload)

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        //console.log(firstSheetData, secondSheetData)
        console.log(onFileUpload)

        onFileUpload(workbook);

      };

      reader.readAsBinaryString(file);
      closeDropdown();
    }
  };

  return (
    <div className='button'>
    <label htmlFor="fileInput" style={{ cursor: 'pointer' }} className='dropdown-item'>
       XLSX
      </label>
      <input
      id="fileInput"
      type="file"
      accept=".xlsx"
      style={{ display: 'none' }}
      onChange={handleFileSelect}
      />
    </div>
  );
};

export default XLSXFileHandler;
