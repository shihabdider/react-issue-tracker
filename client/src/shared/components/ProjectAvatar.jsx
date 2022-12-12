import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

const defaultProps = {
  className: undefined,
  size: 40
};

const ImgLogo = ({ className, size, src }) => {
  return (
    <div className={className}>
      <img src={src} alt="Logo" width={size} />
    </div>
  );
};

ImgLogo.propTypes = propTypes;
ImgLogo.defaultProps = defaultProps;

export default ImgLogo;
