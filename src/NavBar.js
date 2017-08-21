import React from "react";
import NavLink from "./NavLink";

const links = [
  { target: "about", text: "Our Restaurant" },
  { target: "reservation", text: "Make a Reservation" },
  { target: "menu", text: "Our Menu" },
  { target: "map", text: "Visit Us" },
  { target: "contact", text: "Contact Us" }
];

const NavBar = () =>
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <ul className="nav navbar-nav">
          {links.map(link =>
            <NavLink target={link.target} text={link.text} key={link.target} />
          )}
        </ul>
      </div>
    </div>
  </nav>;

export default NavBar;
