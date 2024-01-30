import React, { useState } from 'react'
import { Stack, Carousel, Col, Figure,Card, Button } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import FormSubmitButton from '../../../atoms/FormSubmitButton';
import styled from "styled-components";
import { Icon } from "@iconify/react";
import ThemeButton from '../../../atoms/ThemeButton';

type ServiceProps = {
Image: any;
label:string;
subDescription:string
description:string

}


const ServiceCard = ({Image,label,subDescription,description}:ServiceProps) => {

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




const [ShowMore,setShowMore] =  useState(false)
  return (


    <Stack dir='rtl' 
    
     className="Services-Card" direction="vertical">
    <div  className="Services-Card-Top">
    {Image}
    </div>
    <div className="Services-Card-Bottom">
           <Title >{label}</Title>
           <FeatureItem >
            {ShowMore ? description : subDescription}
           </FeatureItem>
         
           <p role='button' 
           onClick={()=>setShowMore(!ShowMore)} 
           className='my-auto'
            style={{color:'var(--tertiary-color)'}}>
           {ShowMore ? 'عرض أقل' : 'اعرف المزيد'}
            <Icon fontSize={'2rem'}  icon="material-symbols:chevron-left" />
            </p>
          
           <ThemeButton style={{ minHeight:'50px' }} to='/LegalAdvisor' className='rounded-4 p-0 d-flex align-items-center justify-content-center '>اطلب الخدمة</ThemeButton>
    </div>
</Stack>

  )
}

export default ServiceCard