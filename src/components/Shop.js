import React from 'react';
import TGDVD from '../images/TGDVD.jpg';
import OutLineHistoryCFRR from '../images/OutlineHistoryCentralFLRR.png';
import TGStationPainting from '../images/TGStationPainting.jpg';

const Shop = () => {
  return (
    <div className="container-fluid content">
      <h2 className="text-center page-title my-3">Gift Shop</h2>
      <div className="row">
        <div className="col-sm-1">
        </div>

        <div className="col-md-8">
          <div className="row">
            <div className="col-md-3 store-image mx-auto">
              <img src={TGDVD} width="100%;" alt="The Whistle Blows No More DVD" />
            </div>
            <div className="col-md-9 store-item">
              <h4>The Whistle Blows No More - A History of the Tavares & Gulf Railroad 1881-1969</h4>
              <p><i className="fa fa-film" aria-hidden="true">&nbsp;</i>DVD</p>
              <p>$<b>20.00</b>, plus $5 shipping & handling</p>
              <p>This DVD contains historic photos of the T&G plus the only film footage of the T&G known to exist.</p>
            </div>
          </div>
          <hr className="hr-store" />
          <div className="row">
            <div className="col-md-3 store-image mx-auto">
              <img className="img-fluid" src={OutLineHistoryCFRR} width="100%;" alt="Outline History of Central Florida Railroads book by Ken Murdock" />
            </div>
            <div className="col-md-9 store-item">
              <h4>Outline History of Central Florida Railroads</h4>
              <p>by Ken Murdock</p>
              <p><i className="fa fa-book" aria-hidden="true">&nbsp;</i>Book - spiral bound</p>
              <p>$<b>15.00</b>, plus $5 shipping & handling</p>
              <p>A 27 page bound booklet with photos, corporate family trees, timetables and an 11”x17” color fold-out map.</p>
            </div>
          </div>
          <hr className="hr-store" />
          <div className="row">
            <div className="col-md-3 store-image mx-auto">
              <img src={TGStationPainting} width="100%" alt="Winter Garden Station, Tavares & Gulf Railroad Circa 1913 by Dan Cruise" />
            </div>
            <div className="col-md-9 store-item">
              <h4>Winter Garden Station, Tavares & Gulf Railroad Circa 1913</h4>
              <p>Original Water Color Painting by Dan Cruise</p>
              <p><i className="fa fa-picture-o" aria-hidden="true">&nbsp;</i>16"x20" Print</p>
              <p>$<b>25.00</b>, plus $5 shipping & handling</p>
              <p>Celebrating the 100th Anniversary of the Tavares & Gulf Railroad's Depot at Winter Garden, Florida.</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-lg-2">
          <div className="card order"> 
            <div className="card-header text-center align-middle">
              <a className="order-link" href="https://drive.google.com/file/d/0BxsaKH9lyrNwMXFFcFZBcGdNd00/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="fa fa-file-pdf-o pdf" aria-hidden="true">&nbsp;</i>Order Form</a>
            </div>
            <div className="card-block text-center">
              <p>Additional items available on our <br /><a className="text-center" href="http://stores.ebay.com/CFRHS-MUSEUM-STORE" target="_blank" rel="noopener noreferrer">eBay Store</a></p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Shop;