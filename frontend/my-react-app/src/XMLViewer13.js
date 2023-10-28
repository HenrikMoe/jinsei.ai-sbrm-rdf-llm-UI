import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import XMLViewer from 'react-xml-viewer';

const XMLViewer2 = () => {
  const [xmlContent, setXMLContent] = useState(null);

  useEffect(() => {
    // Fetch the XML file content when the component mounts
    fetch('cm-xbrl.xsd') // Replace 'your-xml-file.xml' with the correct file path
      .then((response) => response.text())
      .then((data) => {
        setXMLContent(data);
      })
      .catch((error) => {
        console.error('Error fetching XML:', error);
      });
  }, []);

  return (
    <div style={{ marginTop: '100px', marginLeft: '40px',  marginRight: '40px'}}>
      <h1 style={{ marginTop: '100px', marginLeft: '40px',  marginRight: '40px'}} >XSD/XML Viewer</h1>
      {xmlContent ? <XMLViewer xml={xmlContent} /> : <p>Loading XSD content...</p>}
    </div>
  );
};

export default XMLViewer2;
