import React from 'react';
import TGDVD from '../images/TGDVD.jpg';
import OutLineHistoryCFRR from '../images/OutlineHistoryCentralFLRR.png';
import TGStationPainting from '../images/TGStationPainting.jpg';

const Shop = () => {
  return (
    <div className="container-fluid">
        <h2 className="text-center page-title my-3">Gift Shop</h2>

        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <img src={TGDVD} width="100%;" alt="The Whistle Blows No More DVD" />
          </div>
          <div className="col-md-6 store-item">
            <h4>The Whistle Blows No More - A History of the Tavares & Gulf Railroad 1881-1969</h4>
            <p>DVD</p>
            <p>$<b>20.00</b>, plus $5 shipping & handling</p>
            <p>This DVD contains historic photos of the T&G plus the only known film footage of the T&G known to exist.</p>
          </div>
        <div className="col-md-2 sticky-top">Order Form</div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <img className="img-fluid" src={OutLineHistoryCFRR} width="100%;" alt="Outline History of Central Florida Railroads book by Ken Murdock" />
          </div>
          <div className="col-md-6 store-item">
            <h4>Outline History of Central Florida Railroads</h4>
            <p>by Ken Murdock</p>
            <p>Book - spiral bound</p>
            <p>$<b>15.00</b>, plus $5 shipping & handling</p>
            <p>A 27 page bound booklet with photos, corporate family trees, timetables and an 11”x17” color fold-out map.</p>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <img src={TGStationPainting} width="100%" alt="Winter Garden Station, Tavares & Gulf Railroad Circa 1913 by Dan Cruise" />
          </div>
          <div className="col-md-6 store-item">
            <h4>Winter Garden Station, Tavares & Gulf Railroad Circa 1913</h4>
            <p>by Dan Cruise</p>
            <p>Original Water Color Painting</p>
            <p>$<b>25.00</b>, plus $5 shipping & handling</p>
            <p>Celebrating the 100th Anniversary of the Tavares & Gulf Railroad's Depot at Winter Garden, Florida.</p>
          </div>
        </div>

      <div className="card-deck">
        
        {/*<div className="col-md-9">
          <div className="card h-100">
            <img src={TGDVD} width="200px;" alt="The Whistle Blows No More DVD" />
            <h5>The Whistle Blows No More</h5>
          </div>


        </div>*/}
        {/*<div className="col-md-3">
          <div className="card h-100">
            <img src="./images/HistoryCFRR.png" width="100%" alt="" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="card h-100">
            <img src="./images/WGStationPrint.png" width="100%" alt="" />
          </div>
        </div>*/}
      </div>


    </div>
  );
};

export default Shop;