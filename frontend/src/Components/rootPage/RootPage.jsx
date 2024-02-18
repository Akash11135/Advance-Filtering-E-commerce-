import React, { useContext } from "react";
import "../../App.css";
import Navigation from "./Navigation";
import Main from "./Main";
import Footer from "./Footer";
import { UserContext } from "../extra/UserContext";

const RootPage = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="rootPage-container min-h-screen">
      <Navigation user={user} />
      <div className="root-container ">
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default RootPage;
