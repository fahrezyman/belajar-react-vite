import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";

const FormLogin = () => {
  return (
    <form action="" className="mb-8">
      <InputForm
        className="font-mono"
        label="Email"
        type="email"
        placeholder="Email"
        name="email"
      ></InputForm>
      <InputForm
        className="font-mono"
        label="Password"
        type="password"
        placeholder="Password"
        name="password"
      ></InputForm>

      <Button variant="bg-cyan-500 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
