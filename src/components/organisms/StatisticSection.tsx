import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
// bootstrap
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';
// atoms
import Box from '../atoms/Box';
import Typography from '../atoms/Typography';
import Counter from '../atoms/Counter';

export default function StatisticSection() {
    return (
        <section className="motivation-division">
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
             textAlign: 'center',
             width: '70%',
          }}
        >
            <Row>

            <Col>
                    <Box>
                        <StaticImage
                            className="img-fluid"
                            src="./../../images/statistic/team.svg"
                            alt="google"
                            placeholder="blurred"
                            height={50}
                        />
                    </Box>
                        <Counter 
                            number={16}
                        />
                    <Typography
                        variant="h5"
                        align="center"
                        gutterBottom
                        paragraph
                        style={{
                            color: "white",
                        }}
                    >
                       اعضاء الفريق
                    </Typography>

                </Col>
                <Col>
                    <Box>
                        <StaticImage
                            className="img-fluid"
                            src="./../../images/statistic/target.svg"
                            alt="google"
                            placeholder="blurred"
                            height={50}
                        />
                    </Box>
                    <Counter 
                    number={5000}
                    plusIcon={true}
                    />
                    <Typography
                        variant="h5"
                        align="center"
                        gutterBottom
                        paragraph
                        style={{
                            color: "white",
                        }}
                    >
                      استشارات
                    </Typography>
                </Col>
                <Col>
                    <Box>
                        <StaticImage
                            className="img-fluid"
                            src="./../../images/statistic/project.svg"
                            alt="google"
                            placeholder="blurred"
                            height={50}
                        />
                    </Box>
                    <Counter 
                    number={1500}
                    plusIcon={true}
                    />
                    <Typography
                        variant="h5"
                        align="center"
                        gutterBottom
                        paragraph
                        style={{
                            color: "white",
                        }}
                    >
                       وكالة من عميل
                    </Typography>
                </Col>
            </Row>
       </Container>
    </section>
    );
}
