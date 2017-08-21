import React from "react";
import NavLink from "./NavLink";
const NavBar = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <ul className="nav navbar-nav">
            <NavLink target="about" text="Our Restaurant" />
            <NavLink target="menu" text="Our Menu" />
            <NavLink target="reservation" text="Make a Reservation" />
            <NavLink target="map" text="Visit Us" />
            <NavLink target="contact" text="Contact Us" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
