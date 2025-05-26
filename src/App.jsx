import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MainMenu from './components/LeftSection/LeftSection';
import WhatsNew from './components/MidSection/MidSection';
import RightSection from './components/RightSection/RightSection';
import './App.css';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Navbar />
      
      <div className="main-content">
        {/* Left Sidebar */}
        <div className="left-sidebar">
          <MainMenu />
        </div>
        
        {/* Center Content - What's New */}
        <div className="center-content">
          <WhatsNew />
        </div>
        
        {/* Right Sidebar  */}
        <div className="right-sidebar">
          <RightSection />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default App;