import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Routes from './Routes'; // Import the Routes component
import { AuthenticationProvider } from './AuthenticationContext'; // Import the context provider


const port = process.env.PORT || 80;
const host = process.env.HOST || '0.0.0.0';

console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
    <AuthenticationProvider>
      <Router>
        {/* Use the Routes component for routing */}
        <Routes />
      </Router>
      </AuthenticationProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
