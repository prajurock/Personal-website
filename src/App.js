import './App.css';
import './static/css/main.scss'

import { Route, BrowserRouter as Router } from "react-router-dom";

import About from './pages/About'
import Contact from './pages/Contact';
import Index from './pages/Index';
import Projects from './pages/Projects';
import React from 'react'
import Resume from './pages/Resume';
import Stats from './pages/Stats'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/stats">
          <Stats />
        </Route>
      </div>
    </Router>
  );
}

export default App;
