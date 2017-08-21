import React from "react";
import PageSection from "./PageSection";
import FormElement from "./FormElement";

const elements = [
  { name: "time", label: "Reservation Time", type: "datetime-local" },
  { name: "contactName", label: "Contact Name" },
  { name: "phoneNumber", label: "Phone Number" }
];

const ReservationForm = () =>
  <PageSection id="reservation" type="success" title="Make a Reservation!">
    <form className="col-sm-6 col-sm-offset-3">
      {elements.map(element =>
        <FormElement
          name={element.name}
          label={element.label}
          type={element.type}
        />
      )}
      <button type="submit" className="btn btn-primary">
        Reserve
      </button>
    </form>
  </PageSection>;

export default ReservationForm;
