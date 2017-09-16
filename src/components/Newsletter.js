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
      <div className="container">
        <h2 className="text-center page-title my-3">The Flatwheel Newsletter</h2>
        <div className="card-deck">
          {newsYears}
        </div>
      </div>
    );
  }
}

export default Newsletter;