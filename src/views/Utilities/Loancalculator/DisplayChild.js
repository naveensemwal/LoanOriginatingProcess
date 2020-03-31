import React from "react";
import PropTypes from "prop-types";

const DisplayChild = ({ func, text }) => {
  return (
    <span className='clearfix'>
      {func} <small className='pull-left text-left'>{text}</small>
    </span>
  );
};

DisplayChild.defaultProps = {
  func: () => <p>Missing numeric value</p>,
  text: "No value provided"
};

DisplayChild.propTypes = {
  func: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired
};

export default DisplayChild;