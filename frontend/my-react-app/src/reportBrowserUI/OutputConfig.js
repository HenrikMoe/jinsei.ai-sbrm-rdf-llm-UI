import React, { useState } from 'react';
import Spinner from '../Spinner.js';
import Runner from './RunnerApp.js'
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
      <h3 style={{    textAlign: 'left',}}>Output Config</h3>
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
      <h3 style={{    textAlign: 'left',}}>Runner App</h3>

      <Runner/>
    </div>
  );
};

const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(8, auto)',
    transform: 'scale(0.89)',
    transformOrigin: 'top',
    gap: '5px',
    padding: '10px',
  },
  gridItem: {
    borderBottom: '1px solid #ccc',
    padding: '10px',
    textAlign: 'left',

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
