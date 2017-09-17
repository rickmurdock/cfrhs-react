import React, { Component } from 'react';
import NewsletterCard from './NewsletterCard';
import newsletters from '../data/newsletters';

class Newsletter extends Component {
  render() {
    const uniqueYears = [...new Set(newsletters.map(item => item.year))];
    
    const newsYears = uniqueYears.map((year, index) => {
      let lettersByYear = newsletters.filter(letter => letter.year === year);
      return (
        <NewsletterCard key={index} year={year} letters={lettersByYear} />
      );
    });
    return (
      <div className="col-md-12 newsletter-page">
        <div className="container newsletter-container">
          <h2 className="text-center page-title-newsletter my-3">The Flatwheel Newsletter</h2>
          <p className="page-intro-newsletter">
            The first newsletter was called the <i>Orange Peel</i>; it was published occasionally by the President. 
            Publication of the <i>Orange Peel</i> began in 1971.
            <br/><br/>
            In October 1975, the first <i>Flatwheel</i> newsletter (Vol. 1, Number 1) was published. With few exceptions, 
            the newsletter has been published monthly and continues today. <i>The Flatwheel</i> keeps Society members and 
            friends informed of upcoming meetings and activities and the latest in local and national railroading activities.
          </p>

          <div className="card-deck">
            {newsYears}
          </div>
        </div>
      </div>
    );
  }
}

export default Newsletter;