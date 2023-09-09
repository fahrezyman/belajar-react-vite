import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";

const FormRegister = () => {
  return (
    <form action="" className="mb-8">
      <InputForm
        label="Fullname"
        type="text"
        placeholder="John Doe"
        name="fullname"
      ></InputForm>
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
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
      ></InputForm>

      <Button variant="bg-blue-900 w-full">Sign Up</Button>
    </form>
  );
};

export default FormRegister;
