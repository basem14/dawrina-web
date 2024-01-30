import React from "react";
import styled from "styled-components";

const ImageLink = styled.a`
width: 32%;
transition: all 250ms;
background: white;
border-radius: 6px;
padding: 7px;
&:hover {
  background-image: linear-gradient( to bottom right, rgba(255, 255, 255, 0) 0%, rgba(128, 128, 128, 0.2) 100% );
  background-color: transparent;
  filter: invert(0.9);
}
`

export default ImageLink;