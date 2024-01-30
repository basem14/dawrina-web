import * as React from "react";
import styled from "styled-components";
// swiper
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// react-bootstrap
import { Stack, Carousel, Col, Figure,Card, Button } from "react-bootstrap";
// atoms
import Section from "../../atoms/Section";
import ServiceCard from "./SubComponents/ServiceCard";
import { StaticImage } from "gatsby-plugin-image";

// molecules



// Import Swiper styles

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,FreeMode } from "swiper";

const Services = [
  {
    value: 'consulting',
    label: 'الاستشارات القانونية',
    Image:  <StaticImage
    src={'../../../images/Mobile/ServicesMobile/Group 14341.png'}
    alt={'الاستشارات القانونية'}
    placeholder="blurred"
    className="h-50 w-50"
    objectFit="contain"
  />,
    description: "الاستشارة القانونية هي الاستعانة بمتخصصين في مجال القانون للحصول على الرأي القانوني الصحيح لموضوع ما قد يكون محل نزاع وقد يكون غير ذلك، حيث يوضح المحامي الحل المناسب والتصرف السليم قانونًا لهذا الوضع.",
    subDescription: "الاستشارة القانونية هي الاستعانة بمتخصصين في مجال القانون للحصول على الرأي القانوني  ......"
  },
  {
    value: 'contract',
    label: 'العقود',
    Image:  <StaticImage
    src={'../../../images/Mobile/ServicesMobile/Group 14299.png'}
    alt={' العقود'}
    placeholder="blurred"
    className="h-50 w-50"
    objectFit="contain"
  />,
    description: "يعد العقد شريعة المتعاقدين، وهو حجر الأساس لضمان الحقوق والواجبات المشروعة بين العديد من الجهات وكذلك بين أفراد المجتمع، ولذلك فإن الاهتمام بصياغة العقود بالشكل القانوني الصحيح يُجنب جميع الأطراف اللجوء للنزاعات القضائية بمختلف أنواعها، وهنا يجب الرجوع لخبراء صياغة العقود المتمرسين الذين هم على دراية كاملة بالقواعد القانونية،",
    subDescription: "العقود هي اتّفاق مُلزم قانونياً بين طرفين أو أكثر، وقد يكون شفهيّاً أو مكتوباً، وهو عِبارة عن مجموعةٍ ........"
  },
  
  {
    value: 'nots',
    label: 'المذكرات',
    Image:  <StaticImage
    src={'../../../images/Mobile/ServicesMobile/Group 14281.png'}
    alt={' المذكرات'}
    placeholder="blurred"
    className="h-50 w-50"
    objectFit="contain"
    />,
    
    description: "المذكرة القانونية هي عبارة عن مستند قانوني يقدم إلى الجهة ذات الاختصاص سواءً كان للدائرة ناظرة الدعوى أو محكمة الاستئناف أو الى المحكمة العليا، حيث تتضمن هذه المذكرات وقائع القضية موثقة بالأدلة والبراهين مع تواريخها، وعلاوةً على الوقائع فهناك الدفوع الشكلي والموضوعي الخاص بها الصادر من محامي المدعي أو المدعى عليه.",
    subDescription: "المذكرة القانونية هي عبارة عن مستند قانوني يقدم إلى الجهة ذات الاختصاص سواءً كان للدائرة ناظرة ......"
  },
  {
    value: 'cases',
    label: 'القضايا',
    
    Image:  <StaticImage
    src={'../../../images/Mobile/ServicesMobile/Group 14253.png'}
    alt={' الخدمات القانونية الأخرى'}
    placeholder="blurred"
    className="h-50 w-50"
    objectFit="contain"
  />,
  
    description: "القضايا بشكل عام هي عبارة عن ذلك الشيء أو المسألة المتنازع عليها فيما بين طرفات أو مجموعة من الأطراف، حيث يسمى الطرف الأول الذي قام برفع الدعوى القضائية (بالمدعي) أم الطرف الثاني الذي قد رفعت عليه الدعوة القضائية يسمى (بالمدعى عليه).",
    subDescription: "القضايا بشكل عام هي عبارة عن ذلك الشيء أو المسألة المتنازع عليها فيما بين طرفات أو مجموعة من ....."
  },
];

const StyleReviewSection = styled(Section)`
  height: 100%;
  padding-bottom: 11rem !important;
  background:white;
  
`;


const OurServiceSectionMobile = () => {

  
const settings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1.5,
  slidesToScroll: 1,
  centerPadding:'0',
  variableWidth: true,
  rtl:true,
  loop:true,
}

const [activeInd,setActiveInd] = React.useState(0)

  return (
    <StyleReviewSection  id="reviews">
  {
activeInd!==0?
<Stack direction='horizontal' className="px-5 mb-5" gap={4}>
<div style={{border:'1px solid #F6EBD3'}} className=" flex-grow-1"></div>
<h1 style={{color:'var(--text-dark)',fontSize:'3rem'}} className="fw-bolder ">خدمات شورى</h1>

  <div style={{border:'1px solid #F6EBD3'}} className=" flex-grow-1"></div>
</Stack>
 :
   
<Stack style={{ width:'90%' }} direction='horizontal' className=" mb-5 justify-content-start align-items-center mx-auto" gap={4}>
      <div style={{ color:'var(--tertiary-color)',width:'3px',transform:'scale(0.7)'}} className="vr"></div>
  <h1 style={{color:'var(--text-dark)',fontSize:'3rem'}} className="fw-bolder ">خدمات شورى</h1>
</Stack>
}     

<Swiper    onSlideChange={(e)=>setActiveInd(e.activeIndex)}  breakpoints={{
 
 558 : {
  slidesPerView: 1.8,

 },
    450: {
      slidesPerView: 1.5,
    },
    375: {
      slidesPerView: 1.2,
    },

  
  }}
  
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={false}
        pagination={{
          clickable: true,
          el: '.my-custom-pagination-div',
        
        }}
        modules={[ Pagination]}
        className="mySwiper"
      >
        {Services.map((service, index) => {

   
const {label,Image,subDescription,description} = service
return (

<SwiperSlide >
 <ServiceCard label={label} Image={Image} subDescription={subDescription} description={description}/>
 </SwiperSlide>

   
    


);
})}

  </Swiper>

<div className="my-custom-pagination-div">

</div>
  </StyleReviewSection>
  )
}

export default OurServiceSectionMobile