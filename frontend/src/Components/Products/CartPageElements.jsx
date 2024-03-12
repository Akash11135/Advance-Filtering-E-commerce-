import React from "react";
import "./CartPageElements.css";
const CartPageElements = ({ item }) => {
  return (
    <div className="cart-container flex">
      <div className="prod-div">
        <div className="image-div ">
          <img src={item.image} alt="product Image" className="image-prod" />
        </div>
        <div className="prod-details">
          <div className=" text-2xl">{item.title}</div>
          <div className=" text-xl text-green-500 mt-3 mb-3">
            {item.category}
          </div>
          <div className=" text-2xl">${item.price}</div>
          {item.category.includes("clothing") ? (
            <div className="flex justify-evenly">
              <div>
                <input
                  placeholder="Qty"
                  type="number"
                  className=" m-3 p-2 border border-gray-900 w-20 "
                />
              </div>
              <div>
                <input
                  placeholder="Size"
                  type="number"
                  className=" m-3 p-2 border border-gray-900 w-20 "
                />
              </div>
            </div>
          ) : (
            <div className="">
              <div>
                <input
                  placeholder="Qty"
                  type="number"
                  className=" m-3 p-2 border border-gray-900 w-20 "
                />
              </div>
            </div>
          )}

          <div>
            <button className="remove-btn">Remove from cart</button>
          </div>
          <div>
            <button>Offers</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPageElements;
