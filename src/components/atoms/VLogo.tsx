import React from 'react';
// atoms
import { Logo } from '../atoms/Logo';
import Box from '../atoms/Box';
import Typography from '../atoms/Typography';

export default function VLogo() {

    return (
        <Box>
            <Logo />
            <Typography
                variant="h5"
                className="text-center"
                style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "var(--secondary-color)",
                }}
            >
             على يمناك
            </Typography>
      </Box>
    )
}