import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from "../Products/Products.jsx";
import "../../App.css";
const Main = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:3000/products").then((response) => {
      setProducts(response.data);
    });
  }, []);
  console.log("prod-->", products);
  return (
    <main className="main-container">
      <div className="main-products-container">
        <Products products={products} />
        {/* <Card /> */}
      </div>
    </main>
  );
};

export default Main;
