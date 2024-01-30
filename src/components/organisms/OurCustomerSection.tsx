import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
// bootstrap
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';
// atoms
import Section from '../atoms/Section';
import SectionTitle from '../atoms/SectionTitle';


export default function OurCustomerSection() {
    return (
    <Section 
        style={{
                backgroundColor: 'var(--bg-light-gray)',
                height: "auto",
                width: "100%",
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '11rem 0px'
        }}
    >

        <SectionTitle
            title="اسال عملائنا"
            style={{
                marginBottom: '6rem !important',
            }}
        />

        <Container style={{ textAlign: 'center' }}>
            <Row className='align-items-center'>
               <Col xs={6} sm={6} md={2}>
                    <StaticImage
                        className="img-fluid"
                        src="./../../images/customer/customer-1.png"
                        alt="google"
                        placeholder="blurred"
                    />
                </Col>
                <Col xs={6} sm={6} md={2}>
                    <StaticImage
                        className="img-fluid"
                        src="./../../images/customer/customer-2.png"
                        alt="google"
                        placeholder="blurred"
                    />
                </Col>
                <Col xs={6} sm={6} md={2}>
                    <StaticImage
                        className="img-fluid"
                        src="./../../images/customer/customer-3.png"
                        alt="google"
                        placeholder="blurred"
                    />
                </Col>
                <Col xs={6} sm={6} md={2}>
                    <StaticImage
                        className="img-fluid"
                        src="./../../images/customer/customer-4.png"
                        alt="google"
                        placeholder="blurred"
                    />
                </Col>
                <Col xs={6} sm={6} md={2}>
                    <StaticImage
                        className="img-fluid"
                        src="./../../images/customer/customer-5.jpeg"
                        alt="google"
                        placeholder="blurred"
                    />
                </Col>
                <Col xs={6} sm={6} md={2}>
                    <StaticImage
                        className="img-fluid spot-logo"
                        src="./../../images/customer/customer-6.jpeg"
                        alt="google"
                        placeholder="blurred"
                    />
                </Col>
            </Row>

        </Container>

    </Section>
    );
}
