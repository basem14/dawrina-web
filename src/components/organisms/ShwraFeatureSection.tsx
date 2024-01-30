import { Icon } from '@iconify/react';
import * as React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
// atoms
import Section from '../atoms/Section';
import SectionTitle from '../atoms/SectionTitle';
// molecules
import FeatureList from '../molecules/FeatureList';
import { Media } from '../atoms/Media';
import { StaticImage } from 'gatsby-plugin-image';


import Typography from '../atoms/Typography';






const OtherPlatformData = [
    {
      text: "صعوبة الوصول للمحامي المتخصص",
    },
    {
      text: "يخدم منطقة جغرافية واحدة",
    },
    {
      text: "ساعات عمل محدودة",
    },
    {
      text: "تفاوت عالي في أُجور المحامين",
    },
  ];
  
  const ShwraPlatformData = [
    {
      text: "محامين مرخصين من وزارة العدل السعودية",
    },
    {
      text: "تنوع في المحامين وتخصصاتهم",
    },
    {
      text: "تخدم جميع مناطق المملكة العربية السعودية",
    },
    {
      text: "خصوصية عالية",
    },
    {
      text: "متواجدين 24 ساعة 7 أيام في الأسبوع",
    },
    {
      text: "ضمان التزام المحامين",
    },
    {
      text: "سهولة الحصول على الخدمة",
    },
    {
      text: "شورى بصف العميل دائماً",
    },
  ];

const featuresData = [
  
  {
    img:<StaticImage 
    src='../../images/statistic/vuesax-linear-timer-start.svg' 
    alt='image' 
    objectFit='contain'
    style ={{ width:'30px',height:'30px' }}/>,
    text:'محامينا متواجدون لخدمتك ٢٤ ساعه لتلبية كل احتياجاتك القانونية في جميع أنحاء المملكة'
  },
  {
    img: <StaticImage 
    src='../../images/statistic/vuesax-linear-security-user.svg' 
    alt='image' 
    objectFit='contain'
    style ={{ width:'30px',height:'30px' }}/>,
    text:'ضمان التزام المحامي و الحفاظ على سرية وخصوصية سجلات القضية وبيانات العميل'
  },
  {
    img:<StaticImage 
    src='../../images/statistic/vuesax-linear-like-tag.svg' 
    alt='image' 
    objectFit='contain'
    style ={{ width:'30px',height:'30px' }}/>,
    text:'سهولة استخدام التطبيق وتحديد موعد الاستشارة أو الخدمة القانونية وفقاً لراحتك'
    
  },
  {
    img:<StaticImage 
    src='../../images/statistic/vuesax-linear-security-user.png' 
    alt='image' 
    objectFit='contain'
    style ={{ width:'30px',height:'30px' }}/>,
    text:'الاستشارة تكون عن طريق مكالمة هاتفية مع المحامي المختص من خلال التطبيق'
  },
  {
    img:<StaticImage 
    src='../../images/statistic/vuesax-linear-star.svg' 
    alt='image' 
    objectFit='contain'
    style ={{ width:'30px',height:'30px' }}/>,
    text:'محامين مرخصين ذو خبرة واسعة ومتنوعة في جميع المجالات القانونية'
  },
  {
    img:<StaticImage 
    src='../../images/statistic/vuesax-linear-category.svg' 
    alt='image' 
    objectFit='contain'
    style ={{ width:'30px',height:'30px' }}/>,
    text:'تطبيق شورى يوفر لك سهولة العودة للخدمات والاستشارات السابقة'
  },
  {
    img: <StaticImage 
    src='../../images/statistic/vuesax-linear-map.svg' 
    alt='image' 
    objectFit='contain'
    style ={{ width:'30px',height:'30px' }}/>,
    text:'توفير خدمات استشارية قانونية بتكلفة منافسة و طرق دفع متعددة مع وجود خدمة تمارا للتقسيط'
  }

 

]


export default function ShwraFeatureSection() {
    return (


  <div className='mb-5 mb-md-0' style={{ background:"radial-gradient( at right 50%,#0F242D1A 0%,#FBFBFB00 80%)" }}>
    <div 
    style={{ width:'90%' }} 
    className='mx-auto'> 

 <Media at='sm'>
  <Stack direction='horizontal'  className="px-1 my-5 mx-auto justify-content-start align-items-center" gap={4}>
      <div style={{ color:'var(--tertiary-color)',width:'3px',transform:'scale(0.8)'}} className="vr"></div>
      <h1 style={{color:'var(--text-dark)',fontSize:'3rem'}} className="fw-bolder ">لماذا تطبيق شورى مميز؟</h1>

</Stack>
</Media>

<Media greaterThan='sm'>

   <Stack direction='horizontal'  className="px-5 my-5 mx-auto justify-content-start align-items-center" gap={4}>
      <div style={{ color:'var(--tertiary-color)',width:'3px',transform:'scale(0.8)'}} className="vr"></div>
      <h1 style={{color:'var(--text-dark)',fontSize:'4rem'}} className="fw-bolder ">لماذا تطبيق شورى مميز؟</h1>

</Stack>
</Media>

<Container fluid >
  <Row >
    <Col sm={12} md={7}  >
      <div style={{width:'100%',minHeight:'65%'}}
      className=' d-flex flex-column align-middle justify-content-between mt-5 gap-4 mx-auto' 
      >
      {
        featuresData.map((data,ind)=> {  
          return (
          <div
          className='NF-TextWrapper'>
            {data.img}
            <Typography className='fw-bold me-md-5' variant='h3'>
              {data.text}
            </Typography> 
          </div>
          )
        })
      }
       </div> 
    </Col>
    <Col  md={5} className='justify-content-start d-none d-md-flex' >
        <StaticImage
        src='../../images/general/hero/Rectangle 27807@2x.png'
        alt='image'
        placeholder='blurred'
        className=''
        objectFit='contain'
        style={{
          maxWidth:'500px',
        }}
        />
    </Col>
  </Row>
</Container>

    </div>
    </div>
    );
}

{/* <Stack direction='vertical' className='Feature-Wrapper-Dekstop'>
      <Stack className="Tab-Parent-Dekstop" >
        <button
          className={ "Tab-Active-Dekstop"}
        >
           منصة شورى
        </button>
        <button
          className={ "Tab-NotActive-Dekstop"}
        >
          مكاتب المحاماة التقليدية
        </button>
      </Stack>
       
       <div style={{display:'flex'}}>
       <ul className='Feature-Text-Container-Dekstop' style={{background:'#F9F4EA'}}>
         {
            ShwraPlatformData.map((data,index)=>{
               return(
                  <>
                  <li className="Difference-List-Item-Dekstop">
                  <Icon style={{marginLeft:9}} fontSize={'1.2rem'} color='var(--tertiary-color)' icon="material-symbols:circle" />
                     {data.text}
                  </li>
                  <div  style={{ border: "1px solid rgb(222, 226, 240,0.4)",margin:'1.5rem 2rem',width:'80%', }}></div>
                  </>
               )
            })
         }
      </ul>

      <ul className='Feature-Text-Container-Dekstop'>
         {
            OtherPlatformData.map((data,index)=>{
               return(
                  <>
                  <li className="Difference-List-Item-Dekstop">
                  <Icon style={{marginLeft:9}} fontSize={'1.2rem'} color='var(--tertiary-color)' icon="material-symbols:circle" />
                     {data.text}
                  </li>
                  <div  style={{ border: "1px solid rgb(222, 226, 240,0.4)",margin:'1.5rem 2rem',width:'80%' }}></div>
                  </>
               )
            })
         }
      </ul>
       </div>

 </Stack> */}