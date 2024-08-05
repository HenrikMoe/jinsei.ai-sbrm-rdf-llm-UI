import React, { useState } from 'react';
import Modal from 'react-modal';
import Spinner from '../Spinner.js';

Modal.setAppElement('#root');

const MyComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [spinnerActive, setSpinnerActive] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [grids, setGrids] = useState([]); // State to hold multiple grids

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateClick = () => {
    setSpinnerActive(true);
    setTimeout(() => {
      setSpinnerActive(false);
      setDropdownVisible(true);
      setGrids([...grids, true]); // Add a new grid to the list
    }, 5000);
  };

  return (
    <div style={styles.container}>
      <div>
        <p>IAM Config</p>
      </div>
      <div>
        <button
          style={styles.button}
          onClick={openModal}
        >
          Open
        </button>
      </div>
      <div>
        <p>Model Tuning</p>
      </div>
      <div style={styles.gridContainer}>
        <div style={styles.gridItem}>Function 1</div>
        <div style={styles.gridItem}><input style={styles.input} placeholder="Enter value" /></div>
        <div style={styles.gridItem}>Function 2</div>
        <div style={styles.gridItem}><input style={styles.input} placeholder="Enter value" /></div>
        <div style={styles.gridItem}>Function 3</div>
        <div style={styles.gridItem}><input style={styles.input} placeholder="Enter value" /></div>
        <div style={styles.gridItem}>Function 4</div>
        <div style={styles.gridItem}><input style={styles.input} placeholder="Enter value" /></div>
      </div>
      <div>
        {!spinnerActive && (
          <button
            style={styles.button}
            onClick={handleCreateClick}
          >
            Create AI
          </button>
        )}
        {spinnerActive && <Spinner />}
      </div>
      {grids.map((_, index) => (
        <div key={index} style={styles.dropdownContainer}>
          {[...Array(10)].map((_, index) => (
            <div key={index} style={styles.dropdownItem}>
              Placeholder Content
            </div>
          ))}
        </div>
      ))}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="IAM Config"
        style={modalStyles}
      >
        <h2>IAM Config</h2>
        <p>Configure your IAM settings here.</p>
        <button
          style={styles.button}
          onClick={closeModal}
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#1e1e1e',
    color: '#fff',
    borderRadius: '10px',
    width: '60%',
    margin: '0 auto',
  },
  button: {
    marginTop: '20px',
    backgroundColor: '#24292e',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none'
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
    marginBottom: '20px'
  },
  gridItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #444',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#333',
    color: '#fff'
  },
  input: {
    width: '100%',
    padding: '5px',
    borderRadius: '5px',
    border: '1px solid #444',
    backgroundColor: '#555',
    color: '#fff'
  },
  dropdownContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px',
    padding: '10px',
    marginTop: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#2c2c2c'
  },
  dropdownItem: {
    border: '1px solid #444',
    padding: '10px',
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: '5px',
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
    width: '400px',
    textAlign: 'center',
    backgroundColor: '#1e1e1e',
    color: '#fff'
  },
};

export default MyComponent;
