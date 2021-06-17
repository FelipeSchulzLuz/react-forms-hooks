import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formulario = {
          nome: this.nome,
          sobrenome: this.sobrenome,
          cpf: this.cpf,
        };
        return formulario;
      }}
    >
      <TextField
        value={nome}
        onChange={(e) => {
          let tmpNome = e.target.value;
          if (tmpNome.length >= 3) {
            tmpNome = tmpNome.substring(0, 3);
          }
          setNome(tmpNome);
        }}
        margin="normal"
        fullWidth
        id="outlined-basic"
        label="Nome"
        variant="outlined"
        type="text"
      />
      <TextField
        value={sobrenome}
        onChange={(e) => {
          setSobrenome(e.target.value);
          return sobrenome;
        }}
        margin="normal"
        fullWidth
        id="outlined-basic"
        label="Sobrenome"
        variant="outlined"
        type="text"
      />
      <TextField
        value={cpf}
        onChange={(e) => {
          setCpf(e.target.value);
          return cpf;
        }}
        margin="normal"
        fullWidth
        id="outlined-basic"
        label="CPF"
        variant="outlined"
        type="text"
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            variant="contained"
            defaultChecked
            name="Promoções"
            color="primary"
            type="checkbox"
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            variant="contained"
            defaultChecked
            name="Novidades"
            color="primary"
            type="checkbox"
          />
        }
      />

      <Button size="large" variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}
export default FormularioCadastro;
