import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Program from './pages/Program';

import './App.css';
import Nav from './components/core/Nav/Nav';
import Footer from './components/core/Footer/Footer';



const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
            <Route exact path="/" component={Home} />
            <Route exact path="/our-program" component={Program} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
