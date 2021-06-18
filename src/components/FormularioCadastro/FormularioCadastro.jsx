import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({ aoEnviar, validacoes }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({cpf: { valido: true, texto: "" }});

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
        margin="normal"
        id="nome"
        label="Nome"
        variant="outlined"
        type="text"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(e) => {
          setSobrenome(e.target.value);
        }}
        margin="normal"
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        type="text"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(e) => {
          setCpf(e.target.value);
        }}
        onBlur={(e) => {
          const isValid = validacoes.validarCpf(cpf);
          setErros({ cpf: isValid });
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
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
