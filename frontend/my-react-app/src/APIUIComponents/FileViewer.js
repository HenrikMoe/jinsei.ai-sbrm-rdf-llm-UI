import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

// this will be above the endpoint stuff and below the perofmance stuff
//public performance, training dataStore, also a toggle to private your enterprise iam pack performance + public, prvt data store
//then endpoint links to redocly
//needs a download button next to the file listing

function App() {

  const docs = [
    
    { uri: require("./image.png") }, // Local File
    { uri: require("./annual-enterprise-survey-2023-financial-year-provisional.csv") }, // Local File
  ];

  return <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />;
}

export default App;
