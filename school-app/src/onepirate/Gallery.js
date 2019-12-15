import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import images from "../__mocks__/galleryImages";
import "./Gallery.css";

// const images = [
//   {
//     original: "https://picsum.photos/id/1018/1000/600/",
//     thumbnail: "https://picsum.photos/id/1018/250/150/"
//   },
//   {
//     original: "https://picsum.photos/id/1015/1000/600/",
//     thumbnail: "https://picsum.photos/id/1015/250/150/"
//   },
//   {
//     original: "https://picsum.photos/id/1019/1000/600/",
//     thumbnail: "https://picsum.photos/id/1019/250/150/"
//   }
// ];
function Gallery() {
  images.map(image => {
    const url = `${window.location.origin}${image.original}`;
    const thumbnailUrl = `${window.location.origin}${image.thumbnail}`;
    image.original = url;
    image.thumbnail = thumbnailUrl;
    return image;
  });
  return <ImageGallery items={images} />;
}
export default Gallery;
