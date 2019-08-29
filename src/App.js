import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import OurProgram from './pages/OurProgram';
import CoreValues from './pages/CoreValues';
import OurStories from './pages/OurStories';
import Apply from './pages/Apply';
import JCSU from './pages/JCSU';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';

import './App.css';
import AppNav from './components/core/AppNav/AppNav';
import AppFooter from './components/core/AppFooter/AppFooter';



const App = () => {
  return (
    <div className="App">
      <Router>
        <AppNav />
            <Route exact path="/" component={Home} />
            <Route exact path="/your-career" component={OurProgram} />
            <Route exact path="/ourstories" component={OurStories} />
            <Route exact path="/corevalues" component={CoreValues} />
            <Route exact path="/apply" component={Apply} />
            <Route exact path="/JCSU" component={JCSU} />
            <Route exact path="/FAQ" component={FAQ} />
            <Route exact path="/privacy-policy" component={Privacy} />
        <AppFooter />
      </Router>
    </div>
  );
}

export default App;
