// import React from 'react';
// import FileUploader from './FileUploader';
// import FileDownloader from './FileDownloader';
// import FileViewerHim from './FileViewer';

const TrainingData = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr', gap: '20px' }}>
      <DataSection title="Input" />
      <DataSection title="Output" />
      <PreviewSection title="Input Preview" />
      <PreviewSection title="Output Preview" />
      <div>
        <button style={buttonStyle}>Save Training Data</button>
      </div>
      <div>
        <button style={buttonStyle}>Continue To Model</button>
      </div>
    </div>
  );
};

const DataSection = ({ title }) => (
  <div>
    <h3 style={{ color: 'white' }}>{title}</h3>
    <div style={sectionStyle}>
      <h3 style={{ color: 'white' }}>{title === "Input" ? "Initial Data" : "Final State"} <button>Supported Type List</button></h3>
      <FileUploader />
    </div>
    <FileDownloader />
  </div>
);

const PreviewSection = ({ title }) => (
  <div>
    <h3 style={{ color: 'white' }}>{title}</h3>
    <div style={sectionStyle}>
      <FileViewerHim />
    </div>
  </div>
);

const sectionStyle = {
  color: 'tan',
  borderBottom: '1px solid #ddd',
  borderRight: '1px solid #ddd',
  padding: '20px',
  borderRadius: '8px',
  cursor: 'pointer',
  marginTop: '10px'
};

const buttonStyle = {
  backgroundColor: '#24292e',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  textDecoration: 'none',
  margin: '5px auto'
};

export default TrainingData;
