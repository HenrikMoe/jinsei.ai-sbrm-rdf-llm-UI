import React, { useEffect, useState } from 'react'; // Import useEffect
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'; // Import Outlet
import Header from './Header'; // Import the Header component
import Homepage from './Homepage';
import Prototype from './Prototype';
import PrivacyPolicy from './PrivacyPolicy'; // Import PrivacyPolicy component
import TermsOfService from './TermOfService'; // Import TermsOfService component
import Timeline from './Timeline'; // Import TermsOfService component
import About from './About'; // Import TermsOfService component
import Footer from './Footer'; // Replace with the actual path to your Footer component file
import { DarkModeProvider } from './DarkModeContext';
import { DataStoreProvider } from './DataStore'; // Import the DataStoreProvider
import ChatGBT from './ChatGBT';
import QuantexaJinsei from './Jinsei-Quantexa';


import XMLViewer from './XMLViewer';
import XMLViewer2 from './XMLViewer2'
import XMLViewer3 from './XMLViewer3';
import XMLViewer4 from './XMLViewer4'
import XMLViewer5 from './XMLViewer5';
import XMLViewer6 from './XMLViewer6'
import XMLViewer7 from './XMLViewer7';
import XMLViewer8 from './XMLViewer8'
import XMLViewer9 from './XMLViewer9';
import XMLViewer10 from './XMLViewer10'
import XMLViewer11 from './XMLViewer11';
import XMLViewer12 from './XMLViewer12'
import XMLViewer13 from './XMLViewer13';
import XMLViewer14 from './XMLViewer14'
import XMLViewer15 from './XMLViewer15';
import XMLViewer16 from './XMLViewer16'
import XMLViewer17 from './XMLViewer17';
import XMLViewer18 from './XMLViewer18'
import XMLViewer19 from './XMLViewer19'
import API from './api'


const AppRoutes = () => {
  const location = useLocation(); // Get the current location


  useEffect(() => {
    document.title = 'Automate Equity & Enterprise Data Mapping For Reports & Analysis With AI.'; // Change this title
  }, []);


  const [userInfo, setUserInfo] = useState(null)

  const listLoginInfo = (info)=>{
    setUserInfo(info)
    API.sendUserInfo(info)

  }
//        <Route path="/quantexa-jinsei-auditchain" element={<QuantexaJinsei />} /> {/* Add TermsOfService component */}
  return (
    <div>
    <DarkModeProvider>
    <DataStoreProvider>
      <Header currentRoute={location.pathname} userInfo={userInfo}/> {/* Include the Header component */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/prototype" element={<Prototype listLoginInfo={listLoginInfo}/>} />
        <Route path="/privacy" element={<PrivacyPolicy />} /> {/* Add PrivacyPolicy component */}
        <Route path="/tos" element={<TermsOfService />} /> {/* Add TermsOfService component */}
        <Route path="/timeline" element={<Timeline />} /> {/* Add TermsOfService component */}
        <Route path="/about" element={<About />} /> {/* Add TermsOfService component */}

        <Route path="/cmxsd" element={<XMLViewer />} /> {/* Add TermsOfService component */}
        <Route path="/report-parts-rules-defxml" element={<XMLViewer2 />} /> {/* Add TermsOfService component */}
        <Route path="/be-arcrolesxsd" element={<XMLViewer3 />} /> {/* Add TermsOfService component */}
        <Route path="/cm-arcrolesxsd" element={<XMLViewer4 />} /> {/* Add TermsOfService component */}
        <Route path="/cm-defxml" element={<XMLViewer5 />} /> {/* Add TermsOfService component */}
        <Route path="/cm-docxml" element={<XMLViewer6 />} /> {/* Add TermsOfService component */}
        <Route path="/cm-labxml" element={<XMLViewer7 />} /> {/* Add TermsOfService component */}
        <Route path="/cm-prexml" element={<XMLViewer8 />} /> {/* Add TermsOfService component */}
        <Route path="/cm-rolesxsd" element={<XMLViewer9 />} /> {/* Add TermsOfService component */}
        <Route path="/cm-rparts-rsxsd" element={<XMLViewer10 />} /> {/* Add TermsOfService component */}
        <Route path="/cm-rparts-xbrlxml" element={<XMLViewer11 />} /> {/* Add TermsOfService component */}
        <Route path="/cm-rparts-xbrlxsd" element={<XMLViewer12 />} /> {/* Add TermsOfService component */}
        <Route path="/cm-xbrlxsd" element={<XMLViewer13 />} /> {/* Add TermsOfService component */}
        <Route path="/drules-arcrolesxsd" element={<XMLViewer14 />} /> {/* Add TermsOfService component */}
        <Route path="/extendedLinkRolesxsd" element={<XMLViewer15 />} /> {/* Add TermsOfService component */}
        <Route path="/model-structure-rules-strict-defxml" element={<XMLViewer16 />} /> {/* Add TermsOfService component */}
        <Route path="/model-structure-types-rules-defxml" element={<XMLViewer17 />} /> {/* Add TermsOfService component */}
        <Route path="/properties-rules-defxml" element={<XMLViewer18 />} /> {/* Add TermsOfService component */}
        <Route path="/propertiesxsd" element={<XMLViewer19 />} /> {/* Add TermsOfService component */}



      </Routes>

      <Footer /> {/* Include the Header component */}
      </DataStoreProvider>
    </DarkModeProvider>
    </div>
  );
};

// <ChatGBT />
export default AppRoutes;
