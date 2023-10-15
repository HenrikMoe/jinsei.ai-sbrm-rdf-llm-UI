import React from 'react';
import api from './api'; // Adjust the import path based on your project structure
import { GoogleLogin } from '@react-oauth/google'; // Import the Google login component
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Homepage() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = async () => {
    try {
      const response = await fetch(api.someRoute);
      if (response.ok) {
        const data = await response.json();
        // Handle the response data, e.g., display it on the page
        console.log(data);
      } else {
        // Handle the error, e.g., show an error message
        console.error('Error:', response.status, response.statusText);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error:', error);
    }
  };

  const handleLoginSuccess = (credentialResponse) => {
     console.log('Logged in successfully:', credentialResponse);

     // Extract the user's email from the credentialResponse
     const userEmail = credentialResponse.email;
     console.log(userEmail)


     if (userEmail) {
       console.log('User email:', userEmail);
     }

     // You can perform actions after successful login here, e.g., set user state or redirect.
     navigate('/prototype');
   };

  return (
    <div>
      <h1>Homepage</h1>
      <button onClick={handleClick}>Request API</button>

      {/* Add the Google login button */}
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={() => {
          console.error('Login Failed');
        }}
      >
        Login with Google
      </GoogleLogin>
    </div>
  );
}

export default Homepage;
