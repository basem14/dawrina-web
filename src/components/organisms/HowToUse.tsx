import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
//
import useMediaQuery from '../../hooks/useMediaQuery';
// atom
import Section  from "../atoms/Section"
import SectionTitle from "../atoms/SectionTitle"
import { Media } from "../atoms/Media"
// react-bootstrap
import {
  Container,
  Row,
  Col,
  Stack
} from 'react-bootstrap'


const HowToUseTitle = styled.h1`
    color: rgb(23, 48, 57);
    margin-top: 8rem;
    margin-bottom: 4rem;
    font-weight: bolder;
    font-size: 2.5rem;
    text-align: right;  
`



const HowToUseStep = styled.h3`
  font-size: 1.5rem;
  /*font-weight: bold;*/
  margin-bottom: 5rem;
  position: relative;
  font-size: 1.5rem;
  padding-top: 6rem;
  
  &:before {
      counter-increment: usage-counter;
      content: ". " counter(usage-counter, decimal-leading-zero);
      position: absolute;
      top: 0;
      color: var(--secondary-color);
      font-size: 4rem;
      letter-spacing: -0.2rem;
  }
`


const ImageLink = styled.a`
  width: 32%;
  transition: all 250ms;
  background:  var(--primary-color);
  border-radius: 6px;
  /*height: 53px;*/

  &:hover {
    background-image: linear-gradient( to bottom right, rgba(255, 255, 255, 0) 0%, rgba(128, 128, 128, 0.2) 100% );
    background-color: transparent;
    filter: invert(0.9);
  }
  @media (max-width: 768px) {
    width: auto;
   /* height: 53px;*/
  }
`



const ContentCol = styled(Col)`
  @media (max-width: 768px) {
    margin-top: 5rem !important;
  }
`

const ImageCol = styled(Col)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: -1;
  width: 100%;
  max-width: 655px;
  padding: 0;

  @media (max-width: 768px) {
    left: -210px;
    width: 100%;
    max-width: 50%;
  }


`





export default function HowToUse() {

  const { isMobile, isDesktop } = useMediaQuery()

    return (
      <Section
        id="usage" 
        className="usage-section"
        style={{
          position: "relative",
        }}
      >

      <Container >
        <Row
          style={{
            padding: 0
          }}
        >
        
          <ContentCol xs={12} md={7}>

             <HowToUseTitle>
               كيفية الاستخدام
             </HowToUseTitle>

              <Row>
                <Col xs={6} md={4}>
                {/*
                 <h4 className="usage-item">
                   تحميل التطبيق
                 </h4>
              */}

                  <HowToUseStep>
                    تحميل التطبيق
                  </HowToUseStep>
                </Col>

                <Col xs={6} md={4}>
                  <HowToUseStep>
                     اختيار أحد التصنيفات 
                  </HowToUseStep>
                </Col>
              </Row>



              <Row>
                <Col xs={6} md={4}>
                  <HowToUseStep>
                    تحديد موعد الاستشارة المناسب لك لكي يتم الاتصال من قبل المحامي المختص
                  </HowToUseStep>
                </Col>

                <Col xs={6} md={4}>
                  <HowToUseStep>
                    ارفاق الملفات التي تدعم طلب الاستشارة
                  </HowToUseStep>
                </Col>
              </Row>



              <Row>
                <Col xs={6} md={4}>
                  <HowToUseStep>
                   القيام بعملية الدفع لقيمة الاستشارة 
                  </HowToUseStep>
                </Col>

                <Col xs={6} md={4}>
                  <HowToUseStep>
                     تأكيد الخدمة
                  </HowToUseStep>
                </Col>
                <Col xs={6} md={4}>
                  <HowToUseStep>
                    قم بتقييم مستوى الخدمة في نهاية الاستشارة
                  </HowToUseStep>
                </Col>

                <Col 
                  xs={6}
                  md={4}
                  className="d-flex justify-content-center align-items-center"
                >
                <Media 
                 at="sm"
                 style={{
                  display: "flex",
                  position: "relative"
                 }}
                >

                     <div 
                        className="vr" 
                        style={{
                          color: 'black',
                          width: '2px',
                          height: '67px',
                          display: 'block',
                          position: 'absolute',
                          right: '-33px'
                        }}
                      />
 
                    <div
                      style={{
                        textAlign: 'center',
                        justifyContent: 'center',
                        width: '100%'
                      }}
                    >
                      
                        <h4
                          style={{
                            padding: '19px 0'
                          }}
                        >
                        حمل التطبيق من هنا 
                        </h4>

                        <Icon
                          icon="bytesize:arrow-bottom" 
                          style={{
                            fontSize: "2rem",
                          }}
                        />

                    </div>
                    </Media>
                </Col>


              </Row>


            <Media greaterThan="sm"> <hr /> </Media>


            <Stack gap={3} direction="horizontal">

            <Media greaterThan="sm">         
                <div className='download-msg'> 
                  حمل التطبيق من هنا  {'  '}

                  <Icon icon="akar-icons:arrow-left" />
                </div>
            </Media>    
            <ImageLink className="mt-5 mb-5" 
                href="https://appgallery.huawei.com/app/C106460597"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  height:'50px',
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center'
                }}
              >
                  <StaticImage
                            src="./../../images/general/huawei-appgallery-black.png"
                            alt="app-image"
                            placeholder="blurred"
                  />
              </ImageLink>

            <ImageLink className="mt-5 mb-5" 
            style={{
              height:'50px',
              display:'flex',
              alignItems:'center',
              justifyContent:'center'
            }}
                href="https://apps.apple.com/sa/app/shwra-%D8%B4%D9%88%D8%B1%D9%89/id1550113344"
                target="_blank"
                rel="noopener noreferrer"
              >
                  <StaticImage
                            src="./../../images/general/apple.svg"
                            alt="app-image"
                            placeholder="blurred"
                            className="apple-store"
                  />
              </ImageLink>

              <ImageLink className="mt-5 mb-5" 
              style={{
                height:'50px',
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
              }}
                href="https://play.google.com/store/apps/details?id=sa.shwra.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                  <StaticImage
                            src="./../../images/general/google-play.trans.svg"
                            alt="app-image"
                            placeholder="blurred"
                  />
              </ImageLink>
              

            </Stack>

          </ContentCol>
          

          <ImageCol 
            xs={12} 
            md={6}
          >
                <StaticImage
                      src="./../../images/general/how-to.png"
                      alt="google"
                      placeholder="blurred"
                  />
          </ImageCol>




      </Row>



      <Media at="sm">  <hr /> </Media>

    </Container>
      </Section>
    );
}
