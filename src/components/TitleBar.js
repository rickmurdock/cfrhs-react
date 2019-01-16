import React from 'react';
import { Link } from 'react-router-dom';

const TitleBar = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-sm-12 col-md-4 col-lg-3">
          <div className="container p-0 text-center">
            <Link to="/">
              <img className="logo img-fluid" src={require('../images/CFRHSLogoSmall.JPG')} width="350" alt="Central Florida Railway Historical Society Logo"/>
            </Link>
          </div>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-6">
          <h1 className="text-center title mx-auto">Central Florida Railway Historical Society, Inc.</h1>
        </div>
        {/*<div className="col-md-3">
            <h2 style={{color:"orange", transform:"rotate(6deg)", textShadow:" 4px 3px 4px #000000"}}><b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UNDER CONSTRUCTION</b></h2>
        </div>*/}
      </div>
    </div>
  );
};

export default TitleBar;