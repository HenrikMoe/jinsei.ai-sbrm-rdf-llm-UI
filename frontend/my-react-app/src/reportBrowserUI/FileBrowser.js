import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import VFSBrowser from './ChonkyAdvanced.tsx'; // Assuming this is where you've defined VFSBrowser
import { Resizable } from 'react-resizable';

const ResizableLeftPanel = ({ width, onResize }) => (
  <Resizable
    width={width}
    height={Infinity}
    handle={<div className="handle" style={{ position: 'absolute', right: '-5px', top: '0', bottom: '0', width: '10px', cursor: 'col-resize' }} />}
    onResize={onResize}
    draggableOpts={{ enableUserSelectHack: false }}
  >
    <div className="resizable-left-panel" style={{ width: '30%', borderRight: '1px solid #ccc', position: 'relative' }}>
      <VFSBrowser style={{ height: '100%' }} />
    </div>
  </Resizable>
);

const FileBrowserPage = () => {
  const [leftPanelWidth, setLeftPanelWidth] = useState(400);

  const onResize = (event, { size }) => {
    setLeftPanelWidth(size.width);
  };

  return (
    <div className="file-browser-page" style={{ display: 'flex', height: '100vh' }}>
      {/* Left side with resizable VFSBrowser */}
      <ResizableLeftPanel width={leftPanelWidth} onResize={onResize} />
      
      {/* Right side */}
      <div className="right-side" style={{ flex: 1, padding: '20px', backgroundColor: '#f0f0f0', overflow: 'auto' }}>
        {/* Placeholder content on the right side */}
        <h2>Right Side Content</h2>
        <p>This is where additional content can go.</p>
        <p>You can drag the divider to resize the left side dynamically.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

ReactDOM.render(<FileBrowserPage />, document.getElementById('root'));

export default FileBrowserPage;
