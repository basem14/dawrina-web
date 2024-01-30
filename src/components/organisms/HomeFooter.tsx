import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Icon } from "@iconify/react";
//

import useMediaQuery from "../../hooks/useMediaQuery";
//
import { Stack, Container, Row, Col, Nav } from "react-bootstrap";
//
import NavItemList from "./../molecules/NavItemList";
import Box from "../atoms/Box";
import HLogo from "../atoms/HLogo";
import Typography from "../atoms/Typography";
import { NavItem } from "../atoms/NavItem";
//
import NavMobile from "./../molecules/NavMobile";
import StoreLinkGroup from "./../molecules/StoreLinkGroup";
import SocialLinkGroup from "../molecules/SocialLinkGroup";
import { StaticImage } from "gatsby-plugin-image";

const NAV_ITEMS = [
    {
      id: "home",
      label: "الرئيسية",
      href: "/",
    },
   
    {
      id: "about",
      label: "عن شورى",
      href: "/WhyUs",
    },
    {
      id: "features",
      label: "فريق العمل",
      href: "/BoardOfDirectors",
    },
    {
      id: "services",
      label: " خدمة ",
      href: "/LegalAdvisor",
    },
    {
      id: "usage",
      label: "خدمات شورى",
      href: "/Services",
    },
    {
      id: "team",
      label: "طريقة  ",
      href: "/UseGuide",
    },
    {
      id: "contact",
      label: "الأسئلة الشائعة",
      href: "/faqs",
    },
  ];
  

const RootStyle = styled.footer`
  height: auto;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: var(--primary-color);
`;

const ButtonLink = styled(Link)`
  position: relative;
  width: 130px;
  height: 48px;
  border: 1px solid #ffffff;
  border-radius: 26px;
  opacity: 1;
  text-align: center;
  vertical-align: middle;
  line-height: 5rem;
  &:hover {
    background: var(--secondary-color);
    color: black;
    border: 0;
  }
`;

const CopyRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  color: #fff;
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

const SocialIcon = styled(Icon)`
  width: 30px;
  height: 30px;
  margin: 10px;
  color: #fff;
  &:hover {
    color: var(--secondary-color);
  }
`;

const FooterDivider = styled.hr`
  opacity: 0.2;
  background-color: #fff;
`;

export default function HomeFooter({
  showStoreLinkGroup = false,
  showSocialMedia = false,
  collapse,
  showContact = false,
}: {
  showStoreLinkGroup?: boolean;
  showSocialMedia?: boolean;
  collapse?: boolean;
  showContact?: boolean;
}) {
  const { isMobile } = useMediaQuery();
  return (
    <RootStyle>
      <Container>
        <Row className="mb-3 mt-5">
          <Col xs={12} sm={6} md={12} lg={showStoreLinkGroup ? 4 : 6}>
            <Stack direction="horizontal" gap={3}>
              <HLogo gab={5} />

              <div
                // className="mr-auto"
                style={{
                  marginRight: "auto",
                }}
              >
                {isMobile && <NavMobile />}
              </div>
            </Stack>
          </Col>

          <Col
            xs={12}
            sm={6}
            md={showStoreLinkGroup ? 12 : 6}
            lg={showStoreLinkGroup ? 8 : 6}
          >
            {!isMobile ? (
              <Stack
                gap={5}
                direction="horizontal"
                className="d-flex justify-content-end"
              >
                {showStoreLinkGroup && (
                  <StoreLinkGroup gap={2} buttonWidth={"50%"} />
                )}
                <div
                  className="vr"
                  style={{
                    color: "white",
                    //  opacity: 1,
                  }}
                />

                <div className="right-section col-md-5">
                  <h5
                    style={{
                      color: "white",
                      opacity: 0.7,
                    }}
                  >
                    تابعنا علي منصات التواصل الاجتماعي
                  </h5>

                  <a
                    href="https://twitter.com/shwraApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon icon="akar-icons:twitter-fill" />
                  </a>

                  <a
                    href="https://www.instagram.com/shwraapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon icon="akar-icons:instagram-fill" />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/shwraapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon icon="bxl:linkedin" />
                  </a>
                </div>

                <div className="vr" />
              </Stack>
            ) : (
              <>
                <div className="mt-5">
                  <StoreLinkGroup
                    gap={3}
                    collapse={collapse}
                    buttonWidth={collapse ? "100%" : "32%"}
                  />
                </div>
                {showContact && (
                  <Box
                    style={{
                      margin: "1rem 0",
                    }}
                  >
                    <Stack
                      gap={5}
                      direction="horizontal"
                      className={`d-flex ${
                        !isMobile
                          ? "justify-content-end"
                          : "justify-content-center"
                      }`}
                    >
                      <Typography
                        variant="h4"
                        className="d-flex justify-content-center"
                        style={{
                          padding: 8,
                          color: "#fff",
                        }}
                      >
                        920033635
                        <Icon
                          icon="carbon:phone-filled"
                          className="m-1"
                          color="#cc9a28"
                        />
                      </Typography>
                      <Typography
                        variant="h4"
                        className="d-flex justify-content-center"
                        style={{
                          padding: 8,
                          color: "#fff",
                        }}
                      >
                        info@shwra.sa
                        <Icon
                          icon="dashicons:email"
                          className="m-1"
                          color="#cc9a28"
                        />
                      </Typography>
                    </Stack>
                  </Box>
                )}
                {showSocialMedia && (
                  <div className="mt-3 mb-5">
                    <SocialLinkGroup
                      direction="horizontal"
                      gap={5}
                      className="justify-content-center"
                    />
                  </div>
                )}
              </>
            )}
          </Col>
        </Row>

        {!isMobile && (
          <Box
            style={{
              width: "100%",
              paddingTop: "5rem",
              paddingBottom: "1rem",
            }}
          >
            <Stack direction="horizontal" className="d-flex " gap={4}>
              {NAV_ITEMS.map((item) => (
                <Nav.Item key={item.id}>
                  <Link
                    to={`/${item.href}`}
                    className="nav-link text-white"
                    aria-current="page"
                    color="white"
                  >
                    {item.label}
                  </Link>
                </Nav.Item>
              ))}
              <ButtonLink to="/business">شورى للاعمال</ButtonLink>

              <ButtonLink
                target={"_blank"}
                to="https://portal.shwra.sa/auth/login"
              >
                شورى للمحامين
              </ButtonLink>
            </Stack>
          </Box>
        )}
      </Container>

      <FooterDivider />

      <CopyRight>shwra © 2020 All Right Reserved</CopyRight>
    </RootStyle>
  );
}