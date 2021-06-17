import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({submit}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  return (
    <form
      onSubmit={(e) => {
       e.preventDefault();
       submit({nome, sobrenome, cpf, promocoes, novidades})
      }}
    >
      <TextField
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
          return nome;
        }}
        margin="normal"
        fullWidth
        id="nome"
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
        id="sobrenome"
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
        id="cpf"
        label="CPF"
        variant="outlined"
        type="text"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
          checked={promocoes}
            onChange={(event) => setPromocoes(event.target.checked)}
            variant="contained"
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
          checked={novidades}
            onChange={(event) => setNovidades(event.target.checked)}
            variant="contained"
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
