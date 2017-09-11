import React from 'react';
import contacts from '../data/contacts';
import StationResized from '../images/StationResized.png';

const Contact = () => {
  let contactColumn1 = contacts.slice(0,7).map((contact1) => {  
    return (
      <div key={contact1.id}>
        <h5>{contact1.position}</h5>
        <p>
          {contact1.name}<br/>
          <a href={"mailto:" + contact1.email + "?subject=Email%20from%20CFRHS.ORG%20website"}>{contact1.email}</a>
        </p>
      </div>
    );
  });

  let contactColumn2 = contacts.slice(7).map((contact2) => {  
    return (
      <div key={contact2.id}>
        <h5>{contact2.position}</h5>
        <p>
          {contact2.name}<br/>
          <a href={"mailto:" + contact2.email + "?subject=Email%20from%20CFRHS.ORG%20website"}>{contact2.email}</a>
        </p>
      </div>
    );
  });

  return (
    <div className="container-fluid">
      <h2 className="text-center page-title my-3">Contact Us</h2>
      <div className="row">
        {/*<div className="col-md-3"></div>*/}

          <div className="col-md-3">
            <div className="card" id="left">
              {/*<img className="card-img-top img-station" src={StationResized} alt="Central Florida Railroad Museum Depot" />*/}
              <div className="card-block">
                <h5>Central Florida Railway Historical Society, Inc.</h5>
                <p>101 S. Boyd Street<br/>Winter Garden, FL 34787</p>
                <p>
                  P.O. Box 770567<br/>
                  Winter Garden, FL 34777-0567
                </p>
                <p><i className="fa fa-phone" aria-hidden="true"></i>&nbsp;(407) 656-0559</p>

                <p><i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;<a href="mailto:info@cfrhs.org?subject=Email%20for%20information%20from%20www.cfrhs.org">info@cfrhs.org</a></p>
              </div>
              <img className="card-img-top img-station" src={StationResized} alt="Central Florida Railroad Museum Depot" />
            </div>
            {/*<div >
              <iframe className="img-map" title="Map to museum" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14016.848628218677!2d-81.5829144!3d28.5633913!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdf760d33e403cdfc!2sCentral+Florida+Railroad+Museum!5e0!3m2!1sen!2sus!4v1504388469093" allowfullscreen></iframe>
            </div>*/}
          </div>

        <div className="col-md-4">
          {contactColumn1}
        </div>
        <div className="col-md-3">
          {contactColumn2}
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Contact;