import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isDirty, isSubmitting, touched, submitCount },
    errors,
  } = useForm();

  // before validation
  const validatedFormData = (data: any) => {
    console.log("validatedFormData");
    console.log(`formState.isDirty: ${isDirty}`);
    console.log(`formState.isSubmitting : ${isSubmitting}`);
    console.log(`formState.touched: ${JSON.stringify(touched)}`);
    console.log(`formState.submitCount: ${submitCount}`);
    console.log(`data: ${JSON.stringify(data)}`);
    return data;
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    // handleSubmit hook handles data validation within its process
    const formData = handleSubmit(validatedFormData)();
    console.log(errors.name?.message);
    console.log(JSON.stringify(formData));
  };

  // immediate validation
  const validateFormData = (data: any) => {
    return console.log(data);
  };

  // watch input value by name
  console.log(watch("name"));
  console.log(watch("password"));

  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <form
        style={{ borderStyle: "solid", margin: "30px" }}
        onSubmit={(event) => onSubmit(event)}
      >
        {/* <form
        style={{ borderStyle: "solid", margin: "30px" }}
        onSubmit={handleSubmit(validateFormData)}
      > */}
        <Grid item>
          <Typography variant='h5'>Example React Hook Form</Typography>
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            variant='outlined'
            id='name'
            name='name'
            label='Name'
            inputRef={register({
              required: "Name is required",
              minLength: 1,
            })}
          />
          <Typography>{errors.name && errors.name.message}</Typography>
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            variant='outlined'
            id='password'
            name='password'
            label='Password'
            inputRef={register({
              required: "Password is required",
              minLength: 3,
            })}
          />
          <Typography>{errors.password && errors.password.message}</Typography>
        </Grid>
        <Button variant='contained' color='primary' type='submit'>
          Submit
        </Button>
        <Button variant='contained' color='secondary' onClick={reset}>
          Reset
        </Button>
      </form>
    </Grid>
  );
};

export default Form;
