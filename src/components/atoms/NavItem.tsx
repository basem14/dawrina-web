import React from "react";

export type NavItemProps = {
    children: React.ReactNode,
    className?: string,
    style?: React.CSSProperties,
    component?: React.ElementType,
    id?: string,
};

export const NavItem = ({
    children,
    className,
    style,
    component,
    id,
}: NavItemProps) => {
    const Component = component || "li";
    const classes = [className];
    return (
        <Component 
            className={`${classes.filter(Boolean).join(" ")} nav-item`}
            style={style} 
            id={id}
        >
        {children}
        </Component>
    );
};
