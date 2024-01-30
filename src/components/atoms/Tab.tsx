import React from "react";
import { 
    Col,
} from 'react-bootstrap';
export type TabProps = {
    value?: string;
    scrollButtons?: boolean;
    variant?: "standard" | "scrollable" | "fullWidth";
    allowScrollButtonsMobile?: boolean;
    children?: React.ReactNode;
    onChange?: (e: React.ChangeEvent<{}>, value: string) => void;
    active: any;
}

export default function Tab({
    value,
    scrollButtons,
    variant,
    allowScrollButtonsMobile,
    children,
    onChange,
    active,
}: TabProps) {

    const isActive = active ? "active" : "";

    return(
        <Col
          className={`tab-pane fade show ${isActive}`}
          onClick={onChange}
        >
         {children}
        </Col>
    );
}