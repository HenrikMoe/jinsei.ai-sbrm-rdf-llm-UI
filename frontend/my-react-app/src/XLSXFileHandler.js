import React, { useRef } from 'react';
import * as XLSX from 'xlsx';
import './XLSXFileHandler.css';

const XLSXFileHandler = ({ onFileUpload, closeDropdown }) => {
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        onFileUpload(workbook);
      };

      reader.readAsBinaryString(file);
      closeDropdown();
      // Reset the value of the file input to allow selecting the same file again
      fileInputRef.current.value = '';
    }
  };

  const triggerFileInput = () => {
    // Trigger a click on the hidden file input element
    fileInputRef.current.click();
  };

  return (
    <div className="button">

      <input
        id="fileInput"
        type="file"
        accept=".xlsx"
        style={{ display: 'none' }}
        onChange={handleFileSelect}
        ref={fileInputRef}
      />
      <button className="dropdown-item" htmlFor="fileInput" style={{ cursor: 'pointer' }} onClick={triggerFileInput}>XLSX</button>
    </div>
  );
};

export default XLSXFileHandler;
