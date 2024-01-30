import * as React from 'react';
import styled from "styled-components";
import {  Navbar } from "react-bootstrap";

console.log = console.warn = console.error = () => {};
const NavBar = styled(Navbar)`
    right: 0;
    left: 0;
    z-index: 1030;
    direction:rtl;
 
     top: 45px;
     position: fixed!important;
    padding: 14px 0 !important;
    background-color: white !important;;

    @media (max-width:768px)
    {
         
           top: 0 !important;
            padding:10px 0 !important;
          ${props => props.isScrolled ? `
    opacity: 1 !important;
    -webkit-backdrop-filter: blur(10px) !important;

    position: fixed !important;
  
        background: transparent linear-gradient(180deg, #DEE2F0 0%, #FBFBFB00 100%) 0% 0% no-repeat padding-box;
        backdrop-filter: blur(18px) !important;
        
       
        
    `: `
    top: 0px;
    position: absolute;
    padding:40px 0px !important;
   
    `}
    }
     @media (min-width:768px)
      {
        background: linear-gradient(to left, rgb(243 245 250 / 8%) 0%, rgb(251 251 251 / 21%) 100%);   
        }
    // ${props => props.isScrolled ? `
    // top: 0 !important;
    // opacity: 1 !important;
    // -webkit-backdrop-filter: blur(10px) !important;

    // position: fixed !important;
  
    //     background: transparent linear-gradient(180deg, #DEE2F0 0%, #FBFBFB00 100%) 0% 0% no-repeat padding-box;
    //     backdrop-filter: blur(18px) !important;
        
    //     @media (min-width:768px)
    //     {
    //         background: var(--unnamed-color-fafbfd) 0% 0% no-repeat padding-box;
    // backdrop-filter: blur(8px);

    //     }
        
    // `: `
    // top: 40px;
    // position: absolute;
    // padding: 10px 0;

    // @media (min-width:768px)
    // {
    // top: 45px;
   
    // }
    // `}
   
`;

export default NavBar;