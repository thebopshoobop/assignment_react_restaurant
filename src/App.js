import React from "react";
import NavBar from "./NavBar";
import PageHeader from "./PageHeader";
import ReservationForm from "./ReservationForm";
import Menu from "./Menu";

const App = () => {
  return (
    <div>
      <NavBar />
      <main className="container">
        <PageHeader id="about" title="Fancy Feast for All" imgSrc="feast.jpg" />
        <ReservationForm />
        <Menu />
      </main>
    </div>
  );
};

export default App;
