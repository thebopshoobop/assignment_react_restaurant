import React from "react";

const NavLink = ({ target, text }) =>
  <li>
    <a href={`#${target}`}>
      {text}
    </a>
  </li>;

export default NavLink;
