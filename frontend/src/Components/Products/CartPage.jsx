import React, { useEffect, useState } from "react";
import axios from "axios";
const CartPage = () => {
  const [cartData, setCartData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/cart").then((response) => {
      setCartData(response.data);
    });
  }, []);
  if (cartData) {
    console.log("data", cartData);
  }
  return <div>hi</div>;
};

export default CartPage;
