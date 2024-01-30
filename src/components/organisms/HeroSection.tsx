import React, { ReactNode, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Media } from "../atoms/Media";
import useMediaQuery from "../../hooks/useMediaQuery";
import Typography from "../atoms/Typography";
import Box from "../atoms/Box";
// react-bootstrap
import { Container, Row, Col, Stack } from "react-bootstrap";
// atoms
import HeroSectionBase from "../atoms/HeroSectionBase";
import findOperatingSystem from "../../hooks/findOperatingSystem";
import HomeHeadingUnderLine from "../atoms/HomeHeadingUnderLine";


const HeroContainer = styled(Container)`
  position: relative;
  z-index: 1;
  padding-top: 10rem;
  width:95% !important;
display:flex;
flex-direction:column;
margin-top:3rem;



  @media (min-width: 768px) {
    flex-direction:row;
  margin-bottom:0 !important;

  }
  @media (min-width: 1250px) {
    margin:4rem  auto;
    width:85% !important;
    
  }
`;

// color from props
const HeroTitle = styled(Typography)`
  color: ${(props) => props.color};
  font-size: 6rem !important;
  font-weight:bold
  line-height: 1.5;

  
  @media (max-width:1500px)
  {
    font-size: 5rem !important;
  }

  @media (max-width:1240px)
  {
    font-size: 3.7rem !important;
    
  }

  @media (max-width: 500px) {
    font-size: 30px !important;
  }
`;

const HeroContent = styled(Box)`
  
`;
const ImageLink = styled.a`
width: 20rem;
height:5rem;
transition: all 250ms;
background: #07242E;
border:2px solid #07242E;
border-radius: 12px;
padding: .5rem 2rem;
display:flex;
justify-content:center;
align-items:center;
&:hover {
box-shadow:0 0 7px 3px rgba(0,0,0,0.9)
}
`
const StoresContainerStyle = {
  margin: '4rem 0 6.3rem 0',
   display: 'flex',
    gap: "20px"
}

const ButtonContainer = [
  {
    dbBtn: <ImageLink
      href="https://play.google.com/store/apps/details?id=sa.shwra.app"
      target="_blank"
      rel="noopener noreferrer"
      className='mt-4 mt-md-0'>
      <StaticImage
        src="../images/general/google-play-4@3x.png"
        alt="app-image"
        placeholder="blurred"
        objectFit="contain"
        style={{ width: '60%', height: '90%' }} />

    </ImageLink>
  },
  {
    dbBtn: <ImageLink
      href="https://apps.apple.com/sa/app/shwra-%D8%B4%D9%88%D8%B1%D9%89/id1550113344"
      target="_blank"
      rel="noopener noreferrer"
      className='my-5 my-md-0'
    >

      <Stack className='justify-content-center align-items-end '>
        <span style={{ fontSize: '1rem' }}>Available on</span>
        <span style={{ fontSize: '1.3rem', marginTop: -3 }} className='fw-bolder'>App Store</span>
      </Stack>

      <StaticImage
        src='../images/Mobile/icon@3x.png'
        alt='logo'
        placeholder='blurred'
        objectFit='contain'
        className='ms-4 ms-md-0'
        style={{ width: '30%', height: '90%' }} />

    </ImageLink>
  }
  ,
  {
    dbBtn: <ImageLink
      href="https://appgallery.huawei.com/app/C106460597"
      target="_blank"
      rel="noopener noreferrer"
    >
      <StaticImage
        src="../images/general/huawei-appgallery-black.png"
        alt="app-image"
        placeholder="blurred"
        style={{ width: '80%', height: '90%' }} />
    </ImageLink>
  }

]

export default function HeroSection({
  description,
  heroImage,
  collapse
}: {
  description?: string;
  heroImage?: any;
  collapse?: boolean
}) {
  const { isMobile } = useMediaQuery();
  const { DeviceType } = findOperatingSystem()

  const [hide, setHide] = useState(false)

  return (
    <HeroSectionBase id="home" className="aspect-[2/4]">

      <HeroContainer fluid>

        <Col md={6} className="hero-section-Right ">
          <HeroContent className="hero-section-Text">

            <HeroTitle
              variant="h1"
              align="left"
              color="var(--text-dark)"
              gutterBottom
              paragraph
              className="fw-bold"
            >
              وجهتك الأولى
            </HeroTitle>

            <HeroTitle
              variant="h1"
              align="left"
              color="var(--tertiary-color)"
              gutterBottom
              paragraph
              className="fw-bold"
            >
              للخدمات القانونية

            </HeroTitle>
            <div className='d-flex'>
              <Typography variant="p"
                className="fw-bold ">
                {!hide ?
                  "شورى هي منصة رقمية تعنى بتقديم الاستشارات والخدمات القانونية عن بعد في جميع مناطق المملكة العربية السعودية من خلال ربط العملاء طالبي الاستشارات والخدمات القانونية، مع نخبة من المحامين المرخصين من وزارة العدل السعودية بطريقة تفاعلية، سهلة وآمنة ومهنية واستناداً إلى القوانين مع الحفاظ على سرية وخصوصية بيانات العميل."
                  : ' شورى هي منصة رقمية تعنى بتقديم الاستشارات والخدمات القانونية   ..... '}
                <span onClick={() => setHide(!hide)}
                  className='fs-5 mx-3'
                  style={{ cursor: 'pointer', color: 'var(--tertiary-color)' }}>
                  اعرف المزيد {"  >  "}
                </span>

              </Typography>
            </div>
            <Media style={{ margin: '-9rem 0 -2rem -4rem' }} greaterThan='sm'>
              <HomeHeadingUnderLine title=' حمل التطبيق واحصل على خدمتك القانونية' />
            </Media>
            <Media style={{ margin: '-9rem 0 -6rem -4rem' }} at='sm'>
              <HomeHeadingUnderLine title=' حمل التطبيق واحصل على خدمتك القانونية' />
            </Media>

            <div style={StoresContainerStyle}>
              {DeviceType === -1 ?
                ButtonContainer.map((i, a) => {
                  return (
                    <>
                      {i.dbBtn}
                    </>
                  )
                })
                : ButtonContainer[DeviceType].dbBtn
              }
            </div>

          </HeroContent>
        </Col>




        <Col md={6}>
          <div className="hero-section-image-Container">
            {heroImage ?
              heroImage :
              <StaticImage
                src="./../../images/general/hero/Rectangle 27813@2x.png"
                alt="app-image"
                placeholder="blurred"
                objectFit="contain"
                style={{
                  width: '100%',
                }}
              />
            }
            <div className='HeroSection-Abs-Payment-Images'>
              <Stack>
                <StaticImage
                  src="../../images/Payment/_W036@2x.png"
                  alt='logo'
                  placeholder="blurred"
                  objectFit="contain"
                  style={{
                    width: '15px',
                    height: '15px'
                  }}
                />



                <StaticImage
                  src="../../images/Payment/Down2x.png"
                  alt='logo'
                  placeholder="blurred"
                  objectFit="contain"
                  style={{
                    width: '25px',
                    height: '25px',
                  }}
                />

                <StaticImage
                  src="../../images/Payment/Mastercard@2x.png"
                  alt='logo'
                  placeholder="blurred"
                  objectFit="contain"
                  style={{
                    width: '30px',
                    height: '30px'
                  }}
                />


                <StaticImage
                  src="../../images/Payment/Visa@2x.png"
                  alt='logo'
                  placeholder="blurred"
                  objectFit="contain"
                  style={{
                    width: '25px',
                    height: '25px'
                  }}
                />

                <StaticImage
                  src="../../images/Payment/ApplePay2x.png"
                  alt='logo'
                  placeholder="blurred"
                  objectFit="contain"
                  style={{
                    width: '25px',
                    height: '25px',
                  }}
                />
                <StaticImage
                  src="../../images/Payment/MadaLogo@2x.png"
                  alt='logo'
                  placeholder="blurred"
                  objectFit="contain"
                  style={{
                    width: '30px',
                    height: '30px'
                  }}
                />
              </Stack>
            </div>
          </div>
        </Col>

      </HeroContainer>
    </HeroSectionBase>
  );
}

