import React from "react";

const MenuItem = ({ title, description, image }) => {
  return (
    <section className="col-sm-4">
      <h4>
        {title}
      </h4>
      <img className="img-responsive" src={image} alt="" />
      <p>
        {description}
      </p>
    </section>
  );
};

export default MenuItem;
