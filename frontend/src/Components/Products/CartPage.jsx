import React, { useEffect, useState } from "react";
import axios from "axios";
import CartPageElements from "./CartPageElements";
import "./CartPageElements.css";

const CartPage = () => {
  const [cartData, setCartData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/cart").then((response) => {
      setCartData(response.data);
    });
  }, []);

  if (cartData && cartData.productsCart && cartData.productsCart.length > 0) {
    return cartData.productsCart.map((item, index) => {
      return <CartPageElements item={item} key={index} />;
    });
  } else {
    return <div>No items found.</div>;
  }
};

export default CartPage;
