import React from 'react';
// import flatwheel2017 from '../data/newsletters/2017Flatwheel';

const NewsletterCard = (props) => {
  return (
    <div className="col-md-6 col-lg-4 my-3">
      <div className="card h-100">
        <div className="card-header text-center">
          <h5 className="card-title my-auto">{props.year}</h5>
        </div>
        <div className="card-block">
          <div className="card-text">
            {props.children}
          {/*{news2017}*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsletterCard;