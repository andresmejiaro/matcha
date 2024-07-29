//Gender
//Interested in
//Bio
//interest tags
//Pictures (5)
//Fame
//GPS
//Self preview vs other
// Add visit to target log
// Like -> Match
// Like togglable (unmatch)
//Report and Block

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styles.css';
import {Carousel, CarouselItem} from "react-bootstrap";
import React from 'react';
import prof1 from './images/Alex-matcha-prof/1.webp'
import prof2 from './images/Alex-matcha-prof/2.webp'
import prof3 from './images/Alex-matcha-prof/3.webp'
import prof4 from './images/Alex-matcha-prof/4.webp'
import prof5 from './images/Alex-matcha-prof/5.webp'

export class ProfileViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {"hola": 12};
    }

    render() {
      return (
          <div className="container d-flex justify-content-center align-content-center vh-80">
            <div className={"row"}>
              <div className={"col-md-8 offset-md-2 justify-content-center align-items-center"}>
                <Carousel slide ={false}>
                  <Carousel.Item>
                    <img className={"img-fluid w-100 "} src={prof1} alt="Prof"/>
                      <Carousel.Caption>
                          <p className={"bg-dark text-white"}> Alex ⭐⭐⭐⭐<br/>
                          19, New York<br/>
                              Interested in: Women </p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className={"img-fluid w-100 "} src={prof2} alt="Prof"/>
                      <Carousel.Caption>
                          <p className={"bg-dark text-white"}> Alex <br/>
                              "Hey there! I'm Alex, a shy but fun-loving guy who enjoys cozy nights with video games and exploring new adventures. Looking to meet someone special who shares my love for gaming and a good laugh."
                               </p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className={"img-fluid w-100 "} src={prof3} alt="Prof"/>
                      <Carousel.Caption>
                          <p className={"bg-dark text-white"}> Alex <br/>
                              #gaming, #anime, #tech, #music, #movies
                          </p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className={"img-fluid w-100 "} src={prof4} alt="Prof"/>
                      <Carousel.Caption>
                          <p className={"bg-dark text-white"}> Alex ⭐⭐⭐⭐<br/>
                              19, New York<br/>
                              Interested in: Women </p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className={"img-fluid w-100 "} src={prof5} alt="Prof"/>
                      <Carousel.Caption>
                          <p className={"bg-dark text-white"}> Alex ⭐⭐⭐⭐<br/>
                              19, New York<br/>
                              Interested in: Women </p>
                      </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>



                  </div>
                </div>
              </div>

      );
    }
}