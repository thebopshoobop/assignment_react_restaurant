import React from "react";

const NavLink = ({ target, text }) => {
  return (
    <li>
      <a href={`#${target}`}>
        {text}
      </a>
    </li>
  );
};

export default NavLink;
