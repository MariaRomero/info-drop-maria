import React from "react";
import { useForm  } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";

import Checkbox from "../Checkbox/Checkbox";
import DateInputGroup from "../DateInputGroup/DateInputGroup"
import InputGroup from "../InputGroup/InputGroup";
import Link from "../Link/Link";
import StatusMessage from "../StatusMessage/StatusMessage"
import updateAction from "../../helpers/updateAction";

import "./Form.css";
import Button from "../Button/Button";

const Form = (props) => {
    const {register, handleSubmit,  formState: { errors } } = useForm();
    const { state, actions } = useStateMachine({ updateAction });

    const onSubmit = (data) => {
        actions.updateAction(data);
        // event.preventDefault();
        if (props.history) props.history.push("./preview");
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <DateInputGroup 
                    labelText="When did you hear it?" 
                    name={'date'}
                    register={register}
                    defaultValue={state}    
                    />
                <InputGroup 
                    labelText="What company was it about?" 
                    isOptional={false}
                    placeholder="Company Name" 
                    name={'companyName'}
                    register={register}
                    defaultValue={state.companyName}
                /> 
                {errors.companyName && <StatusMessage label="This field is required" variant="error" />}

                <InputGroup 
                    labelText="How many millions?" 
                    inputType="number"
                    placeholder={'999.999'}
                    name={'amount'}
                    register={register}
                    defaultValue={state.amount}

                />
                <InputGroup 
                    labelText="In what currency?" 
                    placeholder="Currency code" 
                    name={'currency'}
                    register={register}
                    defaultValue={state.currency}

                />
                <InputGroup 
                    labelText="Source codename" 
                    placeholder="Codename" 
                    name={'sourceCodename'}
                    register={register}
                    defaultValue={state.sourceCodename}

                />

                <Checkbox 
                    title="From a trusted source" 
                    register={register}
                    defaultValue={state.isTrustedSource}

                />

                { errors.companyName && <StatusMessage label="An error was found. Please check your entry" variant="error" /> }
                                
                <div className="buttonsWrapper">
                    <Link
                        to="/"
                        label="Discard"
                        iconBefore="chevronLeft"
                        variant="secondary" />
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
