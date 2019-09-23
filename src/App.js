import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Program from './pages/Program';
import JCSU from './pages/JCSU';
import FAQ from './pages/FAQ';

const App = () => {
  return (
    <div className="App">
      <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/our-program" component={Program} />
            <Route exact path="/jcsu" component={JCSU} />
            <Route exact path="/FAQ" component={FAQ} />
      </Router>
    </div>
  );
}

export default App;
