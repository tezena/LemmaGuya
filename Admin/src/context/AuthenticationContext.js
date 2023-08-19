// AuthenticationContext.js
import React, { createContext, useContext, useState } from "react";

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (name, password) => {
    try {
      // Make an API call to authenticate the user
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        body: JSON.stringify({ name, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log('API Response:', response);

      if (response.ok) {
        const userData = await response.json();
        setUser(userData); // Set user data upon successful login
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = () => {
    setUser(null); // Clear user data upon logout
  };

  return (
    <AuthenticationContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = () => {
  return useContext(AuthenticationContext);
};
