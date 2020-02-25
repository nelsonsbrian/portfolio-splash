import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div id="home">
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