import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-fixed">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#menu-collapse"
            aria-expanded="false"
          >
            Menu
          </button>
          <a className="navbar-brand" href="/">
            Our Swanky Restaurant
          </a>
        </div>

        <div className="collapse navbar-collapse" id="menu-collapse">
          <ul className="nav navbar-nav">
            <li>
              <a href="#menu">Our Menu</a>
              <a href="#reservation">Make a Reservation</a>
              <a href="#contact">Contact Us</a>
              <a href="#map">Visit Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
