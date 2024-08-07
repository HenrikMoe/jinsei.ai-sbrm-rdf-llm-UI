import React, { useState } from 'react';

const RunnerApp = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleCheckboxChange = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', backgroundColor: '#24292e', padding: '20px', borderRadius: '8px' }}>
        <div>
          <p>Add File Runner</p>
        </div>
        <div>
          <input style={{marginTop: '20px', height: '25px', width: '25px'}}type="checkbox" id="showDetails" onChange={handleCheckboxChange} />
        </div>
      </div>
      
      {showDetails && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '20px', backgroundColor: '#333', padding: '20px', borderRadius: '8px' }}>
          <div style={{ border: '1px solid #ccc', padding: '20px' }}>
            <p>Filler Information 1</p>
          </div>
          <div style={{ border: '1px solid #ccc', padding: '20px' }}>
            <p>Filler Information 2</p>
          </div>
          <div style={{ border: '1px solid #ccc', padding: '20px' }}>
            <p>Filler Information 3</p>
          </div>
          <div style={{ border: '1px solid #ccc', padding: '20px' }}>
            <p>Filler Information 4</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RunnerApp;
