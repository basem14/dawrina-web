import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Stack } from 'react-bootstrap'
import styled from 'styled-components'
import HeadingUnderLine from '../components/atoms/HeadingUnderLine'
import { Media } from '../components/atoms/Media'
import MobileNavigator from '../components/atoms/MobileNavigator'
import FooterMobile from '../components/MobileViewComponents/Footer/FooterMobile'
import Footer from '../components/organisms/Footer'
import Header from '../components/organisms/Header'
import findOperatingSystem from '../hooks/findOperatingSystem'
import ToolBarSection from '../components/organisms/ToolBarSection'
import WhatsappButton from '../components/atoms/WhatsappButton'
import MobileToolBarSection from '../components/MobileViewComponents/Toolbar/ToolbarMobile'

const LegalAdvisor = () => {

  const {DeviceType} = findOperatingSystem()
  
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

const Wrapper = styled.div`
min-height:80vh;
width:90%;
margin:0 auto;
display:flex;
flex-direction:column;
align-items:center;

@media (min-width:768px)
{
  flex-direction:row;
  gap:1rem;
  margin-top:19rem;

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
  
const ButtonContainer = [
  { dbBtn : <ImageLink
  href="https://play.google.com/store/apps/details?id=sa.shwra.app"
  target="_blank"
  rel="noopener noreferrer"
className='mt-4 mt-md-0'>
  <StaticImage
    src="../images/general/google-play-4@3x.png"
    alt="app-image"
    placeholder="blurred"
    objectFit="contain"
    style={{width:'60%',height:'90%'}}/>

</ImageLink> },
{  dbBtn :  <ImageLink
  href="https://apps.apple.com/sa/app/shwra-%D8%B4%D9%88%D8%B1%D9%89/id1550113344"
  target="_blank"
  rel="noopener noreferrer"
 className='my-5 my-md-0'
>

  <Stack  className='justify-content-center align-items-end '>
    <span style={{fontSize:'1rem'}}>Available on</span>
    <span style={{fontSize:'1.3rem',marginTop:-3}} className='fw-bolder'>App Store</span>
  </Stack>

  <StaticImage
  src='../images/Mobile/icon@3x.png'
   alt='logo' 
   placeholder='blurred'
   objectFit='contain'
   className='ms-4 ms-md-0'
   style={{width:'30%',height:'90%'}}/>

</ImageLink>}
, 
{ dbBtn : <ImageLink
  href="https://appgallery.huawei.com/app/C106460597"
  target="_blank"
  rel="noopener noreferrer"
>
  <StaticImage
    src="../images/general/huawei-appgallery-black.png"
    alt="app-image"
    placeholder="blurred"
    style={{width:'80%',height:'90%'}}/>
</ImageLink>}

]


  return (
    <>
    
  <Media  greaterThan='sm'>
    <ToolBarSection business={false}/>
    <Header/>
  </Media>
      <Wrapper dir='rtl'>
  <Media className='w-100' at='sm'>
      <MobileNavigator link='/' title='اطلب خدمة قانونية'/>
      </Media>

        <Media at='sm'>

      <span style={{color:'var(--text-gray)'}} className='text-center fw-bold'>
        حمل التطبيق واحصل على خدمتك القانونية 
        </span>
        </Media>

<div className='LA-ImageWrapper'>
      {/* <StaticImage
      src='../images/Mobile/Group 4@3x.png'
            alt="app-image"
            placeholder="blurred"
            objectFit='contain'
            style={{width:'100%',maxHeight:'65vh',margin:'4rem 0'}}
          /> */}
</div>

  {/* 0 for Andriod
  1 for Iphone 
  2 for Huwaei 
  -1 for All */}

<div className='LA-ButtonWrapper'>
  <Media style={{margin:'-9rem 0 -4rem 0'}} greaterThan='sm'>
    <HeadingUnderLine title='اطلب خدمة قانونية'/>
  </Media>

  <Media greaterThan='sm'>
  <span  className='text-center fs-4'>
  حمل التطبيق واحصل على خدمتك القانونية 
        </span>
  </Media>

      

 <div className='d-flex align-items-center flex-column flex-md-row gap-md-3'>

{DeviceType === -1 ?
 ButtonContainer.map((i,a)=> {
  return (
    <>
   {i.dbBtn}
   </>
  )
 })
 : ButtonContainer[DeviceType].dbBtn
}
</div>  
</div> 
        
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

export default LegalAdvisor

