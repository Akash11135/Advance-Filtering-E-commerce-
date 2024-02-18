import React, { useContext, useState } from "react";
import "../App.css";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "./extra/UserContext";

const LoginUser = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [login, setLogin] = useState(false);

  const { setUser } = useContext(UserContext);

  const handleResponse = (statusCode) => {
    switch (statusCode) {
      case "200":
        window.alert("login successfull");
        setLogin(true);
        break;
      case "409":
        window.alert("invalid username/password");
        break;
      case "400":
        window.alert("user not registered.");
        break;
      default:
        console.log("unknown error");
        break;
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3000/login", {
      email: userEmail,
      password: userPwd,
    });

    if (!response.data) {
      console.log("BROKEN RESPONSE:: ", response);
    } else {
      handleResponse(response?.data?.statusCode);
      setUser(response);
      // const jwtToken = document.cookie
      //   .split("; ")
      //   .find((row) => row.startsWith("jwt-login=")) // Find the cookie with the name 'jwt-login'
      //   .split("=")[1];
      // // console.log("cookie--->", jwtToken);
      // document.cookie = `jwt-login=${jwtToken}; path=/;`;
    }
  };

  if (login) {
    return <Navigate to={"../"} />;
  }

  return (
    <>
      <div className="Login-root min-h-screen p-2 flex flex-col justify-center items-center ">
        <div className="login-container w-1/3 flex flex-col border border-gray-500 rounded-xl">
          <div className="text-white text-center flex justify-center  p-3  font-bold ">
            <h1>Login</h1>
          </div>
          <div className="h-86 flex flex-col  p-5">
            <form className="flex gap-2 flex-col" onSubmit={onSubmitHandler}>
              <input
                type="email"
                placeholder="email"
                className="rounded-xl p-2 border border-gray-300 text-white my-3 bg-transparent"
                onChange={(e) => setUserEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="password"
                className=" bg-transparent rounded-xl p-2 border border-gray-300 text-white "
                onChange={(e) => setUserPwd(e.target.value)}
                required
              />
              <div className="text-center">
                <button className="btn text-white">Login</button>
              </div>
              <p className=" text-white text-center">
                Create new account. /
                <Link className="font-bold" to={"/register"}>
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginUser;
