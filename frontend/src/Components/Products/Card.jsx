import React, { useContext, useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import "./Card.css";
import { IoIosLogOut } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../extra/ProductCartContext.jsx";

const Card = ({ item }) => {
  const navigate = useNavigate();
  const { data, setData } = useContext(CartContext);

  const detailHandler = () => {
    navigate(`/products/${item._id}`);
  };
  const addToCart = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/cart/${item._id}`,
        {
          products: [
            {
              productId: item._id,
              quantity: 1,
            },
          ],
          favourates: [
            {
              productId: item._id,
            },
          ],
        }
      );
      if (response && response.data) {
        setData(response.data);
      }
    } catch (err) {
      console.log("err");
    }
    if (data) {
      console.log("data---", data);
    }
  };
  return (
    <div className="card">
      <div className="image-container">
        <img src={item.image} alt="#" className="image" />
      </div>
      <div className="prod-header">
        <div className="font-bold ">
          {item.title && item.title.length > 20
            ? item.title.slice(0, 18) + "..."
            : item.title}
        </div>
      </div>
      <div className=" cart-icon flex justify-between ">
        <FaRegStar />
        <IoCartOutline onClick={addToCart} />
      </div>
      <button
        className="detail-container flex p-2 w-full border border-red justify-between"
        onClick={detailHandler}
      >
        Details
        <IoIosLogOut className="text-xl" />
      </button>
    </div>
  );
};

export default Card;
