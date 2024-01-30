import { Icon } from '@iconify/react';
import * as React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
// atoms
import Section from '../atoms/Section';
import SectionTitle from '../atoms/SectionTitle';
// molecules
import FeatureList from '../molecules/FeatureList';
import { Media } from '../atoms/Media';
import { StaticImage } from 'gatsby-plugin-image';


import Typography from '../atoms/Typography';






const OtherPlatformData = [
    {
        text: "صعوبة الوصول للمحامي المتخصص",
    },
    {
        text: "يخدم منطقة جغرافية واحدة",
    },
    {
        text: "ساعات عمل محدودة",
    },
    {
        text: "تفاوت عالي في أُجور المحامين",
    },
];

const ShwraPlatformData = [
    {
        text: "محامين مرخصين من وزارة العدل السعودية",
    },
    {
        text: "تنوع في المحامين وتخصصاتهم",
    },
    {
        text: "تخدم جميع مناطق المملكة العربية السعودية",
    },
    {
        text: "خصوصية عالية",
    },
    {
        text: "متواجدين 24 ساعة 7 أيام في الأسبوع",
    },
    {
        text: "ضمان التزام المحامين",
    },
    {
        text: "سهولة الحصول على الخدمة",
    },
    {
        text: "شورى بصف العميل دائماً",
    },
];

const featuresData = [

    {
        img: <StaticImage
            src='../../images/services/vuesax-linear-security-user.svg'
            alt='image'
            objectFit='contain'
            style={{ width: '30px', height: '30px' }} />,
        text: 'نخبة من المحامين المرخصين من وزارة العدل السعودية'
    },
    {
        img: <StaticImage
            src='../../images/services/vuesax-linear-security-connect.svg'
            alt='image'
            objectFit='contain'
            style={{ width: '30px', height: '30px' }} />,
        text: 'تواصل فعال مع المحامين'
    },
    {
        img: <StaticImage
            src='../../images/services/vuesax-linear-security-insuarnce.svg'
            alt='image'
            objectFit='contain'
            style={{ width: '30px', height: '30px' }} />,
        text: 'ضمان جودة و التزام المحامي مع الحفاظ على سرية وخصوصية بيانات العميل'

    },
    {
        img: <StaticImage
            src='../../images/services/vuesax-linear-security-law.svg'
            alt='image'
            objectFit='contain'
            style={{ width: '30px', height: '30px' }} />,
        text: 'اختيار المحامي الأنسب بحسب التخصص'
    },
    {
        img: <StaticImage
            src='../../images/services/vuesax-linear-security-accounting.svg'
            alt='image'
            objectFit='contain'
            style={{ width: '30px', height: '30px' }} />,
        text: 'توفير مدير حسابات خاص بالشركة'
    },




]
const featuresData2 = [

    {
        img: <StaticImage
            src='../../images/services/vuesax-linear-security-time.svg'
            alt='image'
            objectFit='contain'
            style={{ width: '30px', height: '30px' }} />,
        text: 'تواجد المحامين لخدمة العملاء ٢٤ ساعة ،و لجميع أنحاء المملكة'
    },
    {
        img: <StaticImage
            src='../../images/services/vuesax-linear-security-save.svg'
            alt='image'
            objectFit='contain'
            style={{ width: '30px', height: '30px' }} />,
        text: 'توفير الوقت والجهد في البحث عن محامين مختصين'
    },
    {
        img: <StaticImage
            src='../../images/services/vuesax-linear-security-archive.svg'
            alt='image'
            objectFit='contain'
            style={{ width: '30px', height: '30px' }} />,
        text: 'أرشفة جميع الطلبات والمستندات للرجوع لها في أي وقت'

    },
    {
        img: <StaticImage
            src='../../images/services/vuesax-linear-security-design.svg'
            alt='image'
            objectFit='contain'
            style={{ width: '30px', height: '30px' }} />,
        text: 'إمكانية تصميم الباقات السنوية حسب احتياج الشركة'
    },
    {
        img: <StaticImage
            src='../../images/services/vuesax-linear-security-price.svg'
            alt='image'
            objectFit='contain'
            style={{ width: '30px', height: '30px' }} />,
        text: 'أسعار منافسة'
    },




]


export default function BussinesFeatureSection() {
    return (


        <div style={{ background: "radial-gradient(at 70% ,#0F242D1A 0%,#FBFBFB00 80%)" }}>
                       <div style={{ width: "95%", margin: '1rem 0' }} className="BF-Card mx-auto">

                <Container fluid >
                    <Row >
                        <Col sm={12} md={5} lg={6}  >
                            <div style={{ width: '100%', minHeight: '65%' }}
                                className=' d-flex flex-column align-middle justify-content-between mt-5 gap-4 mx-auto'
                            >
                                {
                                    featuresData.map((data, ind) => {
                                        return (
                                            <div
                                                className='BF-TextWrapper'>
                                                {data.img}
                                                <Typography className='fw-bold me-md-5' variant='h3'>
                                                    {data.text}
                                                </Typography>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Col>
                        <Col sm={12} md={5} lg={6}  >
                            <div style={{ width: '100%', minHeight: '65%' }}
                                className=' d-flex flex-column align-middle justify-content-between mt-5 gap-4 mx-auto'
                            >
                                {
                                    featuresData2.map((data, ind) => {
                                        return (
                                            <div
                                                className='BF-TextWrapper'>
                                                {data.img}
                                                <Typography className='fw-bold me-md-5' variant='h3'>
                                                    {data.text}
                                                </Typography>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    );
}
