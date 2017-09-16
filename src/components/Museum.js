import React, { Component } from 'react';
import StationResized from '../images/StationResized.png';
import SignalSpotlight from '../images/SignalSpotlight.jpg';
import Collection from '../images/Collection.png';

class Museum extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h2 className="text-center page-title my-3">Central Florida Railroad Museum</h2>
        <div className="row">
          <div className="col-md-3">
            <div className="card" id="left">
              <img className="card-img-top img-station" src={StationResized} alt="Central Florida Railroad Museum Depot" />
              <div className="card-block">
                <h5>Museum Hours:</h5>
                <p>Daily from 1:00 PM - 5:00 PM<br/><sup>(Closed Select Holidays)</sup></p>
                <h5>Admission:</h5>
                <p className="free">Free</p>
                <h5>Location:</h5>
                <p>101 S. Boyd Street<br/>Winter Garden, FL 34787</p>
                <p><i className="fa fa-phone" aria-hidden="true"></i>&nbsp;(407) 656-0559</p>
              </div>
            </div>
            <div >
              <iframe className="img-map" title="Map to museum" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14016.848628218677!2d-81.5829144!3d28.5633913!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdf760d33e403cdfc!2sCentral+Florida+Railroad+Museum!5e0!3m2!1sen!2sus!4v1504388469093" allowFullScreen></iframe>
            </div>
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
          <div className="col-md-3">
            <img src={SignalSpotlight} alt="Signal Spotlight" className="img-thumbnail img-signal" />
            <img src={Collection} alt="Museum Collection" className="img-thumbnail img-colletion" />
          </div>
        </div>
        <div className="row">
          <div className="parallax">
            <h4 className="museum-history-title">Museum History</h4>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <p>
              Since its founding in November 1970, the Central Florida Chapter of the National Railway Historical Society (Central Florida 
              Chapter) always had a dream of having a permanent home for Chapter activities and a railroad museum.
            </p>
            <p>
              The Tavares & Gulf Railroad (T&G) built their second depot (a replacement for the first) in Winter Garden in 1913 at the 
              southeast corner of the intersection of South Boyd and Joiner Streets. The depot served the T&G and Winter Garden until 
              December 1969 when the line between Winter Garden and Astatula was abandoned; the Seaboard Coast Line RR (SCLRR) continued to 
              use the building as their depot from January 1970 until March 1978 when the depot was closed and the freight agent services 
              were transferred to a mobile agency.
            </p>
            <p>
              The Central Florida Chapter became aware of the SCLRR’s intention to close their Winter Garden depot several years before the 
              actual closing. On November 11, 1976, the Chapter voted to pursue acquisition of the former T&G depot when the SCLRR abandoned it 
              with the purpose of establishing a permanent home and a railroad museum. The Central Florida Chapter’s dream started to become a 
              reality when it purchased the former depot from the SCLRR on October 22, 1979. Restoration efforts on the structure began immediately.
            </p>
            <p>
              On January 18, 1981, the Central Florida Railroad Museum opened on a limited basis in the depot’s two former waiting rooms.
            </p>
            <p>
              On May 10, 1982, the Roper Brothers Foundation in Winter Garden donated to the Chapter its building immediately east of the 
              former depot.  The building was (and still is) attached to the depot through a covered breezeway that was used to unload farm 
              tractors and automobiles that were shipped to Winter Garden on the T&G.  This structure became known as the Roper Building.
            </p>
            <p>
              On May 21, 1983 the Chapter held the grand opening and dedication of the Central Florida Railroad Museum. Guest speakers included 
              Richard Sanborn (President and CEO of the Seaboard System RR), Jean Yothers (Director of the Orange County Historical Museum), 
              Winter Garden Mayor Ralph Fulford, Chapter President Richard Sharp, and Chapter Member Phil Cross. A privately owned and 
              operating 0-4-0T steam locomotive and a Seaboard System U-36-B Diesel Electric Locomotive and caboose were also displayed as 
              part of the dedication ceremony.
            </p>
            <p>
              On December 1, 1983, the Chapter purchased the land immediately east of the Roper Building from the Seaboard System Railroad.  
              With this purchase, the Chapter now owned an entire block and their dream of owning and operating a railroad museum finally 
              became a reality.
            </p>
            <p>
              On November 15, 1985, the Chapter began the restoration of the Depot’s freight room into a meeting room for monthly Chapter 
              meetings. The first meeting was held in the Museum in January 1986. The restoration efforts were completed in May 1987.
            </p>
            <p>
              In September 1990, the Chapter acquired Seaboard System Railroad Caboose #11073 (Former Clinchfield Railroad Caboose #1073).  
              During August 1996, Chapter members completed the restoration of the caboose.
            </p>
            <p>
              In November 1992, the Museum’s Ernest S. Green Memorial Library  was moved to the room built in the east end of the Museum Meeting 
              Room from the small room in the main part of the depot.
            </p>
            <p>
              In December 1994, the Chapter completed installation of central heat and air conditioning system in the Museum.
            </p>
            <p>
              In September 1999, the Chapter became a Partner in Education with the Lakeville Elementary School in Apopka. In May 2000, the 
              school’s reception area and its large multi-purpose room became a railroad museum, an extension of the Central Florida RR Museum. 
              The multi-purpose room was lined with railroad photographs and display cases of railroad memorabilia from the Central Florida 
              Railroad Museum’s collection. The room also has a large working Lionel train layout. The reception area of the school was filled 
              with railroad memorabilia, model trains and flashing railroad crossing signals. April 2001 – Chapter member Henry Lebel is 
              guest speaker at the grand opening of the Lakeville Elementary School Railroad Museum.  Also in 2001, the Chapter helped the 
              school acquire a former Atlantic Coast Line M-5 caboose for display on the school grounds. Lakeville uses mottos “We’ve Been
              Working on the Railroad” and “Home of the Engineers”.
            </p>
            <p>
              In April 2000, the family of the late Chapman S. Root donated a major part of Mr. Root’s railroad memorabilia collection to the 
              Central Florida Chapter for display in the Central Florida Railroad Museum. The donation included a large collection of railroad 
              dining car china and silver service, dining car menus, railroad signs, Pullman memorabilia, Railway Express memorabilia, table 
              linens and uniforms and custom made glass display cases for display of the items. Mr. Root’s Chesapeake & Ohio caboose is also on 
              display at the Winter Garden Heritage Museum which is located on Plant Street in downtown Winter Garden in the former Atlantic Coast 
              Line Railroad depot. Mr. Root owned Associated Coca-Cola, the largest Coca-Cola bottling company in the country. He also owned 4 
              private railcars which he used for family travel and vacations. Two of his railcars and his Coca-Cola collection are now on display 
              at the Museum of Arts and Sciences in Daytona Beach, Florida.
            </p>
            <p>
              On June 13, 2003, the museum was used as a movie set for segments of the movie “Iron Texas.”
            </p>
            <p>
              On August 3, 2003, the museum began being open 7 days per week from 1:00 PM to 5:00 PM. Ginny Green was hired as the Museum’s first full-time host.
            </p>
            <p>
              On September 17, 2003, the Chapter donated its Museum Complex and property to the City of Winter Garden and signed a 99-year lease 
              with the City of Winter Garden and the Winter Garden Heritage Foundation for the Central Florida RR Museum. The Central Florida 
              Railroad Museum is operated under a cooperative agreement between the City of Winter Garden, the Winter Garden Heritage Foundation 
              and the Central Florida Chapter of the National Railway Historical Society. The Winter Garden Heritage Foundation provides the funding 
              for the daily operation and the Museum host Monday through Friday. Chapter members serve as host on Saturdays and Sundays. The Museum 
              hours are 1:00 PM to 5:00 PM. The Museum is closed on select holidays.
            </p>
            <p>
              On December 18, 2004, Chapter members installed a cast bronze plaque on the former T&G RR Depot acknowledging original ownership and the depot’s construction date of 1913.
            </p>
            <p>
              During July 2005, Chapter Member Ward Britt arranged for Boy Scout Troop #210 to upgrade interior of Roper Building at no cost as an 
              Eagle Merit Badge Project for Scout Tim Keating. Work was supervised by a licensed contractor. Improvements included installation of 
              interior insulation, walls and ceilings, and air conditioning. Work was completed in late September.
            </p>
            <p>
              On February 17, 2007, Scott Edwards of Boy Scout Troop #86 at the LDS Church in Clermont began restoration of a small former office 
              in the Roper Building for his Eagle Badge project. The work was supervised by a licensed contractor. The restoration was completed on 
              June 16th. Several scouts and parents assisted Scott with his Eagle Badge project. A small air conditioner was installed to reduce 
              humidity and keep the room at a somewhat constant temperature. The Chapter stores their photograph collection and VHS tape collection 
              in the office. Computers are also located in the office to help manage the Chapter’s collection of railroad-related artifacts.
            </p>
            <p>
              On November 8, 2010, the Chapter celebrated its 40th Anniversary at its regular monthly meeting.
            </p>
            <p>
              On January 1, 2013, the Central Florida Chapter of the National Railway Historical Society, Inc. became the Central Florida 
              Railway Historical Society, Inc.
            </p>
            <p>
              Currently, the Central Florida Railroad Museum hosts the annual meeting of the Florida Chapter of Samuel B. Morse Telegraph Club 
              during April and the annual visit of the North American Rail Car Operators Association’s (NARCOA) speeders during the spring.
            </p>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    );
  }
}

export default Museum;