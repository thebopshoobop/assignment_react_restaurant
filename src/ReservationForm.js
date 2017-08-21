import React from "react";
import PageSection from "./PageSection";

const ReservationForm = () => {
  return (
    <PageSection id="reservation" type="success" title="Make a Reservation!">
      <form>
        <div className="form-group">
          <label htmlFor="time">Reservation Time</label>
          <input name="time" type="datetime-local" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="contactName">Contact Name</label>
          <input name="contactName" type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input name="phoneNumber" type="text" className="form-control"/>
        </div>
        <button type="submit" className="btn btn-primary">Reserve</button>
      </form>
    </PageSection>
  )
}

export default ReservationForm;
