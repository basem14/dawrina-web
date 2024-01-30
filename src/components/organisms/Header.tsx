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
  Container
} from "react-bootstrap";
// atoms
import  Box  from "../atoms/Box";
import Typography from "../atoms/Typography";
import VLogo from "../atoms/VLogo";
import HLogo from "../atoms/HLogo";
import AppBar from "../atoms/AppBar";
import NavBar from "../atoms/NavBar";
// molecules
import NavItemList from "../molecules/NavItemList";
import NavMobile from "../molecules/NavMobile";


import ReactGA from 'react-ga';

type HeaderProps = {
  business?:boolean
};


export default function Header({business}:HeaderProps) {
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
        className="navbar-expand-sm d-md-block"
        expand="lg"
        isScrolled={isScrolled}
       >
        <Container
        fluid
         className="align-items-center nav-Container  justify-content-space-between"
        >

            { /* NavBar.Brand*/}
            
            <div className='mx-auto mx-md-0 '>
        
            <StaticImage
            src="../../images/Mobile/logo@yellow.svg"
            alt="logo"
            placeholder="blurred"
            layout="fixed"
            width={53}
            height={48.44}
            className='me-5 me-md-0 '
            // style={{marginRight:'3rem'}}
            
        />  
            </div>

            {/* <Media  greaterThan="sm">
             <VLogo />
            </Media> */}
             
            {/* NavBar. */}

            <NavItemList  className='d-none d-lg-flex' />
            <div className='d-lg-none'>
             <NavMobile />
             </div>
          </Container>
      </NavBar>
  )

}
