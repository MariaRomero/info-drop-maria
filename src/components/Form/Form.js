import React from "react";
import Link from "../../components/Link/Link";
import InputGroup from "../InputGroup/InputGroup";
import DateInputGroup from "../DateInputGroup/DateInputGroup"
import "./Form.css";
import Checkbox from "../Checkbox/Checkbox";

const Form = () => {
    return (
        <>
            <form className="form">
                <DateInputGroup labelTex="When did you hear it?" isOptional={false}/>
                <InputGroup 
                    labelTex="What company was it about?" 
                    inputType="text"
                    isOptional={false}
                    inputValue="Company Name" 
                /> 
                <InputGroup 
                    labelTex="How many millions?" 
                    inputType="number"
                    isOptional={true}
                    inputValue={999999} 
                />
                <InputGroup 
                    labelTex="In what currency?" 
                    inputType="text"
                    isOptional={true}
                    inputValue="Currency code" 
                />
                <InputGroup 
                    labelTex="Source codename" 
                    inputType="text"
                    isOptional={true}
                    inputValue="Codename" 
                />
            </form>

            <Checkbox title="From a trusted source" iconType="done" />
            
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
                    variant="primary" />
            </div>
        </>
    );
};

export default Form;
