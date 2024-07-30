import React from 'react';

// Define arrays of dummy values
const dummyValues = [
  'File URI', 'Uri', 'IAM', 'packageiam', 'call at',
  '00:00 monthly', 'Grape', 'Honeydew', 'Ivy', 'Jackfruit',
  'Kiwi', 'Lemon', 'Mango', 'Nectarine', 'Orange',
  
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
  const columns = 4;
  const totalCells = rows * columns;

  // Create a shuffled version of the dummy values array
  const gridItems = dummyValues

  return (
    <div style={styles.gridContainer}>
      {gridItems.map((value, index) => (
        <div key={index} style={styles.gridItem}>
          {value}
        </div>
      ))}
    </div>
  );
};

const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
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
