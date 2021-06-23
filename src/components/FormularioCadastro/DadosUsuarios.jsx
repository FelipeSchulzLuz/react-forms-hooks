import React, { useContext, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import ValidacoesCadastro from "../../context/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro)
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);
  
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if(possoEnviar()){
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        name="email"
        label="email"
        type="email"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <TextField
        value={senha}
        onChange={(e) => {
          setSenha(e.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        name="senha"
        id="senha"
        label="senha"
        type="password"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <Button size="large" variant="contained" color="primary" type="submit">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
