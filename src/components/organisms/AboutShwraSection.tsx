import * as React from 'react';
import styled from 'styled-components';
// react-bootstrap
import { Container } from 'react-bootstrap';
// atoms
import Section from '../atoms/Section';
import SectionTitle from '../atoms/SectionTitle';


const StyledSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-color);
    color: var(--text-light);
    padding: 11rem 0;

    @media (max-width: 768px) {
        padding: 5rem 0;
    }
`


const SectionContent = styled.h5`
    font-size: 15px;
    line-height: 1.5;
    max-width: 700px;
    width: 100%;

    @media (max-width: 768px) {
      width: 90%;
    }
`


export default function AboutShwraSection() {
    return (
    <StyledSection 
      id="about"
      //className="about-section"
    >

        <h2 className="underline-hover col-md-2 text-center mb-5">عن شورى</h2>

        <SectionContent
         className="col-md-6 col-sm-10 text-center"
        >
         شورى هي منصة رقمية تعنى بتقديم الاستشارات والخدمات القانونية عن بعد في المملكة العربية السعودية من خلال ربط العملاء طالبي الاستشارات القانونية، مع نخبة من المحامين المرخصين من وزارة العدل السعودية بطريقة تفاعلية، سهلة وآمنة ومهنية واستناداً إلى القوانين مع الحفاظ على سرية وخصوصية بيانات العملاء. وتتضمن الخدمات والاستشارات القانونية عدة مجالات منها: مجالات الأحوال الشخصية، والخلافات العمالية، والقضايا التجارية وغيرها، لكل من الافراد والمؤسسات وشركات القطاع العام والخاص ومنها الشركات الناشئة والمتوسطة والكبيرة.
        </SectionContent> 

    </StyledSection>
    );
}
