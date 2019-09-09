import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Program from './pages/Program';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/our-program" component={Program} />
      </Router>
    </div>
  );
}

export default App;
