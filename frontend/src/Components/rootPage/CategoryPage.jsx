import React from "react";
import "../../App.css";
import axios from "axios";
import { useState, useEffect } from "react";
const CategoryPage = ({ selectedProd, setStateManage }) => {
  const [categories, setCategories] = useState([]);
  // console.log("---->", typeof setSelectedProd);
  const categoryHandle = async (searchItm) => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      if (response.data && response.data.data) {
        setCategories(
          response.data.data.filter((user) => {
            return user && user.category.toLowerCase().includes(searchItm);
          })
        );
      }
    } catch (err) {
      console.log("unable to search the category");
    }
  };
  // useEffect(() => {
  //   if (typeof setSelectedProd === "function") {
  //     // setSelectedProd(categories);
  //   }
  // }, [categories]);
  // console.log("selectedProd--->", setSelectedProd);
  return (
    <div>
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
    </div>
  );
};

export default CategoryPage;
