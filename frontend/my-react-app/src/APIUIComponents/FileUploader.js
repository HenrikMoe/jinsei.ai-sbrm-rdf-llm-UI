import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUploader = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Log the file details to the console
    acceptedFiles.forEach(file => {
      console.log(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} style={styles.container}>
      <input {...getInputProps()} />
      <button style={styles.button}>
        {isDragActive ? 'Drop the files here ...' : 'Upload Files'}
      </button>
    </div>
  );
};

const styles = {
  container: {
    border: '2px dashed #ccc',
    padding: '20px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    cursor: 'pointer'
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none'
  }
};

export default FileUploader;
