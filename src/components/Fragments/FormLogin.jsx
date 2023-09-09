import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";

const FormLogin = () => {
  return (
    <form action="" className="">
      <InputForm
        label="Email"
        type="email"
        placeholder="Email"
        name="email"
      ></InputForm>
      <InputForm
        label="Password"
        type="password"
        placeholder="Password"
        name="password"
      ></InputForm>

      <Button variant="bg-blue-900 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
