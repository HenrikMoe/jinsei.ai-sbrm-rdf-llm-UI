import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import SearchBar from '../APIUIComponents/SearchBar2'
import Modal from 'react-modal';
import IAM from './IamConfig'
Modal.setAppElement('#root');

const createData = (name, description) => {
  return { name, description };
};

const rows = [
  createData('My Service 1', 'End to End k1 server: bank statements to filing'),
  createData('My Service 2', 'P.E. K1 report aggregator: filing to client summary'),

  
];

const handleRowClick = (row) => {
  console.log('Clicked row:', row);
};



const ServicesTable = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };


  return (
    <div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', alignItems: 'center', padding: '10px', gap: '10px', transform: 'scale(0.85)',
    transformOrigin: 'top left',     width: '114%', }} >
    <h3 style={{ color: 'white', margin: '0' }}>Your Jinsei.ai Services</h3>
    <button style={{ color: 'black', padding: '10px', margin: '0' }}>Create New Service</button>
    <SearchBar style={{ padding: '10px', margin: '0', gridColumn: 'span 1' }} />
    <button onClick={() => openModal(<IAM />)} style={{ color: 'black', padding: '10px', margin: '0' }}>Iam</button>
</div>

    
    <TableContainer component={Paper}>
        <Table aria-label="simple table" >
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} hover onClick={() => handleRowClick(row)} style={{ cursor: 'pointer', transform: 'scale(0.85)',
    transformOrigin: 'top ',     width: '100%', }}>
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
    <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        style={modalStyles}
      >
        <div style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 200px)' }}>
          {modalContent}
        </div>
        <button onClick={closeModal} style={styles.button}>
          Close API UI
        </button>
      </Modal>

    </div>

  );
};


const styles = {
  text: {
    margin: 0,
    fontSize: '16px',
  },
  closeButton: {
    background: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    cursor: 'pointer',
  },
  button: {
    background: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    cursor: 'pointer',
  },
};

const modalStyles = {
  content: {
    right: 'auto',
    bottom: 'auto',
    marginTop: '50px',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: 'black',
    overflowX: 'hidden',
    overflowY: 'auto',
    width: '90%',
    maxHeight: '90vh',
    textAlign: 'center',
  },
};

ReactDOM.render(<ServicesTable />, document.getElementById('root'));

export default ServicesTable;
