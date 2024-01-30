import React, { useEffect, useState } from "react";
import { Grid, Card, Paper, Stack, Tooltip, ClickAwayListener } from "@mui/material";



import { Media } from "../atoms/Media";
import Typography from "../atoms/Typography";
import { StaticImage } from "gatsby-plugin-image";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Link, navigate } from "gatsby";
import styled from "styled-components";
import { More } from "@mui/icons-material";


const ServicesBussiness= () => {
    const Title = styled.h5`
    color: var(--text-dark);
    font: normal normal 600 13px/16px IBM Plex Sans Arabic !important;
    margin-bottom: 1rem;
    margin-inline-end: 20px !important;
    @media (min-width:768px)
    {
    font-size:1.8rem;
    font-weight:700;
  
    }
  `;

    const FeatureItem = styled.h5`
    color: #8A8C99;
    opacity:.5;
    margin-inline-end: 20px!important;
    
    font: normal normal normal 12px/20px IBM Plex Sans Arabic;
    @media (min-width:768px)
    {
    font-size:1.2rem;
    font-weight:500;
//     overflow: hidden;
//    display: -webkit-box;
//    -webkit-line-clamp: 2; /* number of lines to show */
//            line-clamp: 2; 
//    -webkit-box-orient: vertical;
  
    }
    @media (max-width:500px)
    {
    font-size:1.2rem;
    font-weight:500;
    margin-inline-end: 0px!important;
//     overflow: hidden;
//    display: -webkit-box;
//    -webkit-line-clamp: 1; /* number of lines to show */
//            line-clamp: 1; 
//    -webkit-box-orient: vertical;
  
    }
  `;
    const majorData = [
        {
            img: <StaticImage
                className="Services-Img"
                src='../../images/services/Serv1.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "الاستشارات القانونية",
            subTitle:"نقوم بتقديم الاستشارات القانونية والشرعية للعمـــــــــلاء في كافة الأنظمة",
            description: 'نقوم بتقديم الاستشارات القانونية والشرعية للعمـــــــــلاء في كافة الأنظمة والإجراءات بما يضمن سلامة قرارتهم وخطوات تنفيذها .'
        },
        {
            img: <StaticImage
                className="Services-Img"
                src='../../images/services/Serv2.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "التمثيل القضائي ",
            subTitle:"تمثيل العملاء في كافة أنواع القضايا بكل مراحل الدعوى في درجات التقاضي المختلفة..",
            description: 'تمثيل العملاء في كافة أنواع القضايا بكل مراحل الدعوى في درجات التقاضي المختلفة، في محاكم وزارة العدل وكتابة المذكرات وإعداد لوائح الدعاوى واللوائح للدفاع عن كافة الحقوق سواء للأفراد أو الشركات ومتابعة إجراءات التقاضي حتى انتهائها بحكم نهائي واستكمال إجراءات التنفيذ.'
        },
        {
            img: <StaticImage
                className="Services-Img"
                src='../../images/services/Serv3.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "التوثيق",
            description: 'إقرار بالوثائق (أي التوقيع بحضور شاهد أنك وقعت أو شاهدت شخصًا آخر يوقع شيئًا ما) ؛ يشهد التوقيعات أخذ الإقرارات. توثيق عقود التأسيسالتاسيس للشركات والمؤسسات بمختلف انواعها .',
            subTitle: 'إقرار بالوثائق (أي التوقيع بحضور شاهد أنك وقعت أو شاهدت شخصًا آخر يوقع شيئًا ما) ؛'
        },
        {
            img: <StaticImage
                className="Services-Img"
                src='../../images/services/Serv4.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "صياغة ومراجعة العقود",
            description: 'نقوم بالإعداد والصياغة القانونية للعقود بأنواعها، بما فيها عقود المقاولات والتوريد و عقود الاستثمار، بالإضافة إلى الاتفاقيات ومذكــــــــــرات التفاهم ومراجعتها وتدقيقها.',
            subTitle: 'نقوم بالإعداد والصياغة القانونية للعقود بأنواعها، بما فيها عقود المقاولات والتوريد ..',

        },
        {
            img: <StaticImage
                className="Services-Img"
                src='../../images/services/Serv5.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "العلامات التجارية والملكية الفكرية",
            description: 'هي الإبداعات التي تكون على شكل أسماء، كلمات ، إمضاءات، حروف، رموز، وأرقام، عناوين، وأختام، وكذلك التصميمات والرسوم والصور، والنقوش المميزة',
            subTitle:'هي الإبداعات التي تكون على شكل أسماء، كلمات ، إمضاءات، حروف، رموز، وأرقام،'
        },
        {
            img: <StaticImage
                className="Services-Img"
                src='../../images/services/Serv6.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "التحكيم",
            description:'يعتبر التحكيم من أكثر الوسائل تفضيلاً لدى المستثمرين لتسوية المنازعات. ولذا يهدف المركز إلى خلق بيئة نظامية آمنة وجاذبة للاستثمار الأجنبي والمحلي في المملكة العربية السعودية.',
            subTitle: 'يعتبر التحكيم من أكثر الوسائل تفضيلاً لدى المستثمرين لتسوية المنازعات. ولذا يهدف المركز..'
        },
        {
            img: <StaticImage
                className="Services-Img"
                src='../../images/services/Serv7.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "محاسبة قانونية",
            description: 'المحاسبة القانونية تخصصت بالكشف عن أي مخالفات قانونية متعلقة بالأنشطة والأعمال المالية للشركات وأصحاب الأعمال. فتطبق المحاسبة القانونية نظام معين يقوم على متابعة وتسجيل وتحليل القوائم المالية والبيانات المحاسبية داخل الشركات ومن ثم الحصول على تقارير موثوقة وسليمة لهذه الشركات.',
            subTitle: 'المحاسبة القانونية تخصصت بالكشف عن أي مخالفات قانونية متعلقة بالأنشطة والأعمال..'
        },
        {
            img: <StaticImage
                className="Services-Img"
                src='../../images/services/Serv8.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "حوكمة الشركات",
            description: 'من خلال ضبط القوانين والمعايير التي تحدد العلاقة بين إدارة الشركة من ناحية و الأطراف المرتبطة بالشركة',
            subTitle:'من خلال ضبط القوانين والمعايير التي تحدد العلاقة بين إدارة الشركة من ناحية و الأطراف..',
        },

        {
            img: <StaticImage
                className="Services-Img"
                src='../../images/services/Serv9.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "تحصيل المبالغ",
            description: 'متابعة مدفوعات الديون المستحقة على الأفراد أو الشركات أو البنوك',
            subTitle: ' متابعة مدفوعات الديون المستحقة على الأفراد أو الشركات أو البنوك'

        },

        {
            img: <StaticImage
                className="Services-Img"
                src='../../images/services/Serv10.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "الاندماجات والاستحواذات",
            description: 'يعني استحواذ الشركات، السيطرة المالية والإدارية لأحد الشركات على نشاط شركة أخرى, والاندماج إما يكون بطريق الضم بحل الشركة ونقل أموالها إلى شركة أخرى قائمة أو بطريق المزج',
            subTitle: 'يعني استحواذ الشركات، السيطرة المالية والإدارية لأحد الشركات على نشاط شركة..'

        },

        {
            img: <StaticImage
                className="Services-Img"
                src='../../images/services/Serv11.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "حل منازعات الشركاء والشركات",
            description: 'حل المنازعات بالطرق الودية أو عن طريق التقاضي.',
            subTitle: 'حل المنازعات بالطرق الودية أو عن طريق التقاضي.'

        },

        {
            img: <StaticImage
                className="Services-Img"
                src='../../images/services/Serv12.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "التسويات الودية",
            description: 'العمل على تسوية الخلافات التي تنشأ بين أصحاب الامتياز التجاري ومانحيه بالطرق الودية للنظر في كافة أنواع النزاعات الناشئة بينهم بشكل ودي لضمان سرعة الإجراءات وتجنب اللجوء إلى المحاكم التقليدية.',
            subTitle: 'العمل على تسوية الخلافات التي تنشأ بين أصحاب الامتياز التجاري ومانحيه بالطرق..'
        },
        {
            img: <StaticImage
                className="Services-Img"
                src='../../images/services/Serv13 1.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "الشراكة بين القطاعين العام والخاص",
            description: 'اتفاقية تعاون بين وكالة حكومية ومؤسسة خاصة؛ توفر هذه الشراكة إمكانية تبادل الخبرات والأصول لكل من الطرفين لتقديم خدمة أو منتج للمنفعة العامة.',
            subTitle: 'اتفاقية تعاون بين وكالة حكومية ومؤسسة خاصة؛ توفر هذه الشراكة إمكانية تبادل..'

        },
        {
            img: <StaticImage
                className="Services-Img"
                src='../../images/services/Serv17.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "التراخيص",
            description: 'خدمة تتيح للمواطنين إصدار رخصة لمزاولة الأنشطة التجارية بشكل فوري بما يتوافق مع الاشتراطات الخاصة بالرخص الفورية، كما تتيح هذه الخدمة متابعة إجراءات الرخص.',
            subTitle: 'خدمة تتيح للمواطنين إصدار رخصة لمزاولة الأنشطة التجارية بشكل فوري بما يتوافق..',

        },

        {
            img: <StaticImage
                className="Services-Img"
                src='../../images/services/Serv16.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "تأسيس الشركات",
            description: 'تقدم هذه الخدمة لمساعدة المنشآت الجديدة تجميع المستندات اللازمة والدعم الشامل للمعاملات. سوف نكون معك خلال عملية تشكيل الشركة بأكملها، من اختيار اسم شركتك، وصولاً إلى إرسال طلبك إلى وزارة الاستثمار السعودية.',
            subTitle: 'تقدم هذه الخدمة لمساعدة المنشآت الجديدة تجميع المستندات اللازمة والدعم الشامل..',

        },
        {
            img: <StaticImage
                className="Services-Img"
                src='../../images/services/Serv14.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "الأدراج و أسواق المال",
            description: 'أن تقوم الشركة ببيع أسهمها للجمهور العام. يسمح ذلك للشركة بتحصيل الأموال من المستثمرين، والتي يمكن استخدامها لتمويل نمو الشركة أو توسيعها أو لشراء شركات أخرى',
            subTitle: 'أن تقوم الشركة ببيع أسهمها للجمهور العام. يسمح ذلك للشركة بتحصيل الأموال من..'

        },

        {
            img: <StaticImage
                className="Services-Img"
                src='../../images/services/Serv15.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "الترافع والقضايا",
            description: 'القضايا (العمالية، الجنائية، التجارية، الإدارية، المرورية، قضايا التنفيذ) ,الترافع أمام كافة الجهات القضائية وشبه القضائية على اختلاف أنواعها ودرجاتها.',
            subTitle: 'القضايا (العمالية، الجنائية، التجارية، الإدارية، المرورية، قضايا التنفيذ) ,الترافع أمام كافة..'

        },

    ];

    const majorDataMob = [
        {
            img: <StaticImage
                className="Services-Img-mobile"
                src='../../images/services/Serv1.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "الاستشارات القانونية",
            subTitle:"نقوم بتقديم الاستشارات القانونية والشرعية للعمـــــــــلاء في كافة الأنظمة",
            description: 'نقوم بتقديم الاستشارات القانونية والشرعية للعمـــــــــلاء في كافة الأنظمة والإجراءات بما يضمن سلامة قرارتهم وخطوات تنفيذها .'
        },
        {
            img: <StaticImage
                className="Services-Img-mobile"
                src='../../images/services/Serv2.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "التمثيل القضائي ",
            subTitle:"تمثيل العملاء في كافة أنواع القضايا بكل مراحل الدعوى في درجات التقاضي المختلفة..",
            description: 'تمثيل العملاء في كافة أنواع القضايا بكل مراحل الدعوى في درجات التقاضي المختلفة، في محاكم وزارة العدل وكتابة المذكرات وإعداد لوائح الدعاوى واللوائح للدفاع عن كافة الحقوق سواء للأفراد أو الشركات ومتابعة إجراءات التقاضي حتى انتهائها بحكم نهائي واستكمال إجراءات التنفيذ.'
        },
        {
            img: <StaticImage
                className="Services-Img-mobile"
                src='../../images/services/Serv3.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "التوثيق",
            description: 'إقرار بالوثائق (أي التوقيع بحضور شاهد أنك وقعت أو شاهدت شخصًا آخر يوقع شيئًا ما) ؛ يشهد التوقيعات أخذ الإقرارات. توثيق عقود التأسيسالتاسيس للشركات والمؤسسات بمختلف انواعها .',
            subTitle: 'إقرار بالوثائق (أي التوقيع بحضور شاهد أنك وقعت أو شاهدت شخصًا آخر يوقع شيئًا ما) ؛'
        },
        {
            img: <StaticImage
                className="Services-Img-mobile"
                src='../../images/services/Serv4.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "صياغة ومراجعة العقود",
            description: 'نقوم بالإعداد والصياغة القانونية للعقود بأنواعها، بما فيها عقود المقاولات والتوريد و عقود الاستثمار، بالإضافة إلى الاتفاقيات ومذكــــــــــرات التفاهم ومراجعتها وتدقيقها.',
            subTitle: 'نقوم بالإعداد والصياغة القانونية للعقود بأنواعها، بما فيها عقود المقاولات والتوريد ..',

        },
        {
            img: <StaticImage
                className="Services-Img-mobile"
                src='../../images/services/Serv5.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "العلامات التجارية والملكية الفكرية",
            description: 'هي الإبداعات التي تكون على شكل أسماء، كلمات ، إمضاءات، حروف، رموز، وأرقام، عناوين، وأختام، وكذلك التصميمات والرسوم والصور، والنقوش المميزة',
            subTitle:'هي الإبداعات التي تكون على شكل أسماء، كلمات ، إمضاءات، حروف، رموز، وأرقام،'
        },
        {
            img: <StaticImage
                className="Services-Img-mobile"
                src='../../images/services/Serv6.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "التحكيم",
            description:'يعتبر التحكيم من أكثر الوسائل تفضيلاً لدى المستثمرين لتسوية المنازعات. ولذا يهدف المركز إلى خلق بيئة نظامية آمنة وجاذبة للاستثمار الأجنبي والمحلي في المملكة العربية السعودية.',
            subTitle: 'يعتبر التحكيم من أكثر الوسائل تفضيلاً لدى المستثمرين لتسوية المنازعات. ولذا يهدف المركز..'
        },
        {
            img: <StaticImage
                className="Services-Img-mobile"
                src='../../images/services/Serv7.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "محاسبة قانونية",
            description: 'المحاسبة القانونية تخصصت بالكشف عن أي مخالفات قانونية متعلقة بالأنشطة والأعمال المالية للشركات وأصحاب الأعمال. فتطبق المحاسبة القانونية نظام معين يقوم على متابعة وتسجيل وتحليل القوائم المالية والبيانات المحاسبية داخل الشركات ومن ثم الحصول على تقارير موثوقة وسليمة لهذه الشركات.',
            subTitle: 'المحاسبة القانونية تخصصت بالكشف عن أي مخالفات قانونية متعلقة بالأنشطة والأعمال..'
        },
        {
            img: <StaticImage
                className="Services-Img-mobile"
                src='../../images/services/Serv8.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "حوكمة الشركات",
            description: 'من خلال ضبط القوانين والمعايير التي تحدد العلاقة بين إدارة الشركة من ناحية و الأطراف المرتبطة بالشركة',
            subTitle:'من خلال ضبط القوانين والمعايير التي تحدد العلاقة بين إدارة الشركة من ناحية و الأطراف..',
        },

        {
            img: <StaticImage
                className="Services-Img-mobile"
                src='../../images/services/Serv9.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "تحصيل المبالغ",
            description: 'متابعة مدفوعات الديون المستحقة على الأفراد أو الشركات أو البنوك',
            subTitle: ' متابعة مدفوعات الديون المستحقة على الأفراد أو الشركات أو البنوك'

        },

        {
            img: <StaticImage
                className="Services-Img-mobile"
                src='../../images/services/Serv10.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "الاندماجات والاستحواذات",
            description: 'يعني استحواذ الشركات، السيطرة المالية والإدارية لأحد الشركات على نشاط شركة أخرى, والاندماج إما يكون بطريق الضم بحل الشركة ونقل أموالها إلى شركة أخرى قائمة أو بطريق المزج',
            subTitle: 'يعني استحواذ الشركات، السيطرة المالية والإدارية لأحد الشركات على نشاط شركة..'

        },

        {
            img: <StaticImage
                className="Services-Img-mobile"
                src='../../images/services/Serv11.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "حل منازعات الشركاء والشركات",
            description: 'حل المنازعات بالطرق الودية أو عن طريق التقاضي.',
            subTitle: 'حل المنازعات بالطرق الودية أو عن طريق التقاضي.'

        },

        {
            img: <StaticImage
                className="Services-Img-mobile"
                src='../../images/services/Serv12.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "التسويات الودية",
            description: 'العمل على تسوية الخلافات التي تنشأ بين أصحاب الامتياز التجاري ومانحيه بالطرق الودية للنظر في كافة أنواع النزاعات الناشئة بينهم بشكل ودي لضمان سرعة الإجراءات وتجنب اللجوء إلى المحاكم التقليدية.',
            subTitle: 'العمل على تسوية الخلافات التي تنشأ بين أصحاب الامتياز التجاري ومانحيه بالطرق..'
        },
        {
            img: <StaticImage
                className="Services-Img-mobile"
                src='../../images/services/Serv13 1.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "الشراكة بين القطاعين العام والخاص",
            description: 'اتفاقية تعاون بين وكالة حكومية ومؤسسة خاصة؛ توفر هذه الشراكة إمكانية تبادل الخبرات والأصول لكل من الطرفين لتقديم خدمة أو منتج للمنفعة العامة.',
            subTitle: 'اتفاقية تعاون بين وكالة حكومية ومؤسسة خاصة؛ توفر هذه الشراكة إمكانية تبادل..'

        },
        {
            img: <StaticImage
                className="Services-Img-mobile"
                src='../../images/services/Serv17.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "التراخيص",
            description: 'خدمة تتيح للمواطنين إصدار رخصة لمزاولة الأنشطة التجارية بشكل فوري بما يتوافق مع الاشتراطات الخاصة بالرخص الفورية، كما تتيح هذه الخدمة متابعة إجراءات الرخص.',
            subTitle: 'خدمة تتيح للمواطنين إصدار رخصة لمزاولة الأنشطة التجارية بشكل فوري بما يتوافق..',

        },

        {
            img: <StaticImage
                className="Services-Img-mobile"
                src='../../images/services/Serv16.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "تأسيس الشركات",
            description: 'تقدم هذه الخدمة لمساعدة المنشآت الجديدة تجميع المستندات اللازمة والدعم الشامل للمعاملات. سوف نكون معك خلال عملية تشكيل الشركة بأكملها، من اختيار اسم شركتك، وصولاً إلى إرسال طلبك إلى وزارة الاستثمار السعودية.',
            subTitle: 'تقدم هذه الخدمة لمساعدة المنشآت الجديدة تجميع المستندات اللازمة والدعم الشامل..',

        },
        {
            img: <StaticImage
                className="Services-Img-mobile"
                src='../../images/services/Serv14.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "الأدراج و أسواق المال",
            description: 'أن تقوم الشركة ببيع أسهمها للجمهور العام. يسمح ذلك للشركة بتحصيل الأموال من المستثمرين، والتي يمكن استخدامها لتمويل نمو الشركة أو توسيعها أو لشراء شركات أخرى',
            subTitle: 'أن تقوم الشركة ببيع أسهمها للجمهور العام. يسمح ذلك للشركة بتحصيل الأموال من..'

        },

        {
            img: <StaticImage
                className="Services-Img-mobile"
                src='../../images/services/Serv15.svg'
                alt='image'
                objectFit='contain'
                placeholder="blurred" />,
            data: "الترافع والقضايا",
            description: 'القضايا (العمالية، الجنائية، التجارية، الإدارية، المرورية، قضايا التنفيذ) ,الترافع أمام كافة الجهات القضائية وشبه القضائية على اختلاف أنواعها ودرجاتها.',
            subTitle: 'القضايا (العمالية، الجنائية، التجارية، الإدارية، المرورية، قضايا التنفيذ) ,الترافع أمام كافة..'

        },

    ];

    const { isMobile } = useMediaQuery();
    const [open, setOpen] = React.useState(false);

    const [tooltipNumber, setTooltipNumber] = useState(-1);
    const [tooltipTimerId, setTooltipTimerId] = useState<any>(null);
    const [more, setMore] = React.useState(false);


    const tooltipHandler = (i: number) => {

        clearTimeout(tooltipTimerId); // Clear the previous timeout

        setTooltipNumber(i);

        const newTimerId = setTimeout(() => {
            setTooltipNumber(-1);
        }, 2000);

        setTooltipTimerId(newTimerId);
    };

    const ServicesItem = ({data,ind}:any) => {

        return(
            <Grid item sx={{ px: { xs: '10px', md: '12px' } }}
            key={ind} xs={12} lg={3} xl={3} md={6}
        >

            <Paper elevation={0}
                className={` mx-auto ${more ? "Services-Card-Bussiness-more" : "Services-Card-Bussiness"}` }>
                <Tooltip
                    open={tooltipNumber === ind}
                    PopperProps={{
                        sx: {

                            "& .MuiTooltip-tooltip": {
                                fontSize: '1.3rem',
                                bgcolor: 'white',
                                color: 'black',
                                boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'
                            }
                        }
                    }}
                    title={data.description}
                    placement="bottom-start">

                    <div onClick={() => tooltipHandler(ind)} style={{ display: 'inline-flex', cursor: 'pointer' }}>
                        <StaticImage
                            onClick={() => console.log("Heloo")}
                            src='../../images/services/Group 23187@2x.png'
                            alt='image'
                            objectFit='contain'
                            style={{ width: '30px', height: '30px', }} />
                    </div>

                </Tooltip>


                <Stack sx={{ cursor: 'pointer' }} onClick={()=>setMore(!more)} justifyContent="center" alignItems="center" flexDirection="row">
                    {data.img}
                    <div className ={`Services-Card-Bottom-bussiness ${more ? "Services-Card-Bottom-bussiness-more" : ""}`} >
                        <Title >{data.data}</Title>
                        <FeatureItem >
                            {
                            more?
                            data.description
                            :
                            data.subTitle
                            }
                        </FeatureItem>
                        <span
                            className='fs-5'
                            style={{ cursor: 'pointer', color: '#07242E' }}>
                           {!more?" اعرف المزيد" :"عرض اقل"}{"  >  "}
                        </span>

                    </div>
                </Stack>

            </Paper>
        </Grid>
        )
      
    }

    const ServicesItemMobile = () => {
        const [moreM, setMoreM] = React.useState(false);

        return (
            <div className="scrolling-wrapper-flexbox">
                {majorDataMob?.map((data, ind) => {
                    return (
                        // <ServicesItem key={ind} data={data} ind={ind}/>
                        <Paper elevation={0}
                            className={"mobile-serv"}>

                            <Stack sx={{ cursor: 'pointer' }} onClick={() => setMoreM(!moreM)} justifyContent="center" alignItems="center" >
                                {data.img}
                                <div className={`Services-Card-Bottom-bussiness ${moreM ? "Services-Card-Bottom-bussiness-more" : ""}`} >
                                    <Title >{data.data}</Title>
                                    <FeatureItem >
                                        {
                                            moreM
                                                ?
                                            data.description
                                                :
                                             data.subTitle
                                        }
                                    </FeatureItem>
                                    <span
                                        className='fs-5'
                                        style={{ cursor: 'pointer', color: '#07242E' }}>
                                        {!moreM ? " اعرف المزيد" : "عرض اقل" }{"  >  "}
                                    </span>

                                </div>
                                <StaticImage
                                    onClick={() => console.log("Heloo")}
                                    src='../../images/services/Group 23187@2x.png'
                                    alt='image'
                                    objectFit='contain'
                                    style={{ width: '30px', height: '30px', }} />
                            </Stack>

                        </Paper>
                    );
                })}
            </div>
        )

    }


    return (

        <div style={{ background: "radial-gradient(at 70% ,#0F242D1A 0%,#FBFBFB00 80%)" }}>

            {isMobile ?
                <ServicesItemMobile/>
           :

            <div style={{ width: "95%", margin: '1rem 0' }} className="BF-Card mx-auto">
                <Grid className='mx-auto' container
                    rowSpacing={4}
                    columnSpacing={2}
                    sx={{ width: { xs: '100%', md: '100%' } }}
                >
                    {majorData?.map((data, ind) => {
                        return (
                            <ServicesItem key={ind} data={data} ind={ind}/>
                        );
                    })}
                </Grid>
            </div>
            }
        </div>
    );
};

export default ServicesBussiness;

