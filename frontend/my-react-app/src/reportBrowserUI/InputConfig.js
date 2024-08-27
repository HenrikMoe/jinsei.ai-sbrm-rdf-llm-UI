import React, { useState } from 'react';
import RunnerApp from './RunnerApp';

// Dummy placeholder values
const placeholders = {
  uri: 'https://example.com',
  reqType: 'GET',
  iam: 'User-Role',
  callAt: '00:00 daily',
  connectTran: 'Entity Cash Flow to Deloitte K1 Report Package'
};

const DynamicUriInputs = () => {
  // State to manage inputs and their values
  const [inputs, setInputs] = useState([
    { uri: '', reqType: '', iam: '', callAt: '' } // Initial dummy values
  ]);

  // Function to handle changes in input fields
  const handleInputChange = (index, field, value) => {
    const newInputs = [...inputs];
    newInputs[index][field] = value;
    setInputs(newInputs);
  };

  // Function to add a new input field group
  const addInputField = () => {
    setInputs([...inputs, { uri: '', reqType: '', iam: '', callAt: '' }]); // Add empty fields for a new entry
  };

//      <h1 style={{ fontSize: '30px', margin: '300px auto' }}>Run the auto filer service.</h1>

//      <h1 style={{ fontSize: '30px', margin: '300px auto' }}>Upload your work as training data.</h1>
//      <h1 style={{ fontSize: '30px', margin: '300px auto' }}>Run the process by dropping a file in the runner's configured file path.</h1>

  return (
    <div>
      <h1 style={{ fontSize: '30px', margin: '300px auto' }}>Create a database write output config.</h1>
      <h3 style={{ textAlign: 'left' }}>Input Config</h3>

      {/* URI Input Section */}
      <div style={styles.gridContainer}>
        {inputs.map((input, index) => (
          <div key={index} style={styles.gridItem}>
               <div style={styles.inputWrapper}>
              <div style={styles.label}>Connect Transformer:</div>
              <input
                type="text"
                value={input.connectTran}
                onChange={(e) => handleInputChange(index, 'connectTran', e.target.value)}
                placeholder={placeholders.connectTran}
                style={styles.input}
              />
            </div>
            {/* URI Input */}
            <div style={styles.inputWrapper}>
              <div style={styles.label}>File URI:</div>
              <input
                type="text"
                value={input.uri}
                onChange={(e) => handleInputChange(index, 'uri', e.target.value)}
                placeholder={placeholders.uri}
                style={styles.input}
              />
            </div>
            {/* Req Type Input */}
            <div style={styles.inputWrapper}>
              <div style={styles.label}>Request Type:</div>
              <input
                type="text"
                value={input.reqType}
                onChange={(e) => handleInputChange(index, 'reqType', e.target.value)}
                placeholder={placeholders.reqType}
                style={styles.input}
              />
            </div>
            {/* IAM Input */}
            <div style={styles.inputWrapper}>
              <div style={styles.label}>IAM:</div>
              <input
                type="text"
                value={input.iam}
                onChange={(e) => handleInputChange(index, 'iam', e.target.value)}
                placeholder={placeholders.iam}
                style={styles.input}
              />
            </div>
            {/* Call At Input */}
            <div style={styles.inputWrapper}>
              <div style={styles.label}>Call At:</div>
              <input
                type="text"
                value={input.callAt}
                onChange={(e) => handleInputChange(index, 'callAt', e.target.value)}
                placeholder={placeholders.callAt}
                style={styles.input}
              />
            </div>
         
          </div>
        ))}
      </div>

      <button onClick={addInputField} style={styles.addButton}>
        + Add Input
      </button>

      <h3 style={{ textAlign: 'left' }}>Runner App</h3>
      <RunnerApp />
    </div>
  );
};

const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr', // Single column grid for each input group
    gap: '20px',
    padding: '10px',
  },
  gridItem: {
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px',
    marginBottom: '10px',
  },
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  label: {
    width: '150px',
    fontWeight: 'bold',
    marginRight: '10px',
    textAlign: 'left',
  },
  input: {
    width: 'calc(100% - 160px)', // Adjust width to fit label and input
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  addButton: {
    marginTop: '10px',
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default DynamicUriInputs;
