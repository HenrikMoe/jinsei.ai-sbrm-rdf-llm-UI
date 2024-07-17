import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import VFSBrowser from './ChonkyAdvanced.tsx'; // Assuming this is where you've defined VFSBrowser
import { Resizable } from 'react-resizable';
import ServiceSubpackChonk from './TheServiceSubpackListingsChonky.tsx'
import ServiceTable from './ServiceTable.js'
import Prototype from '../Prototype.js'

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

const FileBrowserPage = (listLoginInfo) => {
  const [leftPanelWidth, setLeftPanelWidth] = useState(400);

  const onResize = (event, { size }) => {
    setLeftPanelWidth(size.width);
  };

  return (
    <div
      className="file-browser-page"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gridTemplateRows: '1fr 2fr', // Top row is half the height of the bottom row
        height: 'calc(100vh - 100px)', // Adjust height to fit within viewport
        gap: '10px',
        marginTop: '100px',
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
          color: 'white'
        }}
      >
        {/* <Prototype listLoginInfo={listLoginInfo}/> */}
        <div>a</div>
      </div>
    </div>
  );
};

ReactDOM.render(<FileBrowserPage />, document.getElementById('root'));

export default FileBrowserPage;
