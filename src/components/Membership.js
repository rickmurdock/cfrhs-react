import React from 'react';

const Membership = () => {
  return (
    <div className="container">
      <h1 className="text-center page-title my-3">Society Membership</h1>
      <p>
        The Central Florida Railway Historical Society, Inc. invites you to become a member of a growing and dynamic rail-oriented organization.
        Anyone interested in becoming a member and getting involved in our organization is invited to join. Membership levels in the Central 
        Florida Railway Historical Society are as follows:
      </p>
      <div className="card-deck">
        <div className="col-md-6 col-lg-4 my-3">
          <div className="card h-100">
            <div className="card-header text-center">
              <h5 className="card-title my-auto">Society Member</h5>
            </div>
            <div className="card-block">
              <p className="card-text">
                Any person of good character, eighteen (18) years of age or older, and interested in any/all aspects of railroading and the Purpose 
                and  Mission Statement of this Society shall be eligible for membership. Society members have the right to vote and hold office.
              </p>
            </div>
            <div className="card-footer text-center">
              <h6 className="my-auto">$45/year</h6>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-3">
          <div className="card h-100">
            <div className="card-header text-center">
              <h5 className="card-title my-auto">Society Friend</h5>
            </div>
            <div className="card-block">
              <p>
                Any person of good character, eighteen (18) years of age or older, interested in any/all aspects of railroading and the Purpose 
                and Mission Statement of this Society, and does not wish to have the right to vote or hold office in the Society, shall be eligible 
                for Society Friend membership.
              </p>
            </div>
            <div className="card-footer text-center">
              <h6 className="my-auto">$25/year</h6>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-3">
          <div className="card h-100">
            <div className="card-header text-center">
              <h5 className="card-title my-auto">Society Student Member</h5>
            </div>
            <div className="card-block">
              <p>
                Any person under the age of eighteen (18) years old interested in any/all aspects of railroading and the Purpose and Mission
                Statement of this Society shall be eligible for membership, but will not have the right to vote or hold office in the Society.
              </p>
            </div>
            <div className="card-footer text-center">
              <h6 className="my-auto">$15/year</h6>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-3">
          <div className="card h-100">
            <div className="card-header text-center">
              <h5 className="card-title my-auto">Society Family Member</h5>
            </div>
            <div className="card-block">
              <p>
                Society Family membership shall be available for up to six (6) family members of a Society Member. Family members will not have 
                the right to vote or hold office in the Society.
              </p>
            </div>
            <div className="card-footer text-center">
              <h6 className="my-auto">$10/year</h6>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-3">
          <div className="card h-100">
            <div className="card-header text-center">
              <h5 className="card-title my-auto">Society Century Member</h5>
            </div>
            <div className="card-block">
              <p>
                Any person of good character, eighteen (18) years of age or older, and interested in any/all aspects of railroading and the Purpose
                and Mission Statement of this Society shall be eligible for Society Century Membership.  Society Century Members have the right to 
                vote and hold office.
              </p>
            </div>
            <div className="card-footer text-center">
              <h6 className="my-auto">$100/year</h6>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-3">
          <div className="card h-100">
            <div className="card-header text-center">
              <h5 className="card-title my-auto">Bronze Corporate Member</h5>
            </div>
            <div className="card-block">
              <p>
                Any corporation interested in supporting any/all aspects of railroading and the Purpose and Mission Statement of this Society at 
                the Bronze Level shall be eligible for Corporate Membership. Dues for Corporate Members shall be determined by the Society’s 
                Board of Directors. Corporate Members will not have the right to vote or hold office.
              </p>
            </div>
            <div className="card-footer text-center">
              <h6 className="my-auto">$250/year</h6>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-3">
          <div className="card h-100">
            <div className="card-header text-center">
              <h5 className="card-title my-auto">Gold Corporate Member</h5>
            </div>
            <div className="card-block">
              <p>
                Any corporation interested in supporting any/all aspects of railroading and the Purpose and Mission Statement of this Society at 
                the Bronze Level shall be eligible for Corporate Membership. Dues for Corporate Members shall be determined by the Society’s Board 
                Directors. Corporate Members will not have the right to vote or hold office.
              </p>
            </div>
            <div className="card-footer text-center">
              <h6 className="my-auto">$500/year</h6>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-3">
          <div className="card h-100">
            <div className="card-header text-center">
              <h5 className="card-title my-auto">Diamond Corporate Member</h5>
            </div>
            <div className="card-block">
              <p>
                Any corporation interested in supporting any/all aspects of railroading and the Purpose and Mission Statement of this Society at the 
                Bronze Level shall be eligible for Corporate Membership. Dues for Corporate Members shall be determined by the Society’s Board of 
                Directors. Corporate Members will not have the right to vote or hold office.
              </p>
            </div>
            <div className="card-footer text-center">
              <h6 className="my-auto">$750/year</h6>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-3">
          <div className="card h-100">
            <div className="card-header text-center">
              <h5 className="card-title my-auto">Platinum Corporate Member</h5>
            </div>
            <div className="card-block">
              <p>
                Any corporation interested in supporting any/all aspects of railroading and the Purpose and Mission Statement of this Society at the
                Bronze Level shall be eligible for Corporate Membership. Dues for Corporate Members shall be determined by the Society’s Board of 
                Directors. Corporate Members will not have the right to vote or hold office.
              </p>
            </div>
            <div className="card-footer text-center">
              <h6 className="my-auto">$1,000/year</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;