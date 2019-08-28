import React from 'react';
import './App.css';
import AppNav from './components/core/AppNav/AppNav';
import AppFooter from './components/core/AppFooter/AppFooter';

const App = () => {
  return (
    <div className="App">
      <AppNav />
      <div className="filler"></div>
      <AppFooter />
    </div>
  );
}

export default App;
