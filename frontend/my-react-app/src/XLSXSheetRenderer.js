  import React, { useState, useEffect, useRef } from 'react';
  import './XLSXSheetRenderer.css'; // Import your CSS file

  const XLSXSheetRenderer = ({ sheetData }) => {
    // Initialize tableData with an empty array
  let tableDataRef = []
  console.log(tableDataRef)
  let header = [];

  const addRow = () => {
    // Add a new row to the existing data
    const newRow = new Array(header.length).fill('');
    tableDataRef = [...tableDataRef, newRow];
  };

  const addColumn = () => {
    // Add a new column to the existing data
    tableDataRef = tableDataRef.map(row => [...row, '']);
  };

  const handleCellChange = (rowIndex, cellIndex, value) => {
    const updatedData = tableDataRef.map((row, i) =>
      i === rowIndex
        ? row.map((cell, j) => (j === cellIndex ? value : cell))
        : row
    );
    tableDataRef = updatedData;
  };

  console.log(tableDataRef.length)
  if (tableDataRef.length === 0 && sheetData) {
      console.log('yo');
      console.log(sheetData);

      header = sheetData[0];
      const initialData = sheetData.slice(1); // Don't map to empty strings here
      console.log(initialData)
      tableDataRef= initialData;
    }

  console.log(sheetData);
  console.log(header);
  console.log(tableDataRef)



    return (
      <div>
        <table className="xlsx-table">
          <thead>
            <tr>
              {header.map((headerText, index) => (
                <th key={index}>{headerText}</th>
              ))}
            </tr>
          </thead>
        <tbody>
                {tableDataRef.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        contentEditable
                        onBlur={(e) => {
                          handleCellChange(rowIndex, cellIndex, e.target.textContent);
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
        </table>
        <button className="table-button" onClick={addRow}>
          Add Row
        </button>
        <button className="table-button" onClick={addColumn}>
          Add Column
        </button>
      </div>
    );
  };



  export default XLSXSheetRenderer;
