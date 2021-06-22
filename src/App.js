import React, { Component } from 'react';
import './App.css';
import { Container, Typography } from '@material-ui/core';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h4" align="center" component="h1">Formulário de Cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviar} validarCPF={validarCPF} />
      </Container>
    );
  };
};

function aoEnviar(dados) {
  const formulario = { ...dados }
  console.log(formulario);
}

function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF não contem 11 digitos" }
  } else {
    return { valido: true, texto: "" }
  }
}


export default App;
