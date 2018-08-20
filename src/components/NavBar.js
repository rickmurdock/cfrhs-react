import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar sticky-top navbar-toggleable-md">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span><i className="fa fa-bars" aria-hidden="true"></i></span>
      </button>
      <span className="navbar-text">&nbsp;</span>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <div className="navbar-nav mr-auto">
          <NavLink activeClassName="selected" className="nav-item nav-link" exact to="/">Home</NavLink>
          <div className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <NavLink activeClassName="selected" className="dropdown-item" to="/history">Our History</NavLink>
              <NavLink activeClassName="selected" className="dropdown-item" to="/board">Board of Directors</NavLink>
              <NavLink activeClassName="selected" className="dropdown-item" to="/membership">Society Membership</NavLink>
            </div>
          </div>
          <NavLink activeClassName="selected" className="nav-item nav-link" to="/museum">Museum</NavLink>
          <NavLink activeClassName="selected" className="nav-item nav-link" to="/gallery">Gallery</NavLink>
          <NavLink activeClassName="selected" className="nav-item nav-link" to="/shop">Gift Shop</NavLink>
          <NavLink activeClassName="selected" className="nav-item nav-link" to="/newsletter">Newsletter</NavLink>
          <NavLink activeClassName="selected" className="nav-item nav-link" to="/links">Links</NavLink>
          <NavLink activeClassName="selected" className="nav-item nav-link" to="/contact">Contact</NavLink>
        </div>
        <div className="navbar-brand my-auto">
          <a href="https://www.facebook.com/CentralFloridaRailroadMuseum/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="false"></i></a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;