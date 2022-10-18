import React from "react";
import { useForm  } from "react-hook-form";

import Link from "../../components/Link/Link";
import InputGroup from "../InputGroup/InputGroup";
import DateInputGroup from "../DateInputGroup/DateInputGroup"
import "./Form.css";
import Checkbox from "../Checkbox/Checkbox";
import StatusMessage from "../StatusMessage/StatusMessage"

const Form = () => {
    const {register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

    return (
        <>
            <form className="form" onSubmit={handleSubmit((data) => {
                console.log(data)
            })}>
                <DateInputGroup labelText="When did you hear it?" />
                <InputGroup 
                    labelText="What company was it about?" 
                    isOptional={false}
                    placeholder="Company Name" 
                    name={'companyName'}
                    register={register}
                /> 
                {errors.companyName && <StatusMessage label="This field is required" variant="error" />}

                <InputGroup 
                    labelText="How many millions?" 
                    inputType="number"
                    placeholder={'999.999'}
                    name={'cost'}
                    register={register}
                />
                <InputGroup 
                    labelText="In what currency?" 
                    placeholder="Currency code" 
                    name={'currency'}
                    register={register}
                />
                <InputGroup 
                    labelText="Source codename" 
                    placeholder="Codename" 
                    name={'codename'}
                    register={register}
                />

                <Checkbox title="From a trusted source" iconType="done" />
                { errors.companyName && <StatusMessage label="An error was found. Please check your entry" variant="error" /> }
                
                <input type="submit"/>
                
                <div className="buttonsWrapper">
                    <Link
                        to="/"
                        label="Discard"
                        iconBefore="chevronLeft"
                        variant="secondary" />
                    <Link
                        to="/preview"
                        label="Validate and preview"
                        iconBefore="infoCircleOutline"
                        variant="primary" 
                        />
                </div>
            </form>
        </>
    );
};

export default Form;
