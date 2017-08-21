import React from "react";
import MenuItem from "./MenuItem";

const MenuSection = ({ title, products, textType }) => {
  return (
    <section>
      <h3 className={`text-${textType}`}>
        {title}
      </h3>
      <hr />
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
