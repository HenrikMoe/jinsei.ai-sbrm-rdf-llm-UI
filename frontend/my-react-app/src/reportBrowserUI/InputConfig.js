import React from 'react';

// Define arrays of dummy values
const dummyValues = [
  'File URI', 'https://wellsfargo.com/asdfjjfdbsbajs', 'call at',
  '00:00 monthly', 'req type', 'get', 'IAM', 'packageiam',

  
];

// Shuffle function for randomizing the dummy values
const shuffleArray = (array) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

const RandomGrid = () => {
  const rows = 8;
  const columns = 2;
  const totalCells = rows * columns;

  // Create a shuffled version of the dummy values array
  const gridItems = dummyValues

  return (
    <div>
        <h3>Input Config</h3>
    <div style={styles.gridContainer}>
      {gridItems.map((value, index) => (
        <div key={index} style={styles.gridItem}>
          {value}
        </div>
      ))}
    </div>
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
};

export default RandomGrid;
