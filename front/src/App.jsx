import "./App.css";
import React, { useContext } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./paginas/Login/Login";
import Home from "./paginas/home/Home";
import { AuthProvider, AuthContext } from "./contexts/auth";

function App() {
  const Private = ({children}) => {
    const { authenticated, loading } = useContext(AuthContext);

    if(loading) {
      return <div className="loading">Carregando...</div>
    }

    if (!authenticated) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <Private>
                <Home />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

/*function aoEnviarForm(dados) {
  axios
    .post("http://localhost:5000/usuario/login", dados)
    .then(() => {
      console.log("Deu certo");
    })
    .catch(() => {
      console.log("Errado");
    });
}*/

export default App;
