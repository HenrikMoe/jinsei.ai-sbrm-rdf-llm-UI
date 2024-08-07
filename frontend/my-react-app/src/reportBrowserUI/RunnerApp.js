import React, { useState } from 'react';
import Spinner from '../Spinner.js';

const RunnerApp = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  const handleCheckboxChange = () => {
    setShowDetails(!showDetails);
  };

  const handleTestRunnerClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowMoreDetails(true);
    }, 5000);
  };

  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', backgroundColor: '#24292e', padding: '20px', borderRadius: '8px' }}>
        <div>
          <p>Add or Test File Runner</p>
        </div>
        <div>
          <input style={{marginTop: '20px', height: '25px', width: '25px'}} type="checkbox" id="showDetails" onChange={handleCheckboxChange} />
        </div>
      </div>

      {showDetails && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '20px', backgroundColor: '#333', padding: '20px', borderRadius: '8px' }}>
            <div style={{ border: '1px solid #ccc', padding: '20px' }}>
              <p>Created Input Config Runner</p>
            </div>
            <div style={{ border: '1px solid #ccc', padding: '20px' }}>
              <button style={{ marginTop: '5px',padding: '15px' }}>Download</button>
            </div>
            <div style={{ border: '1px solid #ccc', padding: '20px' }}>
              <p>Test Installed Runner</p>
            </div>
            <div style={{ border: '1px solid #ccc', padding: '20px' }}>
              {loading ? (
                <Spinner />
              ) : (
                <button style={{ marginTop: '5px', padding: '15px' }} onClick={handleTestRunnerClick}>Test Runner</button>
              )}
            </div>
          </div>

          {showMoreDetails && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '20px', backgroundColor: '#333', padding: '20px', borderRadius: '8px' }}>
              <div style={{ border: '1px solid #ccc', padding: '20px' }}>
                <p>Additional Info 1</p>
              </div>
              <div style={{ border: '1px solid #ccc', padding: '20px' }}>
                <p>Additional Info 2</p>
              </div>
              <div style={{ border: '1px solid #ccc', padding: '20px' }}>
                <p>Additional Info 3</p>
              </div>
              <div style={{ border: '1px solid #ccc', padding: '20px' }}>
                <p>Additional Info 4</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RunnerApp;
