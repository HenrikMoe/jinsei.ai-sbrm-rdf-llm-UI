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


  const handleXML1Click = () =>{
    navigate('/cmxsd')
  }
  const handleXML2Click = () =>{
    navigate('/report-parts-rules-defxml')
  }
  const handleXML3Click = () =>{
      navigate('/be-arcrolesxsd')
    }
  const handleXML4Click = () =>{
        navigate('/cm-arcrolesxsd')
      }
  const handleXML5Click = () =>{
          navigate('/cm-defxml')
        }
  const handleXML6Click = () =>{
            navigate('/cm-docxml')
          }
    const handleXML7Click = () =>{
              navigate('/cm-labxml')
            }
    const handleXML8Click = () =>{
                navigate('/cm-prexml')
              }
    const handleXML9Click = () =>{
                  navigate('/cm-rolesxsd')
                }
    const handleXML10Click = () =>{
                    navigate('/cm-rparts-rsxsd')
                  }
      const handleXML11Click = () =>{
                      navigate('/cm-rparts-xbrlxml')
                    }
        const handleXML12Click = () =>{
                        navigate('/cm-rparts-xbrlxsd')
                      }
          const handleXML13Click = () =>{
                          navigate('/cm-xbrlxsd')
                        }
        const handleXML14Click = () =>{
                            navigate('/drules-arcrolesxsd')
                          }
        const handleXML15Click = () =>{
                              navigate('/extendedLinkRolesxsd')
                            }
        const handleXML16Click = () =>{
                              navigate('/model-structure-rules-strict-defxml')
                            }
        const handleXML17Click = () =>{
                                navigate('/model-structure-types-rules-defxml')
                              }
        const handleXML18Click = () =>{
                                navigate('/properties-rules-defxml')
                              }
      const handleXML19Click = () =>{
                                  navigate('/propertiesxsd')
                                }

                                // <button className={`lang ${isDarkMode ? 'dark-mode-text' : ''}`} onClick={() => changeLanguage('en')}>EN</button>
                                // <button className={`lang ${isDarkMode ? 'dark-mode-text' : ''}`} onClick={() => changeLanguage('ja')}>JP</button>
                                // <button className={`lang ${isDarkMode ? 'dark-mode-text' : ''}`} onClick={() => changeLanguage('de')}>DE</button>
                                // <button className={`lang ${isDarkMode ? 'dark-mode-text' : ''}`} onClick={() => changeLanguage('fr')}>FR</button>

  return (
    <div className={`homepage-container ${isDarkMode ? 'dark-mode1' : ''}`}>
      <div className={`arriving-text ${isDarkMode ? 'dark-mode-text' : ''}`}>
        {t('Global standards based business reporting pipelines.')}
      </div>
      <button onClick={handlePrototypeClick} className={`prototype-button ${isDarkMode ? 'dark-mode-button' : ''}`}>
         Luciano
      </button>
      <div className={`langWrap ${isDarkMode ? 'dark-mode-text' : ''}`}>
      <div className={`arriving-text ${isDarkMode ? 'dark-mode-text' : ''}`}>
        {t('Delivering superior business reporting and transaction service hosting management.')}
      </div>
      </div>
      <button onClick={handleTimelineClick} className={`timeline-button ${isDarkMode ? 'dark-mode-button' : ''}`}>
        Corp Timeline
      </button>

      <div style={{ marginTop: '100px'}}>
      <button onClick={handleXML1Click} className={`lang ${isDarkMode ? 'dark-mode-button' : ''}`}>
        Seattle Method Zip
      </button>
      </div>

    </div>
  );
}

export default Homepage;


// <div style={{ marginTop: '100px', marginLeft: '40px',  marginRight: '40px'}}>
// <h1>Seattle Method</h1>
// <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
// <div style={{ width: '45%' }}>
// <button onClick={handleXML1Click} className={`lang ${isDarkMode ? 'dark-mode-button' : ''}`}>
//    cmxsd
// </button>
// <button>
//   <a href="/cm.xsd" download>
//     Download cm.XSD
//   </a>
// </button>
// <button onClick={handleXML2Click} className={`lang ${isDarkMode ? 'dark-mode-button' : ''}`}>
//    report-parts-rules-defxml
// </button>
// <button onClick={handleXML3Click} className={`lang ${isDarkMode ? 'dark-mode-button' : ''}`}>
//    be-arcrolesxsd
// </button>
// <button onClick={handleXML4Click} className={`lang ${isDarkMode ? 'dark-mode-button' : ''}`}>
//    cm-arcrolesxsd
// </button>
// <button onClick={handleXML5Click} className={`lang ${isDarkMode ? 'dark-mode-button' : ''}`}>
//    cm-defxml
// </button>
// <button onClick={handleXML6Click} className={`lang ${isDarkMode ? 'dark-mode-button' : ''}`}>
//    cm-docxml
// </button>
// <button onClick={handleXML7Click} className={`lang ${isDarkMode ? 'dark-mode-button' : ''}`}>
//    cm-labxml
// </button>
// <button onClick={handleXML8Click} className={`lang ${isDarkMode ? 'dark-mode-button' : ''}`}>
//   cm-prexml
// </button>
// <button onClick={handleXML9Click} className={`lang ${isDarkMode ? 'dark-mode-button' : ''}`}>
//    cm-rolesxsd
// </button>
// <button onClick={handleXML10Click} className={`lang ${isDarkMode ? 'dark-mode-button' : ''}`}>
//   cm-rparts-rsxsd
// </button>
// </div>
//
// <div style={{ width: '45%' }}>
// <button onClick={handleXML11Click} className={`lang ${isDarkMode ? 'dark-mode-button' : ''}`}>
// cm-rparts-xbrlxml
// </button>
// <button onClick={handleXML12Click} className={`lang ${isDarkMode ? 'dark-mode-button' : ''}`}>
//    cm-rparts-xbrlxsd
// </button>
// <button onClick={handleXML13Click} className={`lang ${isDarkMode ? 'dark-mode-button' : ''}`}>
//    cm-xbrlxsd
// </button>
// <button onClick={handleXML14Click} className={`lang ${isDarkMode ? 'dark-mode-button' : ''}`}>
//    drules-arcrolesxsd
// </button>
// <button onClick={handleXML15Click} className={`lang ${isDarkMode ? 'dark-mode-button' : ''}`}>
//    extendedLinkRolesxsd
// </button>
// <button onClick={handleXML16Click} className={`lang ${isDarkMode ? 'dark-mode-button' : ''}`}>
//   model-structure-rules-strict-defxml
// </button>
// <button onClick={handleXML17Click} className={`lang ${isDarkMode ? 'dark-mode-button' : ''}`}>
//    model-structure-types-rules-defxml
// </button>
// <button onClick={handleXML18Click} className={`lang ${isDarkMode ? 'dark-mode-button' : ''}`}>
//    properties-rules-defxml
// </button>
// <button onClick={handleXML19Click} className={`lang ${isDarkMode ? 'dark-mode-button' : ''}`}>
//    propertiesxsd
// </button>
// </div>
// </div>
// </div>
