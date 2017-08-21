import React from "react";
import PageSection from "./PageSection";
import MenuSection from "./MenuSection";

const sections = [
  {
    title: "Wet",
    textType: "info",
    products: [
      {
        title: "Chicken 'N Vegetables",
        description: "A velvety, creamy broth with delicious real chicken and vegetables, crafted without by-products or fillers.",
        image: "chicken-vegetables-creamy-broth.png"
      }, {
        title: "Tuna 'N Vegetables",
        description: "A velvety, creamy broth with delicious real tuna and vegetables, crafted without by-products or fillers.",
        image: "tuna-vegetables-creamy-broth.png"
      },
      {
        title: "Mackerel 'N Vegetables'",
        description: "A delicious, creamy broth with real pieces of mackerel and vegetables, crafted without by-products or fillers.",
        image: "mackerel-vegetables-creamy-broth.png"
      }
    ]
  }, {
    title: "Dry",
    textType: "warning",
    products: [
      {
        title: "Seafood and Shrimp",
        description: "Enchanting shapes with a rich, delicious melding of filet mignon and seafood flavors.",
        image: "filet-mignon-flavor-with-real-seafood-&-shrimp.png"
      }, {
        title: "Fish and Salmon",
        description: "Delicious and enchanting shapes made with real seafood.",
        image: "ocean-fish-&-salmon-and-accents-of-garden-greens.png"
      },
      {
        title: "Chicken and Turkey",
        description: "Enchanting shapes made with the delicious taste of real chicken & turkey.",
        image: "savory-chicken-&-turkey.png"
      }
    ]
  }
];

const ReservationForm = () => {
  return (
    <PageSection id="menu" type="primary" title="Our Menu">
      {sections.map(section => <MenuSection title={section.title} products={section.products} textType={section.textType}/>)}
    </PageSection>
  );
};

export default ReservationForm;
