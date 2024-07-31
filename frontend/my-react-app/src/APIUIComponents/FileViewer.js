import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

// this will be above the endpoint stuff and below the performance stuff
// public performance, training dataStore, also a toggle to private your enterprise iam pack performance + public, prvt data store
// then endpoint links to redocly
// needs a download button next to the file listing

function App() {
  const docs = [
    { uri: require("./annual-enterprise-survey-2023-financial-year-provisional.csv") },
    { uri: require("./annual-enterprise-survey-2023-financial-year-provisional2.csv") },
    { uri: require("./annual-enterprise-survey-2023-financial-year-provisional3.csv") }, // Local File
  ];

  const containerStyle = {
    width: '100%',
    margin: '0 auto',
    maxWidth: '500px',
    overflowX: 'auto', // Add horizontal scroll if content overflows
    height: '300px',
    overflowY: 'auto',
    transformOrigin: 'top left',
    color: 'black',
    border: '1px solid black',
    backgroundColor: 'white'
  };

  const iframeStyle = {
    width: '100%',
    border: '1px solid black',
    color: 'black',
    transform: 'scale(0.67)',
    transformOrigin: 'top left',

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
