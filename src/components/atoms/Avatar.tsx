import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const AatarWarrp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;

    font-size: 1.5rem;
    &:hover {
        cursor: pointer;
    }
`

type AvatarProps = {
    src: string;
    alt: string;
    size?: string;
    className?: string;
    onClick?: () => void;
}


export default function Avatar({ src, alt, size ,onClick }: AvatarProps) {

    return (
       null
    )
}