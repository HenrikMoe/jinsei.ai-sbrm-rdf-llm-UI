// DataStore.js
import React, { createContext, useContext } from 'react';
import dataManagement from './dataManagement.js'

const DataStoreContext = createContext();

const DataStoreProvider = ({ children }) => {
  // Define your data and methods here

  //do this in prototype, notes have example

  return (
    <DataStoreContext.Provider value={dataManagement}>
      {children}
    </DataStoreContext.Provider>
  );
};

const useDataStore = () => {
  return useContext(DataStoreContext);
};

export { DataStoreProvider, useDataStore };
