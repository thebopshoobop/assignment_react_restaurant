import React from "react";
import NavBar from "./NavBar";
import PageHeader from "./PageHeader";
import ReservationForm from "./ReservationForm";

const App = () => {
  return (
    <div>
      <NavBar />
      <main className="container">
        <PageHeader id="about" title="Fancy Feast for All" imgSrc="feast.jpg" />
        <ReservationForm />
      </main>
    </div>

  );
};

export default App;
