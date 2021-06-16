import React from "react";
import {
  Button,
  TextField,
  Switch,
  FormControlLabel,
} from "@material-ui/core";

function FormularioCadastro() {
  return (
    <form>
      <TextField
        margin="normal"
        fullWidth
        id="outlined-basic"
        label="Nome"
        variant="outlined"
        type="text"
      />
      <TextField
        margin="normal"
        fullWidth
        id="outlined-basic"
        label="Sobrenome"
        variant="outlined"
        type="text"
      />
      <TextField
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

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}
export default FormularioCadastro;
