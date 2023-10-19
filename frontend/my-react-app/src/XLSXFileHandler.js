import React, { useRef } from 'react';
import * as XLSX from 'xlsx'; // Import the entire xlsx library

const XLSXFileHandler = ({ onFileUpload }) => {
  const fileInputRef = useRef(null);
  console.log(onFileUpload)

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });

        // Extract the first two sheets and pass them to the parent component
        const firstSheetName = workbook.SheetNames[0];
        const secondSheetName = workbook.SheetNames[1];
        const thirdSheetName = workbook.SheetNames[2];
        const fourthSheetName = workbook.SheetNames[3];
        const fifthSheetName = workbook.SheetNames[4];
        const sixthSheetName = workbook.SheetNames[5];
        const seventhSheetName = workbook.SheetNames[6];
        const eighthSheetName = workbook.SheetNames[7];
        const ninethSheetName = workbook.SheetNames[8];


        const firstSheetData = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheetName], { header: 1 });
        const secondSheetData = XLSX.utils.sheet_to_json(workbook.Sheets[secondSheetName], { header: 1 });
        const thirdSheetData = XLSX.utils.sheet_to_json(workbook.Sheets[thirdSheetName], { header: 1 });
        const fourthSheetData = XLSX.utils.sheet_to_json(workbook.Sheets[fourthSheetName], { header: 1 });
        const fifthSheetData = XLSX.utils.sheet_to_json(workbook.Sheets[fifthSheetName], { header: 1 });
        const sixthSheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sixthSheetName], { header: 1 });
        const seventhSheetData = XLSX.utils.sheet_to_json(workbook.Sheets[seventhSheetName], { header: 1 });
        const eighthSheetData = XLSX.utils.sheet_to_json(workbook.Sheets[eighthSheetName], { header: 1 });
        const ninethSheetData = XLSX.utils.sheet_to_json(workbook.Sheets[ninethSheetName], { header: 1 });

        //console.log(firstSheetData, secondSheetData)

        console.log(firstSheetData)
        onFileUpload(firstSheetData);


      };

      reader.readAsBinaryString(file);
    }
  };

  return (
    <div>
    <label htmlFor="fileInput" style={{ cursor: 'pointer' }}>
      Import XLSX
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
