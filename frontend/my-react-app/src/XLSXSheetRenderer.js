  import React, { useState, useEffect, useRef } from 'react';
  import './XLSXSheetRenderer.css'; // Import your CSS file
  import Footer from './Footer';


  const XLSXSheetRenderer = ({ sheetData, sheetTitles, dataStore, xlsxTitle, sheetTitle, selectedSheet }) => {
    // Initialize tableData with an empty array
  let tableDataRef = []

//if tableCustom.length>0
  const [tableCustom, setTableCustom] = useState([]);
  const [headerCustom, setHeaderCustom] = useState([]);

  const [tableData, setTableData] = useState([]);
  const [header, setHeader] = useState([]);

  // const addRow = () => {
  //   // Add a new row to the existing data
  //   //collumn length might effect this in custom table
  //   if(tableCustom.length > 0){
  //     const newRow = new Array(
  //       [0].length).fill(' ');
  //     tableDataRef = [...tableCustom, newRow];
  //     setTableCustom(tableDataRef)
  //     //dataStore.updateSheetData(selectedSheet, tableDataRef, header);
  //   }else{
  //   const newRow = new Array(tableDataRef[0].length).fill(' ');
  //   tableDataRef = [...tableDataRef, newRow];
  //   setTableCustom(tableDataRef)
  //   //dataStore.updateSheetData(selectedSheet, tableDataRef, header);
  // }
  //
  // };
  //
  // const addColumn = () => {
  //   // Add a new column to the existing data
  //   if(tableCustom.length > 0){
  //     tableDataRef = tableCustom.map(row => [...row, '']);
  //     if(headerCustom.length >0){
  //       setHeaderCustom([...headerCustom, '']); // Add a blank header
  //       setTableCustom(tableDataRef)
  //       //dataStore.updateSheetData(selectedSheet, tableDataRef, header);
  //     }else{setHeaderCustom([...header, '']); // Add a blank header
  //     setTableCustom(tableDataRef)}
  //     //dataStore.updateSheetData(selectedSheet, tableDataRef, header);
  //     }else{
  //   tableDataRef = tableDataRef.map(row => [...row, '']);
  //   setHeaderCustom([...header, '']); // Add a blank header
  //   setTableCustom(tableDataRef)
  // //  dataStore.updateSheetData(selectedSheet, tableDataRef, header);
  //
  // }
  // };

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
      setHeader(sheetData[0]);
      const initialData = sheetData.slice(1);
      setTableData(initialData);
    }
  }, [sheetData]);

  const handleCellChange = (rowIndex, cellIndex, value) => {
    const updatedData = tableData.map((row, i) =>
      i === rowIndex ? row.map((cell, j) => (j === cellIndex ? value : cell)) : row
    );

    setTableData(updatedData);

    // Update the data in dataStore
    dataStore.updateSheetData(selectedSheet, updatedData, header);
  };

  // const handleCellChange = (rowIndex, cellIndex, value) => {
  //   console.log(rowIndex, cellIndex, value)
  //   console.log(xlsxTitle)
  //   console.log(selectedSheet)
  //   const updatedData = tableDataRef.map((row, i) =>
  //      i === rowIndex
  //        ? row.map((cell, j) => (j === cellIndex ? value : cell))
  //        : row
  //    );
  //
  //   dataStore.updateSheetData(selectedSheet, updatedData, header)
  //
  //   tableDataRef = updatedData;
  //   console.log(updatedData)
  //   //dataStore.updateSheetData(selectedSheet, updatedData, header);
  //   console.log('STATE MANAGED CHANGES')
  //   console.log(dataStore)
  // };

  // const handleHeaderChange = (cellIndex, value) => {
  //   const newHeader = headerCustom.map((header, j) =>
  //     j === cellIndex ? value : header
  //   );
  //   setHeaderCustom(newHeader);
  // };
  const handleHeaderChange = (cellIndex, value) => {
    const newHeader = header.map((headerText, j) =>
      j === cellIndex ? value : headerText
    );

    setHeader(newHeader);
  };

  // if (tableDataRef.length === 0 && sheetData) {
  //
  //     header = sheetData[0];
  //     //change this to dataStore.workbook.
  //     const initialData = sheetData.slice(1).map((row, index, arr) => {
  //         if (row.length < arr[arr.length - 1].length) {
  //           // If the current row is shorter, add empty cells to make them the same length
  //           const missingCells = arr[arr.length - 1].length - row.length;
  //           return row.concat(new Array(missingCells).fill(''));
  //         } else {
  //           return row;
  //         }
  //       });
  //     tableDataRef= initialData;
  //   }



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


    return (
      <div className='table-wrap'>
      <div className='elementTitle'>Data Render</div>
        <table className='xlsx-table'
        // {`xlsx-table ${isResizing ? 'resizable' : ''}`}
        // onMouseDown={handleMouseDown}
        >
        {headerCustom.length>0 ?   <thead>
            <tr>
            <th className="resize-handle"></th>
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
                <th key={index} contentEditable   onBlur={(e) => {
                    handleHeaderChange(index, e.target.textContent);
                  }}>{headerText}</th>
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
      ))}
    </tbody>
    :
    <tbody>
      {tableData.map((row, rowIndex) => (
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
      ))}
    </tbody> }
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

        {tableDataRef.length > 0 ?
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
