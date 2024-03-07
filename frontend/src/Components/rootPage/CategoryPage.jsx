import React from "react";
import "../../App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const CategoryPage = ({ selectedProd, setStateManage }) => {
  const [categories, setCategories] = useState([]);
  const { categoryType } = useParams();
  const [respData, setRespData] = useState();
  useEffect(() => {
    axios.get("http://localhost:3000/products").then((response) => {
      setRespData(response.data);
    });
  }, []);
  const handleCategory = () => {
    if (respData && respData.data) {
      setCategories(
        respData.data.filter((item) => {
          item.category.includes(categoryType);
        })
      );
    }
    console.log(categories);
  };

  return <button onClick={handleCategory}>Categorypage</button>;
};

export default CategoryPage;
