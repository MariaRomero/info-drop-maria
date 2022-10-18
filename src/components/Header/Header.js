import React from "react";
import PropTypes from "prop-types";

import "./Header.css";

const Header = ({ title, subtitle }) => {
  return (
    <header className="header" data-testid="Header">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

Header.defaultProps = {
  title: undefined,
  subtitle: undefined,
};
