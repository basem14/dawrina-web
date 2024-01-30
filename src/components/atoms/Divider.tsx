import React from 'react';
import styled from 'styled-components';
//


 const StyledDivider = styled.hr`
 /*   margin-left: 4px;
    margin-right: 4px;
    margin: 0px;
    flex-shrink: 0;
    border-width: 0px thin 0px 0px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.12);
    height: auto;
    align-self: stretch;

    border:         none;
    border-left:    1px solid hsla(200, 10%, 50%,100);
    height:         100vh;
    width:          1px; 
`


export default function Divider() {
    return (
        <StyledDivider />
    );
}