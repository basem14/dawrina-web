import React from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import Box from "../../atoms/Box";
import { Logo } from "../../atoms/Logo";
import Typography from "../../atoms/Typography";
import { StaticImage } from "gatsby-plugin-image";
import { Stack } from "react-bootstrap";
import findOperatingSystem from "../../../hooks/findOperatingSystem";


const FooterMobile = () => {
  const SocialIcon = styled(Icon)`
    width: 25px;
    height:25px;
    color: var(--primary-color);
    &:hover {
      color: var(--secondary-color);
    }
  `;

  const Copyright = styled.span`

  color: var(--primary-color);
  font-family: Arial, Helvetica, sans-serif;
font-size:1.1rem;
font-weight:normal;
`;

const FooterDivider = styled.div`
  opacity: 1;
  width:100%;
  border:.5px solid #F6EBD3;
`;

const ImageLink = styled.a`
  width: 220px;
  height: 50px;
  transition: all 250ms;
  background: #07242e;
  border-radius: 6px;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
gap:0;
  &:hover {
    box-shadow: 1px 1px 5px 1px black;
  }
  @media (max-width:300px)
  {
    width:95% !important;
  }
`;


const ButtonContainer = [
  { dbBtn : <ImageLink
  href="https://play.google.com/store/apps/details?id=sa.shwra.app"
  target="_blank"
  rel="noopener noreferrer"
>
  <StaticImage
    src="../../../images/general/google-play-4@3x.png"
    alt="app-image"
    placeholder="blurred"
    objectFit="contain"
    style={{width:'60%',height:'90%'}}/>

</ImageLink> },
{  dbBtn :  <ImageLink
  href="https://apps.apple.com/sa/app/shwra-%D8%B4%D9%88%D8%B1%D9%89/id1550113344"
  target="_blank"
  rel="noopener noreferrer"
>


  <StaticImage
    src="../../../images/general/Apple_St.png"
   alt='logo' 
   placeholder='blurred'
   objectFit='contain'
   style={{width:'80%',height:'90%'}}/>

</ImageLink>}
, 
{ dbBtn : <ImageLink
  href="https://appgallery.huawei.com/app/C106460597"
  target="_blank"
  rel="noopener noreferrer"
>
  <StaticImage
    src="../../../images/general/huawei-appgallery-black.png" 
    alt="app-image"
    placeholder="blurred"
   objectFit='contain' 
    style={{width:'90%',marginTop:'5px'}}/>
</ImageLink>}

]

const {DeviceType} = findOperatingSystem();

  return (
    <div  dir="rtl" className="Footer-Container">
     
<div className="Footer-SubContainer">
      <div className="Footer-Logo">
        <StaticImage
          src="../../../images/Mobile/logo@3x.png"
          alt="logo"
          placeholder="blurred"
          width={50}
          height={50}
        />
        <div style={{background:'#D7B674'}} className="vr"></div>
        <Typography
          variant="h5"
          className="text-center"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "var(--primary-color)",
          }}
        >
          على يمناك
        </Typography>
      </div>

      <div className="Footer-Links">
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
 </div>

 <div style={{ marginTop:'15px' }}>
   <Typography style={{ fontWeight:'500',fontSize:'1.3rem',color:'var(--text-dark)',display:'inline' }}  variant="p">
   شورى هي منصة إلكترونية تعنى بالوساطه لتقديم الاستشارات والخدمات القانونية من خلال ربط نخبة من المحامين المرخصين من وزارة العدل السعودية مع طالبي الخدمات القانونية، وهي منصه مرخصه بموجب سجل تجاري رقم
   </Typography>
   <Typography variant="p" style={{marginRight:'4px', fontWeight:'500',fontSize:'1.3rem',color:'var(--text-dark)',display:'inline'}}>
     4650222665   
   </Typography>
   
 </div>
 
 <Stack
              gap={5}
              direction="horizontal"
              className={`d-flex justify-content-center align-items-center my-3`
              }
            >
     

     <div
        
        style={{
         
          cursor: 'pointer',
          textDecoration: 'underline',
        }}
        onClick={() => window.location.href = 'mailto:info@shwra.sa'}
      >

        <Typography
          variant="h5"
          style={{
              margin:10
            }}
            >
          info@shwra.sa
          <Icon
            fontSize={'1.5rem'}
            icon="basil:envelope-outline"
            className="align-self-start"
            color="#cc9a28"
            />
        </Typography>
            </div> 
              <div
        className="d-flex justify-content-center align-items-center"
        style={{
          padding: 8,
          cursor: 'pointer',
          textDecoration: 'underline',
        }}
        onClick={() => window.location.href = 'tel:920033635'}
      >
        <Typography variant="h5">
          920033635
        </Typography>
        <Icon
          icon="ph:phone-light"
          fontSize={'2.5rem'}
          className="me-3 align-self-start"
          color="#cc9a28"
        />
      </div>

            </Stack>
{
   DeviceType !== -1 &&
<Stack className='justify-content-center align-items-center mt-3 mb-5'>
        {ButtonContainer[DeviceType].dbBtn} 
</Stack>
}
 <div className="Footer-SubContainer2">

    <FooterDivider/>

<Copyright  className="my-auto">Shwra © 2020 All Right Reserved</Copyright>

 </div>

    </div>
  );
};

export default FooterMobile;
