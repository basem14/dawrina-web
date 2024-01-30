import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Container, Stack } from "react-bootstrap";
import { ResponsiveUtilityValue } from "react-bootstrap/esm/createUtilityClasses";
import { GapValue } from "react-bootstrap/esm/types";
import { Button } from "../atoms/Button";

const ImageLink = styled.a`
  width: 32%;
  transition: all 250ms;
  background: white;
  border-radius: 6px;
  padding: 7px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-image: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0) 0%,
      rgba(128, 128, 128, 0.2) 100%
    );
    background-color: transparent;
    filter: invert(0.9);
  }

  @media (max-width: 768px) {
    width: auto;
    height: 40px;
  }
`;

export default function StoreLinkGroup({
  gap,
  buttonWidth,
  collapse = false,
}: {
  gap?: ResponsiveUtilityValue<GapValue>;
  buttonWidth?: string | number;
  collapse?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const renderAppButtons = () => {
    return (
      <>
        <ImageLink
          className="mt-md-5 mb-md-5 mt-sm-3 mb-sm-3 mb-3 download-huawei-app"
          href="https://appgallery.huawei.com/app/C106460597"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "4px",
            width: buttonWidth ? buttonWidth : "32%",
            minHeight: collapse ? "50px" : "",
          }}
        >
          <StaticImage
            className={`${collapse ? "collapse-img" : ""}`}
            src="./../../images/general/huawei-appgallery.png"
            alt="app-image"
            placeholder="blurred"
            width={300}
          />
        </ImageLink>
        <ImageLink
          className="mt-md-5 mb-md-5 mt-sm-3 mb-sm-3 mb-3 download-apple-app"
          href="https://apps.apple.com/sa/app/shwra-%D8%B4%D9%88%D8%B1%D9%89/id1550113344"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "4px",
            width: buttonWidth ? buttonWidth : "32%",
            minHeight: collapse ? "50px" : "",
          }}
        >
          <StaticImage
            className={`${collapse ? "collapse-img" : ""}`}
            src="./../../images/general/apple.svg"
            alt="app-image"
            placeholder="blurred"
            width={300}
          />
        </ImageLink>
        <ImageLink
          className="mt-md-5 mb-md-5 mt-sm-3 mb-sm-3 mb-3 download-google-app"
          href="https://play.google.com/store/apps/details?id=sa.shwra.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: buttonWidth ? buttonWidth : "32%",
            minHeight: collapse ? "50px" : "",
          }}
        >
          <StaticImage
            className={`${collapse ? "collapse-img" : ""}`}
            src="./../../images/general/google-play.svg"
            alt="app-image"
            placeholder="blurred"
            width={300}
          />
        </ImageLink>
      </>
    );
  };
  return (
    <>
      {collapse ? (
        <>
          <Button
            className="download-apps bold"
            style={{
              backgroundColor: "white",
              width: "100%",
              padding: "1rem 2rem",
              border: "none",
              borderRadius: "7px",
              fontWeight: "bold",
              color: "var(--primary-color)",
              marginBottom: "2rem",
              minHeight: "40px",
            }}
            onClick={() => {
              setExpanded(!expanded);
            }}
          >
            حمل التطبيق
          </Button>
          <Container
            style={{
              maxHeight: expanded ? "500px" : 0,
              transition: "0.5s all ease-in-out",
              overflow: "hidden",
              padding: "0",
              margin: "0 auto",
              maxWidth: "100% !important",
            }}
          >
            {renderAppButtons()}
          </Container>
        </>
      ) : (
        <Stack direction="horizontal" gap={gap || 5}>
          {renderAppButtons()}
        </Stack>
      )}
    </>
  );
}
