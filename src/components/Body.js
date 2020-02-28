import React from 'react';
import { Route } from 'react-router-dom';
import Main from './Main';
import MobileHeader from './MobileHeader';
import NavHeader from './NavHeader';
import Projects from './Projects';
import About from './About';
import MediaQuery from 'react-responsive';
import { useMediaQuery } from 'react-responsive';
const Body = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <div className="body-container">
      {isTabletOrMobile ? <MobileHeader /> : <NavHeader />}
      <Route exact path="/" component={Main} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/about" component={About} />
    </div>
  );
}

export default Body;