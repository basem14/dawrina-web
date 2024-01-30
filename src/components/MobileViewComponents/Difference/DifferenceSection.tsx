import { Icon } from "@iconify/react";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { Button, Stack } from "react-bootstrap";



import FormSubmitButton from "../../atoms/FormSubmitButton";

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

const DifferenceSection = () => {
  const [displayData, setDisplayData] = useState(ShwraPlatformData);
  const [ActiveTab, setActiveTab] = useState(0);

  const TabToggleHandler = (Num: number) => {
    setActiveTab(Num);
    if (Num === 1) {
      setDisplayData(OtherPlatformData);
    } else {
      setDisplayData(ShwraPlatformData);
    }
  };

  return (
    <Stack style={{background:'white'}} className="align-items-center ">
      <StaticImage
        src={"../../../images/Mobile/Group 14209.svg"}
        alt={" "}
        placeholder="blurred"
        style={{ width: 66, height: 66 }}
      />

<Stack direction='horizontal' className="px-1 mb-4 justify-content-center gap-3"  >
<div style={{border:'1px solid #F6EBD3',width:'10%'}} ></div>
<h1 style={{fontSize:'2.5rem',textAlign:'center'}}>          
          <span style={{ color: "var(--tertiary-color)",fontWeight:'bold' }}> لماذا شورى </span>
        </h1>
  <div style={{border:'1px solid #F6EBD3',width:'10%'}} className=" w-30"></div>
</Stack>

     

      <Stack className="Tab-Parent ">
        <button
          onClick={() => TabToggleHandler(0)}
          className={ActiveTab === 0 ? "Tab-Active" : "Tab-NotActive"}
        >
          منصة شورى
        </button>
        <button
          onClick={() => TabToggleHandler(1)}
          className={ActiveTab === 1 ? "Tab-Active" : "Tab-NotActive"}
        >مكاتب المحاماة التقليدية
          
        </button>
      </Stack>

      <ul style={{width:'100%',padding:'0 2rem'}}>
         {
            displayData.map((data,index)=>{
               return(
                  <>
                  <li className="Difference-List-Item">
                  <Icon style={{marginLeft:9}} fontSize={'1.2rem'} color='var(--tertiary-color)' icon="material-symbols:circle" />
                     {data.text}
                  </li>
                  <div  style={{ border: "1px solid rgb(222, 226, 240,0.4)",margin:'2.5rem 0',width:'100%' }}></div>
                  </>
               )
            })
         }
      </ul>
    </Stack>
  );
};

export default DifferenceSection;
