import React from "react";

export type NavItemListProps = {
    children: React.ReactNode,
    className?: string,
    style?: React.CSSProperties,
    component?: React.ElementType,
    id?: string,
};
    
export const NavItemList = ({
    children,
    className,
    style,
    component,
    id,
    }: NavItemListProps) => {
    const Component = component || "ul";
    const classes = [className];
    return (
        <Component
          id={id}
          className={`${classes.filter(Boolean).join(" ")} navbar-nav  mr-auto mt-2 mt-lg-0`} 
          style={style}
        >
        {children}
        </Component>
    );
}
    


    



