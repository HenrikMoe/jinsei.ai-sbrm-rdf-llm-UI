import React from 'react';

const CheckmarkCircle = ({ size = 50, color = 'green', checkmarkColor = 'white' }) => {
  const circleStyle = {
    width: size,
    height: size,
    borderRadius: '50%',
    backgroundColor: color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };

  const checkmarkStyle = {
    position: 'absolute',
    width: '60%',
    height: '60%',
    borderLeft: '5px solid ' + checkmarkColor,
    borderBottom: '5px solid ' + checkmarkColor,
    transform: 'rotate(-45deg)',
    top: '20%',
    left: '20%',
  };

  return (
    <div style={circleStyle}>
      <div style={checkmarkStyle}></div>
    </div>
  );
};

export default CheckmarkCircle;
