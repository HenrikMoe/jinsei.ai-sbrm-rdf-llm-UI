import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function Prototype() {
  // Check if the user is authenticated. You can replace this with your actual logic.
  const isAuthenticated = true; // Replace with your user authentication logic

  return (
    <div>
      <h1>Prototype</h1>
      {isAuthenticated ? (
        // Content for authenticated users
        <div>
          <p>Welcome, you are signed in!</p>
          {/* Add content for signed-in users here */}
        </div>
      ) : (
        // Content for non-authenticated users
        <div>
          <p>You are not signed in.</p>
          {/* Add content for non-signed-in users here */}
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              // Handle successful authentication
              const email = credentialResponse.getEmail();
              console.log('User email:', email);
              // You can use the `email` variable to access the user's email.
            }}
            onError={() => {
              // Handle authentication error
              console.log('Authentication failed');
            }}
            scope="email" // Include the "email" scope
          />
        </div>
      )}
    </div>
  );
}

export default Prototype;
