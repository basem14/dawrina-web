import React, { useEffect, useState } from "react";
import { Grid, Card, Paper, Stack, Tooltip, ClickAwayListener } from "@mui/material";



import { Media } from "../atoms/Media";
import Typography from "../atoms/Typography";
import { StaticImage } from "gatsby-plugin-image";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Link, navigate } from "gatsby";


const Majors = () => {
  const majorData = [
    {
      img: <StaticImage 
      className="Major-Img" 
      src='../../images/Majors/group (1).svg' 
      alt='image' 
      objectFit='contain'
      placeholder="blurred"/>,
      data: "الأحوال الشخصية",
      description:'All consultations related to the worker and the employer and the rights of each of them.'
    },
    {
      img: <StaticImage 
      className="Major-Img" 
      src='../../images/Majors/laborers.svg' 
      alt='image' 
      objectFit='contain'
      placeholder="blurred"/>,
      data: "الخلافات العمالية",
      description:'All consultations that are related to all commercial cases and their branches.'
    },
    {
      img: <StaticImage 
      className="Major-Img" 
      src='../../images/Majors/Path 20.svg' 
      alt='image' 
      objectFit='contain'
      placeholder="blurred"/>,
      data: "القضايا التجارية",
      description:'All consultations that are related to all commercial cases and their branches.'
    },
    {
      img:<StaticImage 
      className="Major-Img" 
      src='../../images/Majors/Group 962.svg' 
      alt='image' 
      objectFit='contain'
      placeholder="blurred"/>,
      data: "جرائم معلوماتية",
      description:'All consultations that are related to cases carried out through electronic devices.'
    },
    {
      img: <StaticImage 
      className="Major-Img" 
      src='../../images/Majors/Loan.svg' 
      alt='image' 
      objectFit='contain'
      placeholder="blurred"/>,
      data: "القضايا العقارية",
      description:'All consultations related to real estate and the rights of the seller and buyer.'
    },
    // -----
    {
      img: <StaticImage 
      className="Major-Img" 
      src='../../images/Majors/budget@2x.png' 
      alt='image' 
      objectFit='contain'
      placeholder="blurred"/>,
      data: "القضايا التمويلية",
      description:'All cases are related to financing companies, banks, financial leasing companies, and other financing agencies.'
    },
    {
      img: <StaticImage 
      className="Major-Img" 
      src='../../images/Majors/give@2x.png' 
      alt='image' 
      objectFit='contain'
      placeholder="blurred"/>,
      data: "الزكاة والضريبة",
      description:'All consultations related to VAT and the rules and regulations that stipulate how, when, and how much must be paid in taxes in the K.S.A.'
    },
    {
      img:  <StaticImage 
      className="Major-Img" 
      src='../../images/Majors/compliant@2x.png' 
      alt='image' 
      objectFit='contain'
      placeholder="blurred"/>,
      data: "القضايا التأمينية",
      description:'All lawsuits between insurance companies and the beneficiaries, either individual or companies.'
    },
    {
      img: <StaticImage 
      className="Major-Img" 
      src='../../images/Majors/medical wqd@2x.png' 
      alt='image' 
      objectFit='contain'
      placeholder="blurred"/>,
      data: "الاخطاء الطبية",
      description:'Medical errors '
    },
    {
      img: <StaticImage 
      className="Major-Img" 
      src='../../images/Majors/mortgage.svg' 
      alt='image' 
      objectFit='contain'
      placeholder="blurred"/>,
      data: "قسمة التركات",
      description:'Division of the financial estates '
    },
    // -----
    {
      img:  <StaticImage 
      className="Major-Img" 
      src='../../images/Majors/jail (1)@2x.png' 
      alt='image' 
      objectFit='contain'
      placeholder="blurred"/>,
      data: "القضايا الجنائية",
      description:'All consultations related to criminal offenses and the rights of the accused and the victim.'
    },
    {
      img: <StaticImage 
      className="Major-Img" 
      src='../../images/Majors/will@2x.png' 
      alt='image' 
      objectFit='contain'
      placeholder="blurred"/>,
      data: "الأوقاف والوصايا",
      description:'These are the lawsuits filed against the endower or the testator or their heirs regarding (establishing or nullifying the endowment or will), or filed against the principal regarding (establishing entitlement or handing it over - holding the principal accountable or dismissing him).'
    },
   
    {
      img: <StaticImage 
      className="Major-Img" 
      src='../../images/Majors/accident@2x.png' 
      alt='image' 
      objectFit='contain'
      placeholder="blurred"/>,
      data: "الحوادث المرورية",
      description:'It is a claim arising from an incident in which one of the parties involved a moving vehicle and resulted in human or material damages unintentionally.'
    },
    {
      img: <StaticImage 
      className="Major-Img" 
      src='../../images/Majors/fraud@2x.png' 
      alt='image' 
      objectFit='contain'
      placeholder="blurred"/>,
      data: "النصب والاحتيال",
      description:'Fraud and scam '
    },
    {
      img: <StaticImage 
      className="Major-Img" 
      src='../../images/Majors/management@2x.png' 
      alt='image' 
      objectFit='contain'
      placeholder="blurred"/>,
      data: "القضايا الادارية",
      description:'It is a claim arising from an incident in which one of the parties involved a moving vehicle and resulted in human or material damages unintentionally.'
    },
  ];


  const { isMobile } = useMediaQuery();
  const [open, setOpen] = React.useState(false);

  const [tooltipNumber,setTooltipNumber] = useState(-1);
  const [tooltipTimerId, setTooltipTimerId] =  useState<any>(null);

  const tooltipHandler = (i:number) => {

    clearTimeout(tooltipTimerId); // Clear the previous timeout

    setTooltipNumber(i);

    const newTimerId = setTimeout(() => {
      setTooltipNumber(-1);
    }, 2000);

    setTooltipTimerId(newTimerId);
  };


 

  return (

  <div style={{  background:"radial-gradient(at 70% ,#0F242D1A 0%,#FBFBFB00 80%)"}}>

    <div style={{ width: "90%",margin:'12rem 0' }} className="mx-auto">

<Media at='sm'>

<Stack direction='row'  className="px-1 my-5 mx-auto justify-content-start align-items-center" gap={2}>
      <div style={{ color:'var(--tertiary-color)',width:'3px',transform:'scale(0.8)'}} className="vr"></div>
      <h1 style={{color:'var(--text-dark)',fontSize:'3rem'}} className="fw-bolder "> التخصصات </h1>

</Stack>

</Media>

<Media greaterThan='sm'>

   <Stack direction='row'  className="px-5 my-5 mx-auto justify-content-start align-items-center" gap={4}>
      <div style={{ color:'var(--tertiary-color)',width:'3px',transform:'scale(0.8)'}} className="vr"></div>
      <h1 style={{color:'var(--text-dark)',fontSize:'4rem'}} className="fw-bolder "> التخصصات </h1>

</Stack>
</Media>

      <Grid className='mx-auto' container 
      rowSpacing={3}
      sx={{ width:{ xs:'100%', md:'70%' } }}
      >
        {majorData?.map((data, ind) => {
          return (
            <Grid  item sx={{ px: { xs:'4px', md:'12px' } }}
             key={ind}  xs={4}  lg={3} xl={2.4} 
             >

              <Paper elevation={0}  
              className='Major-Card mx-auto'>

         

          <Tooltip  
          open={tooltipNumber === ind}  
          PopperProps={{
            sx: {
             
              "& .MuiTooltip-tooltip": {
               fontSize:'1.3rem',
               bgcolor:'white',
               color:'black',
              boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' 
              } 
            }
          }}
          title={ data.description }  
           placement="bottom-start">

            <div  onClick={()=> tooltipHandler(ind)} style={{ display:'inline-flex',cursor:'pointer' }}>
              <StaticImage
               onClick={()=> console.log("Heloo")} 
                 src='../../images/Majors/Group 23187@2x.png' 
                 alt='image' 
                 objectFit='contain'
                 style ={{ width:'30px',height:'30px', }}/>  
              </div>
              
           </Tooltip>

        
                <Stack sx={{ cursor:'pointer' }} onClick={()=> navigate('/LegalAdvisor')} justifyContent="center" alignItems="center">
                 {data.img}
                  <Typography className="Major-text" variant="h4"> 
                    {data.data}
                  </Typography> 
                </Stack>

              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
    </div>
  );
};

export default Majors;

