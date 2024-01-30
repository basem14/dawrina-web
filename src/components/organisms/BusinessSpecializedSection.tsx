import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components";
//
import Section  from "../atoms/Section"
import Typography from "../atoms/Typography";
import Box from "../atoms/Box";
import { Media } from "../atoms/Media";
// Molecules
import StoreLinkGroup from "../molecules/StoreLinkGroup";
import SocialLinkGroup from "../molecules/SocialLinkGroup";
// react-bootstrap
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import MajorsBusiness from "./MajorsBusiness";


const BusinessAboutHeader= styled(Typography)`
    color: #DDB669;
    opacity:1;
    text-align:center;
    //margin-bottom: 2rem;
    font-size: 55px !important;
    /*font-weight: bold !important;*/

    //md
    @media (max-width: 1212px) {
        font-size: 45px !important;
    }

    @media (max-width: 991px) {
        font-size: 40px !important;
    }

    //sm
    @media (max-width: 575px) {
        font-size: 4.5rem !important;
    }

`;

const BusinessAboutTitle = styled(Typography)`
    font-size: 2.5rem;
    color: white;
    //margin-bottom: 2rem;
    font-size: 35px !important;
    /*font-weight: bold !important;*/

    //md
    @media (max-width: 1212px) {
        font-size: 25px !important;
    }

    @media (max-width: 991px) {
        font-size: 20px !important;
    }

    //sm
    @media (max-width: 575px) {
        font-size: 2.5rem !important;
    }

`;

const BusinessAboutparagraph = styled(Typography)`
  font-size: 17px;
  color: white;
  margin-bottom: 2rem;

  //md
  @media (max-width: 1212px) {
      font-size: 16px !important;
  }

  @media (max-width: 991px) {
      font-size: 15px !important;
  }

  //sm
  @media (max-width: 575px) {
      font-size: 15px !important;
  }
`;


export default function BusinessSpecializedSection() {
    return(
    <Section
      style={{
        background: '#07242E',

      }}
      id="about-business"
    >
    
      <Container fluid>
        <Row>
          <Col xs={12} md={12}>
            <BusinessAboutHeader
              component="h1"
              variant="h1"
              className="mt-5 mb-5"
            >

             التخصصات  
              
            </BusinessAboutHeader>

           </Col>
        </Row>
        <Row>

          {/** title */}
          <Row >
          <MajorsBusiness/>
           </Row>
        </Row>

      </Container>

    </Section>
    );
}
