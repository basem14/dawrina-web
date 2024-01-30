import React from 'react';

type SectionTitleProps = {
    title: string;
    style?: React.CSSProperties;
    className?: string;
};

export default function SectionTitle({ title, style, className }: SectionTitleProps) {
    return (
        <h2
            style={{
                color: '#173039',
                ...style,
            }}
            className={`underline-hover   col-md-2 text-center mb-5 ${className||''}`}
        >
            {title}
        </h2>
    );
}

