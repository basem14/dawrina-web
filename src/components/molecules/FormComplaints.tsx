import { Icon } from "@iconify/react";
import React, { FormEvent, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import styled from "styled-components";
import FormSubmitButton from "../atoms/FormSubmitButton";
import TextArea from "../atoms/TextArea";
import TextField from "../atoms/TextField";
import { StaticImage } from "gatsby-plugin-image";

const StyledErrorText = styled("span")({
  fontSize: "12px",
  color: "red",
  marginBottom: "5px",
});

const StyledSuccessMessage = styled("div")({
  backgroundColor: "#a5d58c",
  padding: "1rem",
  marginBottom: "2rem",
  fontSize: "14px",
  borderRadius: "5px",
  "&>p": {
    margin: "0",
  },
});

const FormSubmitButton2 = styled(Button)`
    font-size: 17px !important;
    padding: 8px 35px !important;
    background: #cc9a28 !important;
    border: 0 !important;  
    color:black !important ;
    border-radius: 29px !important;
    margin-top: 20px !important;
    margin-bottom: 20px !important;  
    &:hover {
        box-shadow: 0px 1px 5px 0px #9b9589;
        background: #cc9a28;
    }
    &:focus {
        box-shadow: 0px 1px 5px 0px #9b9589;
        background: #cc9a28;
    }
    &:active {
        box-shadow: 0px 1px 5px 0px #9b9589;
        background: #cc9a28;
    }
`;

export default function FormComplaints() {
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [complaint, setComplaint] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [successmessage, setSuccessMessage] = useState(false);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setSubmitted(true);
    e.preventDefault();
    let data = {
      name: userName,
      phoneNumber: phoneNumber,
      email: email,
      detail: complaint,
      type: "complaint",
    };
    if (!phoneNumber || !userName || !email || !complaint) {
      return;
    } else {
      fetch("https://shwra-api-pro-v2.azurewebsites.net/api/WebMessages", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setSuccessMessage(true);
          setUserName("");
          setEmail("");
          setComplaint("");
          setPhoneNumber("");
        });
    }
  };
  useEffect(() => {
    if (successmessage) {
      setSubmitted(false)
      setTimeout(() => {
        setSuccessMessage(false);
      }, 3000);
    }
  }, [successmessage]);
  return (
    <Form
      name="complaints"
      className="form-control-2"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      {successmessage && (
        <StyledSuccessMessage>
          <p>تم ارسال الشكوى بنجاح</p>
        </StyledSuccessMessage>
      )}
      <input type="hidden" name="form-name" value="complaints" />
      <div className="mb-4">
      <StaticImage
            src='../../images/clients/Group 23524.svg'
            alt='image'
            objectFit='contain'
            style={{ width: '20px', height: '20px',position:"absolute",marginTop:"1.6rem",marginInlineStart:"1rem" }} />
        <TextField
          label="الاسم"
          placeholder="الاسم"
          type="text"
          id="name"
          onChange={(e) => {
            setUserName(e?.target?.value);
          }}
          value={userName}
          size="md"
        />
        {submitted && !userName && (
          <StyledErrorText>الاسم مطلوب</StyledErrorText>
        )}
      </div>
      <Row>
      <Col className="mb-4">
      <StaticImage
            src='../../images/clients/Group 23525.svg'
            alt='image'
            objectFit='contain'
            style={{ width: '20px', height: '20px',position:"absolute",marginTop:"1.6rem",marginInlineStart:"1rem" }} />
        <TextField
          label="رقم الجوال"
          type="phone"
          placeholder="رقم الجوال"
          id="phone"
          onChange={(e) => {
            setPhoneNumber(e?.target?.value);
          }}
          value={phoneNumber}
          size="md"
        />
        {submitted && !phoneNumber && (
          <StyledErrorText>رقم الهاتف مطلوب</StyledErrorText>
        )}
      </Col>
      <Col className="mb-4">
      <StaticImage
            src='../../images/clients/Group 23528.svg'
            alt='image'
            objectFit='contain'
            style={{ width: '20px', height: '20px',position:"absolute",marginTop:"1.6rem",marginInlineStart:"1rem" }} />
        <TextField
          label="البريد الالكتروني"
          type="email"
          placeholder="البريد الالكتروني"
          id="email"
          onChange={(e) => {
            setEmail(e?.target?.value);
          }}
          value={email}
          size="md"
        />
        {submitted && !email && (
          <StyledErrorText>البريد الالكتروني مطلوب</StyledErrorText>
        )}
      </Col>
      </Row>
     
      <div>
        {/* <TextArea
          size="lg"
          id="complaint"
          rows={6}
          placeholder="الشكوى"
          onChange={(e) => {
            setComplaint(e?.target?.value);
          }}
          value={complaint}
        /> */}
        <Form.Group controlId="complaint">
          <Form.Control size="lg" id="complaint" onChange={(e) => {
            setComplaint(e?.target?.value);
          }}
          value={complaint} as="textarea" rows={4} placeholder="اكتب رسالتك اذا اردت" />
        </Form.Group>
        {submitted && !complaint && (
          <StyledErrorText>برجاء كتابة الشكوى</StyledErrorText>
        )}
      </div>
      <div className="d-flex justify-content-center">
      <FormSubmitButton2 type="submit">
          ارسال <Icon icon="bi:send" />
        </FormSubmitButton2>
      </div>
    </Form>
  );
}
