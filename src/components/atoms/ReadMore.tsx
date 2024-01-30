import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { Icon } from '@iconify/react';


type ReadMoreProps = { 
    color?: string,
    text?: string,
    to: string,
    className?: string,
}


export default function ReadMore({ color, text, to, className }: ReadMoreProps) {
    return (
        <Link to={to} className={className}>
            اقرأ المزيد {'  '}
            <Icon icon="bi:arrow-left" />
        </Link>
    );
}