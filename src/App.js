import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <Router>
      <div id="project-root">
        <Body />
      </div>
    </Router>
  );
}

export default App;
