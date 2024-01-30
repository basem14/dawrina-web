import * as React from "react"
// components
import ToolBarSection from "../components/organisms/ToolBarSection"
import Header from "../components/organisms/Header"
import Footer from "../components/organisms/Footer"
import HeroSection from "../components/organisms/HeroSection"
import AboutShwraSection from "../components/organisms/AboutShwraSection"
import ShwraFeatureSection from "../components/organisms/ShwraFeatureSection"
import BoardOfDirectorSection from "../components/organisms/BoardOfDirectorSection"
import ComplaintsAndSuggestionSection from "../components/organisms/ComplaintsAndSuggestionSection"
import ContactUsSection from "../components/organisms/ContactUsSection"
import HowToUse from "../components/organisms/HowToUse"
import OurServiceSection from "../components/organisms/OurServiceSection"
// new
import StatisticSection from "../components/organisms/StatisticSection"
import OurCustomerSection from "../components/organisms/OurCustomerSection"
import NewAddedSection from "../components/organisms/NewAddedSection"
import ReviewSection from "../components/organisms/ReviewSection"
import { Container, Row, Col } from "react-bootstrap"
import WhatsappButton from "../components/atoms/WhatsappButton"
import { Media } from "../components/atoms/Media"
import OurServiceSectionMobile from "../components/MobileViewComponents/Services/OurServiceSectionMobile"
import '../styles/MobileView.css'
import DifferenceSection from "../components/MobileViewComponents/Difference/DifferenceSection"
import HowtoUseMobile from "../components/MobileViewComponents/Usage/HowtoUseMobile"
import FaqMobile from "../components/MobileViewComponents/Faq/FaqMobile"
import FooterMobile from "../components/MobileViewComponents/Footer/FooterMobile"
import Services from "./Services"
import StatisticMobile from "../components/MobileViewComponents/Statistics/StatisticMobile"
import Majors from "../components/organisms/Majors"
import MobileToolBarSection from "../components/MobileViewComponents/Toolbar/ToolbarMobile"
//Css For Mobile
const IndexPage = () => {


  return (
    <>
     
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
