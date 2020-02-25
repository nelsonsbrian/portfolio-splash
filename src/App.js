import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <Router>
      <Header />
      <Body/>
      </Router>
  );
}

export default App;
