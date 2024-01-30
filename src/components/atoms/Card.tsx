import React from "react";

type CardProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    component?: React.ElementType;
};

export default function Card({
    children,
    style,
    className,
    component: Component = "div",
}: CardProps) {
    return (
        <Component
            className={`card ${className}`}
            style={{
                ...style,
            }}
        >
            {children}
        </Component>
    );
}