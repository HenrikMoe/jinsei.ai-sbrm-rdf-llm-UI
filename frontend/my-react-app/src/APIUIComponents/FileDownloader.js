import React from 'react';
import { saveAs } from 'file-saver';
import sampleFile from './image.png'; // Update this path to your actual file

const FileDownloader = () => {
  const downloadFile = () => {
    saveAs(sampleFile, 'downloaded-file.png'); // Update 'downloaded-file.ext' to the desired file name
  };

  return (
    <div>
      <button onClick={downloadFile}>Download File</button>
    </div>
  );
};

export default FileDownloader;
