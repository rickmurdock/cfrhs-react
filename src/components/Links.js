import React, { Component } from 'react';
import linksHistorical from '../data/links/linksHistorical';
import linksRailroad from '../data/links/linksRailroad';
import linksTourist from '../data/links/linksTourist';
import LinkCard from './LinkCard';

class Links extends Component {
  render() {
    let historicalLinks = linksHistorical.map((historical) => {
      return (
        <li><a key={historical.id} href={historical.url} target="_blank">{historical.name}</a></li>
      )
    });

    let railroadLinks = linksRailroad.map((railroad) => {
      return (
        <li><a key={railroad.id} href={railroad.url} target="_blank">{railroad.name}</a></li>
      )
    });

    let touristLinks = linksTourist.map((tourist) => {
      return (
        <li><a key={tourist.id} href={tourist.url} target="_blank">{tourist.name}</a></li>
      )
    });
    return (
      <div className="container-fluid">
        <h2 className="text-center page-title my-3">Railroad Related Links</h2>
        <div className="row">
          <div className="col-md-3"></div>
          <div id="accordion" role="tablist" aria-multiselectable="true" className="col-md-6">
            <LinkCard title={"Historical Organizations & Museums"} card={"One"} show={"show"} expanded="true"> 
              {historicalLinks}
            </LinkCard>
            <LinkCard title={"Railroad Operations & Rail Fan Opportunities"} card={"Two"} show={""} expanded="false"> 
              {railroadLinks}
            </LinkCard>
            <LinkCard title={"Tourist Railroads, Trolleys & Live Steamer Operations in Florida"} card={"Three"} show={""} expanded="false"> 
              {touristLinks}
            </LinkCard>
          </div>
        </div>
      </div>
    );
  }
}

export default Links;