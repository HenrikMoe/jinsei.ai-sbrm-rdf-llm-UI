import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import VFSBrowser from './ChonkyAdvanced.tsx'; // Assuming this is where you've defined VFSBrowser
import { Resizable } from 'react-resizable';
import ServiceSubpackChonk from './TheServiceSubpackListingsChonky.tsx'
import ServiceTable from './ServiceTable.js'

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
    <div
      className="file-browser-page"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        height: '100vh',
        gap: '10px',
        padding: '10px',
      }}
    >
      {/* Top left: ServiceSubpackChonk */}
      <div
        className="service-subpack-chonk"
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          overflow: 'auto',
        }}
      >
        <ServiceSubpackChonk />
      </div>

      {/* Top right: ServiceTable */}
      <div
        className="service-table"
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          overflow: 'auto',
        }}
      >
        <ServiceTable />
      </div>

      {/* Bottom left: VFSBrowser */}
      <div
        className="vfs-browser"
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          overflow: 'auto',
        }}
      >
        <VFSBrowser style={{ height: '100%' }} />
      </div>

      {/* Bottom right: Placeholder content */}
      <div
        className="right-side-content"
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          overflow: 'auto',
        }}
      >
        <h2>Right Side Content</h2>
        <p>This is where additional content can go.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

ReactDOM.render(<FileBrowserPage />, document.getElementById('root'));

export default FileBrowserPage;
