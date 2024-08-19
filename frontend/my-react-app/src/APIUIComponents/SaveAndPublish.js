import React from 'react';

const IAMActions = () => {
  return (
    <div>
      <h3 style={{ color: 'white', textAlign: 'left' }}>Save and Publish:</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr', gap: '20px' }}>
        <button style={buttonStyle}>IAM Config</button>
        <button style={buttonStyle}>Save Transformer</button>
        <button style={buttonStyle}>Add Transformer To Subservices</button>
        <button style={buttonStyle}>Transformer Version History</button>
        <button style={buttonStyle}>Share</button>
      </div>
    </div>
  );
};

const buttonStyle = {
  width: '200px',
  padding: '10px',
  marginLeft: '170px',
  backgroundColor: '#24292e',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  textDecoration: 'none'
};

export default IAMActions;
