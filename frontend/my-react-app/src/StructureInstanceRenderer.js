import React, { useState, useEffect, useRef } from 'react';
import './StructureInstanceTable.css'; // Import your CSS file
import Footer from './Footer';
import XBRLComponentTaxonomy from './XBRLComponentTaxonomy'

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
        const initialData = dataStore.semanticStrucutreInstance;
        console.log('structdatainstance')
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
    console.log('mouse entered')

    const cell = e.target;
    const cellRect = cell.getBoundingClientRect();

    // Calculate the position for the popup message
    const x = cellRect.left + cellRect.width / 2;
    const y = cellRect.top + 300; // Adjust as needed

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

const [isRendering, setIsRendering] = useState(false);
const [isModel, setIsModel] = useState(false);
const [isFactTable, setIsFactTable] = useState(false);
const [isRules, setIsRules] = useState(false);
const [isVerification, setIsVerification] = useState(false);
const [isReportElements, setIsReportElements] = useState(false);


const handleIsRendering = ()=>{
  setIsRendering(true)
  setIsModel(false)
  setIsFactTable(false)
  setIsReportElements(false)
  setIsVerification(false)
  setIsRules(false)
}

const handleIsModel = ()=>{
  setIsRendering(false)
  setIsModel(true)
  setIsFactTable(false)
  setIsReportElements(false)
  setIsVerification(false)
  setIsRules(false)
}

const handleIsFactTable = ()=>{
  setIsRendering(false)
  setIsModel(false)
  setIsFactTable(true)
  setIsReportElements(false)
  setIsVerification(false)
  setIsRules(false)
}

const handleIsRules = ()=>{
  setIsRendering(false)
  setIsModel(false)
  setIsFactTable(false)
  setIsReportElements(false)
  setIsVerification(false)
  setIsRules(true)
}
const handleIsVerification = ()=>{
  setIsRendering(false)
  setIsModel(false)
  setIsFactTable(false)
  setIsReportElements(false)
  setIsVerification(true)
  setIsRules(false)
}
const handleIsReportElements = ()=>{
  setIsRendering(false)
  setIsModel(false)
  setIsFactTable(false)
  setIsReportElements(true)
  setIsVerification(false)
  setIsRules(false)
}



return (
    <div className='structureInstanceWrap2'>
  <div className="elementTitle5">Report Viewing and Editing </div>

  <div className='reportWraper'>
  <XBRLComponentTaxonomy dataStore={dataStore}/>
  <div className='balance-sheet'>
  <div>
      </div>

      <div className='reportWrap'>

      <div className='reportHeaderWrapper'>
      <div className='reportHeader' onClick={()=>handleIsRendering()}>Rendering</div>
      <div className='reportHeader' onClick={()=>handleIsModel()}>Model</div>
      <div className='reportHeader' onClick={()=>handleIsFactTable()}>Fact Table</div>
      <div className='reportHeader' onClick={()=>handleIsRules()}>Rules</div>
      <div className='reportHeader' onClick={()=>handleIsVerification()}>Verification</div>
      <div className='reportHeader' onClick={()=>handleIsReportElements()}>Report Elements</div>
      </div>


      {isRendering ? <div>
          <div className='reportHeaderWrapper'>
      <div className='reportHeader'>Import</div>
      <div className='reportHeader'>Export</div>
      <div className='reportHeader'>FullScreen</div>
      <div className='reportHeader'>Attach to Process</div>
      <div className='reportHeader'>View</div>
      </div>

      <table className='balance-sheet-table'>
      <thead>
        {dataStore.semanticStrucutreInstanceTaxonomy ? (
          <tr>
            {header.map((headerText, index) => (
              <th key={index} contentEditable onBlur={(e) => handleHeaderChange(index, e.target.textContent)}>
                {headerText}
              </th>
            ))}
          </tr>
        ) : (
          <tr><td>Empty Header</td></tr>
        )}
      </thead>

      <tbody>
        {dataStore.semanticStrucutreInstance ? tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                contentEditable
                onMouseEnter={handleCellMouseEnter}
                onMouseLeave={handleCellMouseLeave}
                onBlur={(e) => handleCellChange(rowIndex, cellIndex, e.target.textContent)}
              >
                {cell}
              </td>
            ))}
          </tr>
        )) : (
          <tr><td>No Data</td></tr>
        )}
      </tbody>
    </table>
    {tableData.length > 0 ? (
      <div className="buttons-wrap">
        <button className="table-button" onClick={addRow}>
          Add Row
        </button>
        <button className="table-button" onClick={addColumn}>
          Add Column
        </button>
      </div>
    ) : (
      <div className="table-button">N/A</div>
    )}
    </div> : <div></div>}


    {isModel ? <div>


  
  {tableData.length > 0 ? (
    <div className="buttons-wrap">
      <button className="table-button" onClick={addRow}>
        Add Row
      </button>
      <button className="table-button" onClick={addColumn}>
        Add Column
      </button>
    </div>
  ) : (
    <div className="table-button">N/A</div>
  )}
  </div> : <div></div>}


      </div>

    {isPopupVisible ? (
      <div
        className="popup-message"
        style={{
          top: `${popupPosition.y}px`,
          left: `${popupPosition.x}px`,
        }}
        ref={popupRef}
      >
        Model-Specific and Cell-Specific Popup Message Status System
      </div>
    ) : null}


  </div>
  </div>

  </div>
  );

};

export default XLSXSheetRenderer;
