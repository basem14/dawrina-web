import { StaticImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import { Stack } from 'react-bootstrap'
import FormSubmitButton from '../../atoms/FormSubmitButton'
import ThemeButton from '../../atoms/ThemeButton'
import { Media } from '../../atoms/Media'
const HowtoUseMobile = () => {

  const [activeLine,setActiveLine] = useState(1)

  const MobileImage = [
    <StaticImage
    src={'../../../images/Features/1@2x.png'} 
    alt="app-image"
    placeholder="blurred"
    objectFit='contain'
    style={{
      maxHeight:'600px'
    }}
  />,
  <StaticImage
  src={ '../../../images/Features/2@2x.png'} 
  alt="app-image"
  placeholder="blurred"
    objectFit='contain'
  style={{
    maxHeight:'600px'
  }}
/>,
    <StaticImage
    src={'../../../images/Features/3@2x.png'} 
    alt="app-image"
    placeholder="blurred"
    objectFit='contain'
    style={{
      maxHeight:'600px'
    }}
  />,
  <StaticImage
  src={'../../../images/Features/4@2x.png'} 
  alt="app-image"
  objectFit='contain'
  placeholder="blurred"
  style={{
    maxHeight:'600px'
  }}
/>,
    <StaticImage
    src={'../../../images/Features/5@2x.png'} 
    alt="app-image"
    placeholder="blurred"
    objectFit='contain'
    style={{
      maxHeight:'600px'
    }}
  />
   

  ]

  return (
  
    <div style={{
      background: 'transparent linear-gradient(0deg, #FBF7EE 0%, #FBFBFB00 100%) 0% 0% no-repeat padding-box',
      padding:'12px 0 68px 0',
      margin:'9rem auto',
   
  }}>

    <Stack className='mx-auto' style={{ width:'90%' }} gap={5}> 

    

<Media at='sm'>
<Stack direction='horizontal'  className="px-1 my-5 mx-auto justify-content-start align-items-center" gap={4}>
      <div style={{ color:'var(--tertiary-color)',width:'3px',transform:'scale(0.8)'}} className="vr"></div>
      <h1 style={{color:'var(--text-dark)',fontSize:'3rem'}} className="fw-bolder ">طريقة استخدام شورى</h1>

</Stack>
</Media>

<Media greaterThan='sm'>

   <Stack direction='horizontal'  className="px-5 my-5 mx-auto justify-content-start align-items-center" gap={4}>
      <div style={{ color:'var(--tertiary-color)',width:'3px',transform:'scale(0.8)'}} className="vr"></div>
      <h1 style={{color:'var(--text-dark)',fontSize:'4rem'}} className="fw-bolder ">طريقة استخدام شورى</h1>

</Stack>
</Media>


<Stack style={{
  width:'90%'
  }}
   className='mx-auto mx-md-0' direction='horizontal'>
  
  <div 
   className='w-50 d-flex justify-content-center'>
     {MobileImage[activeLine-1]}
      </div>

      <div className='w-50 align-self-stretch pt-5'>
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

     
</Stack>

            <ThemeButton style={{width:'200px'}} to='/LegalAdvisor' className=' align-self-center rounded rounded-4 py-3 px-2 d-md-none'>اطلب الخدمة</ThemeButton>

    </Stack>
  </div>

  )
}

export default HowtoUseMobile