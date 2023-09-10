/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types";
import TypingAnimation from "../Elements/Typewriter Animation";
import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-900">{title}</h1>
        <p className=" mb-4">Please enter your Account</p>
        {children}
        <p className="text-sm my-6 text-center">
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          {""}
          <Link
            to={type === "login" ? "/register" : "/login"}
            className="text-blue-500 font-bold"
          >
            {type === "login" ? "Sign Up" : "Log In"}
          </Link>
        </p>
        <TypingAnimation />
      </div>
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default AuthLayout;
