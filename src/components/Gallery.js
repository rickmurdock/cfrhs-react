import React, { Component } from 'react';
import gallery from '../data/gallery';

class Gallery extends Component {
  render() {
    let firstItem = true;
    let activeItem = "active";
    let slideTo = -1;

    let slideTos = gallery.map((slide, index) => {
      slideTo += 1;
      firstItem ? firstItem = false : activeItem = "";
      return (
        <li key={index} data-target="#carouselControls" data-slide-to={slideTo} className={activeItem}></li>
      );
    });

    firstItem = true;
    activeItem = "active";

    let galleryItems = gallery.map((item, index) => {
      firstItem ? firstItem = false : activeItem = "";
      return (
        <div key={index} className={"carousel-item " + activeItem}>            
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
          <div className="col-sm-0 col-md-2"></div>
          <div className="col-sm-12 col-md-8">
            <div id="carouselControls" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                {slideTos}
              </ol>
              <div className="carousel-inner" role="listbox">
                {galleryItems}
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