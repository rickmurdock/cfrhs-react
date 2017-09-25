import React, { Component } from 'react';
import MuseumInfo from './MuseumInfo';
import MuseumHistory from './MuseumHistory';
import SignalSpotlight from '../images/SignalSpotlight.jpg';
// import Collection from '../images/Collection.png';
import Headlight from '../images/Headlight.jpg';
import FairmontMotorcar from '../images/FairmontMotorcar.jpg';

class Museum extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h2 className="text-center page-title my-3">Central Florida Railroad Museum</h2>
        <div className="row">
          <div className="col-md-3">
            <MuseumInfo />
          </div>
          <div className="col-md-6">
            <p>         
              Through the operation of the Central Florida Railroad Museum, the Central Florida Railway Historical Society, Inc. 1) promotes 
              railway heritage preservation and educates its members and the public about rail transportation, its history and impact, with a 
              focus on Central Florida; 2) is committed to the collection and preservation of railroad history, with a special focus on Central 
              Florida; and 3) is committed to the restoration and exhibition of railroad memorabilia for the education and enjoyment of present 
              and future generations.  It is the Society’s intent that each visitor to the Central Florida Railroad Museum leave with such a 
              pleasurable experience that they will tell others about the Museum and return again and bring friends and family with them. 
            </p>
            <img src={FairmontMotorcar} alt="1938 Fairmont Motorcar" className="img-fluid col-sm-12 img-motorcar"/>
          </div>
          <div className="col-md-3">
            <img src={SignalSpotlight} alt="Signal Spotlight" className="img-fluid img-signal" />
            <img src={Headlight} alt="Museum Collection" className="img-fluid img-headlight mt-3" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <p>
              Memorabilia on display in the Central Florida Railroad Museum includes historic photographs (including an extensive collection 
              of T&G photographs from its early steam era until its last run), lanterns, telephones, telegraphs, stoves, tools, furniture, 
              timetables, dining car china and silver, tinware, marker lights, ticket punches, lamps, uniforms, locomotive bells and whistles, a 
              1938 Fairmont motorcar, a velocipede hand car and a very large collection of dining car china and silver serving pieces. Outside, 
              the former Clinchfield caboose #1073, a three head interlocking signal from the former ACL-SAL junction in Plant City, a set of 
              narrow-gauge wheels and several switch stands are displayed.
            </p>
            <p>      
              The Central Florida Railroad Museum is supported by donations and fund raising efforts of the Central Florida Railway Historical 
              Society, Inc. and the Winter Garden Heritage Foundation, Inc. The Central Florida Railway Historical Society, Inc. is a non-profit 
              tax exempt 501 (c) (3) educational Florida Corporation. Donations to the Society are tax deductible.
            </p>
          </div>
          <div className="col-md-1"></div>
        </div>
        <MuseumHistory />
      </div>
    );
  }
}

export default Museum;