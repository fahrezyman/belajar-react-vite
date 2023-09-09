import PropTypes from "prop-types";
import TypingAnimation from "../Elements/Typewriter Animation";

const AuthLayout = (props) => {
  const { children, title } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-900">
          {title}
        </h1>
        <p className=" mb-4">Please enter your Account</p>
        {children}
        <TypingAnimation />
      </div>
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default AuthLayout;
