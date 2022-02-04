import React, { useState, createContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { api, createSession } from "../service/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUsed = localStorage.getItem("user");

    if (recoveredUsed) {
      setUser(JSON.parse(recoveredUsed));
    }

    setLoading(false);
  }, []);

  const login = async (usuario, senha) => {
    console.log("login auth", { usuario, senha });

    const response = await createSession(usuario, senha);

    console.log("login", response.data);

    const loggedUser = response.data.user;
    const token = response.data.token;

    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("token", JSON.stringify(token));

    api.defaults.headers.Authorization = `Beares ${token}`;

    setUser(loggedUser);
    navigate("/");
  };

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = null;
    setUser(null);
    navigate("/login");
  };
  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
