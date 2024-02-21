import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import "./Card.css";
const Card = ({ item }) => {
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
      <div className="cost">$ {item.price}</div>
      <div className="rating">Ratings : {item.rating.rate}</div>
      <div className=" cart-icon flex justify-between ">
        <FaRegStar />
        <IoCartOutline />
      </div>
    </div>
  );
};

export default Card;
