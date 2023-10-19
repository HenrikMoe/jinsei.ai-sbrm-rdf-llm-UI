  import React, { useState, useEffect, useRef } from 'react';
  import './XLSXSheetRenderer.css'; // Import your CSS file
  import Footer from './Footer';


  const XLSXSheetRenderer = ({ sheetData }) => {
    // Initialize tableData with an empty array
  let tableDataRef = []
  console.log(tableDataRef)
  let header = [];

//if tableCustom.length>0
  const [tableCustom, setTableCustom] = useState([]);
  const [headerCustom, setHeaderCustom] = useState([]);

  console.log(tableCustom)

  const addRow = () => {
    // Add a new row to the existing data
    //collumn length might effect this in custom table
    if(tableCustom.length > 0){
      const newRow = new Array(tableCustom[0].length).fill(' ');
      tableDataRef = [...tableCustom, newRow];
      setTableCustom(tableDataRef)
    }else{
    const newRow = new Array(tableDataRef[0].length).fill(' ');
    tableDataRef = [...tableDataRef, newRow];
    setTableCustom(tableDataRef)
  }

  };

  const addColumn = () => {
    // Add a new column to the existing data
    if(tableCustom.length > 0){
      console.log('correct')
      tableDataRef = tableCustom.map(row => [...row, '']);
      console.log(header)
      if(headerCustom.length >0){
        setHeaderCustom([...headerCustom, '']); // Add a blank header
        setTableCustom(tableDataRef)
      }else{setHeaderCustom([...header, '']); // Add a blank header
      setTableCustom(tableDataRef)}
      }else{
    console.log(tableDataRef.map(row => [...row, '']))
    tableDataRef = tableDataRef.map(row => [...row, '']);
    console.log([...header, ''])
    setHeaderCustom([...header, '']); // Add a blank header
    setTableCustom(tableDataRef)
  }
  };

  const handleCellChange = (rowIndex, cellIndex, value) => {
    const updatedData = tableDataRef.map((row, i) =>
      i === rowIndex
        ? row.map((cell, j) => (j === cellIndex ? value : cell))
        : row
    );
    tableDataRef = updatedData;
  };

  const handleHeaderChange = (cellIndex, value) => {
    const newHeader = headerCustom.map((header, j) =>
      j === cellIndex ? value : header
    );
    setHeaderCustom(newHeader);
  };

  console.log(tableDataRef.length)
  if (tableDataRef.length === 0 && sheetData) {
      console.log('yo');
      console.log(sheetData);

      header = sheetData[0];
      const initialData = sheetData.slice(1).map((row, index, arr) => {
          if (row.length < arr[arr.length - 1].length) {
            // If the current row is shorter, add empty cells to make them the same length
            const missingCells = arr[arr.length - 1].length - row.length;
            return row.concat(new Array(missingCells).fill(''));
          } else {
            return row;
          }
        });
      console.log(initialData)
      tableDataRef= initialData;
    }

  console.log(sheetData);
  console.log(header);
  console.log(tableDataRef)



    return (
      <div >
        <table className="xlsx-table">
        {headerCustom.length>0 ?   <thead>
            <tr>
              {headerCustom.map((headerText, index) => (
                <th key={index} contentEditable
                onBlur={(e) => {
                  handleHeaderChange(index, e.target.textContent);
                }}>{headerText}</th>
              ))}
            </tr>
          </thead> :  <thead>
            <tr>
              {header.map((headerText, index) => (
                <th key={index}>{headerText}</th>
              ))}
            </tr>
          </thead>}

      {tableCustom.length>0 ? <tbody>
      {tableCustom.map((row, rowIndex) => (
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
    :
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
    </tbody> }
        </table>

        {tableDataRef.length > 0 ?
          <div class="buttons-wrap">
          <button className="table-button" onClick={addRow}>
            Add Row
          </button>
          <button className="table-button" onClick={addColumn}>
            Add Column
          </button>
          </div>:
          <div className="table-button">N/A</div>
        }
        </div>

    );
  };



  export default XLSXSheetRenderer;
