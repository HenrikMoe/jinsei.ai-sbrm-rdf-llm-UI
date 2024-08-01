import React from 'react';
import ReactDOM from 'react-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const createData = (name, description) => {
  return { name, description };
};

const rows = [
  createData('My Service 1', 'End to End k1 server: bank statements to filing'),
  createData('Service 2', 'Description of Service 2'),
  createData('Service 3', 'Description of Service 3'),
];

const handleRowClick = (row) => {
  console.log('Clicked row:', row);
};

const ServicesTable = () => {
  return (
    <div>
      <h3 style={{color: 'white'}}>Your Jinsei.ai Services</h3>
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
