import React from "react";
import PropTypes from "prop-types";
import "./InputGroup.css";
import Tag from "../Tag/Tag";

const InputGroup = ({ labelText, isOptional, placeholder, name, inputValue, inputType, register }) => {

  return (
    <section className="inputGroup" data-testid="InputGroup">
      <label>
        <div className="textContiner">
          { labelText }
          { isOptional ? <Tag label="Optional"/> : ''}
        </div>
        <input
          className="inputTag"
          placeholder={placeholder}
          name={name}
          value={inputValue}
          type={inputType}
          {...register(name, { required: !isOptional })}
        />
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
  inputValue: PropTypes.number, 
  inputType: PropTypes.string, 
  register: PropTypes.func
};

InputGroup.defaultProps = {
  labelText: undefined,
  isOptional: true,
  placeholder: undefined, 
  name: undefined, 
  inputValue: undefined, 
  inputType: 'text', 
  register: undefined
};
