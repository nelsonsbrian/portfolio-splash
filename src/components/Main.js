import React from 'react';
import Icons from './Icons';

const Home = () => {
  return (
    <div className="main">
      <h1 className="lg-heading">
        Brian Nelson
        </h1>
      <h2 className="sm-heading">
        Software Developer
        </h2>
      <h2 className="tech-stacks sm-heading-sec">
        <span className="stack">TypeScript</span>
        <span className="dot"> &bull; </span>
        <span className="stack">NodeJS</span>
        <span className="dot"> &bull; </span>
        <span className="stack">React</span>
      </h2>

      <Icons/>

    </div>);
}

export default Home;