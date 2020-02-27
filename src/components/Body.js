import React from 'react';
import { Route } from 'react-router-dom';
import Main from './Main';
import Header from './Header';
import Projects from './Projects';
import About from './About';

const Body = () => {
  return (
    <div>
      <Header />
      <Route exact path="/" component={Main} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/about" component={About} />
    </div>
  );
}

export default Body;