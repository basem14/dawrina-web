import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import AccordionComp from "../components/atoms/AccordionComp";
import HeadingUnderLine from "../components/atoms/HeadingUnderLine";
import { Media } from "../components/atoms/Media";
import MobileNavigator from "../components/atoms/MobileNavigator";
import FooterMobile from "../components/MobileViewComponents/Footer/FooterMobile";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";
import ToolBarSection from "../components/organisms/ToolBarSection";
import WhatsappButton from "../components/atoms/WhatsappButton";
import MobileToolBarSection from "../components/MobileViewComponents/Toolbar/ToolbarMobile";

const ContainerStyle = styled(Container)`
margin:0 auto;
width:90% !important;
min-height:80vh;
@media (max-width:768px)
{
  width:95%
}
`
const Gradient = styled.div`
position:absolute;
top:0;
left:0;
background:linear-gradient(220deg,#DEE2F0 0%,#FBFBFB00 75%);
width:100%;
height:100%;
opacity:.4;
z-index:-1;
`

const Faqs = () => {


  const faqData = [
    {
      id: 1,
      head: "لمحة عن شورى",
      content: [
        "شورى هي منصة إلكترونية تجمع نخبة من المحامين المرخصين لتقديم الاستشارات والخدمات القانونية بكل يسر وسهولة وبجودة عالية.",
      ],
    },
    {
      id: 2,
      head: "هل منصة شورى مرخصة؟",
      content: [
        `
      نعم، شورى شركة سعودية مسجلة في وزارة التجارة والاستثمار، وجميع المحامين القانونيين المسجلين في شورى مرخصين من قبل وزارة العدل برخصة سارية ونظامية.

      `,
      ],
    },
    {
      id: 3,
      head: " كيف اطلب الاستشارة او الخدمات القانونية الأخرى؟",
      content: [
        `
      حمل تطبيق شورى للاستشارات القانونية لطلب الخدمة.
      `,
      ],
    },
    {
      id: 4,
      head: "كم تكلفة الخدمات القانونية؟",
      content: [
        `للاستشارات يوجد ثلاث باقات بسعر ثابت تبدا من 149 ريال، وللخدمات القانونية الأخرى بعد تحليل الخدمه القانونية يقوم المحامي بتسعير الخدمة وفقا لقيمتها الفعليه
      `,
      ],
    },
    {
      id: 5,
      head: "ماهي خيارات الدفع المتوفرة في شورى؟",
      content: [
        `خيارات الادفع متعددة و هي: مدى – أبل باي – فيزا – ماستر كارد – التقسيط عبر تمارا`,
      ],
    },
    {
      id: 6,
      head: "هل يمكن تقسيط تكاليف الخدمات القانونية؟",
      content: [`نعم، يمكن تقسيط الخدمات القانونية من خلال خدمة تمارا للتقسيط`],
    },
    {
      id: 7,
      head: "كيف يجب أن أستعد للاستشارة؟",
      content: [
        `أولاً: عندما تحجز استشارة، هناك مربع لكتابة شرح مبسط للاستشارة، لكي يتمكن المحامي من فهم القضية والاستعداد بشكل أفضل.`,
        `ثانياً: إرفاق الوثائق الداعمة.`,
        `وبعد الخطوات السابقة، يسفر ذلك عن استشارة قانونية أفضل.`,
      ],
    },
    {
      id: 8,
      head: "لماذا يجب أن أثق في شورى في قضيتي ؟",
      content: [
        `قرار اختيار المحامي المتخصص ذو الخبرة العالية قرار مهم وجزء أساسي في كل قضية وبالتالي، نحن نفهم أنه أمر حساس للغاية بالنسبة لك أن تختار المحامي المناسب الذي من شأنه أن يحدث فرقًا في قضيتك.`,
        `شورى هي منصة الكترونية تربط العملاء بمحامين متخصصين يتمتعون بالخبرة العالية، في شورى يقوم محامينا بتخصيص الموارد والوقت المناسبين لإدارة قضيتك.`,
      ],
    },
    {
      id: 9,
      head: "أين مقر شورى ؟",
      content: [
        `يمكن الاستفادة من خدمات شورى من أي مكان أنحاء المملكة العربية السعودية.`,
        `المقر الرئيسي لشركة شورى يقع في الرياض – حي الربيع – مجمع العالية بلازا`,
      ],
    },
    {
      id: 10,
      head: "هل المحامون مرخصون ؟",
      content: [
        `نعم، يرجى اتباع الخطوات التالية للتحقق:`,
        `•	الوصول إلى بوابة وزارة العدل.`,
        `•	حدد الخدمات الإلكترونية.`,
        `•	اختر خدمة (الاستفسار عن المحامين المرخصين).`,
        `•	تسجيل الدخول من خلال خدمة تسجيل الدخول الفردي الوطنية (SSO)`,
        `•	حدد خيار البحث وانقر على المدينة أو اسم المحامي.`,
        `•	بمجرد اختيار المدينة، ستظهر قائمة بالمحامين.`,
      ],
    },
    {
      id: 11,
      head: "كيف سيتم اطلاعي على سير قضيتي؟",
      content: [
        `من خلال تطبيق شورى، يمكنك تتبع مسار قضيتك مع المحامي الى نهاية القضية.`,
      ],
    },
    {
      id: 12,
      head: "هل يمكنني الاتصال مباشرة بالمحامي بعد الاستشارة",
      content: [
        `نعم، تتم جميع الاتصالات من خلال شورى إذا تمت الموافقة على مزيد من الخدمات، فسيتم تزويدك برقم المحامي  الخاص.`,
      ],
    },
  ];
  return (
    <>
    <ContainerStyle fluid >


  
<Media  at='sm'>
     <MobileNavigator link='/' title="الأسئلة الشائعة"/> 
</Media >
<Media  greaterThan="sm">
  <ToolBarSection business={false}/>
  <Header/>
  <div style={{ marginTop:'19rem' }}>
   <HeadingUnderLine title="الأسئلة الشائعة"/>
   </div>
 </Media>
        {faqData?.map((data, index) => {
          return (
         
            <AccordionComp business={false} key={index} title={data.head} body={data.content.map(i => i)}/>
        

          );
        })}
    </ContainerStyle>

    <div dir="rtl" style={{marginTop:'3rem'}}>
      <Media at='sm'>
        
    <FooterMobile/>
      </Media>
      <Media greaterThan="sm">
        <Footer/>
          </Media>
          
    </div>

    <Gradient>

    </Gradient>
    <WhatsappButton/>
    </>
  );
};

export default Faqs;
