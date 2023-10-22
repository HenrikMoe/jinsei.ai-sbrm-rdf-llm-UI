// DataStore.js
import React, { createContext, useContext } from 'react';
import dataManagement from './dataManagement.json'

const DataStoreContext = createContext();

const DataStoreProvider = ({ children }) => {
  // Define your data and methods here
  const data = {
    count: 0,
    increment: () => {
      // Update the count
      data.count += 1;
    },
  };

  return (
    <DataStoreContext.Provider value={data}>
      {children}
    </DataStoreContext.Provider>
  );
};

const useDataStore = () => {
  return useContext(DataStoreContext);
};

export { DataStoreProvider, useDataStore };
