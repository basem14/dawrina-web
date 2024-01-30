import React, { useState } from "react";
//
import styled from "styled-components";
import { Link } from "gatsby";
// hooks
import useMediaQuery from "../../hooks/useMediaQuery";
// react-bootstrap
import { Navbar, Nav } from "react-bootstrap";
// atoms
import { NavItem } from "../atoms/NavItem";
import { Logo } from "../atoms/Logo";
import { Button } from "../atoms/Button";
import { LogoDev } from "@mui/icons-material";
import ButtonLink from "../atoms/ButtonLink";
import Collapse from "./NavCollapse";
import { Box } from "@mui/material";
import NavMobile from './../molecules/NavMobile';
import { Media } from "../atoms/Media";
import { useLocation } from '@reach/router'
//
const NAV_ITEMS = [
  {
    id: "home",
    label: "الرئيسية",
    href: "/",
  },
  // {
  //   id: "homeBusiness",
  //   label: "شورى للأعمال",
  //   href: "/business",
  // },
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
    label: "اطلب خدمة قانونية",
    href: "/LegalAdvisor",
  },
  {
    id: "usage",
    label: "خدمات شورى",
    href: "/Services",
  },
  {
    id: "team",
    label: "طريقة استخدام شورى",
    href: "/UseGuide",
  },
  {
    id: "contact",
    label: "الأسئلة الشائعة",
    href: "/faqs",
  },
];


type NavBarProps = {
  className?: string;
  style?: React.CSSProperties;
  business?:boolean
};


export default function NavItemList({ className, style, business}: NavBarProps) {
  const classes = className ? `navbar-nav ${className}` : "navbar-nav";
  const { isMobile, isTablet } = useMediaQuery();
  const location = useLocation();
  const pathName = location.pathname;
//const pathName = window.location.pathname;
const PathName = (pathName.slice(-1)=='/' && pathName.length>1) ? pathName.substring(0,pathName.length-1) : pathName; 

 
  return (


      <Nav
        className={classes}
        style={{
          marginRight: "0",
          display:'flex',
          width:'90%',
          justifyContent:'space-between',
          alignItems:'center',
          color:"red",
          ...style,
        }}
      >
        {NAV_ITEMS.map((item,i) => (
         <div  
         className={PathName==item.href ? 'round-NavLink-Wrapper-Active' : business?' round-NavLink-Wrapper-business' :' round-NavLink-Wrapper' }>
            <Link
              to={item.href}
              aria-current="page"
              style={{
                color:'inherit'
              }}
            >
              {item.label}
            </Link>
           </div>
        ))}

<div
          style={{
            // marginRight: "20px",
            display: "flex",
          }}
        >
        <ButtonLink business={business} bgColor={business? 'var(--secondary-color)' : 'var(--text-dark)'} to="/business" >
          شورى للاعمال
        </ButtonLink>
        </div>
       

      </Nav>
  
  );
}
