import React from "react";
import NavBar from "./NavBar";
import PageHeader from "./PageHeader";
import ReservationForm from "./ReservationForm";
import Menu from "./Menu";
import ContactForm from "./ContactForm";
import Map from "./Map";

const App = () => {
  return (
    <div>
      <NavBar />
      <main className="container">
        <PageHeader id="about" title="Fancy Feast for All" imgSrc="feast.jpg" />
        <ReservationForm />
        <Menu />
        <ContactForm />
        <Map />
      </main>
    </div>
  );
};

export default App;
