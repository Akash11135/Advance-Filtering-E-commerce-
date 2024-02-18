import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
import Message from "./extra/Message";

const RegisterUser = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [message, setMessage] = useState("");

  const handleResponse = (statusCode) => {
    switch (statusCode) {
      case "200":
        setMessage("success");
        break;
      case "409":
        setMessage("duplicate");
        break;
      case "422":
        setMessage("allFields");
        break;
      default:
        setMessage("unknown error");
        break;
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/register", {
        Name: userName,
        email: userEmail,
        password: userPwd,
      });
      if (!response.data) {
        console.log("BROKEN RESPONSE:: ", response);
      } else {
        handleResponse(response?.data?.statusCode);
      }
    } catch (err) {
      setMessage("allFeilds");
    }
  };

  return (
    <>
      <div className=" Root p-3 min-h-screen  flex flex-col justify-center items-center ">
        <div className="Container w-1/3 flex flex-col border border-gray-500 rounded-xl">
          <div className="flex justify-center  p-3 my-3 font-bold ">
            <h1>Register User</h1>
          </div>
          <div className="h-96 flex flex-col  p-5">
            <form className="flex gap-2 flex-col" onSubmit={submitHandler}>
              <input
                type="text"
                placeholder="username"
                className="rounded-xl p-2 border border-gray-300 text-white bg-transparent "
                value={userName}
                // onChange={nameHandle}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="email"
                className="rounded-xl p-2 border border-gray-300  text-white bg-transparent"
                // onChange={emailHandle}
                onChange={(e) => setUserEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="password"
                className="rounded-xl p-2 border border-gray-300  text-white bg-transparent"
                // onChange={pwdHandle}
                onChange={(e) => setUserPwd(e.target.value)}
                required
              />
              <div className="text-center">
                <button className="btn">Register</button>
              </div>

              <p className=" text-center">
                Already registered? /{" "}
                <Link to={"/login"} className="font-bold">
                  Login
                </Link>
              </p>
              {message ? <Message message={message} /> : null}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterUser;
