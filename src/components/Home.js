import React, { Component } from 'react';
import CFRRMuseum from '../images/CFRRMuseum.jpg';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 col-lg-3">
            <h4 className="mission text-center">Mission Statement</h4>
            <p>
              The Central Florida Railway Historical Society, Inc. promotes railway heritage
              preservation and educates its members and the public about rail transportation, its
              history and impact, with a focus on Central Florida.
            </p>
            <h4 className="meetings text-center">Meetings</h4>
            <p>
              Held the second Monday of each month at 7:00 PM in the Central Florida Railroad Museum, 
              101 South Boyd Street, in downtown historic Winter Garden.
            </p>
            <div className="calendar text-center">
              <a className="btn btn-primary btn-sm" role="button" aria-pressed="true" href="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=cfrrmuseum%40gmail.com&amp;color=%23711616&amp;ctz=America%2FNew_York" target="_blank" rel="noopener noreferrer"><i className="fa fa-calendar" aria-hidden="true"></i>&nbsp; Events Calendar</a>
            </div>
            <div className="donate text-center">
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="NEE8CVFKQQFQN" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </div>
          </div>
          <div className="col-md-12 col-lg-8 text-center">
            <img className="img-fluid img-depot" src={CFRRMuseum} alt="Central Florida Railroad Museum"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;