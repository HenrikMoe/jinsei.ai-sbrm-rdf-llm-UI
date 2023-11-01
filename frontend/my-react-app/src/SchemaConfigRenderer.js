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
  handleSchemaSubConfigSelection,
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
  console.log(selectedSheetData)
  useEffect(() => {
    if(selectedSheetData){
      console.log(selectedSheetData)
       const initialData = selectedSheetData;
       setHeader(initialData[0]);
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



  // useEffect(() => {
  //   if (dataStore.overLaidModelSheet) {
  //     console.log('sheetdata xlsx render initing ');
  //     console.log(dataStore.overLaidModelSheet)
  //     console.log(dataStore.overLaidModelSheet[0]);
  //     setHeader([dataStore.overLaidModelSheet[0]]);
  //     const initialData = dataStore.overLaidModelSheet.slice(1);
  //     console.log(initialData);
  //     setTableData(initialData);
  //   }
  // }, [dataStore]);

  const [selectedSubSheet, setSelectedSubSheet] = useState([]);

  const handleSubSheetSelect = (subSheet)=>{
    console.log('subsheet selected')
    console.log(subSheet)
    setSelectedSubSheet(subSheet)
    console.log(selectedSubSheet)
    handleSchemaSubConfigSelection(subSheet)

}

useEffect(()=>{
  console.log('useeffecting selectedsub')
  console.log(selectedSubSheet)
  const buttons = document.querySelectorAll('.ribbon-button');
  buttons.forEach((button) => {
    const subSheet = button.getAttribute('data-subsheet'); // Add a "data-subsheet" attribute to your buttons

    if (subSheet === selectedSubSheet) {
      console.log('sub-sheet-button-Highlight')
      console.log(subSheet)
      button.classList.add('selected-button');
      console.log(button.classList)
    } else {
      //console.log('sub-sheet-button-Highlight')
      button.classList.remove('selected-button');
    }
  // if(dataStore.overLaidModelSheet){
  //   dataStore.updateOverLaidModelSheet(sheetTitle)
  // }
})
},[selectedSubSheet])




  const createSchemaElement = () =>{

  }

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
          <button className="ribbon-button" onClick={() => createSchemaElement()}>Create (Overide Schema Type or TypeSubType Config)</button>
          <button className="ribbon-button">Change Report Overlay (See Top Banner) </button>
          <button className="ribbon-button">Import Report Overlay (See Top Banner) </button>
          </div>

          <div className='subRibbon'>
          <button className="ribbon-button" data-subsheet="Facts" onClick={() => handleSubSheetSelect('Facts')}>Facts</button>
          <button className="ribbon-button" data-subsheet="Facts-Dimensions"   onClick={() => handleSubSheetSelect('Facts-Dimensions')}>Dimensions</button>
          <button className="ribbon-button" data-subsheet="Facts-Parenthetical"  onClick={() => handleSubSheetSelect('Facts-Parenthetical')}>Parenthetical</button>
          </div>
          <table className='xlsx-table'
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
            </table>

          </div>
        ) : sheetTitle[0] === 'Rules' ? (
          <div className='schemaRibbon'>


          <div className='subRibbon' >
          <button className="ribbon-button" onClick={() => createSchemaElement()}>Create (Overide Schema Type or TypeSubType Config)</button>
          <button className="ribbon-button">Change Report Overlay (See Top Banner) </button>
          <button className="ribbon-button">Import Report Overlay (See Top Banner) </button>
          </div>


          <div className='subRibbon'>
          <button className="ribbon-button" data-subsheet='Rules-Consistency' onClick={() => handleSubSheetSelect('Rules-Consistency')}>Consistency</button>
          <button className="ribbon-button" data-subsheet='Rules-RollForward' onClick={() => handleSubSheetSelect('Rules-RollForward')}>RollForward</button>
          <button className="ribbon-button" data-subsheet='Rules-MemberAggregation' onClick={() => handleSubSheetSelect('Rules-MemberAggregation')}>Member Aggregation</button>
          <button className="ribbon-button" data-subsheet='Rules-Adjustment' onClick={() => handleSubSheetSelect('Rules-Adjustment')}>Adjustment</button>
          <button className="ribbon-button" data-subsheet='Rules-Variance' onClick={() => handleSubSheetSelect('Rules-Variance')}>Variance</button>
          <button className="ribbon-button" data-subsheet='Rules-Nonstandard' onClick={() => handleSubSheetSelect('Rules-Nonstandard')}>Nonstandard</button>
          </div>
          <table className='xlsx-table'
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
            </table>

          </div>
        ) : (
          <div className="schemaRibbon">
            {/* Top ribbon with three buttons */}
            <div className='subRibbon'>
            <button className="ribbon-button" onClick={() => createSchemaElement()}>Create (Overide Schema Type or TypeSubType Config)</button>
            <button className="ribbon-button">Change Report Overlay (See Top Banner) </button>
            <button className="ribbon-button">Import Report Overlay (See Top Banner) </button>
            </div>

            {dataStore.overLaidModelSheet ?   <table className='xlsx-table'
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
