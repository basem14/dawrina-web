import React from "react";
import { Link, navigate } from "gatsby"
import styled from "styled-components";
import { Icon } from '@iconify/react';
// react-bootstrap
import { Offcanvas, Nav } from "react-bootstrap"
// atoms
import { NavItem } from "../atoms/NavItem";
import HLogo from "../atoms/HLogo";
import IconBotton from "../atoms/IconBotton";
import ButtonLink from "../atoms/ButtonLink";
import { Container } from "@mui/material";


const MobileNavList = styled(Nav)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    position: relative;
    opacity: 0.7;
`;


const MobileNavListItem = styled(Link)`
    display: block;
    padding: 12px;
    text-align: center;
    width: 100%;
    border-bottom: 1px solid #ffffff33;
    font-weight: bold;
    &:hover {
        color: #cc9a28;
        border-bottom: 1px solid #cc9a28;
    }
`;

const NAV_ITEMS = [
    {
      id: "home",
      label: "الرئيسية",
      href: "/",
    },
    {
      id: "home",
      label: "شورى للأعمال",
      href: "/business",
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
    className?: string
    style?: React.CSSProperties,
   // show: boolean;
   // handleClose: () => void;
}

export default function HeaderNavMobile({
    className,
    style,
    ...props
}: NavBarProps) {

    const [ show ,setShow ] = React.useState(false);

    const handleClose = () => {
        setShow(false);
    }

    const handleShow = () => {
        setShow(true);
    }

    const handleNavigate = (to: string) => {
        navigate('#team', {
            replace: true
        })
        console.log(to);
        setShow(false);
    }

  return (
    <>
        <IconBotton
            icon={<Icon icon={'gg:menu-left'} />}
            onClick={handleShow}
        />
        
   
            <Offcanvas 
                show={show} 
                onHide={handleClose}
                {...props}
                style={{
                    backgroundColor: "var(--primary-color)",
                    dirction: "rtl",
                    padding: '3rem 1rem',
                    direction: "rtl",
                }}
            >



                <Offcanvas.Header>
                    <Offcanvas.Title>
                      <HLogo gab={1} />
                    </Offcanvas.Title>

                    <IconBotton
                        icon={<Icon icon={'ant-design:close-outlined'} />}
                        onClick={handleClose}
                    />

                </Offcanvas.Header>

                <Offcanvas.Body>
                    <MobileNavList>
                        {
                            NAV_ITEMS.map(item => (
                                <MobileNavListItem
                                    key={item.id}
                                    to={item.href}
                                >
                                    {item.label}
                                </MobileNavListItem>
                            ))
                        }

                        <Container
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                            flexWrap: "wrap",
                          }}
                        >
                          <ButtonLink className="my-2" to="/business">
                            شورى للاعمال
                          </ButtonLink>
            
                          <ButtonLink target={"_blank"} to="https://portal.shwra.sa/auth/login">
                            شورى للمحامين
                          </ButtonLink>
                        </Container>
                   </MobileNavList>


                </Offcanvas.Body>
            </Offcanvas>

    </>
    );
}