import { useState } from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";

const initialState = {
  name: "",
  password: "",
};

const FormUseState = () => {
  const [state, setState] = useState(initialState);

  const onChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // handle validation
    console.log(JSON.stringify(state));
  };

  const handleReset = () => {
    console.log("reset");
    setState(initialState);
  };

  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Grid item>
        <Typography variant='h5'>Example useState Form</Typography>
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          variant='outlined'
          id='name-useReducer'
          name='name'
          label='Name'
          value={state.name}
          onChange={onChange}
        />
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          variant='outlined'
          id='password-useReducer'
          name='password'
          label='Password'
          value={state.password}
          onChange={onChange}
        />
      </Grid>
      <Button variant='contained' color='primary' onClick={handleSubmit}>
        Submit
      </Button>
      <Button variant='contained' color='secondary' onClick={handleReset}>
        Reset
      </Button>
    </Grid>
  );
};

export default FormUseState;
