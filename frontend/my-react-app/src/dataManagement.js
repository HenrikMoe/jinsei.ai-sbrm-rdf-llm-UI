import * as XLSX from 'xlsx';

const dataStore = {
  user: null, // Property to store user information
  products: [], // Property to store a list of products
  cart: [], // Property to store items in the shopping cart
  workbook: null, // Property to store the workbook

  count: 0,

  //project level stuff

  addWorkbook: (workbook) => {
     dataStore.workbook = workbook;
   },

  updateSheetData: (sheetName, sheetData, header) => {
    if (dataStore.workbook) {
      // Find the sheet index by name
      const sheetIndex = dataStore.workbook.SheetNames.indexOf(sheetName);

      if (sheetIndex >= 0) {
        // Update the sheet's data
        const sheetWithHeader = [header, ...sheetData];

        dataStore.workbook.Sheets[sheetName] = XLSX.utils.aoa_to_sheet(sheetWithHeader);
      }
    }
  },




};

export default dataStore;
