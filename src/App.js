import './App.css';
import React, { Component } from 'react';
import { Container, Typography } from '@material-ui/core';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { validarSenha, validarCPF } from './models/cadastro'
import ValidacoesCadastro from "./context/ValidacoesCadastro"

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h4" align="center" component="h1">Formulário de Cadastro</Typography>
        <ValidacoesCadastro.Provider value={{ nome: validarSenha, cpf: validarCPF, senha: validarSenha }}>
        <FormularioCadastro aoEnviar={aoEnviar} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  };
};

function aoEnviar(dados) {
  const formulario = { ...dados }
  console.log(formulario);
}




export default App;
