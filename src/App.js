import './App.css';
import './static/css/main.scss'

import { Route, BrowserRouter as Router } from "react-router-dom";

import Index from './pages/Index';
import React from 'react'

function App() {
  return (
    <Router>
    <div>
      <Route exact path="/">
        <Index/>
      </Route>
      <Route path="/news">
        <h1>pp</h1>
      </Route>
    </div>
  </Router>
  );
}

export default App;
