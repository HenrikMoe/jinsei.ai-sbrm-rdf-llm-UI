import React, { useState } from 'react';
import Modal from 'react-modal';
import Spinner from '../Spinner.js';
import Select from 'react-select';

Modal.setAppElement('#root');

const options = [
  { value: 'xGrokSemantic', label: 'xGrok Semantic' },
  { value: 'tensorflowPrediction', label: 'TensorFlow Prediction' }
];

const MyComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [spinnerActive, setSpinnerActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [grids, setGrids] = useState([]); 
  const [performanceMetrics, setPerformanceMetrics] = useState([]);

  // State for TensorFlow model parameters
  const [learningRate, setLearningRate] = useState('');
  const [batchSize, setBatchSize] = useState('');
  const [epochs, setEpochs] = useState('');
  const [validationSplit, setValidationSplit] = useState('');

  // State for xGrok transformer parameters
  const [xgrokLearningRate, setXgrokLearningRate] = useState('');
  const [xgrokBatchSize, setXgrokBatchSize] = useState('');
  const [xgrokEpochs, setXgrokEpochs] = useState('');
  const [xgrokDropout, setXgrokDropout] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const mockTrainModel = () => {
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
    setGrids([...grids, true]);
  };

  const handleModelParameterChange = (setter) => (event) => {
    setter(event.target.value);
  };

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: 'left', fontSize: '18px', color: 'white' }}>Select AI Model:</h2>
      <div>
        <Select
          options={options}
          value={selectedOption}
          onChange={setSelectedOption}
          placeholder="Select Model"
          styles={selectStyles}
        />
      </div>

      {selectedOption && selectedOption.value === 'tensorflowPrediction' && (
        <div>
          <p>Model Tuning:</p>
          <div style={styles.gridContainer}>
            {/* TensorFlow model parameters */}
            <div style={styles.gridItem}>Learning Rate</div>
            <div style={styles.gridItem2}>
              <input
                style={styles.input}
                placeholder="Enter learning rate"
                value={learningRate}
                onChange={handleModelParameterChange(setLearningRate)}
              />
            </div>
            <div style={styles.gridItem}>Batch Size</div>
            <div style={styles.gridItem2}>
              <input
                style={styles.input}
                placeholder="Enter batch size"
                value={batchSize}
                onChange={handleModelParameterChange(setBatchSize)}
              />
            </div>
            <div style={styles.gridItem}>Epochs</div>
            <div style={styles.gridItem2}>
              <input
                style={styles.input}
                placeholder="Enter number of epochs"
                value={epochs}
                onChange={handleModelParameterChange(setEpochs)}
              />
            </div>
            <div style={styles.gridItem}>Validation Split</div>
            <div style={styles.gridItem2}>
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
        </div>
      )}

      {selectedOption && selectedOption.value === 'xGrokSemantic' && (
        <div>
          <p>xGrok Semantic Model Configuration:</p>
          <div style={styles.gridContainer}>
            {/* xGrok transformer parameters */}
            <div style={styles.gridItem}>Learning Rate</div>
            <div style={styles.gridItem2}>
              <input
                style={styles.input}
                placeholder="Enter learning rate"
                value={xgrokLearningRate}
                onChange={handleModelParameterChange(setXgrokLearningRate)}
              />
            </div>
            <div style={styles.gridItem}>Batch Size</div>
            <div style={styles.gridItem2}>
              <input
                style={styles.input}
                placeholder="Enter batch size"
                value={xgrokBatchSize}
                onChange={handleModelParameterChange(setXgrokBatchSize)}
              />
            </div>
            <div style={styles.gridItem}>Epochs</div>
            <div style={styles.gridItem2}>
              <input
                style={styles.input}
                placeholder="Enter number of epochs"
                value={xgrokEpochs}
                onChange={handleModelParameterChange(setXgrokEpochs)}
              />
            </div>
            <div style={styles.gridItem}>Dropout Rate</div>
            <div style={styles.gridItem2}>
              <input
                style={styles.input}
                placeholder="Enter dropout rate"
                value={xgrokDropout}
                onChange={handleModelParameterChange(setXgrokDropout)}
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
        </div>
      )}

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
    borderBottom: '1px solid #ddd',
    borderRight: '1px solid #ddd',
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
    transform: 'scale(.8)',
    transformOrigin: 'top left',
    marginBottom: '20px'
  },
  gridItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'scale(.8)',
    transformOrigin: 'top left',
    width: '110%',
    borderBottom: '1px solid #ddd',
    borderRight: '1px solid #ddd',
    padding: '3px',
    borderRadius: '5px',
    backgroundColor: '#333',
    color: '#fff'
  },
  gridItem2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'scale(.7)',
    transformOrigin: 'top left',
    width: '80px',
    borderBottom: '1px solid white',
    borderRight: '1px solid white',
    paddingLeft: '5px',
    borderRadius: '5px',
    backgroundColor: '#333',
    color: '#fff'
  },
  input: {
    width: '100%',
    paddingLeft: '5px',
    height: '80%',
    borderRadius: '5px',
    borderBottom: '.5px solid #ddd',
    borderRight: '.5px solid #ddd',
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

const selectStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#333',
    border: '1px solid #444',
    color: '#fff',
    borderRadius: '5px',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#333',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#555' : '#333',
    color: '#fff',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#fff',
  }),
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
