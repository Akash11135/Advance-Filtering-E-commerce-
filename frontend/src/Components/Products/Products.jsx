import React from "react";
import Card from "../../Components/Products/Card.jsx";
import axios from "axios";
const Products = ({ products, selectedProd }) => {
  if (selectedProd && selectedProd.length > 0) {
    return selectedProd
      .map((item) => {
        return <Card key={item.id} item={item} />;
      })
      .slice(0, 10);
  } else {
    if (products && products.data) {
      return products.data
        .map((item) => {
          return <Card key={item.id} item={item} />;
        })
        .slice(0, 10);
    } else {
      return null;
    }
  }
};

export default Products;
