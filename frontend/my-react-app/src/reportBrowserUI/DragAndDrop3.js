

import React, { useState } from 'react';
import Modal from 'react-modal';
import InputConfig from './InputConfig.js';
import OutputConfig from './OutputConfig.js';
import CheckMark from './CheckMark.js';
import { Button } from '@mui/material';

Modal.setAppElement('#root');

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  return (
    <div style={styles.mainGrid}>
      {/* Top grid (1x2) */}
      <div style={styles.topGrid}>
        <div style={styles.cellTopLeft}>
          <p style={styles.text}>Subservice C:</p>
        </div>
        <div style={styles.cellTopRight}>
          <button style={styles.closeButton} onClick={() => openModal('This is the X modal')}>
            X
          </button>
        </div>
      </div>

      {/* Middle grid (2x2) */}
      <div style={styles.middleGrid}>
        <div style={styles.cellMiddleLeftTop}>
          <p style={styles.text}>K1 Report Package Deloitte to Deloitte SEC Filing Service, id: c17xcip</p>
        </div>
        <div style={styles.cellMiddleRightTop}>
          <button style={styles.button}>Open </button>
          <button style={styles.button}>Update </button>
        </div>
        </div>

        <div style={styles.middleGrid2}>

        <div style={styles.cellMiddleLeftBottom}>
          <button style={styles.button} onClick={() => openModal(<InputConfig />)}>
            Input 
          </button>
        </div>
        <div style={styles.cellMiddleRightBottom}>
          <button style={styles.button} onClick={() => openModal(<OutputConfig />)}>
            Output 
          </button>
        </div>
      </div>

      {/* Bottom grid (1x2) */}
          <p style={styles.button2}><Button>Logs</Button></p>
       

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        style={modalStyles}
      >
        <div style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 200px)' }}>
          {modalContent}
        </div>
        <button onClick={closeModal} style={styles.button}>Close Modal</button>
      </Modal>
    </div>
  );
};

const styles = {
  mainGrid: {
    display: 'grid',
    gridTemplateRows: '.3fr 1fr 1fr ',
    gap: '10px',
    marginLeft: '80px',
    transform: 'scale(0.91)',
    transformOrigin: 'top left',     width: '100%',
    // height: '100vh',
    padding: '10px',
    borderBottom: '1px solid #ddd',
    borderRight: '1px solid #ddd',    borderRadius: '10px',
  },
  topGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
  },
  middleGrid: {
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr',
    gap: '10px',
  },
  middleGrid2: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
  },
  bottomGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    marginTop: '0px',
    height: '50px'
  },
  cellTopLeft: {
    display: 'flex',
    alignItems: 'left',
    alignText: 'left',
    
    borderBottom: '1px solid #ddd',
    borderRight: '1px solid #ddd',
    borderRadius: '5px',

    justifyContent: 'center',
    padding: '10px',
  },
  cellTopRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
  },
  cellMiddleLeftTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid #ddd',
    borderRight: '1px solid #ddd',

    borderRadius: '5px',
    padding: '10px',
  },
  cellMiddleRightTop: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderBottom: '1px solid #ddd',
    borderRight: '1px solid #ddd',    borderRadius: '5px',
    padding: '10px',
  },
  cellMiddleLeftBottom: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid #ddd',
    borderRight: '1px solid #ddd',    borderRadius: '5px',
    padding: '10px',
    height: '50px'
  },
  cellMiddleRightBottom: {
    display: 'grid',
    gridTemplateColumns: '1fr',

    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid #ddd',
    borderRight: '1px solid #ddd',    borderRadius: '5px',
    padding: '10px',
    height: '50px'

  },
  cellBottomLeft: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
  
  },
  cellBottomRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',

  },
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
    background: '#24292e',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    cursor: 'pointer',
    marginBottom: '5px', // Adding margin to separate the buttons
  },
  button2: {
    background: '#24292e',
    color: 'white',
    border: 'none',
    marginTop: '-20px',

    borderRadius: '5px',
    padding: '10px',
    cursor: 'pointer',
    marginBottom: '5px', // Adding margin to separate the buttons
  },
};

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    borderRadius: '10px',
    width: '800px',
    textAlign: 'center',
  },
};


export default App;
