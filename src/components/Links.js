import React, { Component } from 'react';
import linksHistorical from '../data/linksHistorical';
import linksRailroad from '../data/linksRailroad';
import linksTourist from '../data/linksTourist';

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
        <div className="card">
          <div className="card-header" role="tab" id="headingOne">
            <h5 className="mb-0">
              <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Historical Organizations & Museums
              </a>
            </h5>
          </div>
          <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
            <div className="card-block">
              <ul>
                {historicalLinks}
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" role="tab" id="headingTwo">
            <h5 className="mb-0">
              <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Railroad Operations & Rail Fan Opportunities
              </a>
            </h5>
          </div>
          <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
            <div className="card-block">
              <ul>
                {railroadLinks}
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" role="tab" id="headingThree">
            <h5 className="mb-0">
              <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Tourist Railroads, Trolleys & Live Steamer Operations in Florida
              </a>
            </h5>
          </div>
          <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
            <div className="card-block">
              <ul>
                {touristLinks}
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    );
  }
}

export default Links;