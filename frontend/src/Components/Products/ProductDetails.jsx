import React, { useEffect, useNavigate, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import axios from "axios";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const ProductDetails = () => {
  const { id } = useParams();
  const [prodData, setProdData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/products/" + id
        );
        setProdData(response.data);
      } catch (error) {
        console.log("ERROR:", error);
      }
    };

    fetchData();
  }, [id]);
  // console.log("data : -", prodData.user.image);

  return (
    <div>
      <div className="container flex">
        <div className="image-content ">
          <img
            className="product-image"
            src={prodData && prodData.user.image}
            alt=""
          />
          <img
            className="product-image"
            src={prodData && prodData.user.image}
            alt=""
          />
          <img
            className="product-image"
            src={prodData && prodData.user.image}
            alt=""
          />
          <img
            className="product-image"
            src={prodData && prodData.user.image}
            alt=""
          />
        </div>
        <div className="product-detail ">
          <div className="title font-bold  text-2xl">
            {prodData && prodData.user.title}
          </div>
          <div className="category title text-2xl pt-10 text-gray-600">
            {prodData && prodData.user.category}
          </div>
          <p className="title text-xl pt-5">Visit</p>
          <div className="cost title text-xl font-bold pt-5">
            ${prodData && prodData.user.price}
          </div>
          <p className="title text-green-600 font-bold pt-5">
            Inclusive of all taxes
          </p>
          <div className="offers flex pt-5 items-center">
            <div className="current-offers text-sm">
              <div className="offer-content">30% off till next thursday</div>
              <div className="referal">Apply coupon</div>
            </div>
            <div className="current-offers text-sm">
              <div className="offer-content">30% off till next thursday</div>
              <div className="referal">Apply coupon</div>
            </div>
            <div className="current-offers text-sm">
              <div className="offer-content">30% off till next thursday</div>
              <div className="referal">Apply coupon</div>
            </div>
          </div>
          <div className="cart-buttons">
            <div className="addToCart ">
              <button className="btns bag-btn">
                <IoBagCheckOutline className="mr-3 text-2xl" />
                Add to bag
              </button>
            </div>
            <div className="favourate   ">
              <button className="btns btn-fav ml-10">
                <CiHeart className="mr-3 text-2xl" />
                Wishlist
              </button>
            </div>
          </div>
          <div className="description">
            <p className="text-gray-700 mb-3 font-bold">Description</p>
            {prodData && prodData.user.description}
          </div>
          <div className="ratings text-gray-700 pt-3 font-bold">
            Ratings : {prodData && prodData.user.rating.rate}
          </div>
          <div className="itemsLeft ratings text-gray-700 pt-3 font-bold">
            Item Left : {prodData && prodData.user.rating.count}
          </div>
          <div className="payment-container">
            <div className="delivery">
              <div className="delevery-option">Delivery Option</div>
              <input type="text" placeholder="pin-code" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
