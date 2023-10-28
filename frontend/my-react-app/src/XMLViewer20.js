import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const XMLViewer2 = () => {
  const [xmlContent, setXMLContent] = useState(null);

  useEffect(() => {
    // Fetch the XML file content when the component mounts
    fetch('cm-rparts-rs.xsd') // Replace 'your-xml-file.xml' with the correct file path
      .then((response) => response.text())
      .then((data) => {
        setXMLContent(data);
      })
      .catch((error) => {
        console.error('Error fetching XML:', error);
      });
  }, []);

  return (
    <div>
      <h1>XML Viewer</h1>
      {xmlContent ? (
        <SyntaxHighlighter language="xml" style={solarizedlight}>
          {xmlContent}
        </SyntaxHighlighter>
      ) : (
        <p>Loading XML content...</p>
      )}
    </div>
  );
};

export default XMLViewer2;
