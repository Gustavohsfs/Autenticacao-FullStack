import React, { useContext } from "react";

import { AuthContext } from "../../contexts/auth";
const Home = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <h1>Bem vindo ao Home</h1>
      
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};
export default Home;
