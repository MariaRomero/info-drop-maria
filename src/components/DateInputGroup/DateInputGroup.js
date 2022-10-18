import React from "react";
import PropTypes from "prop-types";
import "./DateInputGroup.css";

const DateInputGroup = ({ labelText }) => {
  return (
    <section className="dateInputGroup" data-testid="DateInputGroup">
        <label className="labelContiner">
            {labelText}
        </label>

        <div className="dateWrapper">
            <input 
                className="dateContiner"
                name="day"
                type="text"
                placeholder="dd"
            />
            <input
                className="dateContiner"
                name="month"
                type="text"
                placeholder="mm"
            />
            <input
                className="dateContiner"
                name="year"
                type="text"
                placeholder="yyyy"
            />
        </div>
    </section>
  );
};

export default DateInputGroup;

DateInputGroup.propTypes = {
    labelText: PropTypes.string
};

DateInputGroup.defaultProps = {
    labelText: undefined
};
