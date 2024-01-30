import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Container, Row, Col, Card, Figure } from "react-bootstrap";
import Typography from "../atoms/Typography";
import { Icon } from "@iconify/react";


const TeamCard = styled(Card)`
  border-radius: 1rem !important;
  border: none !important;
  margin-bottom: 1rem;
  transition: all 0.2s ease-in-out;
  position: relative;
  @media (max-width:1200px){
  min-height:20rem;
  }
`;




export default function BoardOfDirectorSection() {
  const TEAM_MEMBERS = [
    {
      name: "أ/ صالح العساف",
      position: "شريك مؤسس والرئيس التنفيذي",
      image:
        "https://res.cloudinary.com/dzq0qjnxz/image/upload/v1599087231/team/team-1_qxzqjz.jpg",
      boi: "الأستاذ صالح العساف هو شريك مؤسس لشركة شورى والرئيس التنفيذي للشركة ورائد أعمال مهتم بالتقنية والاستثمار في الخدمات القانونية بأساليبها الجديدة ويطمح لتغيير خدمات الاستشارات القانونية للأفضل، ويؤمن بالعمل التطوعي وخدمة المجتمع. حصل صالح العساف على بكالوريوس الإدارة من جامعة فلوريدا الدولية (Florida International University) في الولايات المتحدة الامريكية وماجستير إدارة أعمال (MBA) من الولايات المتحدة الأمريكية. شغل عدة مناصب في عدة شركات وطنية ولدية الخبرة الكافية في تطوير الأعمال وقيادة الشركات.",
      value: "one",
      imageDisplay: <StaticImage
      src="./../../images/team/Saleh_alassaf.png"
      alt="Mohammad Aldakheel"
      placeholder="blurred"
      style={{borderRadius:'1rem' }}
      className="image "/>
    },
    {
      name: "د/محمد الدخيل",
      position: "شريك مؤسس ومدير تطوير الأعمال",
      image: "https://shwra.co/static/media/team/1.5f9f8f8f.jpg",
      boi: "الدكتور محمد الدخيل هو شريك مؤسس ومدير تطوير الأعمال في شركة شورى للخدمات والاستشارية القانونية في المملكة العربية السعودية، وحاصل على بكالوريوس إدارة مالية من جامعة الملك فهد للبترول والمعادن وماجستير ودكتوراه من جامعة سانت ماري ( Saint Mary’s University ) بالولايات المتحدة الأمريكية. يتمتع بأكثر من ٢٠ عاماً من الخبرة حيث ساهم في تأسيس عدد من الشركات الوطنية في مختلف المجالات وأشرف على تشغيلها. يشغل عدة مناصب منها رئيس مجلس إدارة شركة اكسي الخليج، وعضو مجلس إدارة شركة المنتجات الجاهزة، كما أنه عضو مجلس إدارة جمعية دماؤنا صدقة.",
      value: "two",
     
      imageDisplay:<StaticImage
                  src="./../../images/team/Mohammad_Aldakheel.png"
                  alt="Mohammad Aldakheel"
                  placeholder="blurred"
                  className="image"
      style={{borderRadius:'1rem' }}

                />
    
    },
    {
      name: "أ/عبد الله العامري",
      position: "شريك مؤسس ومدير الخدمات القانونية",
      image: "https://shwra.co/static/media/team/1.5f9f8f8f.jpg",
      boi: "الأستاذ عبد الله العامري هو شريك مؤسس ومدير الخدمات القانونية في شركة شورى للخدمات والاستشارية القانونية في المملكة العربية السعودية، وهو محامي مرخص من قبل وزارة العدل وعضو الهيئة السعودية للمحامين. حاصل على بكالوريوس قانون من كلية الحقوق في جامعة الملك سعود وحاصل أيضاً على ماجستير في القانون الدولي التجاري من جامعة تشابمان (Chapman University) بالولايات المتحدة الامريكية. شغل منصب شريك مؤسس في شركة الحمدان والعامري للمحاماة والاستشارات القانونية ولديه خبره واسعة في تأسيس الشركات، وهيكلتها، وعمليات الاندماج، والاستحواذ. هو أيضاً خبير في القانون العقاري ويمتلك الخبرات والمهارات الاحترافية في المرافعات والتحكيم والوساطة.",
      value: "three",
      imageDisplay:  <StaticImage
      src="./../../images/team/Abdullah_Alamri.png"
      alt="Mohammad Aldakheel"
      placeholder="blurred"
      className="image"
      style={{borderRadius:'1rem' }}

    />
    },
    {
      name: "أ/عبد العزيز الدخيل",
      position: "شريك مؤسس والمدير المالي",
      image: "https://shwra.co/static/media/team/1.5f9f8f8f.jpg",
      boi: "الأستاذ عبد العزيز الدخيل هو شريك مؤسس والمدير المالي في شركة شورى للخدمات والاستشارية القانونية في المملكة العربية السعودية. حاصل على شهادة البكالوريوس في الإدارة المالية من جامعة الملك فهد للبترول والمعادن وماجستير في الإدارة العامة (MBA) من الولايات المتحدة الامريكية. هو رائد أعمال وشريك مؤسس في عدة شركات وخبير إدارة مشاريع والتثمين العقاري",
      value: "four",
      imageDisplay:  <StaticImage
      src="./../../images/team/Abdualaziz_aldakheel.png"
      alt="Mohammad Aldakheel"
      placeholder="blurred"
      className="image"
      style={{borderRadius:'1rem' }}

    />
    },
    {
      name: "د/ضيف الله الودعاني",
      position: "شريك مؤسس ومدير تقنية المعلومات",
      image: "https://shwra.co/static/media/team/1.5f9f8f8f.jpg",
      boi: "الدكتور ضيف الله الودعاني هو شريك مؤسس ومدير تقنية المعلومات في شركة شورى للخدمات والاستشارات القانونية، حاصل على بكالوريوس في هندسة الحاسب من جامعة الملك فهد للبترول والمعادن وماجستير ودكتوراه في علوم الحاسب من جامعة Univeristy of Stirling من بريطانيا. وباحث في مجال الذكاء الاصطناعي وعلم البيانات  يتمتع بأكثر من 10 سنوات من الخبرة في مجال بناء المشاريع التقنية حيث ساهم في تأسيس عدد من الشركات التقنية وأشرف على قيادة الفريق الفني لها. يشغل عدة مناصب الإدارية والإستشارية مع عدد من جهات القطاع الحكومي والخاص. مهتم بالتحول التقني وذكاء الأعمال والتقنيات المالية.",
      value: "five",
      imageDisplay: <StaticImage
      src="./../../images/team/Daif.png"
      alt="Mohammad Aldakheel"
      placeholder="blurred"
      className="image"
      style={{borderRadius:'1rem' }}

    />
    },
  ];


  const [dekstopActive,setDekstopActive] = React.useState(0);

  return (
  <>
  <div  dir="rtl">
     <div style={{width:'95%'}} className='d-flex gap-5 mx-auto justify-content-between'>
         {
          TEAM_MEMBERS.map((TEAM_MEMBER,index)=>{
            return (
              <TeamCard style={{zIndex:dekstopActive === index && 999}}
              >
                 {TEAM_MEMBER.imageDisplay}
  
              { dekstopActive === index ? 
              <div className="Team-Active-Card">
<Icon color="white" fontSize={'2rem'} icon="eva:arrow-ios-downward-fill" />
              </div>
              :
               <Card.Body style={{cursor:'pointer',}} onClick={()=>setDekstopActive(index)} className='Team-Card-BodyWrapper'>
                  <Card.Title>
                    <Typography variant="h4" align="center">
                      {TEAM_MEMBER.name}
                    </Typography>
                  </Card.Title>
                  <Card.Text>
                    <Typography
                      variant="p"
                      align="center"
                      style={{ fontSize: 10 }}
                    >
                      {TEAM_MEMBER.position}
                    </Typography>
                  </Card.Text>
                </Card.Body>
                }
              </TeamCard>
            )
          })
         }
         
</div>

<div style={{marginTop:'-100px',zIndex:'998',position:'relative',border:'2px solid #8A8C74'}} className='d-flex flex-column rounded rounded-4 pb-3 justify-content-start ' dir='rtl'>
  <div style={{height:'144px'}}></div>
<div style={{marginTop:'2rem',width:'95%'}} className='d-flex flex-column mx-auto ' >

  <h1  className='TeamTitle' > {TEAM_MEMBERS[dekstopActive].name} </h1>

  <div style={{margin:'0 0 3rem 0',display:'inline-flex'}}>

  <span className='TeamSubTitle'>
    {TEAM_MEMBERS[dekstopActive].position}
  </span>

  </div>
  <span style={{color:'#173039ba',width:'75%',fontSize:'1.5rem'}}  className='WhyUsBody' >{TEAM_MEMBERS[dekstopActive].boi}</span>
</div>
</div>

</div>

</>
    
  );
}
