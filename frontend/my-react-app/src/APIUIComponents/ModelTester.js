import React, { useState } from 'react';
import Modal from 'react-modal';
import FileUploader from './FileUploader';
import FileViewer from './FileViewer';
import Spinner from '../Spinner.js';

Modal.setAppElement('#root');

const ModelTester = () => {
  const [spinnerActive, setSpinnerActive] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTestClick = () => {
    setSpinnerActive(true);
    setTimeout(() => {
      setSpinnerActive(false);
      setTestCompleted(true);
    }, 5000);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.gridContainer}>
        <div style={styles.label}>Upload a file to test transformer:</div>
        <div style={styles.uploader}><FileUploader /></div>
      </div>
      <div>
        {!spinnerActive ? (
          <button
            style={styles.button}
            onClick={handleTestClick}
          >
            Test Model
          </button>
        ):(<div></div>)}
        {spinnerActive && <Spinner />}
      </div>
      {testCompleted && (
        <>
          <div style={styles.resultGrid}>
            <div>
              <button style={styles.button} onClick={openModal}>Model Log</button>
            </div>
            <div>
              <button style={styles.button}>Download Output</button>
            </div>
          </div>
          <div style={styles.fileViewerContainer}>
            <FileViewer />
          </div>
        </>
      )}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Model Log"
        style={modalStyles}
      >
        <h2>Model Log</h2>
        <p>Here is the log file of the test.</p>
        <button style={styles.button} onClick={closeModal}>Close</button>
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
  gridContainer: {
    display: 'grid',
    transform: 'scale(1.09)',
    transformOrigin: 'top',
    gridTemplateColumns: '1fr 2fr',
    gap: '10px',
    marginBottom: '20px'
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  uploader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: '20px',
    backgroundColor: '#24292e',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  resultGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    marginTop: '20px'
  },
  fileViewerContainer: {
    marginTop: '20px',
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

export default ModelTester;
