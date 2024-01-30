import React from "react";
import { StaticImage } from "gatsby-plugin-image"

export type LogoProps = {
    className?: string,
    style?: React.CSSProperties,
    id?: string,
};

export const Logo = ({
    className,
    style,
    id,
}: LogoProps) => {
    const classes = [className];
    return (
        <StaticImage
            src="./../../images/general/logo.svg"
            alt="logo"
            placeholder="blurred"
            layout="fixed"
            width={70}
            height={70}
            className={classes.filter(Boolean).join(" ")}
            style={style}
            id={id}
            
        />  
    );
};