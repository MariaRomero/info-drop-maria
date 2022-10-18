import React from "react";
import PropTypes from "prop-types";
import "./H2.css";
import Tag from "../Tag/Tag";

const H2 = ({ title, tagText }) => {
  return (
    <section className="H2" data-testid="H2">
      <h2>{title}</h2>
      { tagText ? <Tag label={tagText}/> : ''}
    </section>
  );
};

export default H2;

H2.propTypes = {
  title: PropTypes.string.isRequired,
  tagText: PropTypes.string,
};

H2.defaultProps = {
  tagText: undefined,
};
