import * as React from "react"
// components
import HeroSection from "../components/organisms/HeroSection"
// new
import { Media } from "../components/atoms/Media"
import { Helmet } from "react-helmet"
import '../styles/MobileView.css'
//Css For Mobile
const IndexPage = () => {


  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="تابع توقعك🤩
مع تطبيق #دورينا تقدر تتوقع وتربح جائزة أسبوعية بعدد نقاطك .. حمل تطبيق دورينا الحين ✨" />
        <meta name="keywords" content="دورينا" />
        <meta name="keywords" content="دورينا
الدوري السعودي
دوري روشن
" />
        <title>دورينا | تابع الدوري السعودي | نافس اصدقائك</title>
      </Helmet>
    <div className="main-container" dir="ltr" >
      {/* <ToolBarSection business={false}/> */}
         
   
      
      
        {/* <Header /> */}
        <HeroSection />
        <div >

        {/* <Media at='sm'> */}
        <Media at='sm'>
              {/* <OurServiceSectionMobile /> */}
         </Media>
         <Media greaterThan="sm">
         </Media>
        
         
         {/* <Majors/> */}
         {/* <Media greaterThan="sm">
          <StatisticMobile/>
        </Media> */}
              {/* <HowtoUseMobile/>
              <FaqMobile/> */}
              <Media at='sm'>
              {/* <FooterMobile/> */}

         </Media>

       

         <Media greaterThan="sm">
           {/* <Footer/> */}
         </Media>
             
              {/* <WhatsappButton /> */}
              </div>

        {/* </Media> */}
        
   {/* <Media greaterThan="sm">
        <AboutShwraSection />
        <NewAddedSection /> 
        <ShwraFeatureSection /> 
        <OurServiceSection /> 
        <HowToUse />
        <Container
        fluid
        >
        <BoardOfDirectorSection/> 
        </Container>
        </>
        </>
        </>
        </>
        <StatisticSection/>
        <OurCustomerSection/> 
        <ReviewSection />
        <ContactUsSection/> 
        <ComplaintsAndSuggestionSection /> 
        <Footer />
        <WhatsappButton />
      </Media> */}
    </div>
      </>
  )
}

export default IndexPage
