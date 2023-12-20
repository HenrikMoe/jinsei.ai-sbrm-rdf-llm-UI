import * as XLSX from 'xlsx';

const dataStore = {

  workbookXLSX: null,
  workbookCSV: null,
  workbookJSON: null,
  workbookXBRL: null,

  dataTaxonomyXLSX: null,
  dataTaxonomyJSON: null,
  dataTaxonomyCSV: null,
  dataTaxonomyXBRL: null,


  clearDefault: ()=>{dataStore.defaultHeader = null},
  defaultHeader: ['ReportElementName', 'ReferenceRole', 'Publisher', 'Name', 'ReportElementName', 'ReferenceRole', 'Publisher', 'Name'],
  getDefaultHeader: (sheetTitle)=>{
    dataStore.defaultHeader = dataStore.defaultHeaders[sheetTitle]
  },
  //facts and rules are first one
  defaultHeaders: {
    "Base Information": ['ReportElementName', 'Taxonomy', 'ReferenceRole', 'Publisher', 'Name', 'ReportElementName', 'ReferenceRole', 'Publisher', 'Name'],
    "Terms": ['Prefix', 'ReportElementCategory', 'StandardLabel', 'ReportElementName', 'Datatype', 'CalendarPeriodType', 'BalanceType'],
    "Labels": ['ReportElementName', 'Language', 'LabelRole', 'Label'],
    "References": ['ReportElementName', 'ReferenceRole', 'Publisher', 'Name', 'Number', 'Paragraph', 'URI', 'URIDate', 'Sequence'],
    "Structures": ['StructureIdentifier', 'StructureTitle', 'Sequence'],
    "Associations": ['StructureType', 'StructureIdentifier', 'AssociationFromName', 'AssociationRole', 'AssociationRole', 'CalculationPolarity', 'PreferredLabelRole', 'Sequence'],
    "Rules": ['RuleType', 'RuleCode', 'Rule', 'StructureIdentifier', 'ConceptAspect', 'Sequence', 'Commentary'],
    "Facts": ['ReportingEntityAspect', 'CalendarPeriodAspect', 'ConceptAspect', 'FactValue', 'Units', 'Rounding', 'FactID', 'Sequence'],
  },



  initializeDataTaxonomyXLSX: ()=>{
    dataStore.dataTaxonomyXLSX = dataStore.workbookXLSX.SheetNames
  },
  initializeDataTaxonomyCSV: ()=>{},
  initializeDataTaxonomyJSON: ()=>{},
  initializeDataTaxonomyXBRL: ()=>{},

  //luca side menu
  lucaSideMenu: [['Base Information'], ['Terms'], ['Labels'], ['References'], ['Structures'], ['Associations'], ['Rules'], ['Facts']],


  //from an edit to the taxonomy, make another for an addition and or deletion
  updateDataTaxonomyXLSX: (index, titleChange) => {
    if (dataStore.dataTaxonomyXLSX[index]) {
      // Update the title in dataTaxonomyXLSX
      dataStore.dataTaxonomyXLSX[index] = titleChange;

      // Also update the title in the Sheets object of the workbook
      if (dataStore.workbookXLSX && dataStore.workbookXLSX.SheetNames[index]) {
        const oldTitle = dataStore.workbookXLSX.SheetNames[index];
        dataStore.workbookXLSX.SheetNames[index] = titleChange;
        dataStore.workbookXLSX.Sheets[titleChange] = dataStore.workbookXLSX.Sheets[oldTitle];
        delete dataStore.workbookXLSX.Sheets[oldTitle];
      }
    }
  },
  updateDataTaxonomyCSV: ()=>{},
  updateDataTaxonomyJSON: ()=>{},
  updateDataTaxonomyXBRL: ()=>{},

  // | Delete
  clearXLSXworkbook: ()=>{
    dataStore.workbookXLSX = null
    dataStore.dataTaxonomyXLSX = null
  },
  clearJSONworkbook: ()=>{},
  clearCSVworkbook: ()=>{},
  clearXBRLworkbook: ()=>{},


  //change to by type | Create
  addWorkbook: (workbook) => {
     dataStore.workbookXLSX = workbook;
   },
  addWorkbookJSON: ()=>{},
  addWorkbookCSV: ()=>{},
  addWorkbookXBRL: ()=>{},

  //change to by type | Update
  updateSheetData: (sheetName, sheetData, header) => {  //update sheet data on a cell edit for a sheet
    if (dataStore.workbookXLSX) {
      // Find the sheet index by name
      //const sheetIndex = dataStore.workbook.SheetNames.indexOf(sheetName);
        // Update the sheet's data
        const sheetWithHeader = [header, ...sheetData];
        var store  = XLSX.utils.aoa_to_sheet(sheetWithHeader);
        dataStore.workbookXLSX.Sheets[sheetName] = store

    }
  }, //change to XSLX
  updateSheetDataCSV: ()=>{},
  updateSheetDataJSON: ()=>{},
  updateSheetDataXBRL: ()=>{},


  versionUpdate: ()=>{
    //insert this above ervey mutation of data
    //append to list in db
    //return id list
  },
  pullVersion: ()=>{
    //pull version dependnet on ID into dataStore object
  },

  transformToCSV: ()=>{},
  transformToJSON: ()=>{},
  transformToXLSX: ()=>{},
  transformToXBRL: ()=>{},

  transformToHTML: ()=>{},
  transformToDocX: ()=>{},
  transformToPDF: ()=>{},
  transformToAdobeInDesign: ()=>{},
  tranformToRDF: ()=>{},

  htmlWorkbook: null,
  dockXworkbook: null,
  pdfWorkbook: null,
  adobeInDesignWorkbook: null,
  rdfWorkbook: null,

  addTransformation: ()=>{},
  xWorkbook: null, //PROLOG, GSQL, SQL.




  //make a base xlsx file that has the 10 sheets, just all empty with headers ,
  //like changeoverlaid model
  semanticWorkbook: null,
  addSemanticWorkbook: (workbook) =>{
    console.log('addinnewsemanticworkbook')
    dataStore.semanticWorkbook = workbook
    console.log(dataStore.semanticWorkbook)
  },



  //gets upadted evrey side menu select
  //probably init with base information
  semanticWorkbookSheet: null,
  updateSemanticWorkbookSheet: (sheetName)=>{
    console.log(dataStore.semanticWorkbook)

    dataStore.semanticWorkbookSheet = XLSX.utils.sheet_to_json(dataStore.semanticWorkbook.Sheets[sheetName])
  },

  updateSemanticSheetData: (sheetName, sheetData, header) => {  //update sheet data on a cell edit for a sheet
    if (dataStore.semanticWorkbook) {
        const sheetWithHeader = [header, ...sheetData];
        if(sheetName[0] === 'Base Information'){sheetName[0] = 'BaseInformation'}
        var store  = XLSX.utils.aoa_to_sheet(sheetWithHeader);
        dataStore.semanticWorkbook.Sheets[sheetName] = store
        console.log('identig')
        console.log(sheetName[0])
        console.log(dataStore.semanticWorkbook.Sheets)
        console.log(dataStore.semanticWorkbook.Sheets[sheetName[0]])
    }
  },

  clearSemantic: ()=>{dataStore.semanticWorkbook = null; dataStore.semanticWorkbookSheet = null;},


  overLaidModelSheet: null,
  updateOverLaidModelSheet: (sheetName)=>{
    console.log('updating overlaid model sheet')
    if(dataStore.overLaidModelWorkbook){
      console.log(dataStore.overLaidModelWorkbook)
      dataStore.overLaidModelSheet = XLSX.utils.sheet_to_json(dataStore.overLaidModelWorkbook.Sheets[sheetName])
    }

  },

  overLaidModelWorkbook: null,
  addOverLaidModelWorkbook: (workbook) => {
    dataStore.overLaidModelWorkbook = workbook;
    dataStore.updateOverLaidModelSheet('Base Information')
   },

  changeOverLaidModelDefault: ()=>{
     //'PROOF (Platinum)'
     // Convert JSON to an array of arrays
     const xlsxFilePath = `${process.env.PUBLIC_URL}/DefaultSchemaSheet.xlsx`;
     fetch(xlsxFilePath)
     .then((response) => response.arrayBuffer())
     .then((arrayBuffer) => {
       // Read the XLSX data and set the header and tableData states
       const workbook = XLSX.read(arrayBuffer, { type: 'array' });
       console.log(workbook);

       dataStore.addOverLaidModelWorkbook(workbook)
       dataStore.addSemanticWorkbook(workbook)
       // Example: Read the first sheet from the workbook
       const data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {
         header: 1,
       });
       console.log(data);
       dataStore.updateOverLaidModelSheet('Base Information')
       dataStore.updateSemanticWorkbookSheet('Base Information')
       // You can perform further operations with the workbook and data here.
     })
     .catch((error) => {
       console.error('Error importing XLSX file:', error);
     });

  },



  changeOverLaidModel: (model)=>{
     //'PROOF (Platinum)'
    // Convert JSON to an array of arrays
    console.log(model)
    var uri;
    if(model === 'PROOF'){uri='PLATINUM-PROOF-REF.xlsx'}else if(model === 'Accounting Equation'){uri='ae-PLATINUM-import.xlsx'}
    else if(model === 'MINI'){uri='PLATINUM-MINI.xlsx'}else if(model === 'SFAC 6'){uri='PLATINUM-SFAC6.xlsx'}
    else if(model === 'SFAC 8'){uri='PLATINUM-SFAC8.xlsx'}else if(model === 'Common'){uri='PLATINUM-COMMON-REF.xlsx'}
    else if(model === 'AASB 1060'){uri='AASB-1060.xlsx'}
    const xlsxFilePath = `${process.env.PUBLIC_URL}/${uri}`;
    fetch(xlsxFilePath)
    .then((response) => response.arrayBuffer())
    .then((arrayBuffer) => {
      // Read the XLSX data and set the header and tableData states
      const workbook = XLSX.read(arrayBuffer, { type: 'array' });
      console.log(workbook);
      console.log('yeasdfl;')
      console.log('asjdfhhkjsgfdjkaskd')
      dataStore.addOverLaidModelWorkbook(workbook)
      dataStore.addSemanticWorkbook(workbook)
      console.log(dataStore.semanticWorkbook)
      // Example: Read the first sheet from the workbook
      const data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {
        header: 1,
      });
      console.log(data);
      dataStore.updateSemanticWorkbookSheet(data)
    })
    .then(()=>{
      console.log('klsdfkhskdjhfk')
      dataStore.updateOverLaidModelSheet('Terms')
      dataStore.updateSemanticWorkbookSheet('Terms')
    })
    .catch((error) => {
      console.error('Error importing XLSX file:', error);
    });

    //all Proof Plat

    //XLSX.read(proofPlatinum, { type: 'binary' })


    //dataStore.overLaidModel = data //has to be a selected sheet
  },

  overlaidModelName: null,

  changeOverLaidModelName: (model)=>{
    dataStore.overlaidModelName = model
  },

  clearOverlaid: ()=>{
    dataStore.overLaidModelWorkbook = null
  },

  structureInstanceComponentExample: ['01 - {HyperCube} Balance Sheet', '02 - {HyperCube} Net Assets', '03 - {HyperCube} Income Statement', '04 - {HyperCube} Income Statement Alternative', '05 - {HyperCube} Comperhensive Income', '06 - {HyperCube} Cash Flow', '07 - {HyperCube} Prior Period Errors', '08 - {HyperCube} Prior Period Errors (Alternative)', '09 - {HyperCube} Changes In Equity', '10 - {HyperCube} Policies', '12 - {HyperCube} Variance Analysis', '12 - {HyperCube} Segnment Revenues', '13 - {HyperCube} Stock Plan Activity', '14 - {HyperCube} Financial Highlights' ],

  semanticStrucutreInstanceTaxonomy: null,
  initDefaultSemanticStrucutreInstanceTaxonomy: ()=>{
    dataStore.semanticStrucutreInstanceTaxonomy = ['Cover or Document', 'Statements', 'Notes Level 1', 'Policies', 'Notes Level 2', 'Notes Level 3 Tables', 'Notes Level 4 Detail', 'All Components', 'Flagged Components']
  },

  isModelInstance: [['isModelthing'], ['Current Assets'], ['Noncurrent Assets']],
  isFactTable: [['ReportingEntityAspect'], ['CalendarPeriodAspect'], ['Concept'], ['FactValue'], ['Units'], ['Rounding'], ['ParentheticalExplantions'], ['Sequence']],
  isRules: [['Rule Type'], ['Rule Code'], ['Rule'], ['Concept'], ['Structure Identifier']],

  isVerification: [['Rule Type'], ['Expression'], ['Period'], ['Structure Identifier'], ['Result']],

  isReportElements: [['Label'], ['Category'], ['Period'], ['Balance'], ['Name']],
  semanticStrucutreInstance: [['Assets [Roll Up]'], ['Current Assets'], ['Noncurrent Assets']],
  initDefaultSemanticStrucutreInstance: ()=>{
    dataStore.semanticStrucutreInstance = [['Assets Rolled Up', '$50,000'], ['Liabilities Rolled Up', '$30,000'], ['Net Assets', '$20,000']]
  },

  assetRollUpReportDataExample1: [
    [['Assets [Roll Up]'], ['Current Assets'], ['Noncurrent Assets']],
    [[' '],[' ']],
    [['0'],['0']],
],

assetRollUpReportDataExample2: [
  [['Net Assets [Roll Up]	'], ['Assets'], ['Liabilities']],
  [[' '],[' '],],
  [['0'],['0']],
],

assetRollUpReportDataExample3: [
  [['Comprehensive Income [Roll Up]	'], ['Revenues	'], ['(Expenses)	'], ['Gains	'], ['(Losses)	'], ['Net Income	']],
  [[' '],[' ']],
  [['0'],['0']],
],

assetRollUpReportDataExample4: [
  [['Comprehensive Income [Roll Up]'], ['Income from Normal Activities of Entity'], ['Income from Peripheral or Incidental Transactions of Entity	']],
  [[' '],[' ']],
  [['0'],['0']],
],

assetRollUpReportDataExample5: [
  [['Comprehensive Income [Roll Up]	'], ['Net Income	'], ['Other Comprehensive Income	'],],
  [[' '],[' ']],
  [['0'],['0']],
],

assetRollUpReportDataExample6: [
  [['Net Cash Flow [Roll Up]	'], ['Net Cash Flow Operating Activities	'], ['Net Cash Flow Investing Activities	'], ['Net Cash Flow Financing Activities	'],['Net Cash Flow	'], ['Assets Roll Forward [Roll Up]	'], ['Assets, Beginning Balance	'], ['Net Cash Flow	'], ['Assets, Ending Balance	']],
  [[' '],[' ']],
  [['0'],['0']],
],

assetRollUpReportDataExample7: [
  [['Prior Period Errors [Adjustment]		'], ['Equity, Origionally Stated	'], ['Changes in Accounting Policy	'], ['Correction of an Error	'], ['Equity, Restated	']],
  [[' '],[' ']],
  [['0'],['0']],
],

assetRollUpReportDataExample8: [
  [['Equity [Roll Up]'], ['Equity Attributable To Controlling Interests'], ['Equity Attributable to Noncontrolling Interests']],
  [[' '],[' ']],
  [['0'],['0']],
],

assetRollUpReportDataExample9: [
  [['Changes in Equity [Roll Forward]		'], ['Equity, Beginning Balance		'], ['Comprehensive Income	'], ['Investments by Owners	'], ['(Distributions to Owners)	'],['Equity, Ending Balance	']],
  [[' '],[' ']],
  [['0'],['0']],
],

assetRollUpReportDataExample10: [
  [['Basis of Reporting [Text Block]		'], ['Nature of Operations [Text Block]		'], ['Revenue Recognition Policy [Text Block]	'], ],
  [[' '],[' ']],
  [['0'],['0']],
],

assetRollUpReportDataExample11: [
  [['Variance Analysis [Roll Up]			'], ['Revenues		'], ['(Expenses)		'], ['Gains	'], ['(Losses)	'], ['Net Income	']],
  [[' '],[' ']],
  [['0'],['0']],
],

assetRollUpReportDataExample12: [
  [['Segment Revenues [Set]			'], ['Revenues		'], ],
  [[' '],[' ']],
  [['0'],['0']],
],

assetRollUpReportDataExample13: [
  [['Weighted Average Grant Date Fair Value [Roll Forward Info]		'], ['Nonvested Fair Value, Beginning Balance			'], ['Granted	'], ['Vested	'], ['Forfeited	'], ['Nonvested Fair Value, Ending Balance		']],
  [[' '],[' ']],
  [['0'],['0']],
],

assetRollUpReportDataExample14: [
  [['Financial Highlights [Set]	'], ['Revenues	'], ['Comprehensive Income	'], ['Distributions to Owners		'], ],
  [[' '],[' ']],
  [['0'],['0']],
],

  clearStructure: ()=>{
      dataStore.semanticStrucutreInstanceTaxonomy = null
  },

  tooltipItems: null,
  changeToolTipItems: ()=>{},

  //pipeline
  pipelineProcesses: ['HyperCube 1', 'HyperCube 2', 'HyperCube 3'],


  //canvases
  canvases: ['Complete Canvas', 'Instances', 'Schemes + Instances', 'Pipelines + Schemes + Instances'],


  ai: ['State Summary', 'Notification Log'],

  //deprecttaed?
  deployedRenderings: null,
  changeDeployedRenderings: ()=>{},
  verifications: null,
  changeDeployedVerifications: ()=>{},
  xBRL: null,
  changeXBRL: ()=>{},


  user: null, // Property to store user information
  project: null,
  projectList: null,
  file: null,
  fileList: null,
  organization: null,
  organizationList: null,

  //changeing project/file functions


};

export default dataStore;
