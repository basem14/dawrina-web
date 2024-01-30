import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
// bootstrap
import { Container, Row, Col } from "react-bootstrap";
// atoms
import Box from "../atoms/Box";
import Typography from "../atoms/Typography";
import Counter from "../atoms/Counter";
import useMediaQuery from "../../hooks/useMediaQuery";
export default function HomeStaticSections({heading}:{heading?: any}) {
  const { isMobile } = useMediaQuery();

  return (
    <section className="motivation-division home">
      <StaticImage
        src="./../../images/statistic/lawyer.jpg"
        alt="google"
        placeholder="blurred"
        layout="fullWidth"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          filter: "opacity(0.3)",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <Container
        style={{
          textAlign: "center",
          //   width: "70%",
        }}
      >
        {heading && heading}
        <Row>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              height: "120px",
            }}
          >
            <Box
              style={{
                width: isMobile ? 40 : "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
              }}
            >
              <StaticImage
                className="img-fluid"
                src="./../../images/statistic/team.svg"
                alt="google"
                placeholder="blurred"
                height={50}
              />
            </Box>
            <Counter
              number={"12+"}
              style={{
                fontSize: isMobile ? "25px" : "auto",
              }}
            />
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              paragraph
              style={{
                color: "white",
                fontSize: isMobile ? "12px" : "auto",
                whiteSpace: isMobile ? "nowrap" : "normal",
              }}
            >
              تخصص قانوني
            </Typography>
          </Col>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              height: "120px",
            }}
          >
            <Box
              style={{
                width: isMobile ? 40 : "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
              }}
            >
              <StaticImage
                className="img-fluid"
                src="./../../images/statistic/target.svg"
                alt="google"
                placeholder="blurred"
                height={50}
              />
            </Box>
            <Counter
              number={"20k+"}
              plusIcon={false}
              style={{
                fontSize: isMobile ? "25px" : "auto",
              }}
            />
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              paragraph
              style={{
                color: "white",
                fontSize: isMobile ? "12px" : "auto",
                whiteSpace: isMobile ? "nowrap" : "normal",
              }}
            >
              مستخدم نشط
            </Typography>
          </Col>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              height: "120px",
            }}
          >
            <Box
              style={{
                width: isMobile ? 35 : "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
              }}
            >
              <StaticImage
                className="img-fluid"
                src="./../../images/statistic/project.svg"
                alt="google"
                placeholder="blurred"
                height={50}
              />
            </Box>
            <Counter
              number={"1,500+"}
              plusIcon={false}
              style={{
                fontSize: isMobile ? "25px" : "auto",
              }}
            />
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              paragraph
              style={{
                color: "white",
                fontSize: isMobile ? "12px" : "auto",
                whiteSpace: isMobile ? "nowrap" : "normal",
              }}
            >
              استشارة في عام ٢٠٢٢
            </Typography>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
