import React, { useEffect, useState } from 'react';
import XMLViewer from 'react-xml-viewer';

const XSDViewer = () => {
  const [xsdContent, setXSDContent] = useState(null);

  useEffect(() => {
    // Fetch the XSD file content when the component mounts
    fetch('cm.xsd') // Replace 'your-xsd-file.xsd' with the correct file path
      .then((response) => response.text())
      .then((data) => {
        setXSDContent(data);
      })
      .catch((error) => {
        console.error('Error fetching XSD:', error);
      });
  }, []);

  return (
    <div>
      <h1>XSD Viewer</h1>
      {xsdContent ? <XMLViewer xml={xsdContent} /> : <p>Loading XSD content...</p>}
    </div>
  );
};

export default XSDViewer;
