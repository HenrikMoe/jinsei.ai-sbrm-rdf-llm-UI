import React, { useLayoutEffect, useState } from 'react'

import api from './api'; // Adjust the import path based on your project structure
import { GoogleLogin } from '@react-oauth/google'; // Import the Google login component
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Homepage.css'; // Import the CSS file for styling
import { useTranslation } from 'react-i18next';
import { useDarkMode } from './DarkModeContext';
import { Link } from 'react-router-dom';

import axios from 'axios';

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
  const pdfUrl = `${process.env.PUBLIC_URL}/Jinsei-ai.pdf`;
   const pdfFileName = 'Jinsei-ai.pdf';

  const DownloadButton = ({ pdfUrl, pdfFileName }) => {
    const handleDownload = async () => {
      try {
        // Fetch the PDF file
        const response = await axios.get(pdfUrl, {
          responseType: 'blob',
        });

        // Create a Blob from the response data
        const blob = new Blob([response.data], { type: 'application/pdf' });

        // Create a download link
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', pdfFileName);

        // Append the link to the document
        document.body.appendChild(link);

        // Trigger the click event on the link
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);
      } catch (error) {
        console.error('Error downloading PDF:', error);
      }
    };

    return (
      <button className={`prototype-buttonw ${isDarkMode ? 'dark-mode-button' : ''}`} onClick={handleDownload}>
        Download Use Case
      </button>
    );
  };

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

//        'https://cdn.pixabay.com/photo/2018/09/04/09/12/generative-art-3653275_1280.jpg',

        const IMAGES = [
        'https://images.squarespace-cdn.com/content/v1/5c77350965a707ed1710a1bc/1592330659753-70M66LGEPXFTQ8S716MX/Generative+Art+by+Mark+Stock+-+Gyre+35700.jpg',
        'https://images.squarespace-cdn.com/content/v1/5c77350965a707ed1710a1bc/1592330659753-70M66LGEPXFTQ8S716MX/Generative+Art+by+Mark+Stock+-+Gyre+35700.jpg',

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
            duration: 15000,
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

<div className={styles.container} style={{
    height: '500px',
    }}>
<Link 
  to="/activedemo" 
  style={{
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: 'red',
    color: 'white',
    fontFamily: 'sans-serif',
    textDecoration: 'none',
    border: 'none',
    marginTop: '100px',
    
    fontSize: '40px',
    borderRadius: 0,
    zIndex: '1',
    cursor: 'pointer',
    position: 'relative', // Necessary for positioning the pseudo-elements
    transition: 'all 0.2s ease-in-out',
  }}
>
  Active Demo
  
  {/* Bottom Right Triangle Shadow */}
  <div style={{
    position: 'absolute',
    bottom: '-100px', // Adjust positioning
    right: '-15px',  // Move triangle shadow more to the right
    width: '280px',  // Adjust size as needed
    height: '100px',
    backgroundColor: 'rgb(208, 208, 208)', // Darker warm shadow color
    clipPath: 'polygon(0 0, 100% 0, 100% 50%)', // Right triangle shape
    mixBlendMode: 'normal', // Prevent darker overlaps
  }}/>
  

  
  {/* Right Triangle Shadow */}
  <div style={{
    position: 'absolute',
    bottom: '-15px', // Adjust positioning
    right: '-40px',  // Move triangle shadow slightly to the right
    width: '40px',  // Adjust size as needed
    height: '80px', // Adjust size as needed
    backgroundColor: 'rgb(208, 208, 208)', // Darker warm shadow color
    clipPath: 'polygon(0 0, 0 100%, 90% 100%)', // Bottom triangle shape
    zIndex: '0',
    mixBlendMode: 'normal', // Prevent darker overlaps
  }}/>
</Link>


{/* <App /> */}



    </div>
    <div style={{    marginTop: '300px',marginBottom: '200px'
}}>
{/*
<iframe
   src="https://www.youtube.com/embed/t8y8-TjGM5k?rel=0"
   title="YouTube video player"
   frameBorder="0"
   referrerPolicy="strict-origin-when-cross-origin"
   allowFullScreen
 ></iframe> 
 */}
 {/* Bottom Right Triangle Shadow */}
 {/* Bottom Right Triangle Shadow */}
</div>
 <div style={styles2.bottomRightTriangle} />

{/* Right Triangle Shadow */}
<div style={styles2.rightTriangle} />

<div className={styles.overlayContainer}>

<div  className={`arriving-text ${isDarkMode ? 'dark-mode-text' : ''}`}>
  {/* {<div className={styles.container} >
   
   <iframe
   className="video-iframe"
   src="https://www.youtube.com/embed/t8y8-TjGM5k?rel=0"
   title="YouTube video player"
   frameBorder="0"
   referrerPolicy="strict-origin-when-cross-origin"
   allowFullScreen
 ></iframe>
 </div> */}

   {/* <DownloadButton pdfUrl={pdfUrl} pdfFileName={pdfFileName} />
   <a href="mailto:henrik@jinsei.ai?subject=Reach%20Out" className={`prototype-button2 ${isDarkMode ? 'dark-mode-button' : ''}`}>
     Let's Build
   </a> */}
</div>


  </div>

{/* <div className='firstConent'> */}
{/* <div className='iconWrap1'>
<div><img className='icon2wrap' src={`${process.env.PUBLIC_URL}/factory-2-128.png`}/></div>
<div><img className='icon1wrap' src={`${process.env.PUBLIC_URL}/arrow-31-128.png`}/></div>
<div><img className='icon1wrap' src={`${process.env.PUBLIC_URL}/document.png`}/></div>
</div> */}

{/* <div className={`arriving-text7 ${isDarkMode ? 'dark-mode-text' : ''}`}>
  {t('Automate data digestion & win in the 21st century. ')}
</div> */}
{/* </div> */}

{/* <div className={`arriving-text6 ${isDarkMode ? 'dark-mode-text' : ''}`}>
  {t('Jinsei.ai automates data transformation with AI. Delivering intelligent insights, transparency and performance.')}
</div> */}



{/* <div className="timelinePosition">
  <iframe
    src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1X7czOi6_A1kLPb24lBL4zvj6n8RFiDaG-QrPFtSyJy0&font=Default&lang=en&initial_zoom=.5&height=600"
    height="500"
    webkitallowfullscreen
    mozallowfullscreen
    allowfullscreen
    frameBorder="0"
  ></iframe>
</div> */}


{/* <div className='firstConent'> */}
{/* <div className='iconWrap2'>
<div><img className='icon2wrap' src={`${process.env.PUBLIC_URL}/manage.png`}/></div>
<div><img className='icon1wrap' src={`${process.env.PUBLIC_URL}/connection.png`}/></div>
</div> */}

{/* <div className={`arriving-text5 ${isDarkMode ? 'dark-mode-text' : ''}`}>
  {t('AI data transformation and intelligent infrastructure. ')}
</div> */}
      {/* </div> */}
      {/* <div className={`arriving-text6 ${isDarkMode ? 'dark-mode-text' : ''}`}>
        {t('Let Jinsei.ai carve new paths to prosperity for your business.')}

      </div> */}

      {/* <div>
        {youtubeLink && (
          <iframe
            width="460"
            className="iframe-container2"
            height="215"
            src="https://www.youtube.com/embed/g-j3tqg4K_s?si=laTplL2gtbMGHBXq"
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
      </div> */}
{/* <div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/t8y8-TjGM5k?si=mlB9DzlGvO6f_7uq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div> */}

      {/* <a href="mailto:henrik@jinsei.ai?subject=Reach%20Out" className={`prototype-button2 ${isDarkMode ? 'dark-mode-button' : ''}`}>
        Reach Out
      </a> */}





    </div>
  );
}

const styles2 = {
  bottomRightTriangle: {
    position: 'absolute',
    bottom: '-580px',
    right: '440px',
    width: '320px',
    height: '100px',
    backgroundColor: 'rgb(146, 146, 146);',
    clipPath: 'polygon(0 0, 100% 0, 100% 50%)',
    mixBlendMode: 'normal',
    zIndex: 0,
  },
  rightTriangle: {
    position: 'absolute',
    bottom: '-495px',
    right: '410px',
    width: '40px',
    height: '315px',
    backgroundColor: 'rgb(146, 146, 146);',
    clipPath: 'polygon(0 0, 0 100%, 90% 100%)',
    zIndex: 0,
    mixBlendMode: 'normal',
  },
};

// Apply media queries
const mediaQueries = {
  '@media (max-width: 600px)': {
    bottomRightTriangle: {
      bottom: '-150px', // Adjust mobile position
      right: '10px', // Adjust mobile position
      width: '200px', // Adjust mobile size
      height: '60px', // Adjust mobile size
    },
    rightTriangle: {
      bottom: '-120px', // Adjust mobile position
      right: '5px', // Adjust mobile position
      width: '20px', // Adjust mobile size
      height: '200px', // Adjust mobile size
    },
  },
};

Object.keys(mediaQueries).forEach((media) => {
  const stylesMedia = mediaQueries[media];
  Object.keys(stylesMedia).forEach((key) => {
    styles[key] = { ...styles[key], ...stylesMedia[key] };
  });
});

export default Homepage;

// <button onClick={handlePrototypeClick} className={`prototype-button ${isDarkMode ? 'dark-mode-button' : ''}`}>
//    [Demo] Luciano
// </button>

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
