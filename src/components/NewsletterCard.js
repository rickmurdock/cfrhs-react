import React from 'react';

const NewsletterCard = (props) => {
  const newsletters = props.letters.map((news, index) => {
    return(
      <li className="newsletter-li">
        <div key={index} className="card-text">
          <a href={news.url} target="_blank" rel="noopener"><i className="fa fa-file-pdf-o pdf" aria-hidden="true">&nbsp;</i>{news.month} {news.year}</a>
        </div>
      </li>
    );
  });

  return (
    <div className="col-md-6 col-lg-4 my-3">
      <div className="card h-100">
        <div className="card-header text-center newsletter-card-header">
          <h5 className="card-title my-auto newsletter-card-title">{props.year}</h5>
        </div>
        <div className="card-block">
          <ul>
            {newsletters}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NewsletterCard;