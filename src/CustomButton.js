import React from "react";
import PropTypes from "prop-types";

const CustomButton = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CustomButton;
