import { Icon } from "@iconify/react";
import React, { FormEvent, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import FormSubmitButton from "../atoms/FormSubmitButton";
import TextArea from "../atoms/TextArea";
import TextField from "../atoms/TextField";

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

export default function FormSuggestions() {
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [successmessage, setSuccessMessage] = useState(false);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setSubmitted(true);
    e.preventDefault();
    let data = {
      name: userName,
      phoneNumber: phoneNumber,
      email: email,
      detail: suggestion,
      type: "suggestion",
    };
    if (!phoneNumber || !userName || !email || !suggestion) {
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
          setSuggestion("");
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
      name="suggestions"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      data-netlify="true"
    >
      {successmessage && (
        <StyledSuccessMessage>
          <p>تم ارسال الإقتراح بنجاح</p>
        </StyledSuccessMessage>
      )}
      <input type="hidden" name="form-name" value="suggestions" />
      <div className="mb-3">
        <TextField
          label="الاسم"
          placeholder="الاسم"
          type="text"
          id="name"
          onChange={(e) => {
            setUserName(e?.target?.value);
          }}
          value={userName}
          size="lg"
        />
        {submitted && !userName && (
          <StyledErrorText>الاسم مطلوب</StyledErrorText>
        )}
      </div>
      <div className="mb-3">
        <TextField
          label="رقم الجوال"
          type="phone"
          placeholder="رقم الجوال"
          id="phone"
          onChange={(e) => {
            setPhoneNumber(e?.target?.value);
          }}
          value={phoneNumber}
          size="lg"
        />
        {submitted && !phoneNumber && (
          <StyledErrorText>رقم الهاتف مطلوب</StyledErrorText>
        )}
      </div>
      <div className="mb-3">
        <TextField
          label="البريد الالكتروني"
          type="email"
          placeholder="البريد الالكتروني"
          id="email"
          onChange={(e) => {
            setEmail(e?.target?.value);
          }}
          value={email}
          size="lg"
        />
        {submitted && !email && (
          <StyledErrorText>البريد الالكتروني مطلوب</StyledErrorText>
        )}
      </div>
      <div>
        <TextArea
          size="lg"
          id="suggestion"
          rows={6}
          placeholder="الإقتراح"
          onChange={(e) => {
            setSuggestion(e?.target?.value);
          }}
          value={suggestion}
        />
        {submitted && !suggestion && (
          <StyledErrorText>برجاء كتابة الإقتراح</StyledErrorText>
        )}
      </div>
      <div className="d-flex justify-content-end">
        <FormSubmitButton type="submit">
          <Icon icon="bi:send" /> ارسال
        </FormSubmitButton>
      </div>
    </Form>
  );
}
