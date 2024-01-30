import React, { CSSProperties } from "react";
import styled from "styled-components";
// react-bootstrap
import { Container, Row, Col } from "react-bootstrap";
// atoms
import "./../../styles/feature.css";
import useMediaQuery from "../../hooks/useMediaQuery";

const Title = styled.h5`
  color: var(--secondary-color);
  letter-spacing: -0.2rem;
  font-size: ${(props) =>
    props.theme.fontSize ? props.theme.fontSize : "4rem"};
  font-family: ${(props) =>
      props.theme.fontFamily ? props.theme.fontFamily : ""};
  font-weight: 600;
  margin-bottom: 1rem;
`;

const FeatureItem = styled.h5`
  position: relative;
  height: ${(props) => props.theme.height};
  font-size: ${(props) =>
    props.theme.fontSize ? props.theme.fontSize : "1.5rem"};;
  line-height: 1.5;
  text-align: ${(props) => props.theme.textAlign};
`;
type FeatureListProps = {
  features: string[];
  mobileGrid?: number;
  styles?: CSSProperties;
  titleStyles?: CSSProperties;
  sectionsTitle?: Array<string>;
  isHome?: boolean;
};

export default function FeatureList({
  features,
  mobileGrid,
  styles,
  sectionsTitle,
  titleStyles,
  isHome = false,
}: FeatureListProps) {
  const { isMobile } = useMediaQuery();

  return (
    <Container>
      <Row
        style={{
          position: "relative",
        }}
      >
        {features.map((feature, index) => (
          <Col key={index} xs={mobileGrid || 12} md={4}>
            <Container
              className={`card-container ${
                isHome ? (index === 0 || index === 3 ? "home" : "home after") : ""
              }`}
              style={{
                borderBottom:
                (index === 0 || index === 1 || index === 2) && isHome
                  ? "1px solid #eee"
                  : "",
              }}
            >
              <Title
                theme={{
                  height: "10rem",
                  ...titleStyles,
                }}
              >
                {sectionsTitle ? sectionsTitle[index] : `. 0${index}`}
              </Title>
              <FeatureItem
                theme={{
                  // height: "10rem",
                 
                  ...styles,
                }}
              >
                {feature}
              </FeatureItem>
            </Container>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
