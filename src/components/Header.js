import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/icon/Logo.svg';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 start-0 end-0 z-3 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={Logo} alt="Little Lemon" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse${isNavOpen ? ' show' : ''}`}
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={closeNav}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={closeNav}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/menu" onClick={closeNav}>
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/reservations" onClick={closeNav}>
                Reservations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/order-online" onClick={closeNav}>
                Order Online
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login" onClick={closeNav}>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
