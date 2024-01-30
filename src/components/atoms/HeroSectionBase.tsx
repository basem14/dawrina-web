import * as React from "react"

import styled from "styled-components";
//
import { ParallaxBanner } from 'react-scroll-parallax';

const HeroSectionBase = styled(ParallaxBanner)`
  position: relative;
  min-height: 800px;
  width: 100%;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.8;
    background:linear-gradient(220deg,#DEE2F0 0%,#FBFBFB00 45%);

    @media (max-width: 768px) {
      background:linear-gradient(205deg,#DEE2F0 0%,#FBFBFB00 55%);
     }
    
  } 
  @media (min-width:768px) and (max-width:1250px)
     {
  min-height: 600px;
      
     }
`;


export default HeroSectionBase;