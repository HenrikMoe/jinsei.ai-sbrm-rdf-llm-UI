import React from 'react';

const Flow = () => {
  return (
    <div style={styles.grid}>
      <div style={styles.arrowContainer}>
        <div style={styles.arrow}></div>
      </div>
      <div style={styles.arrowContainer}>
        <div style={styles.arrow}></div>
      </div>
      <div style={styles.arrowContainer}>
        <div style={styles.arrow}></div>
      </div>
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
    padding: '20px',
  },
  arrowContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  arrow: {
    width: '0',
    height: '0',
    borderTop: '10px solid transparent',
    borderBottom: '10px solid transparent',
    borderLeft: '20px solid #24292e',
    transform: 'scale(1.5)',
  },
};

export default Flow;
