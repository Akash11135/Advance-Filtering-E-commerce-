import React from "react";
import "./Card.css";
const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={item.image} alt="#" className="image" />
      </div>
      <div className="prod-header">
        <div>{item.title}</div>
      </div>
      <div className="cost">{item.price}</div>
      {/* <div className="rating">{item.rating}</div> */}
    </div>
  );
};

export default Card;
