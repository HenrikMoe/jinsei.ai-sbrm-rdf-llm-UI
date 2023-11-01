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

  console.log('sheettielchange in xlsx ')
  console.log(sheetTitle)
  if(!sheetTitle){
    console.log('hiiiii')
    sheetTitle = ['doi']
  }
  const [tableData, setTableData] = useState([]);
  const [header, setHeader] = useState([]);

  console.log('running on datastore change');

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
      setHeader(sheetData[0]);
      const initialData = sheetData.slice(1);
      console.log(initialData);
      setTableData(initialData);
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
    <div className="table-wrap">
      <div className="elementTitle">Schema Config </div>
      {sheetTitle[0] === 'Facts' ? (
          <div className='schemaRibbon'>

          <div className='subRibbon'>
          <button className="ribbon-button">Facts</button>
          <button className="ribbon-button">Dimensions</button>
          <button className="ribbon-button">Parenthetical</button>
          </div>

          <div className='subRibbon' >
          <button className="ribbon-button">Create</button>
          <button className="ribbon-button">Change Report Overlay</button>
          <button className="ribbon-button">Import Report Overlay </button>
          </div>


          </div>
        ) : sheetTitle[0] === 'Rules' ? (
          <div className='schemaRibbon'>

          <div className='subRibbon'>
          <button className="ribbon-button">Consistency</button>
          <button className="ribbon-button">RollForward</button>
          <button className="ribbon-button">Member Aggregation</button>
          <button className="ribbon-button">Adjustment</button>
          <button className="ribbon-button">Variance</button>
          <button className="ribbon-button">Nonstandard</button>
          </div>

          <div className='subRibbon'>
          <button className="ribbon-button">Create</button>
          <button className="ribbon-button">Change Report Overlay</button>
          <button className="ribbon-button">Import Report Overlay </button>
          </div>

          </div>
        ) : (
          <div>
          <div className="schemaRibbon">
            {/* Top ribbon with three buttons */}
            <div className='subRibbon'>
            <button className="ribbon-button">Create</button>
            <button className="ribbon-button">Change Report Overlay</button>
            <button className="ribbon-button">Import Report Overlay </button>
            </div>

          </div>
          <table className="xlsx-table">
            {/* Rest of your component */}
          </table>
          </div>
        )}


      {/* Rest of your component */}
    </div>
  );
};

export default XLSXSheetRenderer;
