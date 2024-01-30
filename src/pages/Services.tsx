import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Row, Stack,Container, Col } from "react-bootstrap";
import styled from "styled-components";
import HeadingUnderLine from "../components/atoms/HeadingUnderLine";
import { Media } from "../components/atoms/Media";
import MobileNavigator from "../components/atoms/MobileNavigator";
import ThemeButton from "../components/atoms/ThemeButton";
import FooterMobile from "../components/MobileViewComponents/Footer/FooterMobile";
import ServiceCard from "../components/MobileViewComponents/Services/SubComponents/ServiceCard";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";
import ToolBarSection from "../components/organisms/ToolBarSection";
import WhatsappButton from "../components/atoms/WhatsappButton";
import MobileToolBarSection from "../components/MobileViewComponents/Toolbar/ToolbarMobile";
const ServicesData = [
  {
    value: "consulting",
    label: "الاستشارات القانونية",
    Image: (
      <StaticImage
        src={"../images/Mobile/ServicesMobile/Group 14341.png"}
        alt={"الاستشارات القانونية"}
        placeholder="blurred"
        className="h-50 w-50"
        objectFit="contain"
      />
    ),
    description: "الاستشارة القانونية هي الاستعانة بمتخصصين في مجال القانون للحصول على الرأي القانوني الصحيح لموضوع ما قد يكون محل نزاع وقد يكون غير ذلك، حيث يوضح المحامي الحل المناسب والتصرف السليم قانونًا لهذا الوضع.",
    subDescription: "الاستشارة القانونية هي الاستعانة بمتخصصين في مجال القانون للحصول على الرأي القانوني الصحيح ......"
  },
  {
    value: "contract",
    label: "العقود",
    Image: (
      <StaticImage
        src={"../images/Mobile/ServicesMobile/Group 14299.png"}
        alt={" العقود"}
        placeholder="blurred"
        className="h-50 w-50"
        objectFit="contain"
      />
    ),
    description: "يعد العقد شريعة المتعاقدين، وهو حجر الأساس لضمان الحقوق والواجبات المشروعة بين العديد من الجهات وكذلك بين أفراد المجتمع، ولذلك فإن الاهتمام بصياغة العقود بالشكل القانوني الصحيح يُجنب جميع الأطراف اللجوء للنزاعات القضائية بمختلف أنواعها، وهنا يجب الرجوع لخبراء صياغة العقود المتمرسين الذين هم على دراية كاملة بالقواعد القانونية،",
    subDescription: "العقود هي اتّفاق مُلزم قانونياً بين طرفين أو أكثر، وقد يكون شفهيّاً أو مكتوباً، وهو عِبارة عن مجموعةٍ ........"
  },
  {
    value: "nots",
    label: "المذكرات",
    Image: (
      <StaticImage
        src={"../images/Mobile/ServicesMobile/Group 14281.png"}
        alt={" المذكرات"}
        placeholder="blurred"
        className="h-50 w-50"
        objectFit="contain"
      />
    ),

    description: "المذكرة القانونية هي عبارة عن مستند قانوني يقدم إلى الجهة ذات الاختصاص سواءً كان للدائرة ناظرة الدعوى أو محكمة الاستئناف أو الى المحكمة العليا، حيث تتضمن هذه المذكرات وقائع القضية موثقة بالأدلة والبراهين مع تواريخها، وعلاوةً على الوقائع فهناك الدفوع الشكلي والموضوعي الخاص بها الصادر من محامي المدعي أو المدعى عليه.",
    subDescription: "المذكرة القانونية هي عبارة عن مستند قانوني يقدم إلى الجهة ذات الاختصاص سواءً كان للدائرة ناظرة ......"
  },

  {
    value: "cases",
    label: "القضايا",

    Image: (
      <StaticImage
        src={"../images/Mobile/ServicesMobile/Group 14253.png"}
        alt={" القضايا"}
        placeholder="blurred"
        className="h-50 w-50"
        objectFit="contain"
      />
    ),

    description: "القضايا بشكل عام هي عبارة عن ذلك الشيء أو المسألة المتنازع عليها فيما بين طرفات أو مجموعة من الأطراف، حيث يسمى الطرف الأول الذي قام برفع الدعوى القضائية (بالمدعي) أم الطرف الثاني الذي قد رفعت عليه الدعوة القضائية يسمى (بالمدعى عليه).",
    subDescription: "القضايا بشكل عام هي عبارة عن ذلك الشيء أو المسألة المتنازع عليها فيما بين طرفات أو مجموعة من ....."
  },
 
];

const Gradient = styled.div`
position:fixed;
top:0;
left:0;
background:linear-gradient(-130deg,#DEE2F0 0%,#FBFBFB00 60%);
width:100%;
height:100%;
opacity:.7;
z-index:-1;
@media (max-width:768px)
{
  display:none;
}
`
const CardWrapper = styled.div`

width:100%;
margin:auto;


@media (max-width:768px)
{
  width:75%;
}
@media (max-width:600px)
{
  width:85%;
}
@media (max-width:435px)
{
  width:100%;
}
`
const Title = styled.h5`
color: var(--text-dark);
font-size:2rem;
  font-family: 'IBM Plex Sans Arabic', sans-serif !important;
font-weight:bold;
margin-bottom: 1rem;

@media (min-width:768px)
{
font-size:1.8rem;
font-weight:700;

}
`;

const FeatureItem = styled.h5`
color: #07242E;
font-weight:500;
opacity:.6;
font-size:1.6rem;
font-family: 'IBM Plex Sans Arabic', sans-serif !important;
@media (min-width:768px)
{
font-size:1.4rem;
font-weight:500;

}
`;

const Wrapper = styled.div`
width:100%;
margin:0 auto;
@media(min-width:768px)
{
  width:90%;
  margin-top:19rem;
}

@media (min-width:580px) and (max-width:768px)
{
  width:80%;
}
`

const Services = () => {
  return (
    <>
      
    <Media greaterThan="sm">
      <ToolBarSection business={false}/>
    <Header/>
    </Media>
  

    {/* <Stack className="flex-md-row align-items-center " 
    dir='rtl' style={{gap:'3rem',padding:'0 3rem',minHeight:'80vh'}}> */}

    <Wrapper >
    <Media greaterThan="sm">
      <HeadingUnderLine title='خدمات شورى'/>
    </Media>
  
    <Media at="sm">
    <MobileNavigator link='/' title='خدمات شورى' />
    </Media>
        <div dir="rtl" className="flex-column flex-lg-row " style={{display:'flex',justifyContent:'stretch',gap:'2rem'}} >

       

    <div  style={{justifyContent:'stretch',flex:1,gap:'2rem'}} className="d-flex flex-column flex-md-row">

<Stack dir="rtl" style={{alignSelf:'stretch'}} className="Services-Card-Dekstop" direction="vertical">
              <div className="Services-Card-Top-D">{ServicesData[0].Image}</div>
              <div className="Services-Card-Bottom-D">
                <Title>{ServicesData[0].label}</Title>
                <FeatureItem>{ServicesData[0].description}</FeatureItem>
                <ThemeButton style={{ minHeight:'45px' }} to="/LegalAdvisor" className="rounded-4 p-0 w-100 d-flex justify-content-center align-items-center">
                  اطلب الخدمة
                </ThemeButton>
              </div>
            </Stack>

            <Stack dir="rtl" style={{alignSelf:'stretch'}} className="Services-Card-Dekstop" direction="vertical">
              <div className="Services-Card-Top-D">{ServicesData[1].Image}</div>
              <div className="Services-Card-Bottom-D">
                <Title>{ServicesData[1].label}</Title>
                <FeatureItem>{ServicesData[1].description}</FeatureItem>
                <ThemeButton style={{ minHeight:'45px' }} to="/LegalAdvisor" className="rounded-4 p-0 w-100 d-flex justify-content-center align-items-center">
                  اطلب الخدمة
                </ThemeButton>
              </div>
            </Stack>
    </div>

    <div style={{justifyContent:'stretch',flex:1,gap:'2rem'}} className="d-flex flex-column flex-md-row">

<Stack dir="rtl" style={{alignSelf:'stretch'}} className="Services-Card-Dekstop" direction="vertical">
              <div className="Services-Card-Top-D">{ServicesData[2].Image}</div>
              <div className="Services-Card-Bottom-D">
                <Title>{ServicesData[2].label}</Title>
                <FeatureItem>{ServicesData[2].description}</FeatureItem>
                <ThemeButton style={{ minHeight:'45px' }}  to="/LegalAdvisor" className="rounded-4 p-0 w-10 d-flex justify-content-center align-items-center0">
                  اطلب الخدمة
                </ThemeButton>
              </div>
            </Stack>

            <Stack dir="rtl" style={{alignSelf:'stretch',gap:'1rem'}} className="Services-Card-Dekstop" direction="vertical">
              <div className="Services-Card-Top-D">{ServicesData[3].Image}</div>
              <div className="Services-Card-Bottom-D">
                <Title>{ServicesData[3].label}</Title>
                <FeatureItem>{ServicesData[3].description}</FeatureItem>
                <ThemeButton style={{ minHeight:'45px' }} to="/LegalAdvisor" className="rounded-4 p-0 w-100 d-flex justify-content-center align-items-center">
                  اطلب الخدمة
                </ThemeButton>
              </div>
            </Stack>
    </div>


     

</div>
    </Wrapper>

    <Media at='sm'>
  <FooterMobile/>
  </Media>

  <Media greaterThan='sm'>
  <Footer/>
  </Media>
    {/* </Stack> */}

    <Gradient/>
    
    <WhatsappButton/>
    </>
  );
};

export default Services;
