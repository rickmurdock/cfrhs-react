import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-3">
              <div className="container">
                <img className="logo img-fluid" src={require('../images/CFRHSLogoSmall.JPG')} width="350" alt="Central Florida Railway Historical Society Logo"/>
              </div>
            </div>
            <div className="col-sm-6">
              <h1 className="text-center title mx-auto">Central Florida Railway Historical Society, Inc.</h1>
            </div>
          </div>
        </div>

    <nav className="navbar sticky-top navbar-toggleable-md">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span><i className="fa fa-bars" aria-hidden="true"></i></span>
      </button>
      <span className="navbar-text">&nbsp;</span>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <div className="navbar-nav mr-auto">
          <NavLink activeClassName="selected" className="nav-item nav-link" exact to="/">Home</NavLink>

          {/*<div className="nav-item dropdown">
           <NavLink activeClassName="selected" className="nav-item dropdown">help
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="history.html">History</a>
              <a className="dropdown-item" href="board.html">Board of Directors</a>
              <a className="dropdown-item" href="membership.html">Society Membership</a>
              <NavLink activeClassName="selected" className="dropdown-item nav-link" to="/museum">Museum</NavLink>
            </div>
          </NavLink> 
          </div>
          */}

          <div className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <NavLink activeClassName="selected" className="dropdown-item" to="/history">History</NavLink>
              <NavLink activeClassName="selected" className="dropdown-item" to="/board">Board of Directors</NavLink>
              <NavLink activeClassName="selected" className="dropdown-item" to="/membership">Society Membership</NavLink>
            </div>
          </div>
          <NavLink activeClassName="selected" className="nav-item nav-link" to="/museum">Museum</NavLink>
          <NavLink activeClassName="selected" className="nav-item nav-link" to="/gallery">Gallery</NavLink>
          <NavLink activeClassName="selected" className="nav-item nav-link" to="/shop">Gift Shop</NavLink>
          <NavLink activeClassName="selected" className="nav-item nav-link" to="/newsletter">Newsletter</NavLink>
          <NavLink activeClassName="selected" className="nav-item nav-link" to="/links.html">Links</NavLink>
          <NavLink activeClassName="selected" className="nav-item nav-link" to="/contact">Contact</NavLink>
        </div>
        <div className="navbar-brand my-auto">
          <a href="https://www.facebook.com/CentralFloridaRailroadMuseum/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
        </div>
      </div>
    </nav>

        {this.props.children}
        <footer>
          <div className="container-fluid footer-upper">
            <div className="row">
              <div className="col-md-4">
                <p className="footer-text">
                  Central Florida Railway
                  Historical Society, Inc.<br/>
                  101 South Boyd Street<br/>
                  Winter Garden, FL 34787
                </p>
                <p className="footer-text">
                  P.O. Box 770567<br/>
                  Winter Garden, FL 34777-0567
                </p>
                <p className="footer-text">
                  (407) 656-0559
                </p>
                <p className="footer-text">
                  <a href="mailto:info@cfrhs.org?subject=Email%20for%20information%20from%20www.cfrhs.org">info@cfrhs.org</a> 
                </p>
                <a href="https://www.facebook.com/CentralFloridaRailroadMuseum/"><i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i></a>
              </div>
              <div className="col-md-2">
                <p className="footer-text">
                  <Link to="/">Home</Link><br/>
                  <Link to="/history">Our History</Link><br/>
                  <Link to="/board">Board of Directors</Link><br/>
                  <Link to="/membership">Society Membership</Link><br/>
                  <Link to="/museum">Museum</Link><br/>
                  <Link to="/gallery">Gallery</Link><br/>
                  <Link to="/shop">Gift Shop</Link><br/>
                  <Link to="/newsletter">Newsletter</Link><br/>
                  <Link to="/links">Links</Link><br/>
                  <Link to="/contact">Contact</Link><br/>
                </p>
              </div>
              <div className="col-md-3 text-center my-auto">
                <a href="http://www.wghf.org/" target="_blank" rel="noopener noreferrer">
                  <img className="logo-wghf" src={require('../images/WGHFlogo.png')} alt="Winter Garden Heritage Foundation"/>
                  <br/><br/>
                  <p className="footer-text">Affiliated with the Winter Garden Heritage Foundation</p>
                </a>
              </div>
              <div className="col-md-3 text-center my-auto">
                <a href="http://www.atrrm.org/" target="_blank" rel="noopener noreferrer">
                  <img className="logo-hra" src={require('../images/HeritageRailAllianceLogo.png')} alt="Heritage Rail Alliance"/>
                  <br/><br/>
                  <p className="footer-text">Member of HeritageRail Alliance</p>
                </a>
              </div>
            </div>
          </div>

          <div className="container-fluid footer-lower">
            <div className="row navbar align-items-center ">
              <div>
              <p className="footer-text-lower my-auto">
                © 2017 Central Florida Railway Historical Society, Inc. &nbsp;&nbsp;<i className="fa fa-train fa" aria-hidden="true"></i>&nbsp;&nbsp; Website Designed & Developed by <a className="rick" href="http://rickmurdock.com/" target="_blank" rel='noopener noreferrer'><b><i>Rick Murdock</i></b></a> 
              </p>
              </div>
            </div>
          </div>
        </footer>

      </div>
    );
  }
}

export default NavBar