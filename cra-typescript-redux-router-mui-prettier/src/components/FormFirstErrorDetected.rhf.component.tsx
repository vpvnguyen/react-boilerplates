import { CSSProperties } from "react";
import { useForm } from "react-hook-form";

interface IFormInputs {
  singleErrorInput: string;
  multipleErrorInput: string;
  numberInput: string;
}

const styles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  margin: "30px",
  borderStyle: "solid",
};

export default function FormFirstErrorDetected() {
  const { register, errors, handleSubmit } = useForm<IFormInputs>({
    // mode: 'onSubmit',
    // mode: "onChange",
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: true,
  });

  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <form style={styles} onSubmit={handleSubmit(onSubmit)}>
      <h3>FormFirstErrorDetected</h3>

      <label>Error</label>
      <input
        type='text'
        name='singleErrorInput'
        ref={register({ required: true })}
      />
      {errors.singleErrorInput && <p>Your input is required</p>}

      <label>Error with type check</label>
      <input
        type='text'
        name='multipleErrorInput'
        ref={register({ required: true, minLength: 5 })}
      />
      {errors.multipleErrorInput?.type === "required" && (
        <p>Your input is required</p>
      )}
      {errors.multipleErrorInput?.type === "minLength" && (
        <p>Your input must be larger then 3 characters</p>
      )}

      <label>Error with value</label>
      <input type='number' name='numberInput' ref={register({ min: 50 })} />
      {errors.numberInput?.type === "min" && (
        <p>Your input required to be more than 50</p>
      )}

      <input type='submit' />
    </form>
  );
}
