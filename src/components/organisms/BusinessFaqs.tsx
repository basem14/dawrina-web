import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components";
//
import Section from "../atoms/Section"
import Typography from "../atoms/Typography";
import Box from "../atoms/Box";
import { Media } from "../atoms/Media";
// Molecules
import StoreLinkGroup from "../molecules/StoreLinkGroup";
import SocialLinkGroup from "../molecules/SocialLinkGroup";
// react-bootstrap
import {
    Container,
    Row,
    Col,
    Button,
} from "react-bootstrap";
import Majors from "./Majors";
import BussinesFeatureSection from "./BussinesFeatureSection";
import Faqs from "../../pages/faqs";
import AccordionComp from "../atoms/AccordionComp";
import { Icon } from "@iconify/react";
import useMediaQuery from "../../hooks/useMediaQuery";


const BusinessAboutHeader = styled(Typography)`
    color: #DDB669;
    opacity:1;
    text-align:center;
    //margin-bottom: 2rem;
    font-size: 55px !important;
    /*font-weight: bold !important;*/

    //md
    @media (max-width: 1212px) {
        font-size: 45px !important;
    }

    @media (max-width: 991px) {
        font-size: 40px !important;
    }

    //sm
    @media (max-width: 575px) {
        font-size: 4.5rem !important;
    }

`;

const BusinessAboutTitle = styled(Typography)`
    font-size: 2.5rem;
    color: white;
    //margin-bottom: 2rem;
    font-size: 35px !important;
    /*font-weight: bold !important;*/

    //md
    @media (max-width: 1212px) {
        font-size: 25px !important;
    }

    @media (max-width: 991px) {
        font-size: 20px !important;
    }

    //sm
    @media (max-width: 575px) {
        font-size: 2.5rem !important;
    }

`;

const BusinessAboutparagraph = styled(Typography)`
  font-size: 17px;
  color: white;
  margin-bottom: 2rem;

  //md
  @media (max-width: 1212px) {
      font-size: 16px !important;
  }

  @media (max-width: 991px) {
      font-size: 15px !important;
  }

  //sm
  @media (max-width: 575px) {
      font-size: 15px !important;
  }
`;

const FormSubmitButton2 = styled(Button)`
    font-size: 17px !important;
    padding: 8px 35px !important;
    background: var(--bussiness-white-color) !important;
    border: 0 !important;  
    color:black !important ;
    border-radius: 29px !important;
    margin-top: 20px !important;
    margin-bottom: 20px !important;  
    &:hover {
        box-shadow: 0px 1px 5px 0px #9b9589;
        background: #cc9a28;
    }
    &:focus {
        box-shadow: 0px 1px 5px 0px #9b9589;
        background: #cc9a28;
    }
    &:active {
        box-shadow: 0px 1px 5px 0px #9b9589;
        background: #cc9a28;
    }
`;

const faqData = [

    {
        id: 1,
        head: "هل منصة شورى مرخصة؟",
        content: [
            `
      نعم، شورى شركة سعودية مسجلة في وزارة التجارة والاستثمار، وجميع المحامين القانونيين المسجلين في شورى مرخصين من قبل وزارة العدل برخصة سارية ونظامية.

      `,
        ],
    },
    {
        id: 2,
        head: "ماهي خيارات الدفع المتوفرة في شورى؟",
        content: [
            `خيارات الادفع متعددة و هي: مدى – أبل باي – فيزا – ماستر كارد – التقسيط عبر تمارا`,
        ],
    },
    {
        id: 2,
        head: "هل يمكن تقسيط تكاليف الخدمات القانونية؟",
        content: [`نعم، يمكن تقسيط الخدمات القانونية من خلال خدمة تمارا للتقسيط`],
    },

];

const faqData2 = [
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


export default function BusinessFaqs() {
    const [ShowMore,setShowMore] =  useState(false)
    const [data,setData] =  useState(faqData)
    const { isMobile } = useMediaQuery();

    useEffect(() => {
        if (ShowMore) {
            setData(faqData2)
        }
        else{
            setData(faqData)
        }
      }, [ShowMore]);

    return (
        <Section
            style={{
                background: '#07242E',

            }}
            id="about-business"
        >

            <Container fluid>
                <Row>
                    <Col xs={12} md={12}>
                        <BusinessAboutHeader
                            component="h1"
                            variant="h1"
                            className="mt-5"
                        >

                            الأسئلة الشائعة

                        </BusinessAboutHeader>

                    </Col>
                </Row>
                <Row>

                    {/** title */}
                    <div style={{ background: "radial-gradient(at 70% ,#0F242D1A 0%,#FBFBFB00 80%)" }}>
                        <div style={{ width:`${isMobile?"100%":"70%"}`, margin: '1rem 0' }} className=" mx-auto">
                            <Container fluid >
                                <Row >
                                    <Col sm={12} md={12} lg={12}  >
                                        <div style={{ width: '100%', minHeight: '65%' }}
                                            className=' d-flex flex-column align-middle justify-content-between mt-5 gap-4 mx-auto'
                                        >
                                            {
                                            data?.map((data, index) => {
                                                return (
                                                        <AccordionComp business={true} key={index} title={data.head} body={data.content.map(i => i)} />
                                                );
                                            })}
                                            
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div  onClick={()=>setShowMore(!ShowMore)} className="d-flex justify-content-center">
                        <FormSubmitButton2 onClick={()=> console.log("Heloo")}  >
                            {ShowMore ? "عرض اقل":"اعرف المزيد"} <Icon onClick={()=> console.log("Heloo")} icon="ant-design:left-outlined" />
                        </FormSubmitButton2>
                    </div>

                </Row>

            </Container>

        </Section>
    );
}
