import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Stack } from 'react-bootstrap'
import styled from 'styled-components'
import HeadingUnderLine from '../components/atoms/HeadingUnderLine'
import { Media } from '../components/atoms/Media'
import MobileNavigator from '../components/atoms/MobileNavigator'
import ThemeButton from '../components/atoms/ThemeButton'
import FooterMobile from '../components/MobileViewComponents/Footer/FooterMobile'
import Footer from '../components/organisms/Footer'
import Header from '../components/organisms/Header'
import ToolBarSection from '../components/organisms/ToolBarSection'
import WhatsappButton from '../components/atoms/WhatsappButton'
import MobileToolBarSection from '../components/MobileViewComponents/Toolbar/ToolbarMobile'

const WhyUs = () => {

    const Wrapper = styled.div`
    padding:0 1rem;
    color:#07242E;
    min-height:80vh;
    width:95%;
    margin:0 auto;

    @media (min-width:768px)
    {
      width:80%;
      margin-top:8rem;
      display:flex;
      flex-direction:column;
    }
    `
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

    
  return (
    <>
      
     <Media greaterThan='sm'>
      <ToolBarSection business={false}/>
        <Header/>
    </Media>
    <Wrapper>

      <Media at='sm'>
    <MobileNavigator title='عن شورى' link='/' />
    </Media>
    <Media greaterThan='sm'>
      <HeadingUnderLine title='عن شورى'  />
    </Media>

    <Stack  className='whyUs-Container' dir='rtl'>
   
   <div className='whyUsTitle-Parent'>
      <StaticImage
                
                  src="../images/Mobile/logo@3x.png"
                  alt="app-image"
                  placeholder="blurred"
                  className='d-md-none'
                  style={{width:60,height:60,borderRight:'1px solid'}}
       />

       <span className='WhyUsTitle'>وجهتك الأولى</span>
       <span  style={{color:'var(--tertiary-color)'}} className='WhyUsTitle mb-5'> للخدمات القانونية</span>
       <ThemeButton to='/LegalAdvisor' className='d-none d-md-inline-block rounded-4 align-self-start'>اطلب الخدمة</ThemeButton>
     </div>


     <span style={{width:'2px',height:'15rem'}} className='vr ms-5 d-none d-md-block align-self-start'/>

<div className='whyUsBody-Parent '>
       <span  className='WhyUsBody '>
       شورى هي منصة رقمية تعنى بتقديم الاستشارات والخدمات القانونية عن بعد في المملكة العربية السعودية من خلال ربط العملاء طالبي الاستشارات القانونية، مع نخبة    من المحامين المرخصين والمعتمدين من قبل وزارة العدل السعودية بطريقة تفاعلية، سهلة وآمنة ومهنية واستناد ًا إلى القوانين مع الحفاظ على سرية وخصوصية بيانات العملاء. وتتضمن الاستشارات القانونية عدة مجالات منها: مجالات الأحوال الشخصية، والخلافات العمالية، والقضاء التجاري لكل من الافراد والمؤسسات وشركات القطاع العام والخاص ومنها الشركات الناشئة والمتوسطة والصغيرة.
       </span>
 </div>
    </Stack>
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

export default WhyUs