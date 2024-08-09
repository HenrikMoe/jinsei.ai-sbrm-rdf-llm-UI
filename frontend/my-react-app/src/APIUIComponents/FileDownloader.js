import React from 'react';
import { saveAs } from 'file-saver';
import sampleFile from './favicon.png'; // Update this path to your actual file

const dummyFiles = [
  'report_jan_2024.xlsx',
  'financial_summary_feb_2024.xlsx',
  'employee_data_mar_2024.xlsx',
];

const FileDownloader = () => {
  const downloadFile = (fileName) => {
    saveAs(sampleFile, fileName); // Update the second argument to the desired file name
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.header}>Training Files </h3>
      <div style={styles.fileGrid}>
        {dummyFiles.map((file, index) => (
          <div key={index} style={styles.fileItem}>
            <span style={styles.fileName}>{file}</span>
            <button
              style={styles.downloadButton}
              onClick={() => downloadFile(file)}
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transform: 'scale(0.89)',
    transformOrigin: 'bottom',
    padding: '20px',
    border: '1px solid #333',
    borderRadius: '10px',
    backgroundColor: '#1e1e1e',
    width: '80%',
    margin: '0 auto',
    color: '#fff',
  },
  header: {
    marginBottom: '20px',
  },
  fileGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '10px',
    width: '100%',
  },
  fileItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '10px',
    borderRadius: '5px',
  },
  fileName: {
    marginRight: '10px',
  },
  downloadButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
  },
};

export default FileDownloader;
