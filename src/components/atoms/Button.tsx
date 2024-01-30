import React from "react";
// bootstrap
// styled-components
import styled from "styled-components";



export type ButtonProps = {
    children: React.ReactNode,
    className?: string,
    style?: React.CSSProperties,
    component?: React.ElementType,
    id?: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
};

//getbootstrap
export const Button = ({
    children,
    className,
    style,
    component,
    id,
    onClick,
}: ButtonProps) => {
    const Component = component || "button";
    const classes = [className];
    return (
        <Component
            className={classes.filter(Boolean).join(" ")}
            style={style}
            id={id}
            onClick={onClick}
        >
            {children}
        </Component>
    );
};