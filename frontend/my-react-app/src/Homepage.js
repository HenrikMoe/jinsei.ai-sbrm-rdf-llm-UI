import React from 'react';
import api from './api'; // Adjust the import path based on your project structure
import { GoogleLogin } from '@react-oauth/google'; // Import the Google login component
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Homepage.css'; // Import the CSS file for styling
import { useTranslation } from 'react-i18next';
import { useDarkMode } from './DarkModeContext';


function Homepage() {
  const navigate = useNavigate(); // Initialize the navigate function
  const { t, i18n } = useTranslation();

  const { isDarkMode, toggleDarkMode } = useDarkMode();


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
    console.log(userEmail);

    if (userEmail) {
      console.log('User email:', userEmail);
    }

    // You can perform actions after successful login here, e.g., set user state or redirect.
    navigate('/prototype');
  };

  const handlePrototypeClick = () => {
    navigate('/prototype');
  };

  const handleTimelineClick = () => {
    navigate('/timeline');
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log(i18n);
  };

  return (
    <div className={`homepage-container ${isDarkMode ? 'dark-mode1' : ''}`}>
      <div className={`arriving-text ${isDarkMode ? 'dark-mode-text' : ''}`}>
        {t('Global standards based business reporting pipelines.')}
      </div>
      <button onClick={handlePrototypeClick} className={`prototype-button ${isDarkMode ? 'dark-mode-button' : ''}`}>
         Luciano
      </button>
      <div className={`langWrap ${isDarkMode ? 'dark-mode-text' : ''}`}>
        <button className={`lang ${isDarkMode ? 'dark-mode-text' : ''}`} onClick={() => changeLanguage('en')}>EN</button>
        <button className={`lang ${isDarkMode ? 'dark-mode-text' : ''}`} onClick={() => changeLanguage('ja')}>JP</button>
        <button className={`lang ${isDarkMode ? 'dark-mode-text' : ''}`} onClick={() => changeLanguage('de')}>DE</button>
        <button className={`lang ${isDarkMode ? 'dark-mode-text' : ''}`} onClick={() => changeLanguage('fr')}>FR</button>
      </div>
      <button onClick={handleTimelineClick} className={`timeline-button ${isDarkMode ? 'dark-mode-button' : ''}`}>
        Corp Timeline
      </button>
    </div>
  );
}

export default Homepage;
