import React from 'react';
import contacts from '../data/contacts';
import StationResized from '../images/StationResized.png';

const Contact = () => {
  let contactColumn1 = contacts.slice(0,7).map((contact1, index) => {  
    return (
      <div key={index}>
        <h5>{contact1.position}</h5>
        <p>
          {contact1.name}<br/>
          <a href={"mailto:" + contact1.email + "?subject=Email%20from%20CFRHS.ORG%20website"}>{contact1.email}</a>
        </p>
      </div>
    );
  });

  let contactColumn2 = contacts.slice(7).map((contact2, index) => {  
    return (
      <div key={index}>
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
        <div className="col-md-3">
          <div className="card" id="left">
            <div className="card-block">
              <h5>Central Florida Railway Historical Society, Inc.</h5>
              <p>101 S. Boyd Street<br/>Winter Garden, FL 34787</p>
              <p>P.O. Box 770567<br/>Winter Garden, FL 34777-0567</p>
              <p><i className="fa fa-phone" aria-hidden="true"></i>&nbsp;(407) 656-0559</p>
              <p><i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;<a href="mailto:info@cfrhs.org?subject=Email%20for%20information%20from%20www.cfrhs.org">info@cfrhs.org</a></p>
            </div>
            <img className="card-img-top img-station" src={StationResized} alt="Central Florida Railroad Museum Depot" />
          </div>
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