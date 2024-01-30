import * as React from "react";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { motion } from "framer-motion";
// molecules
import ServiceTabList from "../molecules/ServiceTabList";
import TabPane from "../atoms/TabPane";
import { Col, Container, Row, Stack } from "react-bootstrap";
import ServiceCard from "../MobileViewComponents/Services/SubComponents/ServiceCard";
import styled from "styled-components";
import { Grid } from "@mui/material";
export default function ShwraFeatureSection({
  showTabPane = true,
  headerClassName = "",
  tabStyles,
}: {
  showTabPane?: boolean;
  headerClassName?: string;
  tabStyles?: React.CSSProperties;
}) {
  const data = useStaticQuery(graphql`
    query IndexCarImagesQuery {
      consulting: file(relativePath: { eq: "services/personal.png" }) {
        publicURL
      }
      contract: file(relativePath: { eq: "services/contract.png" }) {
        publicURL
      }
      finantial: file(relativePath: { eq: "services/financial.png" }) {
        publicURL
      }
      cases: file(relativePath: { eq: "services/cases.png" }) {
        publicURL
      }
      nots: file(relativePath: { eq: "services/note.png" }) {
        publicURL
      }
    }
  `);

  const ServicesData = [
    {
      value: "consulting",
      label: "الاستشارات القانونية",
      Image: (
        <StaticImage
          src={"../../images/Mobile/ServicesMobile/Group 14341.png"}
          alt={"الاستشارات القانونية"}
          placeholder="blurred"
          className="h-50 w-50"
          objectFit="contain"
        />
      ),
      description:
        "الاستشارة القانونية هي الاستعانة بمتخصصين في مجال القانون للحصول على الرأي القانوني الصحيح لموضوع ما قد يكون محل نزاع وقد يكون غير ذلك، حيث يوضح المحامي الحل المناسب والتصرف السليم قانونًا لهذا الوضع.",
      subDescription:
        "الاستشارة القانونية هي الاستعانة بمتخصصين في مجال القانون للحصول على الرأي القانوني الصحيح ......",
    },
    {
      value: "contract",
      label: "العقود",
      Image: (
        <StaticImage
          src={"../../images/Mobile/ServicesMobile/Group 14299.png"}
          alt={" العقود"}
          placeholder="blurred"
          className="h-50 w-50"
          objectFit="contain"
        />
      ),
      description:
        "يعد العقد شريعة المتعاقدين، وهو حجر الأساس لضمان الحقوق والواجبات المشروعة بين العديد من الجهات وكذلك بين أفراد المجتمع، ولذلك فإن الاهتمام بصياغة العقود بالشكل القانوني الصحيح يُجنب جميع الأطراف اللجوء للنزاعات القضائية بمختلف أنواعها، وهنا يجب الرجوع لخبراء صياغة العقود المتمرسين الذين هم على دراية كاملة بالقواعد القانونية،",
      subDescription:
        "العقود هي اتّفاق مُلزم قانونياً بين طرفين أو أكثر، وقد يكون شفهيّاً أو مكتوباً، وهو عِبارة عن مجموعةٍ ........",
    },

   
    {
      value: "nots",
      label: "المذكرات",
      Image: (
        <StaticImage
          src={"../../images/Mobile/ServicesMobile/Group 14281.png"}
          alt={" المذكرات"}
          placeholder="blurred"
          className="h-50 w-50"
          objectFit="contain"
        />
      ),

      description:
        "المذكرة القانونية هي عبارة عن مستند قانوني يقدم إلى الجهة ذات الاختصاص سواءً كان للدائرة ناظرة الدعوى أو محكمة الاستئناف أو الى المحكمة العليا، حيث تتضمن هذه المذكرات وقائع القضية موثقة بالأدلة والبراهين مع تواريخها، وعلاوةً على الوقائع فهناك الدفوع الشكلي والموضوعي الخاص بها الصادر من محامي المدعي أو المدعى عليه.",
      subDescription:
        "المذكرة القانونية هي عبارة عن مستند قانوني يقدم إلى الجهة ذات الاختصاص سواءً كان للدائرة ناظرة ......",
    },
    {
      value: "cases",
      label: "القضايا",

      Image: (
        <StaticImage
          src={"../../images/Mobile/ServicesMobile/Group 14253.png"}
          alt={"القضايا"}
          placeholder="blurred"
          className="h-50 w-50"
          objectFit="contain"
        />
      ),

      description:
        "القضايا بشكل عام هي عبارة عن ذلك الشيء أو المسألة المتنازع عليها فيما بين طرفات أو مجموعة من الأطراف، حيث يسمى الطرف الأول الذي قام برفع الدعوى القضائية (بالمدعي) أم الطرف الثاني الذي قد رفعت عليه الدعوة القضائية يسمى (بالمدعى عليه).",
      subDescription:
        "القضايا بشكل عام هي عبارة عن ذلك الشيء أو المسألة المتنازع عليها فيما بين طرفات أو مجموعة من .....",
    },
  ];

  const CardWrapper = styled.div`
    width: 100%;
    margin: auto;
   display:flex;
   
    @media (max-width: 768px) {
      width: 75%;
    }
    @media (max-width: 600px) {
      width: 85%;
    }
    @media (max-width: 435px) {
      width: 100%;
    }
  `;
  return (
    <Container fluid style={{margin:'0 auto 8rem auto',padding:'0',width:'90%' }}>

      <Stack direction='horizontal' className="px-5  justify-content-start align-items-center" gap={4}>
      <div style={{ color:'var(--tertiary-color)',width:'3px',transform:'scale(0.7)'}} className="vr"></div>
  <h1 style={{color:'var(--text-dark)',fontSize:'5rem'}} className="fw-bolder ">خدمات شورى</h1>
</Stack>
 
 <Grid container >
        {ServicesData.map((service, index) => {
          const { label, Image, subDescription, description } = service;

          return (
  <Grid className='mt-5' item xs={12} sm={6}  lg={3}  >
           
                <ServiceCard
                  label={label}
                  Image={Image}
                  subDescription={subDescription}
                  description={description}
                />
      </Grid>
             
          );
        })}
    </Grid>
    </Container>
  );
}
