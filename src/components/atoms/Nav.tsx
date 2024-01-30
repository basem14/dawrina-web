import React from "react";

export type NavProps = {
    children: React.ReactNode,
    className?: string,
    style?: React.CSSProperties,
    component?: React.ElementType,
    id?: string,
};


export const Nav = ({
    children,
    className,
    style,
    component,
    id,
}: NavProps) => {
    const Component = component || "nav";
    const classes = [className];
    return (
     <Component 
       id={id}
       className={`navbar navbar-expand-sm fixed-top  d-md-block d-sm-none d-none ${classes.filter(Boolean).join(" ")}`}
       style={style}
     >
        {children}
        </Component>
    );
}

