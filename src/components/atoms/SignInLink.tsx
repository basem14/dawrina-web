import React from "react";
// styled-components
import styled from "styled-components";

const SignInLink = styled.a`
    color: --bussiness-white-color;
    text-decoration: none;
    font-weight: bold;
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding: 10px 35px;
    background: var(--secondary-color)0% 0% no-repeat padding-box;
    border-radius: 29px;
    opacity:1;
    font-size: 17px;
    // border: 1px solid #cc9a28;
    transition: all 0.3s ease-in-out;
    user-select: none;
    &:hover {
    // background-color: var(--primary-color);
    color: #07242E;
    // border: 1px solid var(--secondary-color);
    }

    &:active {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    border: 1px solid var(--secondary-color);
`;


export default SignInLink