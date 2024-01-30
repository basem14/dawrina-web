import { Toolbar } from '@mui/material'
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react'
import { Card, Carousel, Figure, Stack } from 'react-bootstrap';
import styled from 'styled-components';
import Divider from '../components/atoms/Divider';
import MobileNavigator from '../components/atoms/MobileNavigator';
import Typography from '../components/atoms/Typography';
import FooterMobile from '../components/MobileViewComponents/Footer/FooterMobile';
import useMediaQuery from '../hooks/useMediaQuery';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,FreeMode } from "swiper";
import { Media } from '../components/atoms/Media';
import HeadingUnderLine from '../components/atoms/HeadingUnderLine';
import Header from '../components/organisms/Header';
import { Icon } from '@iconify/react';
import BoardOfDirectorSection from '../components/organisms/BoardOfDirectorSection';
import Footer from '../components/organisms/Footer';
import ToolBarSection from '../components/organisms/ToolBarSection';
import WhatsappButton from '../components/atoms/WhatsappButton';
import MobileToolBarSection from '../components/MobileViewComponents/Toolbar/ToolbarMobile';
const TEAM_MEMBERS = [
  {
    name: "أ/ صالح العساف",
    position: "شريك مؤسس والرئيس التنفيذي",
    image:
      "https://res.cloudinary.com/dzq0qjnxz/image/upload/v1599087231/team/team-1_qxzqjz.jpg",
    boi: "الأستاذ صالح العساف هو شريك مؤسس لشركة شورى والرئيس التنفيذي للشركة ورائد أعمال مهتم بالتقنية والاستثمار في الخدمات القانونية بأساليبها الجديدة ويطمح لتغيير خدمات الاستشارات القانونية للأفضل، ويؤمن بالعمل التطوعي وخدمة المجتمع. حصل صالح العساف على بكالوريوس الإدارة من جامعة فلوريدا الدولية (Florida International University) في الولايات المتحدة الامريكية وماجستير إدارة أعمال (MBA) من الولايات المتحدة الأمريكية. شغل عدة مناصب في عدة شركات وطنية ولدية الخبرة الكافية في تطوير الأعمال وقيادة الشركات.",
    value: "one",
    imageUrl: <StaticImage
    src={'./../images/team/Saleh_alassaf.png'}
    alt="Mohammad Aldakheel"
    placeholder="blurred"
    className="image "
    objectFit='contain'
    style={{width:'95%',margin:'0 auto',zIndex:0}}

  />
  },
  {
    name: "د/محمد الدخيل",
    position: "شريك مؤسس ومدير تطوير الأعمال",
    image: "https://shwra.co/static/media/team/1.5f9f8f8f.jpg",
    boi: "الدكتور محمد الدخيل هو شريك مؤسس ومدير تطوير الأعمال في شركة شورى للخدمات والاستشارية القانونية في المملكة العربية السعودية، وحاصل على بكالوريوس إدارة مالية من جامعة الملك فهد للبترول والمعادن وماجستير ودكتوراه من جامعة سانت ماري ( Saint Mary’s University ) بالولايات المتحدة الأمريكية. يتمتع بأكثر من ٢٠ عاماً من الخبرة حيث ساهم في تأسيس عدد من الشركات الوطنية في مختلف المجالات وأشرف على تشغيلها. يشغل عدة مناصب منها رئيس مجلس إدارة شركة اكسي الخليج، وعضو مجلس إدارة شركة المنتجات الجاهزة، كما أنه عضو مجلس إدارة جمعية دماؤنا صدقة.",
    value: "two",
    imageUrl: <StaticImage
    src={'./../images/team/Mohammad_Aldakheel.png'}
    alt="Mohammad Aldakheel"
    placeholder="blurred"
    className="image "
    objectFit='contain'
    style={{width:'95%',margin:'0 auto',zIndex:0}}

    />
  },

    {
      name: "د/ضيف الله الودعاني",
      position: "شريك مؤسس ومدير تقنية المعلومات",
      image: "https://shwra.co/static/media/team/1.5f9f8f8f.jpg",
      boi: "الدكتور ضيف الله الودعاني هو شريك مؤسس ومدير تقنية المعلومات في شركة شورى للخدمات والاستشارات القانونية، حاصل على بكالوريوس في هندسة الحاسب من جامعة الملك فهد للبترول والمعادن وماجستير ودكتوراه في علوم الحاسب من جامعة Univeristy of Stirling من بريطانيا. وباحث في مجال الذكاء الاصطناعي وعلم البيانات  يتمتع بأكثر من 10 سنوات من الخبرة في مجال بناء المشاريع التقنية حيث ساهم في تأسيس عدد من الشركات التقنية وأشرف على قيادة الفريق الفني لها. يشغل عدة مناصب الإدارية والإستشارية مع عدد من جهات القطاع الحكومي والخاص. مهتم بالتحول التقني وذكاء الأعمال والتقنيات المالية.",
      value: "five",
      imageUrl: <StaticImage
      src={'./../images/team/Daif.png'}
      alt="Mohammad Aldakheel"
      placeholder="blurred"
      className="image "
      objectFit='contain'
      style={{width:'95%',margin:'0 auto',zIndex:0}}
      />
    },
   
    {
      name: "أ/عبد الله العامري",
      position: "شريك مؤسس ومدير الخدمات القانونية",
      image: "https://shwra.co/static/media/team/1.5f9f8f8f.jpg",
      boi: "الأستاذ عبد الله العامري هو شريك مؤسس ومدير الخدمات القانونية في شركة شورى للخدمات والاستشارية القانونية في المملكة العربية السعودية، وهو محامي مرخص من قبل وزارة العدل وعضو الهيئة السعودية للمحامين. حاصل على بكالوريوس قانون من كلية الحقوق في جامعة الملك سعود وحاصل أيضاً على ماجستير في القانون الدولي التجاري من جامعة تشابمان (Chapman University) بالولايات المتحدة الامريكية. شغل منصب شريك مؤسس في شركة الحمدان والعامري للمحاماة والاستشارات القانونية ولديه خبره واسعة في تأسيس الشركات، وهيكلتها، وعمليات الاندماج، والاستحواذ. هو أيضاً خبير في القانون العقاري ويمتلك الخبرات والمهارات الاحترافية في المرافعات والتحكيم والوساطة.",
      value: "three",
      imageUrl: <StaticImage
      src={'./../images/team/Abdullah_Alamri.png'}
      alt="Mohammad Aldakheel"
      placeholder="blurred"
      objectFit='contain'
      style={{width:'95%',margin:'0 auto',zIndex:0}}
      />
      
    },
    {
      name: "أ/عبد العزيز الدخيل",
      position: "شريك مؤسس والمدير المالي",
      image: "https://shwra.co/static/media/team/1.5f9f8f8f.jpg",
      boi: "الأستاذ عبد العزيز الدخيل هو شريك مؤسس والمدير المالي في شركة شورى للخدمات والاستشارية القانونية في المملكة العربية السعودية. حاصل على شهادة البكالوريوس في الإدارة المالية من جامعة الملك فهد للبترول والمعادن وماجستير في الإدارة العامة (MBA) من الولايات المتحدة الامريكية. هو رائد أعمال وشريك مؤسس في عدة شركات وخبير إدارة مشاريع والتثمين العقاري",
      value: "four",
      imageUrl: <StaticImage
      src={'./../images/team/Abdualaziz_aldakheel.png'}
      alt="Mohammad Aldakheel"
      placeholder="blurred"
      className="image "
      objectFit='contain'
      style={{width:'95%',margin:'0 auto',zIndex:0}}
      />
    },
  
  ];



const TeamCard = styled(Card)`
border:none !important;
margin:0 auto;
width:30%;

@media(max-width:768px) {
  width:90%
}
@media(max-width:500px) {
  width:100%
}




`;

const Wrapper = styled.div`

min-height:80vh;
width:100%;
margin:0 auto;
@media(min-width:768px) {
  width:80%;
  margin-top:19rem;
}


`;

const BodyStyle = {
  background:'#FFF',
    borderRadius:'2rem',
    filter: ' drop-shadow(0px 10px 10px #0000001A)',
    //boxShadow: '0 4rem 0rem .5rem #0000001A',
    margin:'-20px 0 20px 0',
   height:'8rem'
    
}

const BodyStyleActive = {
  background:'var(--tertiary-color)',
  borderRadius:'2rem',
  //boxShadow: '0 4rem 0rem .5rem #0000001A',
  filter: ' drop-shadow(0px 10px 10px #0000001A)',
  margin:'-20px 0 20px 0',
  height:'8rem'
  
}
const Gradient = styled.div`
position:fixed;
top:0;
left:0;
background:linear-gradient(205deg,#DEE2F0 0%,#FBFBFB00 60%);
width:100%;
height:100%;
opacity:.7;
z-index:-1;
@media (max-width:768px)
{
  display:none;
}
`

const BoardOfDirectors = () => {
  const { isMobile } = useMediaQuery();

  const [index, setIndex] = useState(0);

 

  return (
    <>
    
   <Media greaterThan='sm'>
    <ToolBarSection business={false}/>
    
    <Header/>
   </Media>

    <Wrapper >
      <Media at='sm'>
   <MobileNavigator link='/' title='فريق العمل'/>
   </Media>

   <Media greaterThan='sm'>
   <HeadingUnderLine  title='فريق العمل'/>
   </Media>


   <Media at='sm'>


   <Swiper onRealIndexChange={(element)=>setIndex(element.activeIndex)}
   
   breakpoints={{
      500: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      },
    
    }}
        slidesPerView={1.5}
        spaceBetween={25}
        centeredSlides={true}
        pagination={{
          clickable: true,
          el: '.my-custom-pagination-div',
         
        }}
        modules={[ Pagination]}
        className="mySwiper"
      >

    

   {
    TEAM_MEMBERS.map((info,ind)=>{

        return (

          <SwiperSlide key={ind}>
            
     <TeamCard >
              {info.imageUrl}

              <Card.Body style={ind===index ? BodyStyleActive :BodyStyle}>

                <Card.Title className='m-0 text-center'>
                  <span style={{fontSize:'2rem',fontWeight:'bold',color:ind===index?'white':'var(--tertiary-color)'}}>
                    {info.name}
                  </span>
                  </Card.Title>
                  <Card.Text className='m-0 text-center'> 
                  <span
                    style={{fontSize:'1.5rem',fontWeight:'500'}}
                  >
                    {info.position}
                  </span>
                </Card.Text>
              </Card.Body>
   </TeamCard>

  
   </SwiperSlide>

)
})
    }

    
    </Swiper>
<div className='my-custom-pagination-div'></div>

<div style={{marginTop:'7rem'}} className='d-flex flex-column px-5' dir='rtl'>

  <h1  className='TeamTitle' > {TEAM_MEMBERS[index].name} </h1>

  <div style={{margin:'0 0 3rem 0',display:'inline-flex'}}>

  <span className='TeamSubTitle'>
    {TEAM_MEMBERS[index].position}
  </span>

  </div>
  <span style={{color:'#173039ba',width:'95%'}}  className='WhyUsBody' >{TEAM_MEMBERS[index].boi}</span>
</div>
</Media>

<Media greaterThan='sm'>
<BoardOfDirectorSection/>

</Media>


   </Wrapper>
   <Media at='sm'>
  <FooterMobile/>
  </Media>

  <Media greaterThan='sm'>
  <Footer/>
  </Media>

<Gradient/>
<WhatsappButton/>
   </>
  )
}

export default BoardOfDirectors