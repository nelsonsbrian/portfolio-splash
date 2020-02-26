import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition, Trail } from 'react-spring/renderprops'
import { useTrail, animated } from 'react-spring'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  function Branding() {
    return (
      <div className={`menu-branding menu-${menuOpen}`}>
        <div className="portrait"></div>
      </div>
    )
  }

  const links = [
    <Link className="nav-link" to="/">Home</Link>,
    <Link to="/about" className="nav-link">About</Link>,
    <Link to="/projects" className="nav-link">Projects</Link>,
  ];
  const slideRight = useTrail(links.length, {
    from: { transform: 'translate3d(600px, 0, 0)' },
    to: { transform: 'translate3d(0, 0, 0)' }
  })

  function Nav() {
    return (
      <ul className={`menu-nav menu-${menuOpen}`}>
        {slideRight.map((props, index) => {
          return (
            <animated.div
              key={index}
              style={props}
              className="box"
            >
              <li style={props} className={`nav-item menu-${menuOpen}`}>
                {links[index]}
              </li>
            </animated.div>
          );
        })}
      </ul>
    )
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

export default Header;
