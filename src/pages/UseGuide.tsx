import { StaticImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import { Stack } from 'react-bootstrap'
import styled from 'styled-components'
import HeadingUnderLine from '../components/atoms/HeadingUnderLine'
import { Media } from '../components/atoms/Media'
import MobileNavigator from '../components/atoms/MobileNavigator'
import FooterMobile from '../components/MobileViewComponents/Footer/FooterMobile'
import Footer from '../components/organisms/Footer'
import Header from '../components/organisms/Header'
import ToolBarSection from '../components/organisms/ToolBarSection'
import WhatsappButton from '../components/atoms/WhatsappButton'
import MobileToolBarSection from '../components/MobileViewComponents/Toolbar/ToolbarMobile'


const UseGuide = () => {

  const StackContainer = styled(Stack)`
  width:90%;
  min-height:80vh;
  margin:0 auto;

@media (min-width:768px)
{
  margin-top:19rem;
  width:90%
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

  const [activeLine,setActiveLine] = useState(1)

  const MobileImage = [
    <StaticImage
    src={'../images/Features/1@2x.png'} 
    alt="app-image"
    placeholder="blurred"
    objectFit='contain'
    style={{
      maxHeight:'600px'
    }}
  />,
  <StaticImage
  src={ '../images/Features/2@2x.png'} 
  alt="app-image"
  placeholder="blurred"
    objectFit='contain'
  style={{
    maxHeight:'600px'
  }}
/>,
    <StaticImage
    src={'../images/Features/3@2x.png'} 
    alt="app-image"
    placeholder="blurred"
    objectFit='contain'
    style={{
      maxHeight:'600px'
    }}
  />,
  <StaticImage
  src={'../images/Features/4@2x.png'} 
  alt="app-image"
  objectFit='contain'
  placeholder="blurred"
  style={{
    maxHeight:'600px'
  }}
/>,
    <StaticImage
    src={'../images/Features/5@2x.png'} 
    alt="app-image"
    placeholder="blurred"
    objectFit='contain'
    style={{
      maxHeight:'600px'
    }}
  />
   

  ]

  return (
  <>
  <ToolBarSection business={false}/>
<Media greaterThan='sm'>
  <MobileToolBarSection/>
  <Header/>
</Media>
    <StackContainer >
    <Media at='sm'>
      <MobileNavigator link='/' title='طريقة استخدام شورى' />
      </Media>
    <div className='d-flex  justify-content-center align-items-center gap-5 '>
    <Stack className='my-auto align-self-center ' direction='horizontal'>
    <div dir='rtl' className='w-50 align-self-stretch pt-5'>
            <ul className='HowToUse-First-Div h-100'>
              
            <li  className={`rounded rounded-circle  ${activeLine===1 && 'Selected-Line'} `}>  
                <span onClick={()=>setActiveLine(1)} 
               className={`rounded rounded-circle  ${activeLine===1 && 'Selected-Point Selected-Line'}`}>1
               </span> اختيار نوع الخدمة
               </li>

               <li  className={`rounded rounded-circle  ${activeLine===2 && 'Selected-Line'} `}>  <span onClick={()=>setActiveLine(2)}
                className={`rounded rounded-circle  ${activeLine===2 && 'Selected-Point Selected-Line'} `}>2</span> تعبئة تفاصيل الخدمة</li>

               <li  className={`rounded rounded-circle  ${activeLine===3 && 'Selected-Line'} `}>  <span onClick={()=>setActiveLine(3)} 
               className={`rounded rounded-circle  ${activeLine===3 && 'Selected-Point Selected-Line'}`}>3</span> تحديد موعد الاستلام</li>

               <li  className={`rounded rounded-circle  ${activeLine===4 && 'Selected-Line'} `}>  <span onClick={()=>setActiveLine(4)} 
               className={`rounded rounded-circle  ${activeLine===4 && 'Selected-Point Selected-Line'}`}>4</span> رفع المرفقات الداعمة </li>

               <li className={`rounded rounded-circle  ${activeLine===5 && 'Selected-Line'} `}>  <span onClick={()=>setActiveLine(5)} 
               className={`rounded rounded-circle  ${activeLine===5 && 'Selected-Point Selected-Line'}`}>5</span> <span>الدفع</span> للاستشارات فقط </li>
            </ul>
      </div>

        <div className='w-50'>
        {/* <StaticImage
                      src="../images/Mobile/Group 4@2x.png"
                      alt="app-image"
                      placeholder="blurred"
                    /> */}

                    { MobileImage[activeLine-1] }
        </div>
  
       
  </Stack>
  <Media style={{marginTop:'-12rem'}} greaterThan='sm'>
          <HeadingUnderLine title='طريقة استخدام شورى'/>
        </Media>
   </div>
  </StackContainer>

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

export default UseGuide