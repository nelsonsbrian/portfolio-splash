import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Transition } from 'react-spring/renderprops';
import { useTrail, animated } from 'react-spring';
import Icons from './Icons';

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  function Branding() {
    return (
      <div className={`menu-branding menu-${menuOpen}`}>
        <div className="portrait"></div>
      </div>
    )
  }

  function Nav() {
    const links = [
      <NavLink to="/" exact
        activeClassName="active"
        onClick={() => setMenuOpen(false)}
        className="nav-link">Home
        </NavLink>,
      <NavLink to="/about"
        activeClassName="active"
        onClick={() => setMenuOpen(false)}
        className="nav-link">About
        </NavLink>,
      <NavLink to="/projects"
        activeClassName="active"
        onClick={() => setMenuOpen(false)}
        className="nav-link">Projects
        </NavLink>,
      <div>
      <a className="nav-link" target="_blank
      " href="/files/Brian_Nelson_Resume.pdf">
        Resume
      </a>
      </div>,
      <div className="nav-icons">
        <Icons size='1'/>
      </div>
    ];
    const slideRight = useTrail(links.length, {
      from: { transform: 'translate3d(600px, 0, 0)' },
      to: { transform: 'translate3d(0, 0, 0)' }
    })
    return (
      <ul className={`menu-nav`}>
        <div className="nav-item header-name">Brian Nelson</div>
        {slideRight.map((props, index) => {
          return (
            <animated.div
              key={index}
              style={props}
              className="nav-item">
              {links[index]}
            </animated.div>
          );
        })}
      </ul>
    );
  }


  return (
    <nav className="header">

      <div className={`menu-btn menu-${menuOpen}`} onClick={() => setMenuOpen(!menuOpen)}>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>

      <Transition
        items={menuOpen}
        from={{ transform: 'translate3d(0, -100%, 0)' }}
        enter={{ transform: 'translate3d(0, 0, 0)' }}
        leave={{ transform: 'translate3d(0, -100%, 0)' }}>
        {show => show && (props =>
          <div style={props} className={`menu menu-${menuOpen}`}>
            <Branding />
          </div>
        )}
      </Transition>
      <Transition
        items={menuOpen}
        from={{ transform: 'translate3d(0, 100%, 0)' }}
        enter={{ transform: 'translate3d(0, 0, 0)' }}
        leave={{ transform: 'translate3d(0, 100%, 0)' }}>
        {show => show && (props =>
          <div style={props} className={`menu menu-${menuOpen}`}>
            <Nav />
          </div>
        )}
      </Transition>

    </nav>);
}

export default MobileHeader;
