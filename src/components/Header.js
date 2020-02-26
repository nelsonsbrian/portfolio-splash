import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const Branding = () => {
    return (
      <div className="header-branding">
        <div className="portrait"></div>
      </div>
    )
  }

  const Nav = () => {
    return (
      <ul className="header-nav">
        <li className="nav-item current">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link">Projects</Link>
        </li>
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

      {menuOpen ? <Branding /> : null}
      {menuOpen ? <Nav /> : null}



    </nav>);
}

export default Header;