import React from "react";
import "./ProfilePageUpdate.css";
const ProfilePageUpdate = () => {
  return (
    <div className="update-Parent">
      <div className="update-container ">
        <div className="header ">Update Email</div>
        <div className="email-details">
          <div className="previous-email">
            <p>Previous Email</p>
            <input type="text" className="input-email" />
          </div>
          <div className="new-email">
            <p>New Email</p>
            <input type="text" className="input-email" />
          </div>
        </div>
        <div className="remember">
          <input type="checkbox" />
          <label htmlFor="checkbox">Remember Me</label>
        </div>
        <div className="button-div">
          <button className="button">Change Email</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageUpdate;
