import React, { useState, useEffect, useRef } from 'react';
import './XLSXSheetRenderer.css'; // Import your CSS file
import Footer from './Footer';

const XLSXSheetRenderer = ({
  increment,
  sheetData,
  sheetTitles,
  dataStore,
  xlsxTitle,
  sheetTitle,
  selectedSheet,
  runTogether,
}) => {
  // Initialize tableData with an empty array

  const [tableData, setTableData] = useState([]);
  const [header, setHeader] = useState([]);

  console.log('strucutre instance running on sheet select change');

  const addRow = () => {
    const newRow = new Array(header.length).fill(' ');
    setTableData([...tableData, newRow]);
  };

  const addColumn = () => {
    const newHeader = [...header, 'New Column'];
    setHeader(newHeader);

    const newData = tableData.map((row) => [...row, '']);
    setTableData(newData);
  };

  useEffect(() => {
    if (sheetData) {
      console.log('sheetdata xlsx render initing ');
      console.log('header' + sheetData[0]);
      if(dataStore.semanticStrucutreInstance){
        console.log(dataStore.semanticStrucutreInstance[0])
        setHeader(dataStore.semanticStrucutreInstance[0]);
        const initialData = dataStore.semanticStrucutreInstance.slice(1);
        console.log(initialData);
        setTableData(initialData);
      }else{
        setHeader(sheetData[0]);
        const initialData = sheetData.slice(1);
        console.log(initialData);
        setTableData(initialData);
      }

    }
  }, [sheetData]);

  const handleCellChange = (rowIndex, cellIndex, value) => {
    const updatedData = tableData.map((row, i) =>
      i === rowIndex
        ? row.map((cell, j) => (j === cellIndex ? value : cell))
        : row
    );

    setTableData(updatedData);

    // Update the data in dataStore
    dataStore.updateSheetData(selectedSheet, updatedData, header);
  };

  const handleHeaderChange = (cellIndex, value) => {
    const newHeader = header.map((headerText, j) =>
      j === cellIndex ? value : headerText
    );

    setHeader(newHeader);
    dataStore.updateSheetData(selectedSheet, tableData, newHeader);
  };

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const popupRef = useRef(null);

  const handleCellMouseEnter = (e) => {
    const cell = e.target;
    const cellRect = cell.getBoundingClientRect();

    // Calculate the position for the popup message
    const x = cellRect.left + cellRect.width / 2;
    const y = cellRect.top; // Adjust as needed

    setPopupPosition({ x, y });
    setIsPopupVisible(true);
  };

  const handleCellMouseLeave = () => {
    setIsPopupVisible(false);
  };

  useEffect(() => {
    // Add a listener to close the popup when clicking outside of it
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
//conditinally render the subtype menu
  return (
    <div className='table-wrap2'>
    <div className='elementTitle2'>Structure Instance</div>
      <table className='xlsx-table'
      // {`xlsx-table ${isResizing ? 'resizable' : ''}`}
      // onMouseDown={handleMouseDown}
      >
       <thead>
       {dataStore.semanticStrucutreInstanceTaxonomy ?
          <tr>
            {header.map((headerText, index) => (
              <th key={index} contentEditable
              onBlur={(e) => {
                  handleHeaderChange(index, e.target.textContent);
                }}>{headerText}</th>
            ))}
          </tr> : <tr>null</tr>
          }
        </thead>


  <tbody>
    {dataStore.workbookXLSX ? tableData.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {row.map((cell, cellIndex) => (
          <td
            key={cellIndex}
            contentEditable
            onMouseEnter={handleCellMouseEnter}
            onMouseLeave={handleCellMouseLeave}
            onBlur={(e) => {
              handleCellChange(rowIndex, cellIndex, e.target.textContent);
            }}
          >
            {cell}
          </td>
        ))}
      </tr>
    )): <tr><td>hello</td></tr>}
  </tbody>
      </table>
      {isPopupVisible ? (
      <div
        className="popup-message"
        style={{
          top: `${popupPosition.y}px`,
          left: `${popupPosition.x}px`,
        }}
        ref={popupRef}
      >
        Model Specifc and Cell Specifc PopUp Message Status System
      </div>
    ): <div></div>}

      {tableData .length > 0 ?
        <div className="buttons-wrap">
        <button className="table-button" >//onClick={addRow}
          Add Row
        </button>
        <button className="table-button" >//onClick={addColumn}
          Add Column
        </button>
        </div>:
        <div className="table-button">N/A</div>
      }
      </div>
  );
};

export default XLSXSheetRenderer;
