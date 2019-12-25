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
            <img src="images/banner1.png" />
          </div>
          <div>
            <img src="images/banner2.png" />
          </div>
          <div>
            <img src="images/banner3.png" />
          </div>
          <div>
            <img src="images/banner4.png" />
          </div>
        </Carousel>
      </div>
    );
  }
}
export default ImageScrole;
