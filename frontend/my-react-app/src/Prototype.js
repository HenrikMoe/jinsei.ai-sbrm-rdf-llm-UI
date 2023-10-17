import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import PrototypeHeader from './PrototypeHeader';
import PrototypeSideMenu from './PrototypeSideMenu';
import './Prototype.css'
import { useAuthentication } from './AuthenticationContext'; // Import the context

function Prototype() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAuthenticated, login, logout } = useAuthentication();

  console.log(isAuthenticated)

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeAndSetAuthenticated = () => {
    setIsModalOpen(false);
    login()
  };

  return (
    <div>
      {isAuthenticated ? (
        // Content for authenticated users
        <div>
          <PrototypeHeader />
          <PrototypeSideMenu />
          {/* Add content for signed-in users here */}
        </div>
      ) : (
        // Content for non-authenticated users
        <div>
          {isModalOpen && (
            <div className="modal">
              <h2>Login with Google</h2>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  // Handle successful authentication
                  //const email = credentialResponse.getEmail();
                  console.log(credentialResponse);
                  closeAndSetAuthenticated(); // Close the modal and set as authenticated
                }}
                onError={() => {
                  // Handle authentication error
                  console.log('Authentication failed');
                }}
                scope="email" // Include the "email" scope
              />
            </div>
          )}
          {!isModalOpen && (
            <button className='arrive-button' onClick={openModal}>Login for Access</button>
          )}
        </div>
      )}
    </div>
  );
}

export default Prototype;
