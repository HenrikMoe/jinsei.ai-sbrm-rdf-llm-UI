const dataStore = {
  user: null, // Property to store user information
  products: [], // Property to store a list of products
  cart: [], // Property to store items in the shopping cart

  count: 0,
  increment: () => {
    // Update the count
    data.count += 1;
  },
  


  "data": {
  "tableDataRef": [],
  "header": [],
  "tableCustom": [],
  "headerCustom": [],
  "sheetData": null
},
"functions": {
  "addRow": "Function to add a new row to the table",
  "addColumn": "Function to add a new column to the table",
  "handleCellChange": "Function to handle changes in cell values",
  "handleHeaderChange": "Function to handle changes in header values",
  "initializeTableData": "Function to initialize table data from sheet data",
  "resetTableData": "Function to reset table data",
  "setSheetData": "Function to set sheet data",
  "getRowCount": "Function to get the row count",
  "getColumnCount": "Function to get the column count"
}

  setUser: (user) => {
    // Function to set user information
    dataStore.user = user;
  },

  addProduct: (product) => {
    // Function to add a product to the list
    dataStore.products.push(product);
  },

  addToCart: (productId) => {
    // Function to add a product to the shopping cart
    const product = dataStore.products.find((p) => p.id === productId);
    if (product) {
      dataStore.cart.push(product);
    }
  },

  removeFromCart: (productId) => {
    // Function to remove a product from the shopping cart
    dataStore.cart = dataStore.cart.filter((p) => p.id !== productId);
  },

  clearCart: () => {
    // Function to clear the shopping cart
    dataStore.cart = [];
  },
};

export default dataStore;
