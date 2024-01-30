import * as React from 'react';
import styled from "styled-components";
import { graphql, useStaticQuery , Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
//
import { Media } from "../atoms/Media";
// hooks
import useMediaQuery from "../../hooks/useMediaQuery";
// react-bootstrap
import { 
  Navbar,
  Nav, 
  NavDropdown,
  Form,
  FormControl, 
  Container,
  NavbarBrand
} from "react-bootstrap";
// atoms
import  Box  from "../atoms/Box";
import Typography from "../atoms/Typography";
import VLogo from "../atoms/VLogo";
import HLogo from "../atoms/HLogo";
import AppBar from "../atoms/AppBar";
// molecules
import NavItemList from "../molecules/NavItemList";

import ReactGA from 'react-ga';
import ButtonLink from '../atoms/ButtonLink';
import HeaderNavMobile from '../molecules/HeaderNavMobile';

const NavBar = styled(Navbar)`
    right: 0;
    left: 0;
    z-index: 1030;
    position: absolute !important;
    ${props => props.isScrolled ? `
    top: 0 !important;
    background: transparent linear-gradient(180deg, #14242B 0%, #14242B33 100%) 0% 0% no-repeat padding-box;
    opacity: 1 !important;
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px) !important;
    position: fixed !important;
    `: `
    top: 40px;
    position: absolute;
    padding-top: 10px;
    padding-bottom: 10px;
    `}
`;

const NAV_ITEMS = [
  {
    id: "home",
    label: "الرئيسية",
    href: "/",
  },

  {
    id: "about",
    label: "عن شورى",
    href: "/WhyUs",
  },
  {
    id: "features",
    label: "فريق العمل",
    href: "/BoardOfDirectors",
  },
  {
    id: "services",
    label: " خدمة ",
    href: "/LegalAdvisor",
  },
  {
    id: "usage",
    label: "خدمات شورى",
    href: "/Services",
  },
  {
    id: "team",
    label: "طريقة  ",
    href: "/UseGuide",
  },
  {
    id: "contact",
    label: "الأسئلة الشائعة",
    href: "/faqs",
  },
];

export default function HomeHeader() {

  const TRACKING_ID = "UA-198235726-1";
  ReactGA.initialize(TRACKING_ID);
  // offsetHeight: 139px
  const [ isScrolled, setIsScrolled ] = React.useState(false);
  const [ isOpen, setIsOpen ] = React.useState(false);
  const [ isOpenMenu, setIsOpenMenu ] = React.useState(false);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 40;
    setIsScrolled(isScrolled);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  // responsive
  const { isMobile } = useMediaQuery();
  
  return (
      <NavBar 
        className="navbar-expand-sm  d-md-block"
        expand="lg"
        isScrolled={isScrolled}
       >
        <Container
         fluid="md"
         className="align-items-center container"
        >

            { /* NavBar.Brand*/}
            
            <Media at="sm">
              <HLogo gab={1} /> 
            </Media>

            <Media greaterThan="sm">
             <VLogo />
            </Media>
             
            {/* NavBar. */}
         <Media greaterThan='sm'>

      <Nav
        style={{
          marginRight: "0",
        }}
      >
        {NAV_ITEMS.map((item) => (
          <Nav.Item className='mx-4 my-auto'  key={item.id}>
            <Link
              to={item.href}
              className=" text-white"
              aria-current="page"
              color="white"
            >
              {item.label}
            </Link>
          </Nav.Item>
        ))} 

<div
          style={{
            // marginRight: "20px",
            display: "flex",
          }}
        >
        <ButtonLink to="/business" >
          شورى للاعمال
        </ButtonLink>
        </div>
        <div
          style={{
            marginRight: "10px",
            display: "flex",
          }}
        >
        <ButtonLink target={"_blank"} to="https://portal.shwra.sa/auth/login" >
          شورى للمحامين
        </ButtonLink>
        </div>

      </Nav>
   </Media> 

   <Media at='sm'>

    <HeaderNavMobile/> 
   </Media>
      
          </Container>
      </NavBar>
  )

}