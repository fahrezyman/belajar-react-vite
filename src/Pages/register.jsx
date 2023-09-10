import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout title="Sign Up" type="register">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
