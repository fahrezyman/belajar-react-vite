import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayout";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayout title="Sign Up">
      <FormRegister />
      <p className="text-sm my-6 text-center">
        Already have an account? {""}
        <Link to="/login" className="text-blue-500 font-bold">
          Log in
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;
