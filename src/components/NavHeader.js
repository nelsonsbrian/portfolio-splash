import React from 'react';
import { NavLink } from 'react-router-dom';
import Icons from './Icons';

const NavHeader = () => {

  function Nav() {
    const links = [
      <NavLink to="/" exact
        activeClassName="active"
        className="nav-link">Home
        </NavLink>,
      <NavLink to="/about"
        activeClassName="active"
        className="nav-link">About
        </NavLink>,
      <NavLink to="/projects"
        activeClassName="active"
        className="nav-link">Projects
        </NavLink>,
      <a className="nav-link" target="_blank
      " href="/files/Brian_Nelson_Resume.pdf">
        Resume
      </a>
    ];

    return (
      <ul className={`menu-nav`}>
        {links.map((link, i) => {
          return (
            <span key={i} className="nav-item">
              {link}
            </span>
          );
        })}
        <Icons />
      </ul>
    );
  }


  return (
    <nav id="nav-header">
      <Nav />
    </nav>);
}

export default NavHeader;
