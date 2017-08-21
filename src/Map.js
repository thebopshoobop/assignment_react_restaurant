import React from "react";
import PageSection from "./PageSection";
const {GOOGLE_API_KEY} = require("./.env");

const Map = () => {
  return (
    <PageSection id="Map" type="danger" title="Visit Us">
      <iframe width="100%" height="450" frameborder="0" src={`https://www.google.com/maps/embed/v1/view?key=${GOOGLE_API_KEY}
      &center=39.0533073,-76.9571481&zoom=18`} allowfullscreen></iframe>
    </PageSection>

  )
}

export default Map;
