import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import VFSBrowser from './ChonkyAdvanced.tsx'; // Assuming this is where you've defined VFSBrowser
import { Resizable } from 'react-resizable';
import ServiceSubpackChonk from './TheServiceSubpackListingsChonky.tsx';
import ServiceTable from './ServiceTable.js';
import Prototype from '../Prototype.js';
import { AuthenticationProvider } from '../AuthenticationContext'; // Import the context provider
import { DarkModeProvider } from '../DarkModeContext';
import { DataStoreProvider } from '../DataStore'; // Import the DataStoreProvider
import DragAndDrop from './DragAndDrop.js';
import DragAndDrop2 from './DragAndDrop2.js';
import DragAndDrop3 from './DragAndDrop3.js';
import Modal from 'react-modal';
import APIUI from '../APIUIComponents/APIUIParent.js';
import Spinner from '../Spinner.js'; // Import the Spinner component
import ButtonGroup from './ServiceActions.js'

import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

Modal.setAppElement('#root');

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);

  const [isSpinnerVisible, setIsSpinnerVisible] = useState(true);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSpinnerVisible(prev => !prev);
    }, 6000); // 6 seconds total: 1.5 seconds visible, 4.5 seconds invisible

    // Set up the timeout for the first visibility change
    const timeout = setTimeout(() => {
      setIsSpinnerVisible(false);
    }, 1500); // 1.5 seconds after the component mounts

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const onResize = (event, { size }) => {
    setLeftPanelWidth(size.width);
  };

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const handleSend = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { content: message, direction: 'outgoing', sender: 'user' },
    ]);
  };

  // gridArea: 'right-bottom'
  // <div
  //   className="vfs-browser"
  //   style={{
  //     border: '1px solid #ccc',
  //     padding: '10px',
  //     overflow: 'auto',
  //   }}
  // >
  //   <VFSBrowser style={{ height: '100%' }} />
  // </div>

  return (
    <div
      className="file-browser-page"
      style={{
        display: 'grid',
        gridTemplateColumns: '2fr 5fr', // Left column takes 1fr, right takes 2fr
        gridTemplateRows: '1fr 2fr', // Right side is split into two equal rows
        height: 'calc(100vh - 150px)', // Full viewport height minus 100px
        gap: '10px',
        marginTop: '100px',
        borderRadius: '5px',
        padding: '10px',
        gridTemplateAreas: `
          "left right-top"
          "left right-bottom"
        `
      }}
    >
      <div
        className="service-subpack-chonk"
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          borderRadius: '5px',
          overflow: 'auto',
          gridArea: 'left'
        }}
      >
        <ServiceSubpackChonk />
      </div>

      <div
        className="service-table"
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          borderRadius: '5px',

          overflow: 'auto',
          gridArea: 'right-top'
        }}
      >
        <ServiceTable />
      </div>
   

      <div
        className="right-side-content"
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          overflow: 'auto',
           gridArea: 'right-bottom',
           borderRadius: '5px',

          color: 'white',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            marginLeft: '10px',
            transform: 'scale(0.79)',
            transformOrigin: 'top left',
            width: '122%',
            borderBottom: 'solid 1px grey',
            marginBottom: '10px'
          }}
        >
          <h3 style={{ color: 'white', padding: '10px' }}>My Service 1</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            marginLeft: '10px',
            transform: 'scale(0.99)',
            transformOrigin: 'top left',
          }}>
            <h3 style={{ color: 'green' , padding: '10px', marginLeft: '20px',}}>
              Active
            </h3>
            {isSpinnerVisible && <Spinner style={{marginTop: '50px'}} />} 
          </div>
          <ButtonGroup/>
          <h3 style={{ color: 'white', marginTop: '30px' }}>Generated Reports <button>Open</button></h3>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            marginLeft: '10px',
            transform: 'scale(0.77)',
            transformOrigin: 'top left',
          }}
        >
          <DragAndDrop />
          <DragAndDrop2 />
          <DragAndDrop3 />
        </div>

        <AuthenticationProvider>
          <DataStoreProvider>
            <DarkModeProvider>
              <Prototype listLoginInfo={listLoginInfo} />
            </DarkModeProvider>
          </DataStoreProvider>
        </AuthenticationProvider>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        style={modalStyles}
      >
        <div style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 200px)' }}>
          {modalContent}
        </div>
        <button onClick={closeModal} style={styles.button}>
          Close API UI
        </button>
      </Modal>

      <button style={chatButtonStyle} onClick={toggleChat}>
        Jinsei.ai Chat
      </button>

      {showChat && (
        <div style={chatPopupStyle}>
          <MainContainer>
            <ChatContainer>
              <MessageList>
                {messages.map((msg, i) => (
                  <Message key={i} model={{ message: msg.content, sentTime: 'just now', sender: msg.sender, direction: msg.direction }} />
                ))}
              </MessageList>
              <MessageInput placeholder="Type a message..." onSend={handleSend} />
            </ChatContainer>
          </MainContainer>
        </div>
      )}
    </div>
  );
};

const chatButtonStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: 'black',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  opacity: '.8',
  width: '100px',
  height: '100px',
  fontSize: '16px',
  cursor: 'pointer',
};

const chatPopupStyle = {
  position: 'fixed',
  bottom: '80px',
  right: '20px',
  width: '350px',
  height: '400px',
  zIndex: 1000,
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
};

const styles = {
  text: {
    margin: 0,
    fontSize: '16px',
  },
  closeButton: {
    background: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    cursor: 'pointer',
  },
  button: {
    background: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    cursor: 'pointer',
  },
};

const modalStyles = {
  content: {
    right: 'auto',
    bottom: 'auto',
    marginTop: '50px',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: 'black',
    overflowX: 'hidden',
    overflowY: 'auto',
    width: '90%',
    maxHeight: '90vh',
    textAlign: 'center',
  },
};

ReactDOM.render(<FileBrowserPage />, document.getElementById('root'));

export default FileBrowserPage;
