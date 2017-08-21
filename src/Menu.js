import React from "react";
import PageSection from "./PageSection";
import MenuSection from "./MenuSection";

const sections = [
  {
    name: "Wet",
    products: [
      { title: "", description: "", image: "" },
      { title: "", description: "", image: "" }
    ]
  },
  {
    name: "Dry",
    products: [
      { title: "", description: "", image: "" },
      { title: "", description: "", image: "" }
    ]
  }
];

const ReservationForm = () => {
  return (
    <PageSection id="menu" type="primary" title="Our Menu">
      {sections.map(section =>
        <MenuSection title={section.title} products={section.products} />
      )}
    </PageSection>
  );
};

export default ReservationForm;
