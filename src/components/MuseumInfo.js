import React from 'react';
import StationResized from '../images/StationResized.png';

const MuseumInfo = () => {
  return (
    <div>
      <div className="card" id="left">
        <img className="card-img-top img-station" src={StationResized} alt="Central Florida Railroad Museum Depot" />
        <div className="card-block">
          <h5>Museum Hours:</h5>
          <p>Daily from 1:00 PM - 5:00 PM<br/><sup>(Closed Select Holidays)</sup></p>
          <h5>Admission:</h5>
          <p>Free</p>
          <h5>Location:</h5>
          <p>101 S. Boyd Street<br/>Winter Garden, FL 34787</p>
          <p><i className="fa fa-phone" aria-hidden="true"></i> (407) 656-0559</p>
        </div>
      </div>
      <div>
        <iframe className="img-map" title="Map to museum" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14016.848628218677!2d-81.5829144!3d28.5633913!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdf760d33e403cdfc!2sCentral+Florida+Railroad+Museum!5e0!3m2!1sen!2sus!4v1504388469093" allowFullScreen></iframe>
      </div>
    </div>
  );
}

export default MuseumInfo;