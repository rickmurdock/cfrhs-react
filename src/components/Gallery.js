import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import gallery from '../data/gallery';

import CRRCaboose from '../images/CRRCaboose.jpg';
import ChessieCaboose from '../images/ChessieCaboose.jpg';
import SteamRun from '../images/SteamRun.jpg';

class Gallery extends Component {
  render() {
    let firstItem = true;
    let activeItem = "active";

    let picture = gallery.map((item) => {
      if (firstItem) {
        firstItem = false;
      }
      else {
        activeItem = "";
      }
      
      return (
        /*<div key={item.id}>
          <GalleryItem imageName={item.imageName} caption={item.caption} active={"active"}/>
        </div>*/

        <div key={item.id} className={"carousel-item " + activeItem}>            
          <img className="figure-img d-block img-fluid" src={require('../images/' + item.imageName)} alt={item.caption} />
            <div className="carousel-caption d-none d-md-block">
              <p>{item.caption}</p>
            </div>
        </div>
      );
    });
 
    return (
      <div className="container-fluid">
        <h2 className="text-center page-title my-3">Gallery</h2>
        <div className="row">
        <div className="col-md-2"></div>
          <div className="col-md-8">
            <div id="carouselControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner" role="listbox">


              {/*<div className="carousel-item">
                <img className="d-block img-fluid" src={require('../images/CRRCaboose.jpg')} alt="Second slide" />
                <img className="d-block img-fluid" src={CRRCaboose} alt="Second slide" />
                  <div className="carousel-caption d-none d-md-block">
                    <p>Caption Goes here</p>
                  </div>
              </div>*/}

                {/*<GalleryItem />*/}
                {picture}
                {/*<div className="carousel-item active">            
                  <img className="figure-img d-block img-fluid" src={CRRCaboose} alt="First slide" />
                    <div className="carousel-caption d-none d-md-block">
                      <p>Behind the Central Florida Railroad Museum is a Clinchfield caboose, which is available for exploring.</p>
                    </div>
                </div>*/}
                {/*<div className="carousel-item">
                  <img className="d-block img-fluid" src={ChessieCaboose} alt="Second slide" />
                    <div className="carousel-caption d-none d-md-block">
                      <p>This Chessie caboose is located at the nearby Winter Garden Heritage Museum.</p>
                    </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid" src={SteamRun} alt="Third slide" />
                    <div className="carousel-caption d-none d-md-block">
                      <p>The Tavares, Eustis and Gulf Railroad brought its steam locomotive to the museum several years ago for special passenger runs.</p>
                    </div>
                </div>*/}

              </div>
                <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Gallery;