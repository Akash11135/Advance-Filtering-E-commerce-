import React, { useContext } from "react";
import "../../App.css";
import Navigation from "./Navigation";
import Main from "./Main";
import Footer from "./Footer";
import { UserContext } from "../extra/UserContext";
import { useState } from "react";
const RootPage = () => {
  const { user } = useContext(UserContext);
  const [selectedProd, setSelectedProd] = useState([]);

  return (
    <div className="rootPage-container min-h-screen">
      <div className="root-container-nav ">
        <Navigation user={user} setSelectedProd={setSelectedProd} />
      </div>
      <div className="root-container-main  m-3">
        <Main selectedProd={selectedProd} />
      </div>
      <div className="root-container-footer">
        <Footer />
      </div>
    </div>
  );
};

export default RootPage;
