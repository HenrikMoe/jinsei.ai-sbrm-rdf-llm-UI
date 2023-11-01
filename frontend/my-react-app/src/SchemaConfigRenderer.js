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
  selectedSheetData,
  selectedSheet,
  runTogether,
}) => {
  // Initialize tableData with an empty array

  console.log('sheettielchange in xlsx ')
  console.log(sheetTitle)
  if(!sheetTitle){
    sheetTitle = ['doi']
  }
  const [tableData, setTableData] = useState([]);
  const [header, setHeader] = useState([]);

    // Initialize tableData and header when dataStore changes
  useEffect(() => {
    if(selectedSheetData){
      console.log(selectedSheetData)
       const initialData = selectedSheetData;
       setHeader([initialData[0]]);
       setTableData(initialData.slice(1));

    }
   }, [selectedSheetData]);


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


  const handleSheetChangeRender = () => {
    console.log('sheetdata xlsx render initing ');
    console.log(dataStore.overLaidModelSheet)
    console.log(dataStore.overLaidModelSheet[0]);
    setHeader([dataStore.overLaidModelSheet[0]]);
    const initialData = dataStore.overLaidModelSheet.slice(1);
    console.log(initialData);
    setTableData(initialData);
  }



  useEffect(() => {
    if (dataStore.overLaidModelSheet) {
      console.log('sheetdata xlsx render initing ');
      console.log(dataStore.overLaidModelSheet)
      console.log(dataStore.overLaidModelSheet[0]);
      setHeader([dataStore.overLaidModelSheet[0]]);
      const initialData = dataStore.overLaidModelSheet.slice(1);
      console.log(initialData);
      setTableData(initialData);
    }
  }, [dataStore]);




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

          <div className='subRibbon' >
          <button className="ribbon-button">Create</button>
          <button className="ribbon-button">Change Report Overlay</button>
          <button className="ribbon-button">Import Report Overlay </button>
          </div>

          <div className='subRibbon'>
          <button className="ribbon-button">Facts</button>
          <button className="ribbon-button">Dimensions</button>
          <button className="ribbon-button">Parenthetical</button>
          </div>


          </div>
        ) : sheetTitle[0] === 'Rules' ? (
          <div className='schemaRibbon'>


          <div className='subRibbon' >
          <button className="ribbon-button">Create</button>
          <button className="ribbon-button">Change Report Overlay</button>
          <button className="ribbon-button">Import Report Overlay </button>
          </div>


          <div className='subRibbon'>
          <button className="ribbon-button">Consistency</button>
          <button className="ribbon-button">RollForward</button>
          <button className="ribbon-button">Member Aggregation</button>
          <button className="ribbon-button">Adjustment</button>
          <button className="ribbon-button">Variance</button>
          <button className="ribbon-button">Nonstandard</button>
          </div>

          </div>
        ) : (
          <div className="schemaRibbon">
            {/* Top ribbon with three buttons */}
            <div className='subRibbon'>
            <button className="ribbon-button">Create</button>
            <button className="ribbon-button">Change Report Overlay</button>
            <button className="ribbon-button">Import Report Overlay </button>
            </div>

            {dataStore.overLaidModelSheet ?   <table className='xlsx-table'
              // {`xlsx-table ${isResizing ? 'resizable' : ''}`}
              // onMouseDown={handleMouseDown}
              >
               <thead>
               {dataStore.overLaidModelSheet ?
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
            {dataStore.overLaidModelSheet ? tableData.map((row, rowIndex) => (
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
              </table>: <div>null</div>}




          </div>
        )}


      {/* Rest of your component */}
    </div>
  );
};

export default XLSXSheetRenderer;
