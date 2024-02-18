import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const UserContext = createContext({});
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      axios.get("http://localhost:3000/profile").then((response) => {
        setUser(response);
        console.log("response-->", response);
      });
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
