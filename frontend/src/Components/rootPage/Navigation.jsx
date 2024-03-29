import React, { useState } from "react";
import "../../App.css";
import { FaReact } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import axios from "axios";
import CategoryPage from "./CategoryPage";

const Navigation = ({ user, setSelectedProd, selectedProd }) => {
  const [input, setInput] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [stateManage, setStateManage] = useState(null);

  const fetchData = async (searchItm) => {
    const response = await axios.get("http://localhost:3000/products");
    if (searchItm.length > 3) {
      if (response.data && response.data.data) {
        setSelectedProd(
          response.data.data.filter((user) => {
            return user && user.title.toLowerCase().includes(searchItm);
          })
        );
      }
    } else {
      setSelectedProd(response.data.data);
    }
  };

  const handleFetch = (searchItm) => {
    setInput(searchItm);
    fetchData(searchItm);
  };

  const logoutHandler = async () => {
    const response = await axios.get("http://localhost:3000/logout");
    setRedirect(true);
    console.log(response.data);
  };

  const crossHandler = () => {
    setSelectedProd([]);
    handleFetch("");
  };

  if (redirect) {
    return <Navigate to={"/login"} />;
  }

  const navigate = useNavigate();
  const categoryHandle = (item) => {
    navigate(`/categories/${item}`);
  };

  if (stateManage) {
    console.log(stateManage);
  }
  return (
    <nav className="  flex flex-col ">
      <div className="root-container-search main-nav flex gap-2 p-2  items-center justify-between h-1/2">
        <div className="logo-container ">
          <FaReact className="logo cursor-pointer" />
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
          <div className=" cross flex gap-2 items-center justify-end  p-1 rounded-xl">
            <IoIosClose
              className="h-full  cursor-pointer text-2xl"
              onClick={crossHandler}
            />
            <IoSearchOutline className=" h-full w-5 rounded-xl cursor-pointer pr-1" />
          </div>
        </div>
        <div className="cart">
          <Link to={"/cart"}>
            <BsCart className="cursor-pointer" />
          </Link>
        </div>

        {user && user.data ? (
          <div className="flex gap-2 pr-2 justify-center items-center">
            <div className="user  gap-2 rounded-xl ">
              <Link to={"/profile"}>{user.data.user.Name}</Link>
              <Link to={"/profile"}>
                <CiUser className="user-logo cursor-pointer rounded-xl p-1" />
              </Link>
            </div>
            <div className="logout-container">
              <Link>
                <AiOutlineLogout onClick={logoutHandler} />
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
          <li onClick={(e) => categoryHandle("men's clothing")}>
            MEN'S CLOTHING
          </li>
          <li onClick={(e) => categoryHandle("women's clothing")}>
            WOMEN'S CLOTHING
          </li>
          <li onClick={(e) => categoryHandle("jewelery")}>JWELERY</li>
          <li onClick={(e) => categoryHandle("electronics")}>ELECTRONICS</li>
        </ul>
      </div>
      {selectedProd && selectedProd.length === 0 ? (
        <div className="banner"></div>
      ) : null}
    </nav>
  );
};

export default Navigation;
