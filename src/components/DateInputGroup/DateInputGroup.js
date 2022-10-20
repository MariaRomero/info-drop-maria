import React from "react";
import PropTypes from "prop-types";

import "./DateInputGroup.css";

const DateInputGroup = ({ labelText, register, defaultValue }) => {
  return (
    <section className="dateInputGroup" data-testid="DateInputGroup">
      <label className="labelContainer">{labelText}</label>
      <div className="dateWrapper">
        <input
          className="dateContainer"
          name="day"
          type="number"
          placeholder="dd"
          defaultValue={defaultValue && defaultValue.day}
          {...register("day")}
        />
        <input
          className="dateContainer"
          name="month"
          type="number"
          placeholder="mm"
          defaultValue={defaultValue && defaultValue.month}
          {...register("month")}
        />
        <input
          className="dateContainer"
          name="year"
          type="number"
          placeholder="yyyy"
          defaultValue={defaultValue && defaultValue.year}
          {...register("year")}
        />
      </div>
    </section>
  );
};

export default DateInputGroup;

DateInputGroup.propTypes = {
  labelText: PropTypes.string.isRequired,
  defaultValue: PropTypes.object,
};

DateInputGroup.defaultProps = {
  labelText: undefined,
  defaultValue: null,
};
