import React from 'react';
import { Link } from 'react-router-dom';

const FooterUpper = () => {
  return (
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
            <i className="fa fa-phone" aria-hidden="true"></i>&nbsp;(407) 656-0559
          </p>
          <p className="footer-text">
            <a href="mailto:info@cfrhs.org?subject=Email%20for%20information%20from%20www.cfrhs.org"><i className="fa fa-envelope-o" aria-hidden="true"></i>&nbsp;info@cfrhs.org</a> 
          </p>
          <a href="https://www.facebook.com/CentralFloridaRailroadMuseum/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-official fa-2x" aria-hidden="false"></i></a>
        </div>
        <div className="col-md-2 pr-0">
          <p className="footer-text">
            <Link to="/">Home</Link><br/>
            <Link to="/history">Our History</Link><br/>
            <Link to="/board">Board of Directors</Link><br/>
            {/* <Link to="/membership">Society Membership</Link><br/> */}
            <Link to="/museum">Museum</Link><br/>
            <Link to="/gallery">Gallery</Link><br/>
            <Link to="/shop">Gift Shop</Link><br/>
            <Link to="/newsletter">Newsletter</Link><br/>
            {/* <Link to="/links">Links</Link><br/> */}
            <Link to="/membership">Membership</Link><br/>
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
  );
};

export default FooterUpper;