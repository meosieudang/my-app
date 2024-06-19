import React from "react";
import PropTypes from "prop-types";
const CustomButton = ({
  text,
  onClick
}) => {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick
  }, text);
};
CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
export default CustomButton;