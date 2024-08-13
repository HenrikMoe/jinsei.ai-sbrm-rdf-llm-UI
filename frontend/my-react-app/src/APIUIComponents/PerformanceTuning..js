import React, { useState } from 'react';
import Modal from 'react-modal';
import Spinner from '../Spinner.js';

Modal.setAppElement('#root');

const MyComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [spinnerActive, setSpinnerActive] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [grids, setGrids] = useState([]); // State to hold multiple grids
  const [performanceMetrics, setPerformanceMetrics] = useState([]); // State for performance metrics

  // State for model parameters
  const [learningRate, setLearningRate] = useState('');
  const [batchSize, setBatchSize] = useState('');
  const [epochs, setEpochs] = useState('');
  const [validationSplit, setValidationSplit] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const mockTrainModel = () => {
    // Simulate model training and return mock performance metrics
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          accuracy: Math.random().toFixed(2),
          loss: Math.random().toFixed(2),
          valAccuracy: Math.random().toFixed(2),
          valLoss: Math.random().toFixed(2),
        });
      }, 3000);
    });
  };

  const handleCreateClick = async () => {
    setSpinnerActive(true);
    const metrics = await mockTrainModel();
    setPerformanceMetrics([...performanceMetrics, metrics]);
    setSpinnerActive(false);
    setDropdownVisible(true);
    setGrids([...grids, true]); // Add a new grid to the list
  };

  const handleModelParameterChange = (setter) => (event) => {
    setter(event.target.value);
  };

  return (
    <div style={styles.container}>
    
      <div>
        <p>TensorFlow Prediction Model Tuning:</p>
      </div>
      <div style={styles.gridContainer}>
        <div style={styles.gridItem}>Learning Rate</div>
        <div style={styles.gridItem}>
          <input
            style={styles.input}
            placeholder="Enter learning rate"
            value={learningRate}
            onChange={handleModelParameterChange(setLearningRate)}
          />
        </div>
        <div style={styles.gridItem}>Batch Size</div>
        <div style={styles.gridItem}>
          <input
            style={styles.input}
            placeholder="Enter batch size"
            value={batchSize}
            onChange={handleModelParameterChange(setBatchSize)}
          />
        </div>
        <div style={styles.gridItem}>Epochs</div>
        <div style={styles.gridItem}>
          <input
            style={styles.input}
            placeholder="Enter number of epochs"
            value={epochs}
            onChange={handleModelParameterChange(setEpochs)}
          />
        </div>
        <div style={styles.gridItem}>Validation Split</div>
        <div style={styles.gridItem}>
          <input
            style={styles.input}
            placeholder="Enter validation split"
            value={validationSplit}
            onChange={handleModelParameterChange(setValidationSplit)}
          />
        </div>
      </div>
      <div>
        {!spinnerActive && (
          <button style={styles.button} onClick={handleCreateClick}>
            Create AI
          </button>
        )}
        {spinnerActive && <Spinner />}
      </div>
      {grids.map((_, index) => (
        <div key={index} style={styles.dropdownContainer}>
          {performanceMetrics.length > index ? (
            <>
              <div style={styles.dropdownItem}>Accuracy: {performanceMetrics[index].accuracy}</div>
              <div style={styles.dropdownItem}>Loss: {performanceMetrics[index].loss}</div>
              <div style={styles.dropdownItem}>Val Accuracy: {performanceMetrics[index].valAccuracy}</div>
              <div style={styles.dropdownItem}>Val Loss: {performanceMetrics[index].valLoss}</div>
            </>
          ) : (
            <div style={styles.dropdownItem}>Loading...</div>
          )}
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
        <button style={styles.button} onClick={closeModal}>
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
