import React from "react";
import { 
    Container,
    Row,
    Col,
} from 'react-bootstrap';
  
  
export type TabsProps = {
    value?: string;
    scrollButtons?: boolean;
    style?: React.CSSProperties;
    variant?: "standard" | "scrollable" | "fullWidth";
    allowScrollButtonsMobile?: boolean;
    children?: React.ReactNode;
    onChange?: (e: React.ChangeEvent<{}>, value: string) => void;
}

export default function Tabs({
    value,
    scrollButtons,
    style,
    variant,
    allowScrollButtonsMobile,
    children,
    onChange,
}: TabsProps) {

    return(
        <Container style={
            {
                ...style,
            }
        }>
            <Row >
             {children}
            </Row>
        </Container>
    );
}