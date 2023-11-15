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
    "Base Information": ['ReportElementName', 'ReferenceRole', 'Publisher', 'Name', 'ReportElementName', 'ReferenceRole', 'Publisher', 'Name'],
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
    dataStore.semanticWorkbook = workbook
  },

  updateSemanticWorkbookSheet: (sheetTitle)=>{
    dataStore.semanticWorkbookSheet = dataStore.semanticWorkbook.Sheets[sheetTitle]
  },

  //gets upadted evrey side menu select
  //probably init with base information
  semanticWorkbookSheet: null,
  updateSemanticWorkbookSheet: (sheetName)=>{
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
    dataStore.overLaidModelSheet = XLSX.utils.sheet_to_json(dataStore.overLaidModelWorkbook.Sheets[sheetName])
  },

  overLaidModelWorkbook: null,
  addOverLaidModelWorkbook: (workbook) => {
     dataStore.overLaidModelWorkbook = workbook;
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
       dataStore.updateOverLaidModelSheet('Terms')
       dataStore.updateSemanticWorkbookSheet('Terms')
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
      dataStore.addOverLaidModelWorkbook(workbook)
      dataStore.addSemanticWorkbook(workbook)
      // Example: Read the first sheet from the workbook
      const data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {
        header: 1,
      });
      console.log(data);
      dataStore.updateOverLaidModelSheet('Terms')
      dataStore.updateSemanticWorkbookSheet('Terms')
      // You can perform further operations with the workbook and data here.
    })
    .catch((error) => {
      console.error('Error importing XLSX file:', error);
    });

    //all Proof Plat

    //XLSX.read(proofPlatinum, { type: 'binary' })


    //dataStore.overLaidModel = data //has to be a selected sheet
  },

  clearOverlaid: ()=>{
    dataStore.overLaidModelWorkbook = null
  },

  semanticStrucutreInstanceTaxonomy: null,
  initDefaultSemanticStrucutreInstanceTaxonomy: ()=>{
    dataStore.semanticStrucutreInstanceTaxonomy = ['Balance Sheet', 'NetAssets', 'Income Statement']
  },

  semanticStrucutreInstance: [['Assets Rolled Up', '$50,000', 'blah']],
  initDefaultSemanticStrucutreInstance: ()=>{
    dataStore.semanticStrucutreInstance = [['Assets Rolled Up', '$50,000'], ['Liabilities Rolled Up', '$30,000'], ['Net Assets', '$20,000']]
  },

  clearStructure: ()=>{
      dataStore.semanticStrucutreInstanceTaxonomy = null
  },

  tooltipItems: null,
  changeToolTipItems: ()=>{},

  //pipeline
  pipelineProcesses: ['XBRL Transformation', 'XBRL Structure Instance Verification', 'Bundled XBRL Instance Write'],


  //canvases
  canvases: ['Complete Canvas', 'Instances', 'Schemes + Instances', 'Pipelines + Schemes + Instances'],


  ai: ['Q & A', 'Summary'],

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
