import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './NavBar/ResponsiveAppBar';
import HomePage from './Home/HomePage';
import AboutPage from './About/AboutPage'; 
import Services from './Services/Services';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';


function App() {
  const [isEnglish, setIsEnglish] = React.useState(false);
  const [isTurkish, setIsTurkish] = React.useState(true);

  return (
    <Router>
      <div>
        <ResponsiveAppBar 
          isTurkish={isTurkish} 
          isEnglish={isEnglish}
          setIsEnglish={setIsEnglish} 
          setIsTurkish={setIsTurkish}
        />

        
        <Routes>
          <Route 
            path="/" 
            element={<HomePage isTurkish={isTurkish} isEnglish={isEnglish} />} 
          />
          <Route
            path="/About" 
            element={<AboutPage isTurkish={isTurkish} isEnglish={isEnglish} />} 
          />
          <Route
            path="/Services" 
            element={<Services isTurkish={isTurkish} isEnglish={isEnglish} />} 
          />

          <Route
            path="/Contact" 
            element={<Contact isTurkish={isTurkish} isEnglish={isEnglish} />} 
          />
        </Routes>

        <Footer isTurkish={isTurkish} isEnglish={isEnglish} />
      </div>
    </Router>
  );
}

export default App;
