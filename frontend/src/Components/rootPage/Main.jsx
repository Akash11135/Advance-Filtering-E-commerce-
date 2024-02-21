import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from "../Products/Products.jsx";
import "../../App.css";
const Main = ({ selectedProd }) => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:3000/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <main className="main-container">
      <div className="text-white font-bold text-2x  l pt-3 pl-7">
        Latest trends and fashion...
      </div>
      <div className="main-products-container">
        <Products products={products} selectedProd={selectedProd} />
      </div>
    </main>
  );
};

export default Main;
