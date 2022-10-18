import React from "react";
import PropTypes from "prop-types";
import "./InputGroup.css";
import Tag from "../Tag/Tag";

const InputGroup = ({ labelTex, inputValue, inputType, isOptional }) => {
  return (
    <section className="inputGroup" data-testid="InputGroup">
      <label>
      <div className="textContiner">
        {labelTex}
        { isOptional ? <Tag label="Optional"/> : ''}
      </div>
        <input
          className="inputTag"
          placeholder={inputValue}
          name={inputValue}
          type={inputType}
          // value={inputValue}
        />
    </label>
    </section>
  );
};

export default InputGroup;

InputGroup.propTypes = {
  title: PropTypes.string.isRequired,
  tagText: PropTypes.string,
  isOptional: PropTypes.bool
};

InputGroup.defaultProps = {
  tagText: undefined,
  isOptional: true
};
