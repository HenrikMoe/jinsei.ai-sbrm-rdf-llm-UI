import React from 'react';
import ReactDOM from 'react-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import SearchBar from '../APIUIComponents/SearchBar2'
const createData = (name, description) => {
  return { name, description };
};

const rows = [
  createData('My Service 1', 'End to End k1 server: bank statements to filing'),
  
];

const handleRowClick = (row) => {
  console.log('Clicked row:', row);
};

const ServicesTable = () => {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }} >
      <h3 style={{color: 'white', marginLeft: '20px', marginTop: '20px'}}>Your Jinsei.ai Services</h3>
      <button style={{color: 'black', marginBottom: '15px', padding: '5px', marginTop: '15px', marginLeft: '-25px'}}>Create New Service</button>
      <SearchBar/>
      </div>
    
    <TableContainer component={Paper}>
        <Table aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} hover onClick={() => handleRowClick(row)} style={{ cursor: 'pointer' }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.description}</TableCell>
              <button style={{marginTop: '15px'}}>open</button>
              <button style={{marginTop: '15px', marginLeft: '5px'}}>delete</button>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>

  );
};

ReactDOM.render(<ServicesTable />, document.getElementById('root'));

export default ServicesTable;
