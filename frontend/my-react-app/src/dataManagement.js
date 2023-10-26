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
  updateDataTaxonomyXLSX: (index, newValue)=>{
    dataStore.dataTaxonomyXLSX[index] = newValue
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
        console.log(store)
        console.log( dataStore.workbook.Sheets[sheetName])
        console.log(dataStore.workbook.Sheets)
    }
  },




};

export default dataStore;
