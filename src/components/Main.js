import React from 'react';

const Home = () => {
  return (
    <div className="main">
      <h1 className="lg-heading">
        Brian Nelson
        </h1>
      <h2 className="sm-heading">
        Full-Stack Developer
        </h2>
      <div className="icons">
        <a href="https://www.linkedin.com/in/nelsonsbrian/">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/nelsonsbrian">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://gitlab.com/nelsonsbrian">
          <i className="fab fa-gitlab fa-2x"></i>
        </a>
      </div>
    </div>);
}

export default Home;