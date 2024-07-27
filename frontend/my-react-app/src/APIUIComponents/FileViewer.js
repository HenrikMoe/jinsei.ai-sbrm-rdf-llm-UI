import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

// this will be above the endpoint stuff and below the performance stuff
// public performance, training dataStore, also a toggle to private your enterprise iam pack performance + public, prvt data store
// then endpoint links to redocly
// needs a download button next to the file listing

function App() {
  const docs = [
    { uri: require("./annual-enterprise-survey-2023-financial-year-provisional.csv") }, // Local File
  ];

  const containerStyle = {
    width: '80%',
    margin: '0 auto',
    maxWidth: '400px',
    overflowX: 'auto', // Add horizontal scroll if content overflows
    height: '300px',
    overflowY: 'auto',
    color: 'black',
    border: '1px solid black',
    backgroundColor: 'white'
  };

  const iframeStyle = {
    width: '20%',
    border: '1px solid black',
    color: 'black',
    overflowX: 'auto',
    height: '300px',
    overflowY: 'auto',
  };

  return (
    <div style={containerStyle}>
      <DocViewer
        documents={docs}
        pluginRenderers={DocViewerRenderers}
        config={{
          header: {
            disableHeader: false, // Hide the header if necessary
          },
          iFrame: {
            style: iframeStyle, // Apply styles to iframe
          },
        }}
      />
    </div>
  );
}

export default App;
