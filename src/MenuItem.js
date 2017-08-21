import React from "react";
import Image from "./Image";

const MenuItem = ({ title, description, image }) =>
  <section className="col-sm-4">
    <h4>
      {title}
    </h4>
    <Image src={image} />
    <p>
      {description}
    </p>
  </section>;

export default MenuItem;
