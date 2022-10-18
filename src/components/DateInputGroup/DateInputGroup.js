import React from "react";
import PropTypes from "prop-types";

import "./DateInputGroup.css";

const DateInputGroup = ({ labelText, register, defaultValue }) => {
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
                defaultValue={defaultValue.day}
                {...register("day")}
            />
            <input
                className="dateContiner"
                name="month"
                type="text"
                placeholder="mm"
                defaultValue={defaultValue.month}
                {...register('month')}
            />
            <input
                className="dateContiner"
                name="year"
                type="text"
                placeholder="yyyy"
                defaultValue={defaultValue.year}
                {...register('year')}
            />
        </div>
    </section>
  );
};

export default DateInputGroup;

DateInputGroup.propTypes = {
    labelText: PropTypes.string,
    defaultValue: PropTypes.object
};

DateInputGroup.defaultProps = {
    labelText: undefined,
    defaultValue: null
};
