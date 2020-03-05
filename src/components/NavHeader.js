import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Transition } from 'react-spring/renderprops';
import { useTrail, animated } from 'react-spring';
import Icons from './Icons';

const NavHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
      " href="/files/Brian_Nelson_Resume.pdf" target="_blank">
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
        <Icons/>
      </ul>
    );
  }


  return (
    <nav id="nav-header">
      <Nav />
    </nav>);
}

export default NavHeader;
