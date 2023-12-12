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
    const y = cellRect.top - 150; // Adjust as needed

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

const [isRendering, setIsRendering] = useState(true);
const [isModel, setIsModel] = useState(false);
const [isFactTable, setIsFactTable] = useState(false);
const [isRules, setIsRules] = useState(false);
const [isVerification, setIsVerification] = useState(false);
const [isReportElements, setIsReportElements] = useState(false);
const [isAttachToProcess, setIsAttachToProcess] = useState(false);

useEffect(() => {
  if (isModel) {
    console.log('sheetdata xlsx render initing ');
  //  console.log('header' + sheetData[0]);
    if(dataStore.isModelInstance){
      console.log(dataStore.isModelInstance[0])
      setHeader(dataStore.isModelInstance);
      const initialData = dataStore.isModelInstance;
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
}, [isModel]);


useEffect(() => {
  if (isFactTable) {
    console.log('sheetdata xlsx render initing ');
  //  console.log('header' + sheetData[0]);
    if(dataStore.isFactTable){
      console.log(dataStore.isFactTable[0])
      setHeader(dataStore.isFactTable);
      const initialData = dataStore.isFactTable;
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
}, [isFactTable]);

useEffect(() => {
  if (isRules) {
    console.log('rulerle ');
  //  console.log('header' + sheetData[0]);
    if(dataStore.isRules){
      console.log(dataStore.isRules[0])
      setHeader(dataStore.isRules);
      const initialData = dataStore.isRules;
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
}, [isRules]);


useEffect(() => {
  if (isVerification) {
    console.log('rulerle ');
  //  console.log('header' + sheetData[0]);
    if(dataStore.isVerification){
      console.log(dataStore.isVerification[0])
      setHeader(dataStore.isVerification);
      const initialData = dataStore.isVerification;
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
}, [isVerification]);


useEffect(() => {
  if (isReportElements) {
    console.log('rulerle ');
  //  console.log('header' + sheetData[0]);
    if(dataStore.isReportElements){
      console.log(dataStore.isReportElements[0])
      setHeader(dataStore.isReportElements);
      const initialData = dataStore.isReportElements;
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
}, [isReportElements]);



const handleIsRendering = ()=>{
  setIsRendering(true)
  setIsModel(false)
  setIsFactTable(false)
  setIsReportElements(false)
  setIsVerification(false)
  setIsRules(false)
  setIsAttachToProcess(false)

}

const handleIsModel = ()=>{
  setIsRendering(false)
  setIsModel(true)
  setIsFactTable(false)
  setIsReportElements(false)
  setIsVerification(false)
  setIsRules(false)
  setIsAttachToProcess(false)

}

const handleIsFactTable = ()=>{
  setIsRendering(false)
  setIsModel(false)
  setIsFactTable(true)
  setIsReportElements(false)
  setIsVerification(false)
  setIsRules(false)
  setIsAttachToProcess(false)

}

const handleIsRules = ()=>{
  setIsRendering(false)
  setIsModel(false)
  setIsFactTable(false)
  setIsReportElements(false)
  setIsVerification(false)
  setIsRules(true)
  setIsAttachToProcess(false)

}
const handleIsVerification = ()=>{
  setIsRendering(false)
  setIsModel(false)
  setIsFactTable(false)
  setIsReportElements(false)
  setIsVerification(true)
  setIsRules(false)
  setIsAttachToProcess(false)

}
const handleIsReportElements = ()=>{
  setIsRendering(false)
  setIsModel(false)
  setIsFactTable(false)
  setIsReportElements(true)
  setIsVerification(false)
  setIsRules(false)
  setIsAttachToProcess(false)

}


const handleAttachToProcessTab = ()=>{
  setIsRendering(false)
  setIsModel(false)
  setIsFactTable(false)
  setIsReportElements(false)
  setIsVerification(false)
  setIsRules(false)
  setIsAttachToProcess(true)
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
const [isSFAC6Component1, setIsSFAC6Component1] = useState(true)
const [isSFAC6Component2, setIsSFAC6Component2] = useState(false)
const [isSFAC6Component3, setIsSFAC6Component3] = useState(false)
const [isSFAC6Component4, setIsSFAC6Component4] = useState(false)
const [isSFAC6Component5, setIsSFAC6Component5] = useState(false)
const [isSFAC6Component6, setIsSFAC6Component6] = useState(false)
const [isSFAC6Component7, setIsSFAC6Component7] = useState(false)
const [isSFAC6Component8, setIsSFAC6Component8] = useState(false)
const [isSFAC6Component9, setIsSFAC6Component9] = useState(false)
const [isSFAC6Component10, setIsSFAC6Component10] = useState(false)
const [isSFAC6Component11, setIsSFAC6Component11] = useState(false)
const [isSFAC6Component12, setIsSFAC6Component12] = useState(false)
const [isSFAC6Component13, setIsSFAC6Component13] = useState(false)
const [isSFAC6Component14, setIsSFAC6Component14] = useState(false)



const setStrucutreComponentItem = (title)=>{
  if(title==='01 - {HyperCube} Balance Sheet'){
    setIsSFAC6Component1(true)
    setIsSFAC6Component2(false)
    setIsSFAC6Component3(false)
    setIsSFAC6Component4(false)
    setIsSFAC6Component5(false)
    setIsSFAC6Component6(false)
    setIsSFAC6Component7(false)
    setIsSFAC6Component8(false)
    setIsSFAC6Component9(false)
    setIsSFAC6Component10(false)
    setIsSFAC6Component11(false)
    setIsSFAC6Component12(false)
    setIsSFAC6Component13(false)
    setIsSFAC6Component14(false)

    setIsRendering(true)
    setIsAttachToProcess(false)
    setIsModel(false)
    setIsFactTable(false)
    setIsRules(false)
    setIsVerification(false)
    setIsReportElements(false)



  }
  else if(title==='02 - {HyperCube} Net Assets'){
    setIsSFAC6Component1(false)
    setIsSFAC6Component2(true)
    setIsSFAC6Component3(false)
    setIsSFAC6Component4(false)
    setIsSFAC6Component5(false)
    setIsSFAC6Component6(false)
    setIsSFAC6Component7(false)
    setIsSFAC6Component8(false)
    setIsSFAC6Component9(false)
    setIsSFAC6Component10(false)
    setIsSFAC6Component11(false)
    setIsSFAC6Component12(false)
    setIsSFAC6Component13(false)
    setIsSFAC6Component14(false)

    setIsRendering(true)
    setIsAttachToProcess(false)
    setIsModel(false)
    setIsFactTable(false)
    setIsRules(false)
    setIsVerification(false)
    setIsReportElements(false)



  }
  else if(title==='03 - {HyperCube} Income Statement'){
    setIsSFAC6Component1(false)
    setIsSFAC6Component2(false)
    setIsSFAC6Component3(true)
    setIsSFAC6Component4(false)
    setIsSFAC6Component5(false)
    setIsSFAC6Component6(false)
    setIsSFAC6Component7(false)
    setIsSFAC6Component8(false)
    setIsSFAC6Component9(false)
    setIsSFAC6Component10(false)
    setIsSFAC6Component11(false)
    setIsSFAC6Component12(false)
    setIsSFAC6Component13(false)
    setIsSFAC6Component14(false)

    setIsRendering(true)
    setIsAttachToProcess(false)
    setIsModel(false)
    setIsFactTable(false)
    setIsRules(false)
    setIsVerification(false)
    setIsReportElements(false)



  }
  else if(title==='04 - {HyperCube} Income Statement Alternative'){
    setIsSFAC6Component1(false)
    setIsSFAC6Component2(false)
    setIsSFAC6Component3(false)
    setIsSFAC6Component4(true)
    setIsSFAC6Component5(false)
    setIsSFAC6Component6(false)
    setIsSFAC6Component7(false)
    setIsSFAC6Component8(false)
    setIsSFAC6Component9(false)
    setIsSFAC6Component10(false)
    setIsSFAC6Component11(false)
    setIsSFAC6Component12(false)
    setIsSFAC6Component13(false)
    setIsSFAC6Component14(false)

    setIsRendering(true)
    setIsAttachToProcess(false)
    setIsModel(false)
    setIsFactTable(false)
    setIsRules(false)
    setIsVerification(false)
    setIsReportElements(false)



  }

  else if(title==='05 - {HyperCube} Comperhensive Income'){
    setIsSFAC6Component1(false)
    setIsSFAC6Component2(false)
    setIsSFAC6Component3(false)
    setIsSFAC6Component4(false)
    setIsSFAC6Component5(true)
    setIsSFAC6Component6(false)
    setIsSFAC6Component7(false)
    setIsSFAC6Component8(false)
    setIsSFAC6Component9(false)
    setIsSFAC6Component10(false)
    setIsSFAC6Component11(false)
    setIsSFAC6Component12(false)
    setIsSFAC6Component13(false)
    setIsSFAC6Component14(false)

    setIsRendering(true)
    setIsAttachToProcess(false)
    setIsModel(false)
    setIsFactTable(false)
    setIsRules(false)
    setIsVerification(false)
    setIsReportElements(false)



  }
  else if(title==='06 - {HyperCube} Cash Flow'){
    setIsSFAC6Component1(false)
    setIsSFAC6Component2(false)
    setIsSFAC6Component3(false)
    setIsSFAC6Component4(false)
    setIsSFAC6Component5(false)
    setIsSFAC6Component6(true)
    setIsSFAC6Component7(false)
    setIsSFAC6Component8(false)
    setIsSFAC6Component9(false)
    setIsSFAC6Component10(false)
    setIsSFAC6Component11(false)
    setIsSFAC6Component12(false)
    setIsSFAC6Component13(false)
    setIsSFAC6Component14(false)

    setIsRendering(true)
    setIsAttachToProcess(false)
    setIsModel(false)
    setIsFactTable(false)
    setIsRules(false)
    setIsVerification(false)
    setIsReportElements(false)


  }
  else if(title==='07 - {HyperCube} Prior Period Errors'){
    setIsSFAC6Component1(false)
    setIsSFAC6Component2(false)
    setIsSFAC6Component3(false)
    setIsSFAC6Component4(false)
    setIsSFAC6Component5(false)
    setIsSFAC6Component6(false)
    setIsSFAC6Component7(true)
    setIsSFAC6Component8(false)
    setIsSFAC6Component9(false)
    setIsSFAC6Component10(false)
    setIsSFAC6Component11(false)
    setIsSFAC6Component12(false)
    setIsSFAC6Component13(false)
    setIsSFAC6Component14(false)

    setIsRendering(true)
    setIsAttachToProcess(false)
    setIsModel(false)
    setIsFactTable(false)
    setIsRules(false)
    setIsVerification(false)
    setIsReportElements(false)



  }
  else if(title==='08 - {HyperCube} Prior Period Errors (Alternative)'){
    setIsSFAC6Component1(false)
    setIsSFAC6Component2(false)
    setIsSFAC6Component3(false)
    setIsSFAC6Component4(false)
    setIsSFAC6Component5(false)
    setIsSFAC6Component6(false)
    setIsSFAC6Component7(false)
    setIsSFAC6Component8(true)
    setIsSFAC6Component9(false)
    setIsSFAC6Component10(false)
    setIsSFAC6Component11(false)
    setIsSFAC6Component12(false)
    setIsSFAC6Component13(false)
    setIsSFAC6Component14(false)

    setIsRendering(true)
    setIsAttachToProcess(false)
    setIsModel(false)
    setIsFactTable(false)
    setIsRules(false)
    setIsVerification(false)
    setIsReportElements(false)



  }
  else if(title==='09 - {HyperCube} Changes In Equity'){
    setIsSFAC6Component1(false)
    setIsSFAC6Component2(false)
    setIsSFAC6Component3(false)
    setIsSFAC6Component4(false)
    setIsSFAC6Component5(false)
    setIsSFAC6Component6(false)
    setIsSFAC6Component7(false)
    setIsSFAC6Component8(false)
    setIsSFAC6Component9(true)
    setIsSFAC6Component10(false)
    setIsSFAC6Component11(false)
    setIsSFAC6Component12(false)
    setIsSFAC6Component13(false)
    setIsSFAC6Component14(false)

    setIsRendering(true)
    setIsAttachToProcess(false)
    setIsModel(false)
    setIsFactTable(false)
    setIsRules(false)
    setIsVerification(false)
    setIsReportElements(false)



  }
  else if(title==='10 - {HyperCube} Policies'){
    setIsSFAC6Component1(false)
    setIsSFAC6Component2(false)
    setIsSFAC6Component3(false)
    setIsSFAC6Component4(false)
    setIsSFAC6Component5(false)
    setIsSFAC6Component6(false)
    setIsSFAC6Component7(false)
    setIsSFAC6Component8(false)
    setIsSFAC6Component9(false)
    setIsSFAC6Component10(true)
    setIsSFAC6Component11(false)
    setIsSFAC6Component12(false)
    setIsSFAC6Component13(false)
    setIsSFAC6Component14(false)

    setIsRendering(true)
    setIsAttachToProcess(false)
    setIsModel(false)
    setIsFactTable(false)
    setIsRules(false)
    setIsVerification(false)
    setIsReportElements(false)



  }
  else if(title==='11 - {HyperCube} Variance Analysis'){
    setIsSFAC6Component1(false)
    setIsSFAC6Component2(false)
    setIsSFAC6Component3(false)
    setIsSFAC6Component4(false)
    setIsSFAC6Component5(false)
    setIsSFAC6Component6(false)
    setIsSFAC6Component7(false)
    setIsSFAC6Component8(false)
    setIsSFAC6Component9(false)
    setIsSFAC6Component10(false)
    setIsSFAC6Component11(true)
    setIsSFAC6Component12(false)
    setIsSFAC6Component13(false)
    setIsSFAC6Component14(false)

    setIsRendering(true)
    setIsAttachToProcess(false)
    setIsModel(false)
    setIsFactTable(false)
    setIsRules(false)
    setIsVerification(false)
    setIsReportElements(false)



  }
  else if(title==='12 - {HyperCube} Segnment Revenues'){
    setIsSFAC6Component1(false)
    setIsSFAC6Component2(false)
    setIsSFAC6Component3(false)
    setIsSFAC6Component4(false)
    setIsSFAC6Component5(false)
    setIsSFAC6Component6(false)
    setIsSFAC6Component7(false)
    setIsSFAC6Component8(false)
    setIsSFAC6Component9(false)
    setIsSFAC6Component10(false)
    setIsSFAC6Component11(false)
    setIsSFAC6Component12(true)
    setIsSFAC6Component13(false)
    setIsSFAC6Component14(false)

    setIsRendering(true)
    setIsAttachToProcess(false)
    setIsModel(false)
    setIsFactTable(false)
    setIsRules(false)
    setIsVerification(false)
    setIsReportElements(false)



  }
  else if(title==='13 - {HyperCube} Stock Plan Activity'){
    setIsSFAC6Component1(false)
    setIsSFAC6Component2(false)
    setIsSFAC6Component3(false)
    setIsSFAC6Component4(false)
    setIsSFAC6Component5(false)
    setIsSFAC6Component6(false)
    setIsSFAC6Component7(false)
    setIsSFAC6Component8(false)
    setIsSFAC6Component9(false)
    setIsSFAC6Component10(false)
    setIsSFAC6Component11(false)
    setIsSFAC6Component12(false)
    setIsSFAC6Component13(true)
    setIsSFAC6Component14(false)

    setIsRendering(true)
    setIsAttachToProcess(false)
    setIsModel(false)
    setIsFactTable(false)
    setIsRules(false)
    setIsVerification(false)
    setIsReportElements(false)



  }
  else if(title==='14 - {HyperCube} Financial Highlights'){
    setIsSFAC6Component1(false)
    setIsSFAC6Component2(false)
    setIsSFAC6Component3(false)
    setIsSFAC6Component4(false)
    setIsSFAC6Component5(false)
    setIsSFAC6Component6(false)
    setIsSFAC6Component7(false)
    setIsSFAC6Component8(false)
    setIsSFAC6Component9(false)
    setIsSFAC6Component10(false)
    setIsSFAC6Component11(false)
    setIsSFAC6Component12(false)
    setIsSFAC6Component13(false)
    setIsSFAC6Component14(true)

    setIsRendering(true)
    setIsAttachToProcess(false)
    setIsModel(false)
    setIsFactTable(false)
    setIsRules(false)
    setIsVerification(false)
    setIsReportElements(false)


  }
}





return (
    <div className='structureInstanceWrap2'>
  <div className="elementTitle5">Report Viewing and Editing </div>

  <div className='reportWraper'>
  <XBRLComponentTaxonomy dataStore={dataStore} setStrucutreComponentItem={setStrucutreComponentItem} />
  <div className='reportHeaderWrapper'>
  <div
    className='reportHeader'
    onClick={() => handleIsRendering()}
    style={{
      color: isRendering ? '#556B2F' : 'white',
      padding: '10px'
    }}
  >
     Rendering
  </div>
  <div className='reportHeader'
  onClick={()=>handleIsModel()}
  style={{
    color: isModel ? '#556B2F' : 'white',
    padding: '10px'
  }}>Model</div>
  <div className='reportHeader' onClick={()=>handleIsFactTable()}
  style={{
    color: isFactTable ? '#556B2F' : 'white',
    padding: '10px'
  }}>Fact Table</div>
  <div className='reportHeader' onClick={()=>handleIsRules()}
  style={{
    color: isRules ? '#556B2F' : 'white',
    padding: '10px'
  }}>Rules</div>
  <div className='reportHeader' onClick={()=>handleIsVerification()}
  style={{
    color: isVerification ? '#556B2F' : 'white',
    padding: '10px'
  }}>Verification</div>
  <div className='reportHeader' onClick={()=>handleIsReportElements()}
  style={{
    color: isReportElements ? '#556B2F' : 'white',
    padding: '10px'
  }}>Report Elements</div>
  </div>

  {isRendering ? <div>
    <div className='reportHeaderWrapper'>
      <div className='reportHeader'>Import</div>
      <div className='reportHeader'>Export</div>
      <div className='reportHeader'>FullScreen</div>
      <div className='reportHeader' onClick={()=>handleAttachToProcessTab()}>Attach to Process</div>
      <div className='reportHeader'>View</div>
      <div className='reportHeader'>Overlay XBRi</div>

      </div>
    </div> : <div></div>}

    {isAttachToProcess ? <div>
      <div className='reportHeaderWrapper'>
        <div className='reportHeader'>Import</div>
        <div className='reportHeader'>Export</div>
        <div className='reportHeader'>FullScreen</div>
        <div className='reportHeader' onClick={()=>handleIsReportElements()}
        style={{
          color: isAttachToProcess ? 'blue' : 'white',
          padding: '10px'
        }} onClick={()=>handleAttachToProcessTab()}>Attach to Process</div>
        <div className='reportHeader'>View</div>
        <div className='reportHeader'>Auto Save</div>

        </div>

      <div className='processTablesWrapper'>
      <table className='xlsx-table2'>
      <tr><th><td>Report ID</td></th><th><td>Ab Co BalanceSheet</td></th></tr>
      <tr><td>Process ID</td><td>URI View and Edit Deployment</td></tr>
      <tr><td>Domain</td><td>abco.co/report/BalanceSheet</td></tr>
      <tr><td>Credentials</td><td>AuthLinkConfig1</td></tr>
      <tr><td>TTL</td><td>80000000</td></tr>
      </table>

      <table className='xlsx-table2'>
      <tr><th><td>Report ID</td></th><th><td>Ab Co BalanceSheet</td></th></tr>
      <tr><td>Process ID</td><td>XBRL Verification</td></tr>
      <tr><td>Domain</td><td>abco.co/report/BalanceSheet.xbri</td></tr>
      <tr><td>Credentials</td><td></td></tr>
      <tr><td>TTL</td><td>80000000</td></tr>
      </table>

      </div>


      </div> : <div></div>}


      {isRendering&&isSFAC6Component1 ? <div>

        <div className='balance-sheet'>
        <div className='reportWrap'>

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
        <td>2023-12-31</td>
        <td>2022-12-31</td>

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
        {dataStore.assetRollUpReportDataExample2 ? dataStore.assetRollUpReportDataExample2[0].map((row, rowIndex) => (
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

            {dataStore.assetRollUpReportDataExample2[1].map((cell, cellIndex)=>(
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
        {dataStore.assetRollUpReportDataExample3 ? dataStore.assetRollUpReportDataExample3[0].map((row, rowIndex) => (
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
    </div>
    </div>


    </div> : <div></div>}

    {isRendering&&isSFAC6Component2 ? <div>

      <div className='balance-sheet'>
      <div className='reportWrap'>

    <table className='balance-sheet-table'>
    <thead>
      <tr>
        <th>Reporting Entity [Aspect]	</th>
        <td>GH259400TOMPUOLS66II | http://standards.iso.org/iso/17443</td>
      </tr>
      <tr>
        <th>Unit [Aspect]	</th>
        <td>iso4218:USD</td>
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
      <td>2023-12-31</td>
      <td>2022-12-31</td>

    </tr>
    </thead>

    <tbody>
      {dataStore.assetRollUpReportDataExample2 ? dataStore.assetRollUpReportDataExample2[0].map((row, rowIndex) => (
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

          {dataStore.assetRollUpReportDataExample2[1].map((cell, cellIndex)=>(
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
          <tr><th>Net Assets</th><td> </td><td> </td></tr>
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
  </div>
  </div>


  </div> : <div></div>}

  {isRendering&&isSFAC6Component3 ? <div>

    <div className='balance-sheet'>
    <div className='reportWrap'>

  <table className='balance-sheet-table'>
  <thead>
    <tr>
      <th>Reporting Entity [Aspect]	</th>
      <td>GH259400TOMPUOLS66II | http://standards.iso.org/iso/17443</td>
    </tr>
    <tr>
      <th>Unit [Aspect]	</th>
      <td>iso4218:USD</td>
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
    <td>2023-12-31</td>
    <td>2022-12-31</td>

  </tr>
  </thead>

  <tbody>
    {dataStore.assetRollUpReportDataExample3 ? dataStore.assetRollUpReportDataExample3[0].map((row, rowIndex) => (
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

        {dataStore.assetRollUpReportDataExample3[1].map((cell, cellIndex)=>(
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
        <tr><th>Net Assets</th><td> </td><td> </td></tr>
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
</div>
</div>


</div> : <div></div>}

{isRendering&&isSFAC6Component4 ? <div>

  <div className='balance-sheet'>
  <div className='reportWrap'>

<table className='balance-sheet-table'>
<thead>
  <tr>
    <th>Reporting Entity [Aspect]	</th>
    <td>GH259400TOMPUOLS66II | http://standards.iso.org/iso/17443</td>
  </tr>
  <tr>
    <th>Unit [Aspect]	</th>
    <td>iso4218:USD</td>
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
  <td>2023-12-31</td>
  <td>2022-12-31</td>

</tr>
</thead>

<tbody>
  {dataStore.assetRollUpReportDataExample4 ? dataStore.assetRollUpReportDataExample4[0].map((row, rowIndex) => (
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

      {dataStore.assetRollUpReportDataExample4[1].map((cell, cellIndex)=>(
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
      <tr><th>Net Assets</th><td> </td><td> </td></tr>
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
</div>
</div>


</div> : <div></div>}

{isRendering&&isSFAC6Component5 ? <div>

  <div className='balance-sheet'>
  <div className='reportWrap'>

<table className='balance-sheet-table'>
<thead>
  <tr>
    <th>Reporting Entity [Aspect]	</th>
    <td>GH259400TOMPUOLS66II | http://standards.iso.org/iso/17443</td>
  </tr>
  <tr>
    <th>Unit [Aspect]	</th>
    <td>iso4218:USD</td>
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
  <td>2023-12-31</td>
  <td>2022-12-31</td>

</tr>
</thead>

<tbody>
  {dataStore.assetRollUpReportDataExample5 ? dataStore.assetRollUpReportDataExample5[0].map((row, rowIndex) => (
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

      {dataStore.assetRollUpReportDataExample5[1].map((cell, cellIndex)=>(
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
      <tr><th>Comprehensive Income</th><td> </td><td> </td></tr>
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
</div>
</div>


</div> : <div></div>}

{isRendering&&isSFAC6Component6 ? <div>

  <div className='balance-sheet'>
  <div className='reportWrap'>

<table className='balance-sheet-table'>
<thead>
  <tr>
    <th>Reporting Entity [Aspect]	</th>
    <td>GH259400TOMPUOLS66II | http://standards.iso.org/iso/17443</td>
  </tr>
  <tr>
    <th>Unit [Aspect]	</th>
    <td>iso4218:USD</td>
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
  <td>2023-12-31</td>
  <td>2022-12-31</td>

</tr>
</thead>

<tbody>
  {dataStore.assetRollUpReportDataExample6 ? dataStore.assetRollUpReportDataExample6[0].map((row, rowIndex) => (
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

      {dataStore.assetRollUpReportDataExample6[1].map((cell, cellIndex)=>(
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
</div>
</div>


</div> : <div></div>}

{isRendering&&isSFAC6Component7 ? <div>

  <div className='balance-sheet'>
  <div className='reportWrap'>

<table className='balance-sheet-table'>
<thead>
  <tr>
    <th>Reporting Entity [Aspect]	</th>
    <td>GH259400TOMPUOLS66II | http://standards.iso.org/iso/17443</td>
  </tr>
  <tr>
    <th>Unit [Aspect]	</th>
    <td>iso4218:USD</td>
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
  {dataStore.assetRollUpReportDataExample7 ? dataStore.assetRollUpReportDataExample7[0].map((row, rowIndex) => (
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

      {dataStore.assetRollUpReportDataExample7[1].map((cell, cellIndex)=>(
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
      <tr><th>Net Assets</th><td> </td><td> </td></tr>
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
</div>
</div>


</div> : <div></div>}

{isRendering&&isSFAC6Component8 ? <div>

  <div className='balance-sheet'>
  <div className='reportWrap'>

<table className='balance-sheet-table'>
<thead>
  <tr>
    <th>Reporting Entity [Aspect]	</th>
    <td>GH259400TOMPUOLS66II | http://standards.iso.org/iso/17443</td>
  </tr>
  <tr>
    <th>Unit [Aspect]	</th>
    <td>iso4218:USD</td>
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
  {dataStore.assetRollUpReportDataExample8 ? dataStore.assetRollUpReportDataExample8[0].map((row, rowIndex) => (
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

      {dataStore.assetRollUpReportDataExample8[1].map((cell, cellIndex)=>(
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
      <tr><th>Net Assets</th><td> </td><td> </td></tr>
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
</div>
</div>


</div> : <div></div>}


{isRendering&&isSFAC6Component9 ? <div>

  <div className='balance-sheet'>
  <div className='reportWrap'>

<table className='balance-sheet-table'>
<thead>
  <tr>
    <th>Reporting Entity [Aspect]	</th>
    <td>GH259400TOMPUOLS66II | http://standards.iso.org/iso/17443</td>
  </tr>
  <tr>
    <th>Unit [Aspect]	</th>
    <td>iso4218:USD</td>
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
  {dataStore.assetRollUpReportDataExample9 ? dataStore.assetRollUpReportDataExample9[0].map((row, rowIndex) => (
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

      {dataStore.assetRollUpReportDataExample9[1].map((cell, cellIndex)=>(
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
</div>
</div>


</div> : <div></div>}


{isRendering&&isSFAC6Component10 ? <div>

  <div className='balance-sheet'>
  <div className='reportWrap'>

<table className='balance-sheet-table'>
<thead>
  <tr>
    <th>Reporting Entity [Aspect]	</th>
    <td>GH259400TOMPUOLS66II | http://standards.iso.org/iso/17443</td>
  </tr>
  <tr>
    <th>Unit [Aspect]	</th>
    <td>iso4218:USD</td>
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
  {dataStore.assetRollUpReportDataExample10 ? dataStore.assetRollUpReportDataExample10[0].map((row, rowIndex) => (
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

      {dataStore.assetRollUpReportDataExample10[1].map((cell, cellIndex)=>(
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
</div>
</div>


</div> : <div></div>}

{isRendering&&isSFAC6Component11 ? <div>

  <div className='balance-sheet'>
  <div className='reportWrap'>

<table className='balance-sheet-table'>
<thead>
  <tr>
    <th>Reporting Entity [Aspect]	</th>
    <td>GH259400TOMPUOLS66II | http://standards.iso.org/iso/17443</td>
  </tr>
  <tr>
    <th>Unit [Aspect]	</th>
    <td>iso4218:USD</td>
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
  {dataStore.assetRollUpReportDataExample11 ? dataStore.assetRollUpReportDataExample11[0].map((row, rowIndex) => (
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

      {dataStore.assetRollUpReportDataExample11[1].map((cell, cellIndex)=>(
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
</div>
</div>


</div> : <div></div>}
{isRendering&&isSFAC6Component12 ? <div>

  <div className='balance-sheet'>
  <div className='reportWrap'>

<table className='balance-sheet-table'>
<thead>
  <tr>
    <th>Reporting Entity [Aspect]	</th>
    <td>GH259400TOMPUOLS66II | http://standards.iso.org/iso/17443</td>
  </tr>
  <tr>
    <th>Unit [Aspect]	</th>
    <td>iso4218:USD</td>
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
  {dataStore.assetRollUpReportDataExample12 ? dataStore.assetRollUpReportDataExample12[0].map((row, rowIndex) => (
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

      {dataStore.assetRollUpReportDataExample12[1].map((cell, cellIndex)=>(
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
</div>
</div>


</div> : <div></div>}

{isRendering&&isSFAC6Component13 ? <div>

  <div className='balance-sheet'>
  <div className='reportWrap'>

<table className='balance-sheet-table'>
<thead>
  <tr>
    <th>Reporting Entity [Aspect]	</th>
    <td>GH259400TOMPUOLS66II | http://standards.iso.org/iso/17443</td>
  </tr>
  <tr>
    <th>Unit [Aspect]	</th>
    <td>iso4218:USD</td>
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
  {dataStore.assetRollUpReportDataExample13 ? dataStore.assetRollUpReportDataExample13[0].map((row, rowIndex) => (
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

      {dataStore.assetRollUpReportDataExample13[1].map((cell, cellIndex)=>(
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
</div>
</div>


</div> : <div></div>}
{isRendering&&isSFAC6Component14 ? <div>

  <div className='balance-sheet'>
  <div className='reportWrap'>

<table className='balance-sheet-table'>
<thead>
  <tr>
    <th>Reporting Entity [Aspect]	</th>
    <td>GH259400TOMPUOLS66II | http://standards.iso.org/iso/17443</td>
  </tr>
  <tr>
    <th>Unit [Aspect]	</th>
    <td>iso4218:USD</td>
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
  {dataStore.assetRollUpReportDataExample14 ? dataStore.assetRollUpReportDataExample14[0].map((row, rowIndex) => (
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

      {dataStore.assetRollUpReportDataExample14[1].map((cell, cellIndex)=>(
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
</div>
</div>


</div> : <div></div>}


    {isModel ? <div>
      <div className='balance-sheet'>
      <div className='reportWrap'>
                <table className='xlsx-table4'
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

                      >
                        <div className="unique-menu-button" contentEditable={false} >
                        <span contentEditable={false}>:</span>
                        </div>
                        <div className="unique-popup-menu">
                          {/* Menu content and buttons go here */}
                          <button onClick={addRow}>Insert Row</button>
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
                  <div class='bottomButtonWrap'>

                  </div>

                  </div>
                  </div>


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



  {isFactTable ? <div>
    <div className='balance-sheet'>
    <div className='reportWrap'>
              <table className='xlsx-table4'
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

                    >
                      <div className="unique-menu-button" contentEditable={false} >
                      <span contentEditable={false}>:</span>
                      </div>
                      <div className="unique-popup-menu">
                        {/* Menu content and buttons go here */}
                        <button onClick={addRow}>Insert Row</button>
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
                <div class='bottomButtonWrap'>
                <button class='addrowButton' onClick={addRow} >Add Row</button>
                <button class='addrowButton'  >Publish Schema</button>
                </div>

                </div>
                </div>


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

{isRules ? <div>
  <div className='balance-sheet'>
  <div className='reportWrap'>
            <table className='xlsx-table4'
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

                  >
                    <div className="unique-menu-button" contentEditable={false} >
                    <span contentEditable={false}>:</span>
                    </div>
                    <div className="unique-popup-menu">
                      {/* Menu content and buttons go here */}
                      <button onClick={addRow}>Insert Row</button>
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
              <div class='bottomButtonWrap'>
              <button class='addrowButton' onClick={addRow} >Add Row</button>
              <button class='addrowButton'  >Publish Schema</button>
              </div>

              </div>
              </div>


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

{isVerification ? <div>
  <div className='balance-sheet'>
  <div className='reportWrap'>
            <table className='xlsx-table4'
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

                  >
                    <div className="unique-menu-button" contentEditable={false} >
                    <span contentEditable={false}>:</span>
                    </div>
                    <div className="unique-popup-menu">
                      {/* Menu content and buttons go here */}
                      <button onClick={addRow}>Insert Row</button>
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
              <div class='bottomButtonWrap'>
              <button class='addrowButton' onClick={addRow} >Add Row</button>
              <button class='addrowButton'  >Publish Schema</button>
              </div>

              </div>
              </div>


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

{isReportElements ? <div>
  <div className='balance-sheet'>
  <div className='reportWrap'>
            <table className='xlsx-table4'
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

                  >
                    <div className="unique-menu-button" contentEditable={false} >
                    <span contentEditable={false}>:</span>
                    </div>
                    <div className="unique-popup-menu">
                      {/* Menu content and buttons go here */}
                      <button onClick={addRow}>Insert Row</button>
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
              <div class='bottomButtonWrap'>
              <button class='addrowButton' onClick={addRow} >Add Row</button>
              <button class='addrowButton'  >Publish Schema</button>
              </div>

              </div>
              </div>


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
  );

};

export default XLSXSheetRenderer;
