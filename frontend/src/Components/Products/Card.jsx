import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import "./Card.css";
import { IoIosLogOut } from "react-icons/io";
import { Navigate, useNavigate } from "react-router-dom";
const Card = ({ item }) => {
  const navigate = useNavigate();

  const detailHandler = () => {
    navigate(`/products/${item._id}`);
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
        <IoCartOutline />
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
