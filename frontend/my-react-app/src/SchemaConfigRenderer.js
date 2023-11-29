import React, { useState, useEffect, useRef } from 'react';
import './XLSXSheetRenderer.css'; // Import your CSS file
import Footer from './Footer';
import Popup from './Popup';
import Upload from './Upload';
import Delete from './Delete'
import Project from './Project'
import Transform from './Transform'
import Pipeline from './Pipeline'
import Files from './Files'
import Projects from './Projects'
import Model from './Model'
import Modal from './Modal'
import ProcessModal from './ProcessModal'

const XLSXSheetRenderer = ({
  overlaidModelName,
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
  handleOverlayChange,
  handleOverlaidSelection,
  onFileUpload,
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
              const filledRow = new Array(maxRowLength).fill('------');
          //
          //    // Fill in the values from the original row
              row.forEach((value, columnIndex) => {
                filledRow[columnIndex] = value !== undefined ? value : '------';
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
            setTableData([])
          }
    }else{console.log('intheelse')}
  }, [selectedSheetData, sheetTitle]);


  useEffect(() => {
    console.log('overlausinsadfasdf')
    console.log(overlaidModelName)
    //woohoo we have the new overlay name

    // Update the selected sheet when the sheetTitle prop changes
  }, [overlaidModelName]);



  console.log('running on datastore change');

  const addRow = () => {
    const newRow = new Array(header.length).fill('------');
    //setTableData([...tableData, newRow]);
    console.log('addingrowonooverlay')
    console.log(newRow)
    console.log(tableData)
    if (tableData.length < 500) {
      setTableData((prevTableData) => [...prevTableData, newRow], () => {
        console.log(tableData);
      });
    } else {
      setTableData([newRow], () => {
        console.log(tableData);
      });
    }


    dataStore.updateSemanticSheetData(sheetTitle, tableData, header);
    if(sheetTitle[0] === 'Rules' || sheetTitle[0] === 'Facts'){
      dataStore.updateSemanticSheetData(stateSubSheet, tableData, header);
    }
  };

  const deleteRow = (rowIndex) => {
    const updatedData = [...tableData];

    if (tableData.length < 500) {

      updatedData.splice(rowIndex, 1);

      setTableData(updatedData, () => {
        console.log(tableData);
      });
    }

      dataStore.updateSemanticSheetData(sheetTitle, updatedData, header);

      if (sheetTitle[0] === 'Rules' || sheetTitle[0] === 'Facts') {
        dataStore.updateSemanticSheetData(stateSubSheet, updatedData, header);
      }

  };


  const addColumn = () => {
    const newHeader = [...header, 'New Column'];
    setHeader(newHeader);

    const newData = tableData.map((row) => [...row, '------']);
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
    value = value.replace(/:Add RowDelete RowContext/g, '------');

    const updatedData = tableData.map((row, i) =>
      i === rowIndex
        ? row.map((cell, j) => (j === cellIndex ? value : cell))
        : row
    );
    dataStore.updateSemanticSheetData(sheetTitle, updatedData, header);
    if(sheetTitle[0] === 'Rules' || sheetTitle[0] === 'Facts'){
      dataStore.updateSemanticSheetData(stateSubSheet, updatedData, header);
    }

    console.log('weshouldbeihgipna')


    //clear the overlaid
    dataStore.clearOverlaid()

    setTableData(updatedData);

    // Update the data in dataStore
    console.log('updatingsheettet')
    console.log(sheetTitle)
    console.log(stateSubSheet)


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

  const handleCellMouseEnter = (e, rowIndex, cellIndex) => {
    const cell = e.target;
    const cellRect = cell.getBoundingClientRect();
    setHoveredCell({ rowIndex, cellIndex });
    console.log('asdfasasdf')
    console.log(rowIndex,cellIndex )

    // Calculate the position for the popup message
    const x = cellRect.left + cellRect.width / 2;
    const y = cellRect.top - 100; // Adjust as needed

    setPopupPosition({ x, y });
    setIsPopupVisible(true);

    // Add the green background class
    //cell.classList.add('green-background');
  };

const [hoveredCell, setHoveredCell] = useState({ rowIndex: null, cellIndex: null });


const handleCellMouseLeave = (e) => {
  const cell = e.target;
  setHoveredCell({ rowIndex: null, cellIndex: null });

  // Remove the green background class
  cell.classList.remove('green-background');

  setIsPopupVisible(false);
};

//const popupRef = useRef();
const [isPopupVisible2, setIsPopupVisible2] = useState(false);

  useEffect(() => {
    // Function to handle clicks outside of the popup
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        // Clicked outside the popup, close it
        // Add logic to close your popup menu here
        setIsPopupVisible2(false);

        console.log('Clicked outside the popup, close it');
      }
    };

    // Add event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

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


  const handleRowBlur = (rowIndex, event) => {
    // Handle blur event for the entire row here
    console.log(`Row ${rowIndex} blurred. Content: ${event.target.textContent}`);
    // You can perform any additional actions needed when a row loses focus
  };
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
 const handleButtonClick = (buttonValue) => {
    const updatedData = [...tableData];
    updatedData[hoveredCell.rowIndex][hoveredCell.cellIndex] = buttonValue;
    setTableData(updatedData);
    // You may want to update dataStore or perform other actions as needed
  };

  const [xlsxData, setXLSXData] = useState(null);
console.log(onFileUpload)

const [clear, setClear] = useState(null);

const handleClearTrue = ()=>{
  setClear(true)
}

const handleClearFalse = ()=>{
  setClear(false)
}


const [isModal, setIsModal] = useState(false);

const setIsModalOn =()=>{
  setIsModal(true)
}

const setModalOff =()=>{
  setIsModal(false)
}

console.log('isModal')

console.log(isModal)

//model passed objs ; handleOverlayChange={handleOverlayChange} handleClearFalse={handleClearFalse} clear={clear} sheetTitle={sheetTitle} handleOverlaidSelection={handleOverlaidSelection} dataStore={dataStore}
//popup ; onFileUpload={onFileUpload}
//delete ;  handleClearTrue={handleClearTrue} dataStore={dataStore}

  return (

    <div className="table-wrap">
      {sheetTitle[0] === 'Facts' ? (
          <div className='schemaRibbon'>
          <div className="elementTitle2">Configure Schema </div>

          <div className='button-wrapAY'>
          <Model   />
          <Popup />
          <Delete />
          <Upload />
          <button className="ribbon-button" onClick={() => createSchemaElement()}>Publish Overlay</button>
        </div>

          <div className='subRibbon' >


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
            <tr key={rowIndex}  >
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
                    <button onClick={addRow} >Insert Row</button>
                    <button onClick={() => deleteRow(rowIndex)}>Delete Row</button>

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

          <div className='button-wrapAY'>
          <Model   />
          <Popup />
          <Delete />
          <Upload />
          <button className="ribbon-button" onClick={() => createSchemaElement()}>Publish Overlay</button>

        </div>

          <div className='subRibbon' >
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
            <tr key={rowIndex} >
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
                    <button onClick={addRow}>Insert Row</button>
                    <button onClick={() => deleteRow(rowIndex)}>Delete Row</button>
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
            <div class='bottomButtonWrap'>
            <button class='addrowButton' onClick={addRow} >Add Row</button>
            <button class='addrowButton'  >Publish Schema</button>
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
        ) : (
          <div className="schemaRibbon">
            {/* Top ribbon with three buttons */}
            <div className="elementTitle2">Configure Schema </div>

            {isModal? <Modal setModalOff={setModalOff} isModal={isModal}/> : <div></div>}



            <div className='button-wrapAY'>
            <Model  setIsModal={setIsModalOn} handleOverlayChange={handleOverlayChange} handleClearFalse={handleClearFalse} clear={clear} sheetTitle={sheetTitle} handleOverlaidSelection={handleOverlaidSelection} dataStore={dataStore}/>
            <Popup onFileUpload={onFileUpload} />
            <Delete  handleClearTrue={handleClearTrue} dataStore={dataStore} />
            <button className="ribbon-button" onClick={() => createSchemaElement()}>Publish Overlay</button>
            <button className="ribbon-button" onClick={() => createSchemaElement()}>Report</button>

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
              <tr key={rowIndex} >
                {row.map((cell, cellIndex) => (
                  <td style={{ backgroundColor: rowIndex % 2 === 0 ? '#F8FAFC' : '#f5f5f5' }}
                    key={cellIndex}
                    onMouseEnter={(e) => handleCellMouseEnter(e, rowIndex, cellIndex)}
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
                    <div className={`unique-popup-menu ${isPopupVisible ? 'visible' : 'hidden'}`} ref={popupRef}>
                      {/* Menu content and buttons go here */}

                      {header[cellIndex] === 'Code' && (
                        <button onClick={() => handleButtonClick('Import')} className='menu-button-cell'>'Import'</button>
                        )}

                        {header[cellIndex] === 'Taxonomy' && (
                          <button onClick={() => handleButtonClick('AASB 1060')} className='menu-button-cell'>'AASB 1060'</button>
                          )}
                          {header[cellIndex] === 'Taxonomy' && (
                            <button onClick={() => handleButtonClick('Accounting Equation')} className='menu-button-cell'>'Accounting Equation'</button>
                            )}

                            {header[cellIndex] === 'Taxonomy' && (
                              <button onClick={() => handleButtonClick('SFAC 6')} className='menu-button-cell'>'SFAC 6'</button>
                              )}
                              {header[cellIndex] === 'Taxonomy' && (
                                <button onClick={() => handleButtonClick('SFAC 8')} className='menu-button-cell'>'SFAC 8'</button>
                                )}
                                {header[cellIndex] === 'Taxonomy' && (
                                  <button onClick={() => handleButtonClick('Common')} className='menu-button-cell'>'Common'</button>
                                  )}
                                  {header[cellIndex] === 'Taxonomy' && (
                                    <button onClick={() => handleButtonClick('MINI')} className='menu-button-cell'>'MINI'</button>
                                    )}

                                    {header[cellIndex] === 'Taxonomy' && (
                                      <button onClick={() => handleButtonClick('PROOF')} className='menu-button-cell'>'PROOF'</button>
                                      )}

                        {header[cellIndex] === 'NamespacePrefix' && (
                          <button onClick={() => handleButtonClick('Prefix')} className='menu-button-cell'>'Prefix'</button>
                          )}

                          {header[cellIndex] === 'DefaultLanguage' && (
                            <button onClick={() => handleButtonClick('EN')} className='menu-button-cell'>'EN'</button>
                            )}

                            {header[cellIndex] === 'DefaultLanguage' && (
                              <button onClick={() => handleButtonClick('FR')} className='menu-button-cell'>'FR'</button>
                              )}

                              {header[cellIndex] === 'DefaultLanguage' && (
                                <button onClick={() => handleButtonClick('DE')} className='menu-button-cell'>'DE'</button>
                                )}
                                {header[cellIndex] === 'DefaultLanguage' && (
                                  <button onClick={() => handleButtonClick('JP')} className='menu-button-cell'>'JP'</button>
                                  )}



                       {header[cellIndex] === 'ReportElementCategory' && (
                          <button onClick={() => handleButtonClick('Hypercube')} className='menu-button-cell'>'Hypercube'</button>
                        )}
                        {header[cellIndex] === 'ReportElementCategory' && (
                           <button onClick={() => handleButtonClick('Dimension')} className='menu-button-cell'>'Dimension'</button>
                         )}
                         {header[cellIndex] === 'ReportElementCategory' && (
                            <button onClick={() => handleButtonClick('Member')} className='menu-button-cell'>'Member'</button>
                          )}
                          {header[cellIndex] === 'ReportElementCategory' && (
                             <button onClick={() => handleButtonClick('LineItems')} className='menu-button-cell'>'LineItems'</button>
                           )}
                           {header[cellIndex] === 'ReportElementCategory' && (
                              <button onClick={() => handleButtonClick('Abstract')} className='menu-button-cell'>'Abstract'</button>
                            )}
                            {header[cellIndex] === 'ReportElementCategory' && (
                               <button onClick={() => handleButtonClick('Concept')} className='menu-button-cell'>'Concept'</button>
                             )}
                             {header[cellIndex] === 'LabelRole' && (
                                <button onClick={() => handleButtonClick('Standard')} className='menu-button-cell'>'Standard'</button>
                              )}

                              {header[cellIndex] === 'LabelRole' && (
                                 <button onClick={() => handleButtonClick('PeriodStart')} className='menu-button-cell'>'PeriodStart'</button>
                               )}


                             {header[cellIndex] === 'LabelRole' && (
                                <button onClick={() => handleButtonClick('PeriodEnd')} className='menu-button-cell'>'PeriodEnd'</button>
                              )}

                              {header[cellIndex] === 'LabelRole' && (
                                 <button onClick={() => handleButtonClick('Documentation')} className='menu-button-cell'>'Documentation'</button>
                               )}

                               {header[cellIndex] === 'LabelRole' && (
                                  <button onClick={() => handleButtonClick('Negated')} className='menu-button-cell'>'Negated'</button>
                                )}

                                {header[cellIndex] === 'LabelRole' && (
                                     <button onClick={() => handleButtonClick('OriginallyStated')} className='menu-button-cell'>'OriginallyStated'</button>
                                   )}
                        {header[cellIndex] === 'LabelRole' && (
                           <button onClick={() => handleButtonClick('Restated')} className='menu-button-cell'>'Restated'</button>
                         )}
                         {header[cellIndex] === 'LabelRole' && (
                            <button onClick={() => handleButtonClick('ExampleGuidance')} className='menu-button-cell'>'ExampleGuidance'</button>
                          )}
                          {header[cellIndex] === 'LabelRole' && (
                             <button onClick={() => handleButtonClick('CommentaryGuidance')} className='menu-button-cell'>'CommentaryGuidance'</button>
                           )}
                           {header[cellIndex] === 'LabelRole' && (
                              <button onClick={() => handleButtonClick('DefinitionGuidance')} className='menu-button-cell'>'DefinitionGuidance'</button>
                            )}
                            {header[cellIndex] === 'LabelRole' && (
                               <button onClick={() => handleButtonClick('VerboseLabel')} className='menu-button-cell'>'VerboseLabel'</button>
                             )}
                             {header[cellIndex] === 'LabelRole' && (
                                <button onClick={() => handleButtonClick('TerseLabel')} className='menu-button-cell'>'TerseLabel'</button>
                              )}
                              {header[cellIndex] === 'LabelRole' && (
                                 <button onClick={() => handleButtonClick('TotalLabel')} className='menu-button-cell'>'TotalLabel'</button>
                               )}
                               {header[cellIndex] === 'LabelRole' && (
                                  <button onClick={() => handleButtonClick('$OrigionallyStated')} className='menu-button-cell'>'$OrigionallyStated'</button>
                                )}

                      <button onClick={addRow} className='menu-button-cell'>Insert Row</button>
                      <button onClick={() => deleteRow(rowIndex)} className='menu-button-cell'>Delete Row</button>


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
              <div class='bottomButtonWrap'>
              <button class='addrowButton' onClick={addRow} >Add Row</button>
              <button class='addrowButton'  >Publish Schema</button>
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
              : <div>null</div>}


          </div>
        )}


      {/* Rest of your component */}
    </div>
  );
};

export default XLSXSheetRenderer;
