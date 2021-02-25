import './App.css';

import { Route, BrowserRouter as Router } from "react-router-dom";

import React from 'react'

function App() {
  return (
    <Router>
    <div>
      <Route exact path="/">
        <h1>hh</h1>
      </Route>
      <Route path="/news">
        <h1>pp</h1>
      </Route>
    </div>
  </Router>
  );
}

export default App;
