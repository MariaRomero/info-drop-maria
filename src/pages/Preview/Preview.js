import React from "react";
import { useStateMachine } from "little-state-machine";

import Header from "../../components/Header/Header";
import Link from "../../components/Link/Link";
import Tag from "../../components/Tag/Tag";
import updateAction from "../../updateAction";

import "./Preview.css";
import Button from "../../components/Button/Button";

const Preview = (props) => {

    const { state } = useStateMachine(updateAction);
    if (props.history) props.history.push("./create");

    // var jsonData = {
    //     date: {
    //         day: number,
    //         month: number,
    //         year: number,
    //     },
    //    companyName: string,
    //    amount: number, // optional
    //    currency: string, // optional
    //    sourceCodename: string, // optional
    //    isTrustedSource: bool,
    // }

    const handleClick = () => {
        fetch('https://rocky-chamber-70595.herokuapp.com/rumour', {  
            method: 'POST', 
            mode: 'cors', 
            // body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
    
        })
    }

    return (
        <div className="preview" >
        <Header title="Preview" subtitle="Here’s what will be published" />
        <main data-testid="Preview" >
            <section className="previewContainer">
                <div className="previewContent">
                    <h2 className="title">
                    New Rumour
                    </h2>
                    <div className="companyTitleWrapper">
                        <p className="companyTitle">{state.companyName}</p>
                        <Tag label="Trusted Source"/>
                    </div>
                    <p className="contentText">says</p>
                    <p className="codenameTitle">{state.sourceCodename}</p>
                    <p className="contentText">will be raising</p>
                    <div className="costWrapper">
                        <p className="currency">{state.currency }</p>
                        <p className="cost">{state.amount}</p>
                        <p className="currency">m</p>
                    </div>
    
                </div>
            </section>
            <pre>{JSON.stringify(state, null, 2)}</pre>

            <div className="buttonsWrapper">
                <Link
                    to="/create"
                    label="Edit"
                    iconBefore="chevronLeft"
                    variant="secondary" 
                />
                <Button
                    to="/"
                    label="Publish rumour"
                    iconBefore="done"
                    variant="primary" 
                    onClick={handleClick(state)}
                    type="submit"
                />
            </div>
        </main>
        </div>
    );
};

export default Preview;

