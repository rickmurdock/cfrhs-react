import React, { Component } from 'react';
import CFRRMuseum from '../images/CFRRMuseum.jpg';

class Home extends Component {
  render() {
    return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <h4 className="text-center mt-5">Mission Statement</h4>
          <p>
            The Central Florida Railway Historical Society, Inc. promotes railway heritage
            preservation and educates its members and the public about rail transportation, its
            history and impact, with a focus on Central Florida.
          </p>
          <h4 className="text-center mt-5">Meetings</h4>
          <p>
            Held the second Monday of each month at 7:00 PM in the Central Florida Railroad Museum, 
            101 South Boyd Street, in downtown historic Winter Garden.
          </p>
        </div>
        <div className="col-md-8 text-center">
          <img className="img-fluid img-depot" src={CFRRMuseum} alt="Central Florida Railroad Museum"/>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;