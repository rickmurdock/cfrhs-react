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
            { membership.map((level) => {
              return (
                <div key={level.id} className="col-md-6 col-lg-4 my-3">
                  <div className="card h-100">
                    <div className="card-header text-center member-card-header">
                      <h5 className="card-title my-auto member-card-title">{level.level}</h5>
                    </div>
                    <div className="card-block">
                      <p className="card-text">{level.description}</p>
                    </div>
                    <div className="card-footer text-center">
                      <h6 className="my-auto member-card-footer">{level.cost}</h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="membership-form">
            <a href="https://drive.google.com/file/d/0BxsaKH9lyrNwYUNUR0NXX2VpdXc/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="fa fa-file-pdf-o fa-2x pdf" aria-hidden="true"></i>&nbsp;CFRHS Membership Application</a>
          </div>
        </div>
      </div>
    );
  }

export default Membership;