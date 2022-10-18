import React from "react";

import PropTypes from "prop-types";

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
          <section className="H2" data-testid="H2">
            <h2 className="titleText">{title}</h2>
          </section>
          </div>
      </label>
    </>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  title: PropTypes.string.isRequired,
  register: PropTypes.func,
};

Checkbox.defaultProps = {
  title: undefined,
  register: undefined
};
