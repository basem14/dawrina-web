import React from "react";

export type BoxProps = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    component?: React.ElementType;
};


export default function Box({
    children,
    className,
    style,
    component: Component = "div",
}: BoxProps) {
    return (
        <Component className={className} style={style}>
            {children}
        </Component>
    );
}