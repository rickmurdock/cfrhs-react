import React, { Component } from 'react';
import NewsletterCard from './NewsletterCard';

import flatwheel2017 from '../data/newsletters/2017Flatwheel';
import flatwheel2016 from '../data/newsletters/2016Flatwheel';

class Newsletter extends Component {
  render() {
    let news2017 = flatwheel2017.map((letter) => {
      return (
        <div>
          <a href={letter.url} target="_blank" rel="noopener">{letter.name}</a>
        </div>
      );
    });

    let news2016 = flatwheel2016.map((letter) => {
      return (
        <div>
          <a href={letter.url} target="_blank" rel="noopener">{letter.name}</a>
        </div>
      );
    });

    return (
      <div className="container">
        <h2 className="text-center page-title my-3">The Flatwheel Newsletter</h2>
        <div className="card-deck">
          <NewsletterCard year={2017}>
                  {news2017}
          </NewsletterCard>
          <NewsletterCard year={2016}>
                  {news2016}
          </NewsletterCard>
        </div>
      </div>
    );
  }
}

export default Newsletter;