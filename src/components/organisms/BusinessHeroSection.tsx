import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components";
import { Media } from "../atoms/Media"
import Section  from "../atoms/Section"
import BusinessHeroSectionBase from "../atoms/BusinessHeroSectionBase";
import Typography from "../atoms/Typography";
import Box from "../atoms/Box";
import SignInLink from "../atoms/SignInLink";
import ReadMore from "../atoms/ReadMore";
import SocialLinkGroup from "../molecules/SocialLinkGroup";

import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import useMediaQuery from "../../hooks/useMediaQuery";

const HeroContainer = styled(Container)`
  position: relative;
  z-index: 1;
  padding-top: 15vh;
  max-width: 1299px !important;
  @media (max-width: 991px) {
    padding-top: 43vh !important;
  }
`

const HeroContent = styled(Box)`
  margin-top: 15rem;
  margin-bottom: 5rem;

  @media (max-width: 991px) {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 575px) {
    margin-top: 10px;
    margin-bottom: 0;
  }

`;

// color from props
const HeroTitle = styled(Typography)`
  color: ${props => props.color};
  font-size: 85px;
  line-height: 1.5;

  @media (max-width: 991px) {
    font-size: 26px !important;
  }
`
export default function BusinessHeroSection() {
  const { isMobile } = useMediaQuery();

    return (
    <BusinessHeroSectionBase>
      <StaticImage
         src="./../../images/general/Artboard 1.png"
         alt="hero background"
         placeholder="blurred"
         layout="fullWidth"
         imgClassName={isMobile ?"img-hero" : ""}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            position: "absolute",
            top: 0,
            left: 0,
            // zIndex: -1,
          }}
       />
      <HeroContainer>
        <Row>
          <Col xs={12} md={6} lg={6}>
            {/* hero content */}
            <HeroContent
              className="text-end"
            >
                  <HeroTitle
                    // variant="h1"
                    align="left"
                    color="var(--bussiness-color)"
                    gutterBottom
                    paragraph
                  >
                    شورى للأعمال
                  </HeroTitle>

                  <Typography
                    variant="p"
                    align="left"
                    gutterBottom
                    paragraph
                    style={{
                      color: "white",
                      lineHeight: "1.5",
                    }}
                  >
                    شورى منصة رقمية مختصة بتقديم الخدمات و الاستشارات القانونية لأصحاب الأعمال و الشركات.
                     و ذلك من خلال ربط طالبي الخدمات القانونية من الشركات وأصحاب الأعمال بنخبة من المحامين المتخصصين و المرخصين من وزارة العدل السعودية. تقدم شورى خدماتها على مدار الساعة، لكل مناطق المملكة، بمهنية وجودة عالية و تواصل فعال و سرية تامة، كما يمكن تخصيص باقاتها بحسب احتياج الشركة.ما يبقي الشركة و أصحاب الأعمال في الاتجاه القانوني السليم دائما.
                  </Typography>

                  {/* <ReadMore to="/business#about-business" /> */}
                  <Box
                    style={{
                      display: "flex",
                    }}
                  >
                     <SignInLink
                        href="https://portal.shwra.sa"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                       تسجيل الدخول
                     </SignInLink>
                  </Box>
            </HeroContent>
          </Col>
          {/* <Col xs={12} md={6} lg={6}>
            <StaticImage
                  src="./../../images/general/business.png"
                  alt="app-image"
                  placeholder="blurred"
                  width={400}
              />
          </Col> */}
        </Row>

      </HeroContainer>
      
    </BusinessHeroSectionBase>
    );
}
