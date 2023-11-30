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



// {dataStore.semanticStrucutreInstance ? (
//   <tr>
//     {dataStore.semanticStrucutreInstance.map((headerText, index) => (
//       <th key={index} contentEditable onBlur={(e) => handleHeaderChange(index, e.target.textContent)}>
//         {headerText}
//       </th>
//     ))}
//   </tr>
// ) : (
//   <tr><td>Empty Header</td></tr>
// )}

return (
    <div className='structureInstanceWrap2'>
  <div className="elementTitle5">Report Viewing and Editing </div>

  <div className='reportWraper'>
  <XBRLComponentTaxonomy dataStore={dataStore}/>
  <div className='reportHeaderWrapper'>
  <div
    className='reportHeader'
    onClick={() => handleIsRendering()}
    style={{
      backgroundColor: isRendering ? 'lightgreen' : 'initial',
      padding: '10px'
    }}
  >
     Rendering
  </div>
  <div className='reportHeader'
  onClick={()=>handleIsModel()}
  style={{
    backgroundColor: isModel ? 'lightgreen' : 'initial',
    padding: '10px'
  }}>Model</div>
  <div className='reportHeader' onClick={()=>handleIsFactTable()}
  style={{
    backgroundColor: isFactTable ? 'lightgreen' : 'initial',
    padding: '10px'
  }}>Fact Table</div>
  <div className='reportHeader' onClick={()=>handleIsRules()}
  style={{
    backgroundColor: isRules ? 'lightgreen' : 'initial',
    padding: '10px'
  }}>Rules</div>
  <div className='reportHeader' onClick={()=>handleIsVerification()}
  style={{
    backgroundColor: isVerification ? 'lightgreen' : 'initial',
    padding: '10px'
  }}>Verification</div>
  <div className='reportHeader' onClick={()=>handleIsReportElements()}
  style={{
    backgroundColor: isReportElements ? 'lightgreen' : 'initial',
    padding: '10px'
  }}>Report Elements</div>
  </div>
  <div className='balance-sheet'>
  <div>
      </div>

      <div className='reportWrap'>




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
        <tr>
          <th>Reporting Entity [Aspect]	</th>
          <td>GH259400TOMPUOLS65II | http://standards.iso.org/iso/17442</td>
        </tr>
        <tr>
          <th>Unit [Aspect]	</th>
          <td>iso4217:USD</td>
        </tr>
      </thead>
      </table>

      <table className='balance-sheet-table'>
      <thead>
      <tr>
        <th></th>
        <td>Period Aspect</td>
      </tr>
      <tr>
        <th>Concept [Aspect]</th>
        <td>2022-12-31</td>
        <td>2021-12-31</td>

      </tr>
      </thead>

      <tbody>
        {dataStore.assetRollUpReportDataExample1 ? dataStore.assetRollUpReportDataExample1[0].map((row, rowIndex) => (
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

            {dataStore.assetRollUpReportDataExample1[1].map((cell, cellIndex)=>(
              <td
                key={cellIndex}
                contentEditable
                onMouseEnter={handleCellMouseEnter}
                onMouseLeave={handleCellMouseLeave}
                onBlur={(e) => handleCellChange(rowIndex, cellIndex, e.target.textContent)}
              >
              {cell}
              </td>
            ))
            }
          </tr>
        )) : (
          <tr><td>No Data</td></tr>
        )}
      </tbody>

      <tbody>
        <tr><th>Assets</th></tr>
      </tbody>


      <tbody>
        {dataStore.assetRollUpReportDataExample1 ? dataStore.assetRollUpReportDataExample1[0].map((row, rowIndex) => (
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

            {dataStore.assetRollUpReportDataExample1[1].map((cell, cellIndex)=>(
              <td
                key={cellIndex}
                contentEditable
                onMouseEnter={handleCellMouseEnter}
                onMouseLeave={handleCellMouseLeave}
                onBlur={(e) => handleCellChange(rowIndex, cellIndex, e.target.textContent)}
              >
              {cell}
              </td>
            ))
            }
          </tr>
        )) : (
          <tr><td>No Data</td></tr>
        )}
      </tbody>

      <tbody>
        <tr><th>Liabilities</th></tr>
      </tbody>


      <tbody>
        {dataStore.assetRollUpReportDataExample1 ? dataStore.assetRollUpReportDataExample1[0].map((row, rowIndex) => (
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

            {dataStore.assetRollUpReportDataExample1[1].map((cell, cellIndex)=>(
              <td
                key={cellIndex}
                contentEditable
                onMouseEnter={handleCellMouseEnter}
                onMouseLeave={handleCellMouseLeave}
                onBlur={(e) => handleCellChange(rowIndex, cellIndex, e.target.textContent)}
              >
              {cell}
              </td>
            ))
            }
          </tr>
        )) : (
          <tr><td>No Data</td></tr>
        )}

      </tbody>

      <tbody>
        <tr><th>Equity</th><td> </td><td> </td></tr>
      </tbody>

      <tbody>
        <tr><th>Liabilities and Equity</th><td> </td></tr>
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
