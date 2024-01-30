import React  from "react"
// atoms
import { Logo } from "../atoms/Logo";
import Box from "../atoms/Box";
// react-bootstrap
import { Stack } from "react-bootstrap";



type HLogoProps = {
 gab: number;
}

export default function HLogo({
    gab
}: HLogoProps) {

return (
    <Stack
        gap={gab as any}
        direction="horizontal" 
        className="d-flex justify-content-start"
    >

       <Logo />

        {/* <div 
          className="vr" 
          style={{
            color: 'white',
            width: '0.1rem',
            height: '36px',
            margin: '15px 6px auto',
            opacity: '0.7'
          }}
        /> */}


        {/* <h4
            style={{
                color: 'white',
                fontWeight: 'bold'
            }}
        >
         على يمناك
        </h4> */}

    </Stack>
    )
}