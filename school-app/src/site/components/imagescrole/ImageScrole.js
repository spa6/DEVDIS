import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Imagescrole.css";

class ImageScrole extends Component {
  render() {
    return (
      <div className="scroleMobile">
        <Carousel
          className="background"
          showThumbs={false}
          autoPlay={true}
          showArrows={false}
          infiniteLoop={true}
          showIndicators={false}
        >
          <div>
            <img src="images/kids1.png" />
          </div>
          <div>
            <img src="images/kids2.jpg" />
          </div>
          <div>
            <img src="images/kids3.jpg" />
          </div>
          <div>
            <img src="images/kids4.jpg" />
          </div>
          <div>
            <img src="images/kids5.jpg" />
          </div>
        </Carousel>
      </div>
    );
  }
}
export default ImageScrole;
