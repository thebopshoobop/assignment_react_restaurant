import React from "react";
import NavLink from "./NavLink";

const links = [
  { target: "about", text: "Our Restaurant" },
  { target: "menu", text: "Our Menu" },
  { target: "reservation", text: "Make a Reservation" },
  { target: "map", text: "Visit Us" },
  { target: "contact", text: "Contact Us" }
];

const NavBar = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <ul className="nav navbar-nav">
            {links.map(link =>
              <NavLink
                target={link.target}
                text={link.text}
                key={link.target}
              />
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
