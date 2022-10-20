import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";

import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import DateInputGroup from "../DateInputGroup/DateInputGroup";
import InputGroup from "../InputGroup/InputGroup";
import Link from "../Link/Link";
import StatusMessage from "../StatusMessage/StatusMessage";

import { CustomContext } from "../../store";

import "./Form.css";

const Form = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { state, updateState } = useContext(CustomContext);

  const onSubmit = (data) => {
    updateState(data);
    if (props.history) props.history.push("./preview");
  };

  return (
    <>
      <form
        className="form"
        onSubmit={handleSubmit(onSubmit)}
        data-testid="Form"
      >
        <DateInputGroup
          labelText="When did you hear it?"
          name={"date"}
          register={register}
          defaultValue={state.date}
        />
        <InputGroup
          labelText="What company was it about?"
          isOptional={false}
          placeholder="Company Name"
          name={"companyName"}
          register={register}
          defaultValue={state && state.companyName}
          errors={errors}
        />
        <InputGroup
          labelText="How many millions?"
          inputType="number"
          placeholder={"999.999"}
          name={"amount"}
          register={register}
          defaultValue={state && state.amount}
        />
        <InputGroup
          labelText="In what currency?"
          placeholder="Currency code"
          name={"currency"}
          register={register}
          defaultValue={state && state.currency}
        />
        <InputGroup
          labelText="Source codename"
          placeholder="Codename"
          name={"sourceCodename"}
          register={register}
          defaultValue={state && state.sourceCodename}
        />

        <Checkbox
          title="From a trusted source"
          register={register}
          defaultValue={state && state.isTrustedSource}
        />

        {errors.companyName && (
          <div className="errorWrapper">
            <StatusMessage
              label="An error was found. Please check your entry"
              variant="error"
            />
          </div>
        )}

        <div className="buttonsWrapper">
          <Link
            to="/"
            label="Discard"
            iconBefore="chevronLeft"
            variant="secondary"
          />
          <Button
            label="Validate and preview"
            iconBefore="infoCircleOutline"
            variant="primary"
            onClick={() => {}}
            type="submit"
          />
        </div>
      </form>
    </>
  );
};

export default withRouter(Form);
