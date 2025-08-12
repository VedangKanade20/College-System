"use client";

import apiUrl from "@/helper/apiUrl";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/users/user`, {
        withCredentials: true,
      });

      setUser(data?.user);
    } catch (error) {
      setUser(null);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  console.log("This is the logged user data", user);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
