// import React from 'react';
// import { useInView } from "react-intersection-observer";
// import { motion } from "framer-motion";
// import styled from "styled-components";
// import Section  from "../atoms/Section"
// import Typography from "../atoms/Typography";
// import Box from "../atoms/Box";
// import StoreLinkGroup from "../molecules/StoreLinkGroup";
// import SocialLinkGroup from "../molecules/SocialLinkGroup";
// import {
//   Container,
//   Row,
//   Col,
// } from "react-bootstrap";
// import HeroSectionBase from "../atoms/HeroSectionBase";

// export default function HeroSection({
//   description,
// }: {
//   description?: string;
// }) {
//     return (
// <HeroSectionBase>
//       <Container
//         style={{
//           position: 'relative',
//           zIndex: 1,
//           paddingTop: '10rem',
//         }}
//       >
//         <Row>
//           <Col
//             xs={12}
//             md={6}
//             lg={6}
//           >

//             <Box
//               className="text-end"
//               style={{
//                 padding: "2rem",
//                 marginTop: "5rem",
//                 marginBottom: "5rem",
//               }}
//             >
//                 <Typography
//                     variant="h1"
//                     align="left"
//                     //color="primary"
//                     gutterBottom
//                     paragraph
//                     style={{
//                       color: "white",
//                       fontSize: "4rem",
//                       fontWeight: "bold",
//                       lineHeight: "1.5",
//                     }}
//                   >
//                       دليلك الاول
//                   </Typography>

//                   <Typography
//                     variant="h1"
//                     align="left"
//                   // color="secondary"
//                     gutterBottom
//                     paragraph
//                     style={{
//                       color: "var(--secondary-color)",
//                       fontSize: "4rem",
//                       fontWeight: "bold",
//                       lineHeight: "1.5",
//                     }}  
//                   >
//                         للاستشارات القانونية
//                   </Typography>


//                   <Typography
//                     variant="p"
//                     align="left"
//                     //color="primary"
//                     gutterBottom
//                     paragraph
//                     style={{
//                       color: "white",
//                       lineHeight: "1.5",
//                     }}
//                   >
//                     {description ||
//                     "شورى هي منصة رقمية تعنى بتقديم الاستشارات والخدمات القانونية عن بعد في المملكة العربية السعودية من خلال ربط العملاء طالبي الاستشارات القانونية، مع نخبة من المحامين المعتمدين والمحترفين بطريقة تفاعلية، سهلة وآمنة ومهنية واستناداً إلى القوانين مع الحفاظ على سرية وخصوصية بيانات العملاء. وتتضمن الاستشارات القانونية عدة مجالات منها: مجالات الأحوال الشخصية، والخلافات العمالية، والقضاء التجاري لكل من الافراد والمؤسسات وشركات القطاع العام والخاص ومنها الشركات الناشئة والمتوسطة والصغيرة."}
//                 </Typography>


//                  <Box
//                   className="mt-5 mb-5"
//                  >
//                    <StoreLinkGroup />
//                  </Box>


//             </Box>
//           </Col>


//           <Col
//             xs={12}
//             md={6}
//             lg={6}
//           >
//             <img
//                 src="./../../images/general/hero-image-2.png"
//                 alt="app-image"
//                 placeholder="blurred"
//             />
//           </Col>

//         </Row>

//       </Container>

//       <Box style={{
//         position: "absolute",
//         bottom: '10vh',
//         left: 95,
//         zIndex: 1,
//       }}>
//        <SocialLinkGroup />
//       </Box>

//     </HeroSectionBase>
//     );
// }






















/*

      <HeroSectionWarrp
        id="home"
        className="hero-section section bg-cover bg-center bg-no-repeat"
      >
        <StaticImage
         src="./../../images/general/background.jpg"
         alt="google"
         placeholder="blurred"
         layout="fullWidth"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            filter: "blur(5px)",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
       />

      <Container className="container">

        <Row>
          <Col xs={12} md={6} lg={6}>
            <Box
              className="text-end"
              style={{
                padding: "2rem",
                marginTop: "5rem",
                marginBottom: "5rem",
              }}
            >
                <Typography
                    variant="h1"
                    align="left"
                    //color="primary"
                    gutterBottom
                    paragraph
                    style={{
                      color: "white",
                      fontSize: "4rem",
                      fontWeight: "bold",
                      lineHeight: "1.5",
                    }}
                  >
                      دليلك الاول
                  </Typography>

                  <Typography
                    variant="h1"
                    align="left"
                  // color="secondary"
                    gutterBottom
                    paragraph
                    style={{
                      color: "var(--secondary-color)",
                      fontSize: "4rem",
                      fontWeight: "bold",
                      lineHeight: "1.5",
                    }}  
                  >
                        للاستشارات القانونية
                  </Typography>


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
                  شورى هي منصة رقمية تعنى بتقديم الاستشارات والخدمات القانونية عن بعد في المملكة العربية السعودية من خلال ربط العملاء طالبي الاستشارات القانونية، مع نخبة من المحامين المعتمدين والمحترفين بطريقة تفاعلية، سهلة وآمنة ومهنية واستناداً إلى القوانين مع الحفاظ على سرية وخصوصية بيانات العملاء. وتتضمن الاستشارات القانونية عدة مجالات منها: مجالات الأحوال الشخصية، والخلافات العمالية، والقضاء التجاري لكل من الافراد والمؤسسات وشركات القطاع العام والخاص ومنها الشركات الناشئة والمتوسطة والصغيرة.
                  </Typography>


                 <Box
                  className="mt-5 mb-5"
                 >
                   <StoreLinkGroup />
                 </Box>



            </Box>






          </Col>

          <Col xs={12} md={6} lg={6}>
            <StaticImage
                  src="./../../images/general/hero-image.png"
                  alt="app-image"
                  placeholder="blurred"
                  layout="fixed"
                  width={500}
                  height={500}
              />
          </Col>
        </Row>

      </Container>


      <Box style={{
        position: "absolute",
        bottom: '10vh',
        left: 0,
      }}>
       <SocialLinkGroup />
      </Box>


      </HeroSectionWarrp>














import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components";
//
import Section  from "../atoms/Section"
import Typography from "../atoms/Typography";


const HeroSectionWarrp = styled(Section)`
  
`


export default function HeroSection() {
    return (
      <HeroSectionWarrp
        id="hero-section"
        className="hero-section section bg-cover bg-center bg-no-repeat"
      >
        <StaticImage
         src="./../../images/general/background.jpg"
         alt="google"
         placeholder="blurred"
         layout="fullWidth"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            filter: "blur(5px)",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
       />


       <div className="container-fluid">

        <div className="section-content row">
          <div className="right-section col-md-6 col-sm-12">
            <Typography
              variant="h1"
              align="left"
              //color="primary"
              gutterBottom
              paragraph
              style={{
                color: "white",
              }}
            >
                 دليلك الاول
            </Typography>

            <Typography
              variant="h1"
              align="left"
             // color="secondary"
              gutterBottom
              paragraph
              style={{
                color: "var(--secondary-color)",
              }}  
            >
                   للاستشارات القانونية
            </Typography>


            <Typography
              variant="p"
              align="left"
              //color="primary"
              gutterBottom
              paragraph
              style={{
                color: "white",
              }}
            >
            شورى هي منصة رقمية تعنى بتقديم الاستشارات والخدمات القانونية عن بعد في المملكة العربية السعودية من خلال ربط العملاء طالبي الاستشارات القانونية، مع نخبة من المحامين المعتمدين والمحترفين بطريقة تفاعلية، سهلة وآمنة ومهنية واستناداً إلى القوانين مع الحفاظ على سرية وخصوصية بيانات العملاء. وتتضمن الاستشارات القانونية عدة مجالات منها: مجالات الأحوال الشخصية، والخلافات العمالية، والقضاء التجاري لكل من الافراد والمؤسسات وشركات القطاع العام والخاص ومنها الشركات الناشئة والمتوسطة والصغيرة.
            </Typography>




            <div className="d-flex mt-4 android-apple">
              <button 
               type="button"
               className="btn btn-light btn-lg ms-4"
               style={{
                 width: "100%",
                 height: "100%",
               }}
               >
                  <StaticImage
                      src="./../../images/general/google-play.png"
                      alt="google"
                      placeholder="blurred"
                      //layout="fixed"
                      //width={200}
                      //height={50}
                  />
              </button>
              <button type="button" className="btn btn-light btn-lg ml-4">
                <img src="images/general/apple.svg" alt="apple" />
              </button>
            </div>
          </div>



          <div className="left-section col-md-6 col-sm-12">

            <StaticImage
                src="./../../images/general/hero-image.png"
                alt="app-image"
                placeholder="blurred"
                layout="fixed"
                width={500}
                height={500}
            />

            <div className="socialMedia-links">
              <a href="https://twitter.com/shwraApp"><i className="fa fa-twitter" /></a> 
              <a href="https://www.instagram.com/shwraapp">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/company/shwraapp">
                <i className="fa fa-linkedin" />
              </a>
            </div>



          </div>




        </div>

        </div>
      </HeroSectionWarrp>
    );
}
*/