import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Icon } from "@iconify/react";
import { Media } from "../../atoms/Media";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { Container, Row, Col, Button, Stack } from "react-bootstrap";
import Typography from "../../atoms/Typography";
import { Margin } from "@mui/icons-material";

const ToolBar = styled.section`
  z-index: 9999;
  top: 00;
  left: 0;
  right: 0;
  border-bottom: 1px solid #e6e6e6;
  position: absolute;
  height: 50px;
  padding: 0px 5px;
  background-color: #fff;
 

`;

const LinkButton = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  padding: 0px 20px;
  border: none;
  background-color: #f5f5f5;
  outline: none;
  cursor: pointer;
  border-radius: 26px;
  line-height: 35px;

  &:hover {
    color: #000;
    text-decoration: none;
  }
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
    color: red;
    border: 1px solid #000;
    background-color: red;
  }
  color: black;
  &.active-btn {
    color: #cc9a28;
    border: 1px solid #cc9a28;
    background-color: white;
  }
`;

export default function ToolBarSection() {
  const { isMobile, isTablet, isDesktop } = useMediaQuery();

  return (
    <Media at="sm">
    <ToolBar>
      <Container>
      
          { /*<Col xs={12} sm={6} md={6} lg={6} className="sm-none">
           
              <Stack
                gap={5}
                direction="horizontal"
                className="d-flex justify-content-start"
              >
                <LinkButton
                  to="/"
                  activeClassName="active-btn"
                  className="d-flex justify-content-center active-btn"
                >
                  العربية
                </LinkButton>
              </Stack>
  </Col> */}

        
            <Stack
              
             
            style={{
              display:'flex',
              flexDirection:'row',
              justifyContent:'center',
              alignContent:'center',
              alignItems:'center',
            gap:10,
           padding:10
            
            }}
            >
     
     <div
        className="d-flex justify-content-center align-items-center"
        style={{
          
          cursor: 'pointer',
          textDecoration: 'underline',
        }}
        onClick={() => window.open ('mailto:info@shwra.sa')}
      >
              <Typography
                variant="h4"
                className="d-flex justify-content-center align-items-center"
                style={{
                  
                }}
              >
                info@shwra.sa
                <Icon fontSize={'2.5rem'} 
                icon="basil:envelope-outline" 
                className="me-3  align-self-start" 
                color="#cc9a28" />
              </Typography>

                </div>
                <div
        className="d-flex justify-content-center align-items-center"
        style={{
          
          cursor: 'pointer',
          textDecoration: 'underline',
        
        }}
        onClick={() => window.location.href = 'tel:920033635'}
      >

              <Typography
                variant="h4"
                className="d-flex justify-content-center align-items-center"
                style={{
                 
                  
                }}
              >
               920033635
                <Icon
                  icon="ph:phone-light"
                  fontSize={'2.5rem'}
                  className="me-3 align-self-start"
                  color="#cc9a28"
                />
              </Typography>
                  </div>

            </Stack>
        
       
      </Container>
    </ToolBar>
    </Media>
  )
}
