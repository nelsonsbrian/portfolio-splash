import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import About from './About';

const Body = () => {
  return (
    <>
      <Route path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/about" component={About} />
    </>
  );
}

export default Body;