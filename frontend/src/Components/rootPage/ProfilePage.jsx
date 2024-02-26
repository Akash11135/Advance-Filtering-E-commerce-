import { React, useContext, useEffect, useState } from "react";
import "./ProfilePage.css";
import ProfilePageUpdate from "./ProfilePageUpdate.jsx";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const ProfilePage = () => {
  const [userProfile, setUserProfile] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3000/profile").then((response) => {
      setUserProfile(response.data.user);
    });
  }, []);
  const navigate = useNavigate();
  const handleEmailChange = () => {
    navigate("/profile/update/email");
  };
  console.log("user--->", userProfile.email);
  return (
    <div className="profile-container">
      {/* <ProfilePageUpdate /> */}
      <div className="main-info">
        <div className="profile-header">
          <div className="user-description">
            <div className="user-image"></div>
            <div className="user-name text-3xl">{userProfile.Name}</div>
          </div>
        </div>
      </div>
      <div className="other-profile-info">
        <div className=" profile-info">
          <div className="user-details email ">Email</div>
          <p className="user-details-contents">{userProfile.email}</p>
          <div className="user-details location">Location</div>
          <p className="user-details-contents">Chandigarh</p>
          <div className="user-details password ">Security & Passwords </div>

          <ul>
            <li className="user-details-contents">Change Passwords</li>
            <li className="user-details-contents">
              <button onClick={handleEmailChange}>Change Email</button>
            </li>
            <Link to={"/logout"} className="user-details-contents">
              logout
            </Link>
          </ul>
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
