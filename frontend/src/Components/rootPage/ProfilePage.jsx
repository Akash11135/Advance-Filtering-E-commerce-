import React, { useContext } from "react";
import "./ProfilePage.css";
import { UserContext } from "../extra/UserContext";
const ProfilePage = () => {
  const { user, setUser } = useContext(UserContext);
  console.log("curr user-->", setUser);
  return (
    <div className="profile-container">
      <div className="main-info">
        <div className="profile-header">
          <div className="user-description">
            <div className="user-image"></div>
            <div className="user-name text-3xl">Akash Pandey</div>
          </div>
        </div>
      </div>
      <div className="other-profile-info">
        <div className=" profile-info">
          <div className="user-details email ">Email</div>
          <p className="user-details-contents">akash@gmail.com</p>
          <div className="user-details location">Location</div>
          <p className="user-details-contents">Chandigarh</p>
          <div className="user-details password ">Security & Passwords </div>
          <p className="">
            <ul>
              <li className="user-details-contents">Change Passwords</li>
              <li className="user-details-contents">Change email</li>
              <li className="user-details-contents">logout</li>
            </ul>
          </p>
        </div>
        <div className="ordersAndCarts">
          <div className="billings">
            <div className="address">Billing Address</div>
            <div className="order-history">Order History</div>
            <div className="wishlists">
              <div className="cart">Your Whish-Lists & cart</div>
              <div className="favourates">Your favourates</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
