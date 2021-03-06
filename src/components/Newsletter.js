import React, { Component } from 'react';
import GoogleDriveIcon from '../images/GoogleDriveIcon.png';

class Newsletter extends Component {
  render() {
    return (
      <div className="col-md-12 newsletter-page">
        <div className="container newsletter-container">
          <h2 className="text-center page-title-newsletter my-3">The Flatwheel Newsletter</h2>
          <div className="page-intro-newsletter">
            <p>
              The first newsletter was called the <i>Orange Peel</i>; it was published occasionally by the President. 
              Publication of the <i>Orange Peel</i> began in 1971.
            </p>
            <p>
              In October 1975, the first <i>Flatwheel</i> newsletter (Vol. 1, Number 1) was published. With few exceptions, 
              the newsletter has been published monthly and continues today. <i>The Flatwheel</i> keeps Society members and 
              friends informed of upcoming meetings and activities and the latest in local and national railroading activities.
            </p>
            <p>
              Current and past issues of <i>The Flatwheel</i> are available on Google Drive™.
            </p>
            <div className="flatwheel-link text-center"> 
              <a href="https://drive.google.com/drive/folders/1hx0cIXlnoIh0pAUvoEiOBu3DSnKPUV66?usp=sharing" target="_blank" rel="noopener noreferrer"><img className="drive-img" src={GoogleDriveIcon} alt="Color Google Drive Icon"/> &nbsp;<b>View <i>The FLATWHEEL</i></b></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsletter;