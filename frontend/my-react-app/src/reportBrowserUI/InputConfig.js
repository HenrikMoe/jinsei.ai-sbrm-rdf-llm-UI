import React, { useState } from 'react';
import RunnerApp from './RunnerApp';
// Define arrays of dummy values
const dummyValues = [
  'File URI:', 'https://wellsfargo.com/asdfjjfdbsbajs', 'call at:',
  '00:00 monthly', 'req type:', 'get', 'IAM:', 'Smith-John-CPA-PEVP-Deloitte', 'inspect transformer'
];

const RandomGrid = () => {
  const rows = 8;
  const columns = 2;
  const totalCells = rows * columns;

  // Create a state to manage grid items
  const [gridItems, setGridItems] = useState(generateGridItems());

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
  //       <h1 style={{fontSize: '120px', margin:'300px auto'}}>Jinsei.ai</h1>
//       <h1 style={{fontSize: '40px', margin:'300px auto'}}>Creating a data transformer.</h1>
//       <h1 style={{fontSize: '40px', margin:'300px auto'}}>Train and tune your ai models.</h1>
       <h1 style={{fontSize: '40px', margin:'300px auto'}}>Test your transformer model.</h1>


  return (
    <div>
      <h3>Input Config</h3>
       <h1 style={{fontSize: '40px', margin:'300px auto'}}>Share your model with other creators.</h1>

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
      <RunnerApp/>

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
