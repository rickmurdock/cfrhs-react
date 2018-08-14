import React from 'react';
import membership from '../data/membership';

const Membership = () => {
    return (
      <div className="col-md-12 membership-page">
        <div className="container membership-container">
          <h2 className="text-center page-title-membership my-3">Society Membership</h2>
          <p className="page-intro-membership">
            The Central Florida Railway Historical Society, Inc. invites you to become a member of a growing and dynamic rail-oriented organization.
            Anyone interested in becoming a member and getting involved in our organization is invited to join. Membership levels in the Central 
            Florida Railway Historical Society are as follows:
          </p>
          <div className="card-deck">
            { membership.map((level, index) => {
              return (
                <div key={index} className="col-md-6 col-lg-4 my-3">
                  <div className="card h-100">
                    <div className="card-header text-center member-card-header">
                      <h5 className="card-title my-auto member-card-title">{level.level}</h5>
                    </div>
                    <div className="card-block">
                      <p className="card-text">{level.description}</p>
                    </div>
                    <div className="card-footer text-center">
                      <h6 className="my-auto member-card-footer">{level.cost}</h6>
                      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                        <input type="hidden" name="cmd" value="_s-xclick" />
                        <input type="hidden" name="hosted_button_id" value={level.paypalValue} />
                        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                      </form>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="membership-form">
            <a href="https://drive.google.com/file/d/14B0OmkMgbt5z-vmtLQGbLS1xomQPfJ4r/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="fa fa-file-pdf-o fa-2x pdf" aria-hidden="true"></i>&nbsp;CFRHS Membership Application</a>
          </div>
        </div>
      </div>
    );
  }

export default Membership;