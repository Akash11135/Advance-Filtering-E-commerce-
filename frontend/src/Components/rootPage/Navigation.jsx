import React, { createContext, useState } from "react";
import "../../App.css";
import { SiWebmoney } from "react-icons/si";
import { CiLocationOn } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { Link, Navigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import axios from "axios";

const Navigation = ({ user }) => {
  const [input, setInput] = useState("");
  const [responseItems, setResponseItems] = useState(null);

  let results;
  const fetchData = async (searchItm) => {
    const response = await axios.get("http://localhost:3000/products");
    setResponseItems(response);
    if (searchItm.length > 3) {
      if (response.data && response.data.data) {
        results = response.data.data.filter((user) => {
          return user && user.title.toLowerCase().includes(searchItm);
        });
      }
    }
  };
  console.log(results);

  const handleFetch = (searchItm) => {
    setInput(searchItm);
    fetchData(searchItm);
  };

  return (
    <nav className="  flex flex-col ">
      <div className="root-container-search main-nav flex gap-2 p-2  items-center justify-between h-1/2">
        <div className="logo ">
          <SiWebmoney className="cursor-pointer" />
        </div>
        <div className="location inline-flex gap-2 items-center ">
          location
          <CiLocationOn className="cursor-pointer" />
        </div>
        <div className="search gap-5 border border-gray-500  rounded-xl w-1/2   ">
          <input
            type="text"
            placeholder="search"
            className=" search-bar rounded-xl p-2"
            value={input}
            onChange={(e) => handleFetch(e.target.value)}
          />
          <div className="flex gap-2 items-center justify-end bg-gray-600 p-0 rounded-xl">
            <IoIosClose className="h-full  cursor-pointer text-2xl" />
            <IoSearchOutline className=" h-full w-5 rounded-xl cursor-pointer pr-1" />
          </div>
        </div>
        <div className="cart">
          <BsCart className="cursor-pointer" />
        </div>

        {user && user.data ? (
          <div className="flex gap-2 pr-2 justify-center items-center">
            <div className="user  border border-gray-500 gap-2 rounded-xl ">
              <Link to={"/profile"}>{user.data.user.Name}</Link>
              <Link to={"/profile"}>
                <CiUser className="user-logo cursor-pointer rounded-xl p-1" />
              </Link>
            </div>
            <div>
              <Link to={"/logout"}>
                <AiOutlineLogout />
              </Link>
            </div>
          </div>
        ) : (
          <div className="user  border border-gray-500 gap-2 rounded-xl ">
            <Link to={"/login"}>login</Link>
            <Link to={"/login"}>
              <CiUser className="user-logo cursor-pointer rounded-xl p-1" />
            </Link>
          </div>
        )}
      </div>

      <div className="root-container-categories">
        <ul className="flex gap-2  justify-evenly">
          <li>Men's Clothing</li>
          <li>Women's Clothing</li>
          <li>Jwelery</li>
          <li>Electronics</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
