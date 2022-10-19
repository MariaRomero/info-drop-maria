import React from "react";

import PropTypes from "prop-types";
import StatusMessage from "../StatusMessage/StatusMessage";
import Tag from "../Tag/Tag";

import "./InputGroup.css";

const InputGroup = ({ labelText, isOptional, placeholder, name, inputType, register, defaultValue, errors }) => {
  const err = errors && errors[name]

  return (
    <section className={`inputGroup ${err && "errorBorder"}`} 
      data-testid="InputGroup">
      <label className={err && "errorBorderPadding"}>
        <div className="textContiner">
          { labelText }
          { isOptional ? <Tag label="Optional"/> : ''}
        </div>
        <input
          className="inputTag"
          placeholder={placeholder}
          name={name}
          defaultValue={defaultValue}
          type={inputType}
          {...register(name, { required: !isOptional })}
        />
        {err && <div className="errorWrapper">
          <StatusMessage label="This field is required" variant="error" />
        </div>}

      </label>
    </section>
  );
};

export default InputGroup;

InputGroup.propTypes = {
  labelText: PropTypes.string,
  isOptional: PropTypes.bool,
  placeholder: PropTypes.string, 
  name: PropTypes.string, 
  inputType: PropTypes.string, 
  register: PropTypes.func,
  defaultValue: PropTypes.string
};

InputGroup.defaultProps = {
  labelText: undefined,
  isOptional: true,
  placeholder: undefined, 
  name: undefined, 
  inputType: 'text', 
  register: undefined,
  defaultValue: null
};
