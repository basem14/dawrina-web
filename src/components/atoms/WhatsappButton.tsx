import React from 'react';
import { Icon } from '@iconify/react';
import styled from 'styled-components';

const WhatsappLink = styled.a`
    position: fixed;
    width: 60px;
    height: 60px; 
    bottom: 50px;
    right: 20px;
    background-color: #25d366;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    box-shadow: 2px 2px 3px #999;
    z-index: 100;
    margin: 15px;
`

export default function WhatsappButton() {

    return(
        <WhatsappLink 
            href="https://wa.chatfuel.com/shwra"
            target="_blank"
            rel="noopener noreferrer"
            
         >

          <Icon 
           icon="ant-design:whats-app-outlined"
           style={{
            verticalAlign: 'bottom'
           }}
          />

        </WhatsappLink>
    )
}