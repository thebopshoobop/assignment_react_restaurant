import React from "react";
import PageSection from "./PageSection";
import FormElement from "./FormElement";

const elements = [
  { name: "message", label: "Message", type: "textarea" },
  { name: "email", label: "Email" }
];

const ContactForm = () => {
  return (
    <PageSection id="contact" type="warning" title="Contact Us">
      <form className="col-sm-6 col-sm-offset-3">
        {elements.map(element =>
          <FormElement
            name={element.name}
            label={element.label}
            type={element.type}
          />
        )}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </PageSection>
  );
};

export default ContactForm;
