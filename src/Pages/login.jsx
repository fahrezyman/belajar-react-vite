/* eslint-disable react/no-unescaped-entities */
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
      <p className="text-sm my-6 text-center">
        Don't have an account? {""}
        <Link to="/register" className="text-blue-500 font-bold">
          Sign Up
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
