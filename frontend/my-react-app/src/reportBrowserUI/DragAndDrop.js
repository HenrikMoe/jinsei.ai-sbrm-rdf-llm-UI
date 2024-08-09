import React, { useState } from 'react';
import Modal from 'react-modal';
import InputConfig from './InputConfig.js';
import OutputConfig from './OutputConfig.js';
import CheckMark from './CheckMark.js';
import { Button } from '@mui/material';
import APIUI from '../APIUIComponents/APIUIParent.js';

Modal.setAppElement('#root');

const App = () => {
  const [isAPIUIModalOpen, setIsAPIUIModalOpen] = useState(false);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openAPIUIModal = () => {
    setModalContent(<APIUI />);
    setIsAPIUIModalOpen(true);
  };

  const openConfigModal = (content) => {
    setModalContent(content);
    setIsConfigModalOpen(true);
  };

  const closeAPIUIModal = () => {
    setIsAPIUIModalOpen(false);
    setModalContent('');
  };

  const closeConfigModal = () => {
    setIsConfigModalOpen(false);
    setModalContent('');
  };

  return (
    <div style={styles.mainGrid}>
      {/* Top grid (1x2) */}
      <div style={styles.topGrid}>
        <div style={styles.cellTopLeft}>
          <p style={styles.text}>Subservice A:</p>
        </div>
        <div style={styles.cellTopRight}>
          <button style={styles.closeButton} onClick={() => openConfigModal('This is the X modal')}>
            X
          </button>
        </div>
      </div>

      {/* Middle grid (2x2) */}
      <div style={styles.middleGrid}>
        <div style={styles.cellMiddleLeftTop}>
          <p style={styles.text}>Wells Fargo Monthly Statement to Entity Cash Flow, id: a17xcip</p>
        </div>
        <div style={styles.cellMiddleRightTop}>
          <button style={styles.button} onClick={openAPIUIModal}>
            Open Transformer
          </button>
          <button style={styles.button} onClick={openAPIUIModal}>
            Change Transformer
          </button>
        </div>
        <div style={styles.cellMiddleLeftBottom}>
          <button style={styles.button} onClick={() => openConfigModal(<InputConfig />)}>
            Input Config
          </button>
        </div>
        <div style={styles.cellMiddleRightBottom}>
          <button style={styles.button} onClick={() => openConfigModal(<OutputConfig />)}>
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
        isOpen={isAPIUIModalOpen}
        onRequestClose={closeAPIUIModal}
        contentLabel="API UI Modal"
        style={modalStyles.apiui}
      >
        <div style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 200px)' }}>
          {modalContent}
        </div>
        <button onClick={closeAPIUIModal} style={styles.button}>Close</button>
      </Modal>

      <Modal
        isOpen={isConfigModalOpen}
        onRequestClose={closeConfigModal}
        contentLabel="Config Modal"
        style={modalStyles.config}
      >
        <div style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 200px)' }}>
          {modalContent}
        </div>
        <button onClick={closeConfigModal} style={styles.button}>Close</button>
      </Modal>
    </div>
  );
};

const styles = {
  mainGrid: {
    display: 'grid',
    gridTemplateRows: '.3fr 2fr .1fr',
    gap: '10px',
    transform: 'scale(0.85)',
    transformOrigin: 'top left',     width: '120%',
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
    height: '50px',
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
    flexDirection: 'column',
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
    height: '50px',
  },
  cellMiddleRightBottom: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    height: '50px',
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
    marginBottom: '5px',
  },
};

const modalStyles = {
  apiui: {
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
  },
  config: {
    content: {
      right: 'auto',
      bottom: 'auto',
      marginTop: '50px',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: 'white',
      overflowX: 'hidden',
      overflowY: 'auto',
      width: '90%',
      maxHeight: '90vh',
      textAlign: 'center',
    },
  },
};

export default App;
