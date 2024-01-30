import React from "react"

export type Props = {
    children: React.ReactNode,
    className?: string,
    style?: React.CSSProperties,
    component?: React.ElementType,
    id?: string,
}



const defaultStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '5rem',
    paddingBottom: '5rem',
}



export default function Section({ children, className, component, style, id }: Props) {
    const Component = component || "div"
    const classes = [className]
    return <Component 
    className={classes.filter(Boolean).join(" ")}
    style={{
        ...style,
        ...defaultStyle,
    }} 
    id={id}
    >{children}</Component>
}