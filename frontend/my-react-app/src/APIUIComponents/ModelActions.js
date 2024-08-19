import React from 'react';
import PerformanceTuning from './PerformanceTuning';
import ModelTester from './ModelTester';

const ModelActions = () => {
  return (
    <div>
      <h3 style={{ color: 'white', textAlign: 'left' }}>Select, Tune, and Test Model:</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr', gap: '20px' }}>
        <PerformanceTuning />
        <ModelTester />
      </div>
    </div>
  );
};

export default ModelActions;
