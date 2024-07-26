import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

// this will be above the endpoint stuff and below the performance stuff
// public performance, training dataStore, also a toggle to private your enterprise iam pack performance + public, prvt data store
// then endpoint links to redocly
// needs a download button next to the file listing

function App() {
  const docs = [
    { uri: require("./image.png") }, // Local File
    { uri: require("./annual-enterprise-survey-2023-financial-year-provisional.csv") }, // Local File
  ];

  const containerStyle = {
    width: '80%',
    margin: '0 auto',
    maxWidth: '800px',
    overflowX: 'auto', // Add horizontal scroll if content overflows
    height: '500px',
    overflowY: 'auto',
  };

  const iframeStyle = {
    width: '100%',
    border: 'none',
    overflowX: 'auto',
    height: '500px',
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
