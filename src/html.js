import React from "react"

import PropTypes from "prop-types"
import { mediaStyles } from "./components/atoms/Media"
import { GTMCode } from "../gtm-tracking";
import Logo from './images/Mobile/logo@3x.png'
export default function HTML(props) {

  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="keywords"
          content="dawrina"
        />
        <meta name="apple-itunes-app" content="app-id=6476918150" />
        <title>Dawrina</title>        

        {/* Inject @artsy/fresnel styles in to the head */}
        <style>{mediaStyles}</style>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        <div  id="___Load" 
        style={{width:'100%',
        height:'100vh',
        display:'flex',
        justifyContent:'center'
      ,alignItems:'center'
      }}>
            
         <div className="request-loader">
         <img 
             src={Logo} 
             alt="Loading spinner" 
             width="60px" 
             height="56px"
           />

         </div>
        </div>
      
        {props.postBodyComponents}
        <GTMCode/>
      </body>
    </html>
  )
}
HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}