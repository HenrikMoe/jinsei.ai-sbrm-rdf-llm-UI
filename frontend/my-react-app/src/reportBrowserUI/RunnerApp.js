import React, { useState } from 'react';
import Spinner from '../Spinner.js';
import Downloader from '../APIUIComponents/FileDownloader2.js';

const RunnerApp = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  const handleCheckboxChange = () => {
    setShowDetails(!showDetails);
  };

  const handleTestRunnerClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowMoreDetails(true);
    }, 5000);
  };

  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <div style={styles.gridContainer}>
        <div style={styles.gridItem}>
          <p>Add or Test File Runner</p>
        </div>
        <div style={styles.gridItem}>
          <input
            style={{ marginTop: '20px', height: '25px', width: '25px' }}
            type="checkbox"
            id="showDetails"
            onChange={handleCheckboxChange}
          />
        </div>
      </div>

      {showDetails && (
        <div style={styles.detailsContainer}>
          <div style={styles.gridItem}>
            <p>Created Input Config Runner</p>
          </div>
          <div style={styles.gridItem}>
            <Downloader />
          </div>
          <div style={styles.gridItem}>
            <p>Test Installed Runner</p>
          </div>
          <div style={styles.gridItem}>
            {loading ? (
              <Spinner />
            ) : (
              <button style={styles.button} onClick={handleTestRunnerClick}>
                Test Runner
              </button>
            )}
          </div>
        </div>
      )}

      {showMoreDetails && (
        <div style={styles.detailsContainer}>
          <div style={styles.gridItem}>
            <p>Retrieved or Deposited File(s)</p>
          </div>
          <div style={styles.gridItem}>
            <p>File/dir link to active subpack</p>
          </div>
          <div style={styles.gridItem}>
            <p>Runner Process Time</p>
          </div>
          <div style={styles.gridItem}>
            <p>lightspeed bro, maybe iam here?</p>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    backgroundColor: '#24292e',
    padding: '20px',
    borderRadius: '8px',
  },
  gridItem: {
    border: '1px solid #ccc',
    padding: '10px',
    textAlign: 'center',
    overflow: 'hidden',
  },
  detailsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    marginTop: '20px',
    backgroundColor: '#333',
    padding: '20px',
    borderRadius: '8px',
  },
  button: {
    marginTop: '5px',
    padding: '15px',
  },
};

export default RunnerApp;
