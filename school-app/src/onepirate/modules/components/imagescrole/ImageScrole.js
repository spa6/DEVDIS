import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Imagescrole.css";

class ImageScrole extends Component {
  render() {
    return (
      <Carousel showThumbs={false} dynamicHeight={true} autoPlay={true}>
        <div>
          <img src="images/testimonials/Capture.PNG" />
        </div>
      </Carousel>
    );
  }
}
export default ImageScrole;
