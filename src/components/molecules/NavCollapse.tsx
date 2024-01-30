import React from 'react';
import { Icon } from '@iconify/react';
//
import { Media } from "../atoms/Media";
//
import MobileNav from './NavMobile';
// atoms 
import IconBotton from '../atoms/IconBotton';

type CollapseProps = {
    isMobile: boolean;
    children: React.ReactNode;
}

export default function Collapse({
    isMobile,
    children
}: CollapseProps) {

return (
    <> 
    <Media at="sm">
     <MobileNav /> 
    </Media>

    <Media greaterThan="sm">
      {children}
    </Media>
      
   </>
 )
}

