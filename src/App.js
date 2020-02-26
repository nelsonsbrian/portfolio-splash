import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
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
