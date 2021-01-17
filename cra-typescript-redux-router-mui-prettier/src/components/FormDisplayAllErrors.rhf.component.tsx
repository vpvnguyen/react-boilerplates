import { CSSProperties } from "react";
import { useForm } from "react-hook-form";

interface IFormInputs {
  password: string;
}

const styles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  margin: "30px",
  borderStyle: "solid",
};

export default function FormDisplayAllErrors() {
  const { register, errors, handleSubmit } = useForm<IFormInputs>({
    // by setting criteriaMode to 'all',
    // all validation errors for single field will display at once
    criteriaMode: "all",
    mode: "onChange",
  });

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
  };

  return (
    <form style={styles} onSubmit={handleSubmit(onSubmit)}>
      <h3>FormDisplayAllErrors</h3>
      <label>Password</label>
      <input
        type='password'
        name='password'
        ref={register({ required: true, minLength: 10, pattern: /d+/gi })}
      />
      {/* without enter data for the password input will result both messages to appear */}
      {errors?.password?.types?.required && <p>password required</p>}
      {errors?.password?.types?.minLength && <p>password minLength 10</p>}
      {errors?.password?.types?.pattern && <p>password number only</p>}

      <input type='submit' />
    </form>
  );
}
