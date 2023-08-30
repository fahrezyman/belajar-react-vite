import PropTypes from "prop-types";

const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label
      htmlFor={htmlFor}
      className="block mb-2 text-sm font-mono text-white"
    >
      {children}
    </label>
  );
};
Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Label;
