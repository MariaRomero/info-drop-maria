import React from "react";

import PropTypes from "prop-types";
import H2 from "../H2/H2";

import "./Checkbox.css";

const Checkbox = ({ title, register }) => {
  return (
    <>
      <label className="checkbox-wrapper" data-testid="Checkbox">
          <input 
            className="checkbox" 
            type="checkbox"
            name="isTrustedSource"
            {...register("isTrustedSource")}
          />
          <div className="paddingLeft">
          <H2 title={title} />
          </div>
      </label>
    </>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  title: PropTypes.string.isRequired,
  register: PropTypes.object,
};

Checkbox.defaultProps = {
  title: undefined,
  register: undefined
};
