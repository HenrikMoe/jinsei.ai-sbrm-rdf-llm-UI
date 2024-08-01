
import React, { useState } from 'react';
import Modal from 'react-modal';

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
    <div style={styles.gridContainer}>
              <div>Transformer: <button>open</button></div>

      <div style={styles.cellTopLeft}>
        <p style={styles.text}>K1 Report Package Deloitte to Deloitte SEC Filing Service <button>open</button></p>
      </div>
      <div style={styles.cellTopRight}>
        <button style={styles.closeButton} onClick={() => openModal('This is the X modal')}>
          X
        </button>
      </div>
      <div style={styles.cellBottomLeft}>
        <button style={styles.button} onClick={() => openModal('This is the bottom left modal')}>
          Input Config
        </button>
      </div>
      <div style={styles.cellBottomRight}>
        <button style={styles.button} onClick={() => openModal('This is the bottom right modal')}>
          Output Config
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        style={modalStyles}
      >
        <h2>Modal Content</h2>
        <p>{modalContent}</p>
        <button onClick={closeModal} style={styles.button}>Close Modal</button>
      </Modal>
    </div>
  );
};

const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gridTemplateRows: '1fr 1fr',
    gap: '10px',
    width: '300px',
    height: '200px',
    margin: '50px auto',
    border: '2px solid #ccc',
    borderRadius: '10px',
    padding: '10px',
    marginLeft: '30px'
  },
 
  cellTopLeft: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    gridColumn: '1 / span 1',
    gridRow: '1 / span 1',
  },
  cellTopRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    gridColumn: '2 / span 1',
    gridRow: '1 / span 1',
  },
  cellBottomLeft: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    gridColumn: '1 / span 1',
    gridRow: '2 / span 1',
  },
  cellBottomRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    gridColumn: '2 / span 1',
    gridRow: '2 / span 1',
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
    width: '300px',
    textAlign: 'center',
  },
};

export default App;
