import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="header">
      <div className="header-branding">
        <div className="portrait"></div>
      </div>
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

    </nav>);
}

export default Header;