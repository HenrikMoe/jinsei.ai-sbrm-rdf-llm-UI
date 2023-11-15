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
  stateSubSheet,
}) => {
  // Initialize tableData with an empty array

  console.log('sheettielchange in xlsx ')
  console.log(sheetTitle)
  if(!sheetTitle){
    sheetTitle = ['doi']
  }
  const [tableData, setTableData] = useState([]);
  const [header, setHeader] = useState([]);

  //thi is good j need the render logic rite
  console.log(selectedSheetData)
  useEffect(() => {
    console.log(selectedSheetData)
    if (selectedSheetData) {
      if (selectedSheetData.length > 0){


          const initialData = selectedSheetData;

          // Find the maximum row length in the data
          const maxRowLength = Math.max(...initialData.map(row => row.length));
          console.log('maxrowlength');
          console.log(maxRowLength);


          console.log(initialData)

          var modifiedData = null;
          if(initialData.length !== 1000){
            modifiedData = initialData.slice(1).map((row) => {
          //    // Ensure the row has the correct length
              const filledRow = new Array(maxRowLength).fill('[empty]');
          //
          //    // Fill in the values from the original row
              row.forEach((value, columnIndex) => {
                filledRow[columnIndex] = value !== undefined ? value : '[empty]';
              });
          //
              return filledRow;
            });

          }

            setHeader(initialData[0]);
            if(modifiedData){
              setTableData(modifiedData)
            }else{
              setTableData(initialData.slice(1))
            }
          }else{
            console.log('intheelse')
            setHeader(dataStore.defaultHeaders[sheetTitle])
            setTableData([['empty', 'emptt', "empty"]])
          }
    }else{console.log('intheelse')}
  }, [selectedSheetData, sheetTitle]);




  console.log('running on datastore change');

  const addRow = () => {
    const newRow = new Array(header.length).fill(' ');
    //setTableData([...tableData, newRow]);

    const updatedDataWithNewRow = [...selectedSheetData, newRow];

    setTableData(updatedDataWithNewRow)

    // dataStore.updateSemanticSheetData(sheetTitle, updatedDataWithNewRow, header);
    // if(sheetTitle[0] === 'Rules' || sheetTitle[0] === 'Facts'){
    //   dataStore.updateSemanticSheetData(stateSubSheet, updatedDataWithNewRow, header);
    // }
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


if(!dataStore.semanticWorkbookSheet){dataStore.changeOverLaidModelDefault()}

  const createSchemaElement = () =>{

  }

  const handleCellChange = (rowIndex, cellIndex, value) => {
    console.log('cellcontext')
    console.log(value)
    value = value.replace(/:Add RowDelete RowContext/g, '');

    const updatedData = tableData.map((row, i) =>
      i === rowIndex
        ? row.map((cell, j) => (j === cellIndex ? value : cell))
        : row
    );

    setTableData(updatedData);

    // Update the data in dataStore
    console.log('updatingsheettet')
    console.log(sheetTitle)
    console.log(stateSubSheet)
    dataStore.updateSemanticSheetData(sheetTitle, updatedData, header);
    if(sheetTitle[0] === 'Rules' || sheetTitle[0] === 'Facts'){
      dataStore.updateSemanticSheetData(stateSubSheet, updatedData, header);
    }


    //clear the overlaid
    dataStore.clearOverlaid()
  };

  const handleHeaderChange = (cellIndex, value) => {
    const newHeader = header.map((headerText, j) =>
      j === cellIndex ? value : headerText
    );

    setHeader(newHeader);
    dataStore.updateSheetData(selectedSheet, tableData, newHeader);
  };

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const popupRef = useRef(null);

  const handleCellMouseEnter = (e) => {
  const cell = e.target;
  const cellRect = cell.getBoundingClientRect();

  // Calculate the position for the popup message
  const x = cellRect.left + cellRect.width / 2;
  const y = cellRect.top - 250; // Adjust as needed

  setPopupPosition({ x, y });
  setIsPopupVisible(true);

  // Add the green background class
  cell.classList.add('green-background');
};

const handleCellMouseLeave = (e) => {
  const cell = e.target;

  // Remove the green background class
  cell.classList.remove('green-background');

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



  const [cellMenuVisibility, setCellMenuVisibility] = useState([]);

 // Initialize the cellMenuVisibility state based on the table data
 useEffect(() => {
   if (tableData.length > 0) {
     setCellMenuVisibility(
       Array(tableData.length)
         .fill()
         .map(() => Array(header.length).fill(false))
     );
   } else {
     // Set a default value as a nested array when tableData is empty
     setCellMenuVisibility([]);
   }
 }, [tableData, header]);

 const toggleCellMenu = (rowIndex, cellIndex) => {
   const updatedVisibility = [...cellMenuVisibility];
   updatedVisibility[rowIndex][cellIndex] = !updatedVisibility[rowIndex][cellIndex];
   setCellMenuVisibility(updatedVisibility);
 };

//conditinally render the subtype menu
  return (
    <div className="table-wrap">
      {sheetTitle[0] === 'Facts' ? (
          <div className='schemaRibbon'>
          <div className="elementTitle2">Configure Schema </div>

          <div className='subRibbon' >

          <button className="ribbon-button" onClick={() => createSchemaElement()}>Create (Overide Schema Type or TypeSubType Config)</button>
          <button className="ribbon-button">Change Report Overlay (See Top Banner) </button>
          <button className="ribbon-button">Import Report Overlay (See Top Banner) </button>
          <button className="ribbon-button" data-subsheet="Facts" onClick={() => handleSubSheetSelect('Facts')}>Facts</button>
          <button className="ribbon-button" data-subsheet="Facts-Dimensions"   onClick={() => handleSubSheetSelect('Facts-Dimensions')}>Dimensions</button>
          <button className="ribbon-button" data-subsheet="Facts-Parenthetical"  onClick={() => handleSubSheetSelect('Facts-Parenthetical')}>Parenthetical</button>
          </div>


          <div className='belowSubRibbon'>
          <table className='xlsx-table'
            >
             <thead>
             {dataStore.semanticWorkbookSheet ?
                <tr>
                  {header.map((headerText, index) => (
                    <th key={index} contentEditable
                    onBlur={(e) => {
                        handleHeaderChange(index, e.target.textContent);
                      }}>{headerText}</th>
                  ))}
                </tr> : <tr><td>hello</td></tr>
                }
              </thead>


        <tbody>
          {dataStore.semanticWorkbookSheet ? tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}

                  onMouseEnter={handleCellMouseEnter}
                  onMouseLeave={handleCellMouseLeave}

                >
                <div className='cellWrapper' contentEditable>
                <div
                  className={`unique-menu-container ${
                    cellMenuVisibility[rowIndex] &&
                    cellMenuVisibility[rowIndex][cellIndex] ? 'unique-menu-show' : ''
                  }`}
                >
                  <div className="unique-menu-button" contentEditable={false} onClick={() => toggleCellMenu(rowIndex, cellIndex)}>
                    <span contentEditable={false}>:</span>
                  </div>
                  <div className="unique-popup-menu">
                    {/* Menu content and buttons go here */}
                    <button >Add Row</button>
                    <button >Delete Row</button>
                    <button >Context</button>
                    {/* Add more buttons as needed */}
                  </div>
                </div>
                <div
                  className="cell-content"
                  contentEditable
                  onBlur={(e) => {
                    handleCellChange(rowIndex, cellIndex, e.target.textContent);
                  }}
                >
                  {cell}
                </div>
              </div>
              </td>
              ))}
            </tr>
          )): <tr><td>hello</td></tr>}
        </tbody>

            </table>
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
        ) : sheetTitle[0] === 'Rules' ? (
          <div className='schemaRibbon'>
          <div className="elementTitle2">Configure Schema </div>


          <div className='subRibbon' >
          <button className="ribbon-button" onClick={() => createSchemaElement()}>Create (Overide Schema Type or TypeSubType Config)</button>
          <button className="ribbon-button">Change Report Overlay (See Top Banner) </button>
          <button className="ribbon-button">Import Report Overlay (See Top Banner) </button>
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
             {dataStore.semanticWorkbookSheet ?
                <tr>
                  {header.map((headerText, index) => (
                    <th key={index} contentEditable
                    onBlur={(e) => {
                        handleHeaderChange(index, e.target.textContent);
                      }}>{headerText}</th>
                  ))}
                </tr> : <tr><td>hello</td></tr>
                }
              </thead>


        <tbody>
          {dataStore.semanticWorkbookSheet ? tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  onMouseEnter={handleCellMouseEnter}
                  onMouseLeave={handleCellMouseLeave}

                >
                <div className='cellWrapper'>
                <div
                  className={`unique-menu-container ${
                    cellMenuVisibility[rowIndex] &&
                    cellMenuVisibility[rowIndex][cellIndex] ? 'unique-menu-show' : 'unique-menu-hide'
                  }`}
                >
                  <div className="unique-menu-button" contentEditable={false} onClick={() => toggleCellMenu(rowIndex, cellIndex)}>
                  <span contentEditable={false}>:</span>
                  </div>
                  <div className="unique-popup-menu">
                    {/* Menu content and buttons go here */}
                    <button >Add Row</button>
                    <button >Delete Row</button>
                    <button >Context</button>
                    {/* Add more buttons as needed */}
                  </div>
                </div>
                <div
                  className="cell-content"
                  contentEditable
                  onBlur={(e) => {
                    handleCellChange(rowIndex, cellIndex, e.target.textContent);
                  }}
                >
                  {cell}
                </div>
              </div>
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
                Model-Specific and Cell-Specific Popup Message Status System
              </div>
            ) : null}

          </div>
        ) : (
          <div className="schemaRibbon">
            {/* Top ribbon with three buttons */}
            <div className="elementTitle2">Configure Schema </div>

            <div className='subRibbon'>
            <button className="ribbon-button" onClick={() => createSchemaElement()}>Create (Overide Schema Type or TypeSubType Config)</button>
            <button className="ribbon-button">Change Report Overlay (See Top Banner) </button>
            <button className="ribbon-button">Import Report Overlay (See Top Banner) </button>
            </div>

            {dataStore.semanticWorkbookSheet ?  <div> <table className='xlsx-table'
              >
               <thead>
               {dataStore.semanticWorkbookSheet ?
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
            {dataStore.semanticWorkbookSheet ? tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    onMouseEnter={handleCellMouseEnter}
                    onMouseLeave={handleCellMouseLeave}

                  >
                  <div className='cellWrapper'>
                  <div
                    className={`unique-menu-container ${
                      cellMenuVisibility[rowIndex] &&
                      cellMenuVisibility[rowIndex][cellIndex] ? 'unique-menu-show' : 'unique-menu-hide'
                    }`}
                  >
                    <div className="unique-menu-button" contentEditable={false} onClick={() => toggleCellMenu(rowIndex, cellIndex)} >
                    <span contentEditable={false}>:</span>
                    </div>
                    <div className="unique-popup-menu">
                      {/* Menu content and buttons go here */}
                      <button className='menu-button-cell'>Add Row</button>
                      <button className='menu-button-cell'>Delete Row</button>
                      <button className='menu-button-cell'>Context</button>
                      {/* Add more buttons as needed */}
                    </div>
                  </div>
                  <div
                    className="cell-content"
                    contentEditable
                    onBlur={(e) => {
                      console.log('cellContext')
                      console.log(e.target.textContent)
                      handleCellChange(rowIndex, cellIndex, e.target.textContent);
                    }}
                  >
                    {cell}
                  </div>
                </div>
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
                  Model-Specific and Cell-Specific Popup Message Status System
                </div>
              ) : null}


              </div>
              : <div>null</div>}


          </div>
        )}


      {/* Rest of your component */}
    </div>
  );
};

export default XLSXSheetRenderer;
