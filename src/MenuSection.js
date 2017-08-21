import React from "react";
import MenuItem from "./MenuItem";

const MenuSection = ({ title, products }) => {
  return (
    <section className="col-sm-4">
      <h3>
        {title}
      </h3>
      {products.map(product =>
        <MenuItem
          title={product.title}
          description={product.description}
          image={product.image}
        />
      )}
    </section>
  );
};

export default MenuSection;
