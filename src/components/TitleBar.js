import React from 'react';

const TitleBar = () => {
  return (
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
  );
};

export default TitleBar;