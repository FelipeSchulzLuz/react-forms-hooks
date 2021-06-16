import React, { Component } from 'react';
import './App.css';
import { Container, Typography } from '@material-ui/core';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

class App extends Component {
  render() {
    return (
      <Container id="root" component="article" maxWidth="sm">
        <Typography variant="h4" align="center" component="h1">Formulário de Cadastro</Typography>
        <FormularioCadastro/>
      </Container>
    );
  };
};

export default App;
