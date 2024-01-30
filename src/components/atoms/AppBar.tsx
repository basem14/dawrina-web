import * as React from 'react';
import styled from "styled-components";


const AppBar = styled.header`
  z-index: 9999;
  position: relative;
  top: 0;
  left: 0px;
  /*/width: 1920px;
  height: 139px;*/
  background: transparent linear-gradient(180deg, #14242B 0%, #14242B33 100%) 0% 0% no-repeat padding-box;
  opacity: 1;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

export default AppBar;