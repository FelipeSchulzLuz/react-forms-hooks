import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        aoEnviar({email, senha});
      }}
    >
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        label="email"
        type="email"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <TextField
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        id="password"
        label="password"
        type="password"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <Button size="large" variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
