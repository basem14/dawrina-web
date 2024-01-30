import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components";
import { Icon } from '@iconify/react';
// atoms
import Box from "../atoms/Box";
// react-bootstrap
import { Stack } from "react-bootstrap";

const ImageLink = styled.a`
 // width: 183px;   
  &:hover {
    color: #cc9a28;
  }

`

type Props = {
  direction?: "horizontal" | "vertical";
  gap?: number;
  className?: string;
};


export default function SocialLinkGroup({
  direction,
  gap,
  className
}: Props) {

  direction = direction || "horizontal";

  gap = gap || 5;

    return (
      <Stack 
        gap={gap as any}
        direction={direction}
        className={className}
      >
              <ImageLink
                href="https://twitter.com/shwraApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                 <Icon icon="akar-icons:twitter-fill" />
              </ImageLink>
              <ImageLink
                href="https://www.instagram.com/shwraapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="akar-icons:instagram-fill" />
              </ImageLink>
              <ImageLink
                 href="https://www.linkedin.com/company/shwraapp"
                 target="_blank"
                 rel="noopener noreferrer"
              >
                <Icon icon="bxl:linkedin" />
              </ImageLink>   
      </Stack>
    )
}

