import React from "react";
import Card from "../../Components/Products/Card.jsx";
const Products = ({ products }) => {
  if (products && products.data) {
    return products.data
      .map((item) => {
        return <Card key={item.id} item={item} />;
      })
      .slice(0, 10);
  } else {
    return null;
  }
};

export default Products;
