import * as React from 'react';
import { Icon } from '@iconify/react';
import {  StaticImage } from 'gatsby-plugin-image';
// react-bootstrap
import { Container, Row, Col, Stack } from 'react-bootstrap';
import Section from '../atoms/Section';


export default function ContactUsSection() {
    return (
     <Section 
        className="motivation-division"
        id="contact-us"
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
     >

      {/* backgroun image */ }
      <StaticImage
         src="./../../images/contact/clarisse-meyer-jKU2NneZAbI-unsplash.jpg"
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


        {/* contact us section */ }
        <Stack gap={4} style={{ display: 'contents' }}>
            <h2 className="question mb-3 text-center">هل تبحث عن استشارة؟</h2>

            <Stack 
              gap={3}
              direction="horizontal"
              style={{
                justifyContent: 'center',
                marginBottom: 17,
                marginTop: 17,
              }}
            >

                <div>
                  info@shwra.sa  {"  "}
                  <Icon icon="dashicons:email"  className='m-1' color="#cc9a28" />
                </div>

                <div>
                  920033635 {"  "}
                  <Icon icon="carbon:phone-filled"   className='m-1' color="#cc9a28" />
                </div>

            </Stack>

            <button type="button" className="btn btn-secondary btn-lg px-7">تواصل معنا</button>
        </Stack>


      </Section>
    );
}
