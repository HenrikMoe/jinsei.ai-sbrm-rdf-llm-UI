import * as XLSX from 'xlsx';

const dataStore = {
  user: null, // Property to store user information
  //profject and user stuff

  workbook: null, // Property to store the workbook of the XLSX //parent of dataTaxonomy and dataItems
  dataTaxonomyXLSX: null,
//call this to populate the data structure, and call the data struct in the component
  initializeDataTaxonomyXLSX: ()=>{
    dataStore.dataTaxonomyXLSX = dataStore.workbook.SheetNames
  },
  //from an edit to the taxonomy, make another for an addition and or deletion
  updateDataTaxonomyXLSX: (index, titleChange) => {
    if (dataStore.dataTaxonomyXLSX[index]) {
      // Update the title in dataTaxonomyXLSX
      dataStore.dataTaxonomyXLSX[index] = titleChange;

      // Also update the title in the Sheets object of the workbook
      if (dataStore.workbook && dataStore.workbook.SheetNames[index]) {
        const oldTitle = dataStore.workbook.SheetNames[index];
        dataStore.workbook.SheetNames[index] = titleChange;
        dataStore.workbook.Sheets[titleChange] = dataStore.workbook.Sheets[oldTitle];
        delete dataStore.workbook.Sheets[oldTitle];
      }
    }
  },
  clearXLSXworkbook: ()=>{
    dataStore.workbook = null
    dataStore.dataTaxonomyXLSX = null
  },


  //change the side menu so that these functions are called and the data object is used to render that list

  addWorkbook: (workbook) => {
     dataStore.workbook = workbook;
   },

  updateSheetData: (sheetName, sheetData, header) => {  //update sheet data on a cell edit for a sheet
    if (dataStore.workbook) {
      // Find the sheet index by name
      //const sheetIndex = dataStore.workbook.SheetNames.indexOf(sheetName);
        // Update the sheet's data
        const sheetWithHeader = [header, ...sheetData];
        var store  = XLSX.utils.aoa_to_sheet(sheetWithHeader);
        dataStore.workbook.Sheets[sheetName] = store

    }
  },




};

export default dataStore;
