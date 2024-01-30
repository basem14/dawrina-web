import React from 'react';
import styled from 'styled-components';
// reactstrap
import { Button } from 'react-bootstrap';


const FormSubmitButton = styled(Button)`
    font-size: 17px !important;
    padding: 8px 48px !important;
    background: #cc9a28 !important;
    border: 0 !important;  
    margin-top: 20px !important;
    margin-bottom: 20px !important;  
    &:hover {
        box-shadow: 0px 1px 5px 0px #9b9589;
        background: #cc9a28;
    }
    &:focus {
        box-shadow: 0px 1px 5px 0px #9b9589;
        background: #cc9a28;
    }
    &:active {
        box-shadow: 0px 1px 5px 0px #9b9589;
        background: #cc9a28;
    }
`;

export default FormSubmitButton;