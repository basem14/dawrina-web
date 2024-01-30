import React, { ChangeEvent } from "react";
import styled from "styled-components";
//
import { Form } from "react-bootstrap";

const StyledInput = styled(Form.Control)`
  border-radius: 5px;
  border: 1px solid #ebebeb;
  padding: 12px 18px;
  font-size: 17px;
  font-weight: 500;
  color: #4a4a4a;
  background-color: #fff;
  box-shadow: none;
  border-color: #ebebeb;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-color: #cc9a28;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 992px) {
    font-size: 14px;
  }

  @media (min-width: 1200px) {
    font-size: 14px;
  }

  @media (min-width: 1600px) {
    font-size: 24px;
  }

  @media (min-width: 1920px) {
    font-size: 26px;
  }

  @media (min-width: 2560px) {
    font-size: 28px;
  }

  @media (min-width: 3840px) {
    font-size: 30px;
  }
`;

type TextFieldProps = {
  label: string;
  placeholder: string;
  type: string;
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  className?: string;
  size?: "sm" | "lg" | "md";
};

export default function TextField({
  label,
  placeholder,
  type,
  id,
  onChange,
  value,
  className,
  size = "sm",
}: TextFieldProps) {
  return (
    <Form.Group controlId={id} className={className}>
      <StyledInput
        id={`${id}-input`}
        name={id}
        size={size}
        type={type}
        placeholder={placeholder}
        onChange={(e:ChangeEvent<HTMLInputElement>) => {
          if (onChange) {
            onChange(e);
          } else {
            return;
          }
        }}
        value={value || ""}
      />
    </Form.Group>
  );
}
