// import * as React from "react";
// import ToolBarSection from "../components/organisms/ToolBarSection";
// import Header from "../components/organisms/Header";
// import Footer from "../components/organisms/Footer";
// import HeroSection from "../components/organisms/HeroSection";
// import OurServiceSection from "../components/organisms/OurServiceSection";
// import WhatsappButton from "../components/atoms/WhatsappButton";
// import HomeStaticSections from "../components/organisms/HomeStaticSections";
// import useMediaQuery from "../hooks/useMediaQuery";
// import { StaticImage } from "gatsby-plugin-image";
// import HomeFeatureSection from "../components/organisms/HomeFeatureSection";
// import SectionTitle from "../components/atoms/SectionTitle";
// import "./../styles/home-page.css";

// const HomePage = () => {
//   const { isMobile } = useMediaQuery();

//   return (
//     <div className="main-container home-container" dir="rtl">
//       <ToolBarSection />
//       <Header />
//       <HeroSection
//         collapse={true}
//         heroImage={
//           isMobile ? (
//             <div className="mt-5"></div>
//           ) : (
//             <StaticImage
//               src={"./../images/general/hero-image-home2.png"}
//               alt="app-image"
//               placeholder="blurred"
//             />
//           )
//         }
//         description="تطبيق شورى يتميز بتوفير محامين مرخصين من وزارة العدل السعودية بجودة عالية"
//       />

//       {isMobile ? (
//         <>
//           {" "}
//           <OurServiceSection
//             showTabPane={false}
//             headerClassName={"underline-item bold"}
//             tabStyles={{ top: 0, marginBottom: "4rem" }}
//           />
//           <HomeStaticSections
//             heading={
//               <SectionTitle
//                 className="underline-item bold"
//                 title="الإنجازات"
//                 style={{ color: "white", margin: "0 auto 3rem auto" }}
//               />
//             }
//           />{" "}
//           <HomeFeatureSection
//             mobileGrid={12}
//             styles={{
//               height: "auto",
//               textAlign: isMobile ? "right" : "right",
//               left: isMobile ? "50%" : "auto",
//               fontSize: "14px"
//             }}
//             sectionsTitle={[
//               "الخبرة",
//               "سهولة الإستخدام",
//               "الخصوصية",
//               "الجودة",
//               "الاستجابة",
//               "التكلفة",
//             ]}
//             titleStyles={{
//               fontSize: "18px",
//               fontFamily: "IBM Plex Sans Arabic Bold"
//             }}
//           />{" "}
//         </>
//       ) : (
//         <>
//           <HomeFeatureSection
//             mobileGrid={6}
//             styles={{
//               height: "auto",
//               textAlign: isMobile ? "right" : "right",
//               left: isMobile ? "50%" : "auto",
//             }}
//             sectionsTitle={[
//               "الخبرة",
//               "سهولة الإستخدام",
//               "الخصوصية",
//               "الجودة",
//               "الاستجابة",
//               "التكلفة",
//             ]}
//             titleStyles={{
//               fontSize: "2rem",
//               fontFamily: "IBM Plex Sans Arabic Bold"

//             }}
//           />
//           <OurServiceSection
//             showTabPane={false}
//             headerClassName={"underline-item bold"}
//           />
//           <HomeStaticSections
//             heading={
//               <SectionTitle
//                 className="underline-item bold"
//                 title="الإنجازات"
//                 style={{ color: "white", margin: "0 auto 3rem auto" }}
//               />
//             }
//           />
//         </>
//       )}
//       <Footer
//         showStoreLinkGroup={true}
//         showSocialMedia={true}
//         collapse={true}
//         showContact={true}
//       />
//       <WhatsappButton />
//     </div>
//   );
// };

// export default HomePage;



import * as React from "react";
import ToolBarSection from "../components/organisms/ToolBarSection";
import WhatsappButton from "../components/atoms/WhatsappButton";
import HomeStaticSections from "../components/organisms/HomeStaticSections";
import useMediaQuery from "../hooks/useMediaQuery";
import { StaticImage } from "gatsby-plugin-image";
import HomeFeatureSection from "../components/organisms/HomeFeatureSection";
import SectionTitle from "../components/atoms/SectionTitle";
import "./../styles/home-page.css";
import HomeServicesSection from "../components/organisms/HomeServicesSection";
import HomeHeroSection from "../components/organisms/HomeHeroSection";
import HomeFooter from "../components/organisms/HomeFooter";
import HomeHeader from "../components/organisms/HomeHeader";
import MobileToolBarSection from "../components/MobileViewComponents/Toolbar/ToolbarMobile";

const HomePage = () => {
  const { isMobile } = useMediaQuery();

  return (
    <>
    
    <div className="main-container home-container" dir="rtl">
      <ToolBarSection business={false}/>
      <HomeHeader/> 
      <HomeHeroSection
        collapse={true}
        heroImage={
          isMobile ? (
            <div className="mt-5"></div>
          ) : (
            <StaticImage
              src={"./../images/general/hero-image-home2.png"}
              alt="app-image"
              placeholder="blurred"
            />
          )
        }
        description="تطبيق شورى يتميز بتوفير محامين مرخصين من وزارة العدل السعودية بجودة عالية"
      />

      {isMobile ? (
        <>
          {" "}
          <HomeServicesSection
            showTabPane={false}
            headerClassName={"underline-item bold"}
            tabStyles={{ top: 0, marginBottom: "4rem" }}
          />
          <HomeStaticSections
            heading={
              <SectionTitle
                className="underline-item bold"
                title="الإنجازات"
                style={{ color: "white", margin: "0 auto 3rem auto" }}
              />
            }
          />{" "}
          <HomeFeatureSection
            mobileGrid={12}
            styles={{
              height: "auto",
              textAlign: isMobile ? "right" : "right",
              left: isMobile ? "50%" : "auto",
              fontSize: "14px"
            }}
            sectionsTitle={[
              "الخبرة",
              "سهولة الإستخدام",
              "الخصوصية",
              "الجودة",
              "الاستجابة",
              "التكلفة",
            ]}
            titleStyles={{
              fontSize: "18px",
              fontFamily: "IBM Plex Sans Arabic Bold"
            }}
          />{" "}
        </>
      ) : (
        <>
          <HomeFeatureSection
            mobileGrid={6}
            styles={{
              height: "auto",
              textAlign: isMobile ? "right" : "right",
              left: isMobile ? "50%" : "auto",
            }}
            sectionsTitle={[
              "الخبرة",
              "سهولة الإستخدام",
              "الخصوصية",
              "الجودة",
              "الاستجابة",
              "التكلفة",
            ]}
            titleStyles={{
              fontSize: "2rem",
              fontFamily: "IBM Plex Sans Arabic Bold"

            }}
          />
          <HomeServicesSection
            showTabPane={false}
            headerClassName={"underline-item bold"}
            />
          <HomeStaticSections
            heading={
              <SectionTitle
              className="underline-item bold"
              title="الإنجازات"
              style={{ color: "white", margin: "0 auto 3rem auto" }}
              />
            }
            />
        </>
            
      )}
      <HomeFooter
        showStoreLinkGroup={true}
        showSocialMedia={true}
        collapse={true}
        showContact={true}
      />
      <WhatsappButton />
    </div>
    </>
  );
};

export default HomePage;