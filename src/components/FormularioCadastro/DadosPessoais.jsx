import React, { useState, useContext } from "react";
import ValidacoesCadastro from "../../context/ValidacoesCadastro"
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import useErros from "../../hooks/useErros";

function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(ValidacoesCadastro)
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if(possoEnviar()){
          aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
        }
      }}
    >
      <TextField
        value={nome}
        onBlur={validarCampos}
        onChange={(e) => { setNome(e.target.value); }}
        name="nome"
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        margin="normal"
        id="nome"
        label="Nome"
        variant="outlined"
        type="text"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(e) => { setSobrenome(e.target.value); }}
        name="sobrenome"
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
        onBlur={validarCampos}
        name="cpf"
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
            name="promocoes"
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
            name="novidades"
            color="primary"
            type="checkbox"
          />
        }
      />
      <Button size="large" variant="contained" color="primary" type="submit">
        Próximo
      </Button>
    </form>
  );
}
export default DadosPessoais;
