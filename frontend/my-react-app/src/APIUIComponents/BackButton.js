import React from 'react';

const BackButton = ({ onBack }) => {
  return (
    <button
      onClick={onBack}
      style={{
        backgroundColor: '#24292e',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginLeft: '-1000px',
        textDecoration: 'none'
      }}
    >
      Back
    </button>
  );
};

export default BackButton;
