import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.min.js";
//import "@popperjs/core/dist/umd/popper.min.js";
import 'normalize.css'
import "./src/styles/global.css"
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import * as React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { MediaContextProvider } from "./src/components/atoms/Media"

export const onInitialClientRender = () => {
  setTimeout(function() {
      document.getElementById("___Load").style.display='none'
  }, 1000)
}

export const wrapPageElement = ({ element, props }) => {

  return (
  <MediaContextProvider>
    <ParallaxProvider>
      {element}
      </ParallaxProvider>
  </MediaContextProvider>
  )
};


// ES5 way
// exports.onClientEntry = () => {
// ES6 way
export const onClientEntry = () => {
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (!(`IntersectionObserver` in window)) {
      import(`intersection-observer`)
      console.log(`# IntersectionObserver is polyfilled!`)
    }
}