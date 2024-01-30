import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';




const ButtonLink = styled(Link)`
  position: relative;
  width: 130px;
  height: 48px;
  border: ${props =>props.business?"1px ":"1px solid #FFFFFF"};
  border-radius: 26px;
  opacity: 1;
  text-align: center;
  vertical-align: middle;
  line-height: 5rem; 
  color: ${props =>props.business?"black":""};
  background:${ props => props.bgColor }  ;
  &:hover {
    background: var(--secondary-color);
    color: black;
    border: 0;
  }    
`

export default ButtonLink