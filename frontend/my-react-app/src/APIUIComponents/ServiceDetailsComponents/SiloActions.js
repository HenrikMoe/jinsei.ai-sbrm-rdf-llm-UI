import React from 'react';

const SiloActions = () => {
  return (
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', transform: 'scale(0.89)', transformOrigin: 'top', borderBottom: 'solid 1px white', borderRadius: '5px'}}>
      <button style={buttonStyle}>Silo 1</button>
      <button style={buttonStyle}>Add Silo</button>
      <button style={buttonStyle}>Re-Order Silos</button>
    </div>
  );
};

const buttonStyle = {
  backgroundColor: '#24292e',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  marginBottom: '10px',
  borderRadius: '5px',
  cursor: 'pointer',
  textDecoration: 'none',
  margin: '5px auto'
};

export default SiloActions;
