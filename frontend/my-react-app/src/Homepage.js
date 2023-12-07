import React, { useLayoutEffect, useState } from 'react'

import api from './api'; // Adjust the import path based on your project structure
import { GoogleLogin } from '@react-oauth/google'; // Import the Google login component
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Homepage.css'; // Import the CSS file for styling
import { useTranslation } from 'react-i18next';
import { useDarkMode } from './DarkModeContext';
// import ParticlesAnimation from './ParticlesAnimation';
import {
  useSpringRef,
  animated,
  useTransition,
  useSpring,
} from '@react-spring/web'
import styles from './styles.module.css'


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

      const youtubeLink = 'https://youtu.be/raVPHTartEc'; // Replace with your actual YouTube link

 const handlePrototypeClick2 = () => {
   // Handle the button click action
   // For example, you might want to open the YouTube video in a new tab or perform some other action.
   window.open(youtubeLink, '_blank');
 };


                                // <button className={`lang ${isDarkMode ? 'dark-mode-text' : ''}`} onClick={() => changeLanguage('en')}>EN</button>
                                // <button className={`lang ${isDarkMode ? 'dark-mode-text' : ''}`} onClick={() => changeLanguage('ja')}>JP</button>
                                // <button className={`lang ${isDarkMode ? 'dark-mode-text' : ''}`} onClick={() => changeLanguage('de')}>DE</button>
                                // <button className={`lang ${isDarkMode ? 'dark-mode-text' : ''}`} onClick={() => changeLanguage('fr')}>FR</button>


        const IMAGES = [
        'https://images.squarespace-cdn.com/content/v1/5c77350965a707ed1710a1bc/1592330659753-70M66LGEPXFTQ8S716MX/Generative+Art+by+Mark+Stock+-+Gyre+35700.jpg',
        'https://cdn.pixabay.com/photo/2018/09/04/09/12/generative-art-3653275_1280.jpg',
      ]


      const App = ()=> {
        const [activeIndex, setActiveIndex] = useState(0)
        const springApi = useSpringRef()

        const transitions = useTransition(activeIndex, {
          from: {
            clipPath: 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)',
          },
          enter: {
            clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
          },
          leave: {
            clipPath: 'polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)',
          },
          onRest: (_springs, _ctrl, item) => {
            if (activeIndex === item) {
              setActiveIndex(activeIndex === IMAGES.length - 1 ? 0 : activeIndex + 1)
            }
          },
          exitBeforeEnter: true,
          config: {
            duration: 4000,
          },
          delay: 1000,
          ref: springApi,
        })

        const springs = useSpring({
          from: {
            strokeDashoffset: 120,
          },
          to: {
            strokeDashoffset: 0,
          },
          config: {
            duration: 11000,
          },
          loop: true,
          ref: springApi,
        })

        useLayoutEffect(() => {
          springApi.start()
        }, [activeIndex])

        return (
          <div className={styles.container}>
            <div className={styles.container__inner}>
              {transitions((springs, item) => (
                <animated.div className={styles.img__container} style={springs}>
                  <img src={IMAGES[item]} />
                </animated.div>
              ))}
              <div className={styles.ticker}>
                <div />
                <animated.svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  style={springs}>
                  <path d="M19.9999 38.5001C17.5704 38.5001 15.1648 38.0216 12.9203 37.0919C10.6758 36.1622 8.63633 34.7995 6.91845 33.0816C5.20058 31.3638 3.83788 29.3243 2.90817 27.0798C1.97846 24.8353 1.49995 22.4296 1.49995 20.0002C1.49995 17.5707 1.97846 15.1651 2.90817 12.9206C3.83788 10.6761 5.20058 8.63663 6.91846 6.91875C8.63634 5.20087 10.6758 3.83818 12.9203 2.90847C15.1648 1.97876 17.5705 1.50024 19.9999 1.50024C22.4293 1.50024 24.835 1.97876 27.0795 2.90847C29.324 3.83818 31.3635 5.20088 33.0813 6.91876C34.7992 8.63663 36.1619 10.6761 37.0916 12.9206C38.0213 15.1651 38.4998 17.5707 38.4998 20.0002C38.4998 22.4296 38.0213 24.8353 37.0916 27.0798C36.1619 29.3243 34.7992 31.3638 33.0813 33.0816C31.3635 34.7995 29.324 36.1622 27.0795 37.0919C24.835 38.0216 22.4293 38.5001 19.9999 38.5001L19.9999 38.5001Z" />
                </animated.svg>
              </div>
            </div>
          </div>
        )
      }


  return (
    <div className={`homepage-container ${isDarkMode ? 'dark-mode1' : ''}`}>
<App />

<div className={styles.overlayContainer}>

<div className={`arriving-text ${isDarkMode ? 'dark-mode-text' : ''}`}>
  {t('Standards based business reporting processes.')}
</div>


<div className={`arriving-text5 ${isDarkMode ? 'dark-mode-text' : ''}`}>
  {t('Jinsei-Luciano provides an intuitive interface for professionals managing financial information services. ')}
</div>

<div className={`arriving-text5 ${isDarkMode ? 'dark-mode-text' : ''}`}>
  {t('Seamless, multi-formatted financial disclosure processes leveraging Jinsei.ai’s data aggregations and standard report model suites.')}
</div>
     </div>



      <button onClick={handlePrototypeClick} className={`prototype-button ${isDarkMode ? 'dark-mode-button' : ''}`}>
         [Demo] Luciano
      </button>

        <div >
          {youtubeLink && (
            <iframe
              width="460"
              className="iframe-container2"
              height="215"
              src="https://www.youtube.com/embed/raVPHTartEc"
              title="YouTube Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          )}
        </div>


      <div className={`arriving-text2 ${isDarkMode ? 'dark-mode-text' : ''}`}>
        {t('Transaction service hosting.')}
      </div>


      <button className={`timeline-button2 ${isDarkMode ? 'dark-mode-button' : ''}`}>
        Meu
      </button>

      <div className={`arriving-text ${isDarkMode ? 'dark-mode-text' : ''}`}>
        {t('XBRL, Disclosure and Ontology Process Pairing.')}
      </div>
      <button onClick={handleTimelineClick} className={`timeline-button ${isDarkMode ? 'dark-mode-button' : ''}`}>
        Corp Timeline
      </button>

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
