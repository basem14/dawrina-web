/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import * as React from "react"
import { MediaContextProvider } from "./src/components/atoms/Media"

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const wrapPageElement = ({ element, props }) => {
  return (
  <MediaContextProvider>
      {element}
  </MediaContextProvider>
  )
};

