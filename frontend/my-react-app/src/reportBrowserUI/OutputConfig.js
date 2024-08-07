import React, { useState } from 'react';
import Spinner from '../Spinner.js';

// Define arrays of dummy values
const dummyValues = [
  'File URI:', 'https://jinsei.ai/asdfjjfdbsbajs', 'call at:',
  '00:00 monthly', 'req type:', 'post', 'formats:', 'json, xlsx', 'IAM:', 'Smith-John-CPA-PEVP-Deloitte', 'inspect transformer', 'inspect produced packages'
];

const RandomGrid = () => {
  const rows = 8;
  const columns = 2;
  const totalCells = rows * columns;

  // Create a state to manage grid items
  const [gridItems, setGridItems] = useState(generateGridItems());
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  function generateGridItems() {
    // Extend dummyValues to match the required number of cells
    return [...dummyValues.slice(0, totalCells)];
  }

  // Handle change in input field
  const handleChange = (index, event) => {
    const newValue = event.target.value;
    setGridItems(prevItems =>
      prevItems.map((item, i) => (i === index ? newValue : item))
    );
  };

  const handleCheckboxChange = () => {
    setShowDetails(!showDetails);
  };

  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowMoreDetails(true);
    }, 5000);
  };

  return (
    <div>
      <h3>Output Config</h3>
      <div style={styles.gridContainer}>
        {gridItems.map((value, index) => (
          <div key={index} style={styles.gridItem}>
            <input
              type="text"
              value={value}
              onChange={(event) => handleChange(index, event)}
              style={styles.input}
            />
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', backgroundColor: '#24292e', padding: '20px', borderRadius: '8px', marginTop: '20px', color: 'white' }}>
        <div>
          <p>Add File Runner</p>
        </div>
        <div>
          <input style={{marginTop: '20px', height: '25px', width: '25px'}} type="checkbox" id="showDetails" onChange={handleCheckboxChange} />
        </div>
      </div>

      {showDetails && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '20px', backgroundColor: '#333', padding: '20px', borderRadius: '8px' }}>
          <div style={{ border: '1px solid #ccc', padding: '20px' }}>
            <p style={{ color: 'white',}}>Created Input Config Runner</p>
          </div>
          <div style={{ border: '1px solid #ccc', padding: '20px' }}>
            <button style={{ marginTop: '5px', padding: '15px' }}>Download</button>
          </div>
          <div style={{ border: '1px solid #ccc', padding: '20px' }}>
            <p style={{ color: 'white',}}>Test Installed Runner</p>
          </div>
          <div style={{ border: '1px solid #ccc', padding: '20px' }}>
            {loading ? (
              <Spinner />
            ) : (
              <button style={{ marginTop: '5px', padding: '15px' }} onClick={handleButtonClick}>Test Runner</button>
            )}
          </div>
        </div>
      )}

      {showMoreDetails && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '20px', backgroundColor: '#333', padding: '20px', borderRadius: '8px' }}>
          <div style={{ border: '1px solid #ccc', padding: '20px' }}>
            <p style={{ color: 'white',}}>Additional Info 1</p>
          </div>
          <div style={{ border: '1px solid #ccc', padding: '20px' }}>
            <p style={{ color: 'white',}}>Additional Info 2</p>
          </div>
          <div style={{ border: '1px solid #ccc', padding: '20px' }}>
            <p style={{ color: 'white',}}>Additional Info 3</p>
          </div>
          <div style={{ border: '1px solid #ccc', padding: '20px' }}>
            <p style={{ color: 'white',}}>Additional Info 4</p>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(8, auto)',
    gap: '10px',
    padding: '10px',
  },
  gridItem: {
    border: '1px solid #ccc',
    padding: '10px',
    textAlign: 'center',
    overflow: 'hidden',
  },
  input: {
    width: '100%',
    border: 'none',
    padding: '5px',
    boxSizing: 'border-box',
  },
};

export default RandomGrid;
