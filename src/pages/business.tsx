import * as React from "react"
// @mui
import { useTheme } from "@emotion/react"
// components
import ToolBarSection from "../components/organisms/ToolBarSection"
import Header from "../components/organisms/Header"
import Footer from "../components/organisms/Footer"
import ComplaintsAndSuggestionSection from "../components/organisms/ComplaintsAndSuggestionSection"
import BusinessHeroSection from "../components/organisms/BusinessHeroSection"
import BusinessAboutSection from "../components/organisms/BusinessAboutSection"
import BusinessSolutionSection from "../components/organisms/BusinessSolutionSection"

import { Container, Row, Col } from "react-bootstrap"
//
import WhatsappButton from "../components/atoms/WhatsappButton"
import { Media } from "../components/atoms/Media"
import FooterMobile from "../components/MobileViewComponents/Footer/FooterMobile"
import MobileToolBarSection from "../components/MobileViewComponents/Toolbar/ToolbarMobile"
import BusinessSpecializedSection from "../components/organisms/BusinessSpecializedSection"
import BusinessFaqs from "../components/organisms/BusinessFaqs"
import BusinessFooter from "../components/organisms/BusinessFooter"


// markup
const BusinessPage = () => {
  return (
      <>
    
    
    
    <div className="main-container business" dir="rtl">
         
         
         <ToolBarSection business={true}/>

        <Header business={true} />

        <BusinessHeroSection />

        <BusinessAboutSection />
   
        <BusinessSolutionSection />

        <BusinessSpecializedSection />


        <BusinessFaqs/>


        <ComplaintsAndSuggestionSection /> 
       
        <Media at='sm'>
        <FooterMobile />
        </Media>
        <Media greaterThan='sm'>
        <BusinessFooter />
        </Media>


        <WhatsappButton />
    </div>
      </>
  )
}

export default BusinessPage
