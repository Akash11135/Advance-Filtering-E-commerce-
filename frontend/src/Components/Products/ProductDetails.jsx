import React, { useEffect, useNavigate, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [prodData, setProdData] = useState([]);
  useEffect(() => {
    try {
      axios.get("http://localhost:3000/products/" + id).then((response) => {
        setProdData(response.data);
      });
      console.log(prodData);
    } catch (error) {
      console.log("ERROR:: ", error);
    }
  }, []);
  return (
    <div>
      <div className="container flex">
        <div className="image-content border border-red-800">
          <img src="" alt="" />
        </div>
        <div className="product-detail border border-gray-950">
          <div className="title"></div>
          <p>Visit</p>
          <div className="cost"></div>
          <div className="offers"></div>
        </div>
        <div className="payment-container"></div>
      </div>
    </div>
  );
};

export default ProductDetails;
