import React from 'react';
import './App.css';
import AppNav from './components/core/AppNav/AppNav';
import VidHero from './components/feature/VidHero/VidHero';
import AppFooter from './components/core/AppFooter/AppFooter';

const App = () => {
  return (
    <div className="App">
      <AppNav />
      <VidHero />
      <div className="filler"></div>
      <AppFooter />
    </div>
  );
}

export default App;
