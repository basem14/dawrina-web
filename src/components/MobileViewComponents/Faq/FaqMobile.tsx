import { Icon } from '@iconify/react';
import React from 'react'
import { Accordion, Stack ,Card,Button} from 'react-bootstrap'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionComp from '../../atoms/AccordionComp';
import FormSubmitButton from '../../atoms/FormSubmitButton';
import {Link} from 'gatsby'
import styled from 'styled-components';
import { Media } from '../../atoms/Media';
const FaqMobile = () => {

  const LinkButton = styled(Link)`
  cursor:pointer;
  `

  const Wrapper = styled(Stack)`
  width:60%;
  margin:auto;
  background:white;
  @media (max-width:768px)
  {
    width:100%;
  }
  `

  return (
    
<>
   
<Media at='sm'>
        <Stack direction='horizontal' className="px-5 mb-4" gap={4}>

    <div style={{border:'1px solid #F6EBD3'}} className=" flex-grow-1"></div>
    <h1 className="fw-bolder">الأسئلة الشائعة</h1>
    <div style={{border:'1px solid #F6EBD3'}} className=" flex-grow-1"></div>
</Stack>
</Media>

<Media greaterThan='sm'> 

<Stack direction='horizontal'
style={{ width:'90%' }}
 className="px-5 my-5 mx-auto justify-content-start align-items-center" 
 gap={4}>
   <div 
   style={{ color:'var(--tertiary-color)',width:'3px',transform:'scale(0.7)'}} 
   className="vr">
   </div>
  <h1 style={{color:'var(--text-dark)',fontSize:'5rem'}} className="fw-bolder ">
     الأسئلة الشائعة
     </h1>
</Stack>
</Media>

<Wrapper>

        <AccordionComp business={false}  title={'لمحة عن شورى'} body={' "شورى هي منصة إلكترونية تجمع نخبة من المحامين المرخصين لتقديم الاستشارات والخدمات القانونية بكل يسر وسهولة وبجودة عالية."'}/>




        <AccordionComp business={false} title={'هل منصة شورى مرخصة؟'} body={' نعم، شورى شركة سعودية مسجلة في وزارة التجارة والاستثمار، وجميع المحامين القانونيين المسجلين في شورى مرخصين من قبل وزارة العدل برخصة سارية ونظامية.'}/>


        <AccordionComp business={false} title={'كيف اطلب الاستشارة او الخدمات القانونية الأخرى؟'} body={'  حمل تطبيق شورى للاستشارات القانونية لطلب الخدمة.'}/>


<LinkButton to='/faqs' className='align-self-center FaqBtn'>
اعرف المزيد
<Icon fontSize={'3rem'} style={{marginRight:6}}  icon="material-symbols:chevron-left" />

</LinkButton> 


    </Wrapper>

    </>
  )
}

export default FaqMobile