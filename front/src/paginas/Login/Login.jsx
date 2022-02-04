import { Typography, TextField, Container, Button } from "@mui/material";
import "./login.css";
import React, { useState, useContext } from "react";
import {AuthContext} from '../../contexts/auth'


function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const { login} = useContext(AuthContext)

  return (
    <div className="fundo">
      <section className="tela">
        <Container maxWidth="sm">
          <Typography variant="h4" component="h1" align="center">
            Login
          </Typography>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              console.log('submit', {usuario, senha});
              login(usuario, senha);
            }}
          >
            <TextField
              value={usuario}
              onChange={(event) => {
                setUsuario(event.target.value);
              }}
              id="usuario"
              label="Usuario"
              name="usuario"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
            <TextField
              value={senha}
              onChange={(event) => {
                setSenha(event.target.value);
              }}
              id="senha"
              name="senha"
              label="Senha"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              type="password"
            />

            <Button type="submit" variant="contained">
              Acessar
            </Button>
          </form>
        </Container>
      </section>
    </div>
  );
}

export default Login;
