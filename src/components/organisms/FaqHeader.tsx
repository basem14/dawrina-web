import React, { ReactNode } from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Media } from "../atoms/Media";
import useMediaQuery from "../../hooks/useMediaQuery";
import Typography from "../atoms/Typography";
import Box from "../atoms/Box";
import ReadMore from "../atoms/ReadMore";
// Molecules
import StoreLinkGroup from "../molecules/StoreLinkGroup";
import SocialLinkGroup from "../molecules/SocialLinkGroup";
// react-bootstrap
import { Container, Row, Col } from "react-bootstrap";
// atoms
import HeroSectionBase from "../atoms/HeroSectionBase";

const HeroContainer = styled(Container)`
  position: relative;
  z-index: 1;
  padding-top: 10rem;

  @media (max-width: 991px) {
    padding-top: 10rem !important;
  }
`;

// color from props
const HeroTitle = styled(Typography)`
  color: ${(props) => props.color};
  font-size: 35px;
  line-height: 1.5;

  @media (max-width: 991px) {
    font-size: 26px !important;
  }
`;

const HeroContent = styled(Box)`
  /*className="text-end"*/

  margin-top: 15rem;
  margin-bottom: 5rem;

  @media (max-width: 991px) {
    margin-top: 0px;
    margin-bottom: 2rem;
  }

  @media (max-width: 575px) {
    margin-top: -22px;
    margin-bottom: 0;
  }
`;

export default function FaqHeader({
  description,
  heroImage,
  collapse
}: {
  description?: string;
  heroImage?: any;
  collapse?: boolean
}) {
  const { isMobile } = useMediaQuery();

  return (
    <HeroSectionBase id="home" className="aspect-[2/4]">
      <StaticImage
        src="./../../images/general/background.jpg"
        alt="hero background"
        placeholder="blurred"
        layout="fullWidth"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <HeroContainer>
        <Row>
          <Media at="sm">
            <Col xs={12}>
              <div
                style={{
                  maxWidth: "350px",
                  margin: "0 auto",
                }}
              >
                {heroImage ? 
                  heroImage : 
                  <StaticImage
                    src="./../../images/general/hero-image.png"
                    alt="app-image"
                    placeholder="blurred"
                  />
                } 
              </div>
            </Col>
          </Media>

          <Col xs={12} md={6} lg={6} className="align-self-center">
            <HeroContent style={{
              marginTop: heroImage && isMobile ? '1rem' : ''
            }}>
              <HeroTitle
                variant="h1"
                align="left"
                color="white"
                gutterBottom
                paragraph
                className="bold"
              >
                دليلك الاول
              </HeroTitle>

              <HeroTitle
                variant="h1"
                align="left"
                color="var(--secondary-color)"
                gutterBottom
                paragraph
                className="bold"
              >
                للاستشارات القانونية
              </HeroTitle>

              <Typography
                variant="p"
                align="left"
                //color="primary"
                gutterBottom
                paragraph
                style={{
                  color: "white",
                  lineHeight: "1.5",
                }}
              >
                {description
                  ? description
                  : isMobile
                  ? "شورى هي منصة رقمية تعنى بتقديم الاستشارات والخدمات القانونية عن بعد في المملكة العربية السعودية من خلال ربط العملاء طالبي الاستشارات والخدمات القانونية، مع نخبة من المحامين"
                  : "شورى هي منصة رقمية تعنى بتقديم الاستشارات والخدمات القانونية عن بعد في المملكة العربية السعودية من خلال ربط العملاء طالبي الاستشارات والخدمات القانونية، مع نخبة من المحامين المعتمدين والمحترفين بطريقة تفاعلية، سهلة وآمنة ومهنية واستناداً إلى القوانين مع الحفاظ على سرية وخصوصية بيانات العملاء. وتتضمن الاستشارات القانونية عدة مجالات منها: مجالات"}
              </Typography>
              <ReadMore to="/#about" />

              <Box
                className="sm-none"
                style={{
                  marginTop: "2rem",
                  marginBottom: "2rem",
                }}
              >
              <StoreLinkGroup
                gap={3}
                collapse={isMobile && collapse ? collapse : false}
                buttonWidth={collapse ? "100%" : ""}
              />
            </Box>

              <Media at="sm">
                <Box>
                  <SocialLinkGroup
                    direction="horizontal"
                    gap={5}
                    className="justify-content-center"
                  />
                </Box>
              </Media>
            </HeroContent>
          </Col>

          <Col xs={12} md={6} lg={6} className="sm-none">
            <Media greaterThan="sm">
              {heroImage ? (
                heroImage
              ) : (
                <StaticImage
                  src={"./../../images/general/hero-image.png"}
                  alt="app-image"
                  placeholder="blurred"
                />
              )}
            </Media>
          </Col>
        </Row>
      </HeroContainer>

      <Media greaterThan="sm">
        <Box
          style={{
            position: "absolute",
            bottom: "10vh",
            left: 95,
            zIndex: 1,
          }}
          className="sm-none"
        >
          <SocialLinkGroup direction="vertical" />
        </Box>
      </Media>
    </HeroSectionBase>
  );
}
