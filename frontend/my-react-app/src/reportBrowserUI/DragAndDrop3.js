

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
          <button style={styles.button}>Open Transformer</button>
          <button style={styles.button}>Change Transformer</button>
        </div>
        <div style={styles.cellMiddleLeftBottom}>
          <button style={styles.button} onClick={() => openModal(<InputConfig />)}>
            Input Config
          </button>
        </div>
        <div style={styles.cellMiddleRightBottom}>
          <button style={styles.button} onClick={() => openModal(<OutputConfig />)}>
            Output Config
          </button>
        </div>
      </div>

      {/* Bottom grid (1x2) */}
      <div style={styles.bottomGrid}>
        <div style={styles.cellBottomLeft}>
          <p style={styles.text}><Button>Logs</Button></p>
        </div>
        <div style={styles.cellBottomRight}>
          <p style={styles.text}><Button>State</Button></p>
        </div>
      </div>

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
    gridTemplateRows: '.3fr 2fr .1fr',
    gap: '10px',
    width: '100%',
    marginLeft: '100px',
    // height: '100vh',
    padding: '10px',
    border: '2px solid #ccc',
    borderRadius: '10px',
  },
  topGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
  },
  middleGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    gap: '10px',
  },
  bottomGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    marginTop: '-55px',
    height: '50px'
  },
  cellTopLeft: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
  },
  cellTopRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
  },
  cellMiddleLeftTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
  },
  cellMiddleRightTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column', // Stacking buttons on top of each other
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
  },
  cellMiddleLeftBottom: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    height: '50px'
  },
  cellMiddleRightBottom: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ddd',
    borderRadius: '5px',
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
    background: 'blue',
    color: 'white',
    border: 'none',
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
