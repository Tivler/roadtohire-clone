import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';

import './App.css';
import AppNav from './components/core/AppNav/AppNav';
import AppFooter from './components/core/AppFooter/AppFooter';



const App = () => {
  return (
    <div className="App">
      <Router>
        <AppNav />
            <Route exact path="/" component={Home} />
        <AppFooter />
      </Router>
    </div>
  );
}

export default App;
