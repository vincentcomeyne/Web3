// Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div />
      <Link to="/" className="navbar-title">
        Immo Vincent
      </Link>
      <div className="navbar-login">
        {location.pathname === "/admin" ? 
          <Link to="/">Log uit als admin</Link> : 
          <Link to="/admin">Login als admin</Link>}
      </div>
    </nav>
  );
};

export default Navbar;
