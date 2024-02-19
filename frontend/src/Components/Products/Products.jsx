import React from "react";
import Card from "../../Components/Products/Card.jsx";
const Products = ({ products }) => {
  if (products && products.data) {
    return products.data.map((item) => {
      return (
        <div className="">
          <Card item={item} />
        </div>
      );
    });
  } else {
    return null;
  }
};

export default Products;
