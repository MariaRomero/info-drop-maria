import React from "react";

import PropTypes from "prop-types";
import H2 from "../H2/H2";

import "./Checkbox.css";

const Checkbox = ({ title }) => {
  return (
    <>
        <label className="checkbox-wrapper" data-testid="Checkbox">
            <input className="input primary checked" 
                type="checkbox" />
            <H2 title={title} />
        </label>
    </>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  title: PropTypes.string.isRequired,
  tagText: PropTypes.string,
};

Checkbox.defaultProps = {
  tagText: undefined,
};
