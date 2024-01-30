import * as React from "react";
import FormComplaints from "../components/molecules/FormComplaints";
import FormSuggestions from "../components/molecules/FormSuggestions";
import WhatsappButton from "../components/atoms/WhatsappButton";

const Forms = () => {
  return (
    <>
      <FormSuggestions />
      <FormComplaints />
      <WhatsappButton/>
    </>
  );
};

export default Forms;
