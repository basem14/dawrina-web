import React from 'react';
import { CSSProperties } from 'styled-components';

type CounterProps = {
    number: number | string;
    plusIcon?: boolean;
    style?:CSSProperties
}

export default function Counter({ number, plusIcon, style = {} }: CounterProps) {
    return (
        <div className="counter-box">
            <span></span>
            <h1 className="counter-number mb-2 mt-2" style={style}>
            {plusIcon&&<span>+</span>}
            {number}
            </h1>
        </div>
    )
}


