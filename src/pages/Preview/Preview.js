import React from "react";
import { useStateMachine } from "little-state-machine";

import Header from "../../components/Header/Header";
import Link from "../../components/Link/Link";
import Tag from "../../components/Tag/Tag";
import updateAction from "../../updateAction";

import "./Preview.css";

const Preview = () => {
    const { state } = useStateMachine(updateAction);

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
                {/* {JSON.stringify(state, null, 2)} */}
                <p className="contentText">says</p>
                <p className="codenameTitle">{state.codename}</p>
                <p className="contentText">will be raising</p>
                <div className="costWrapper">
                    <p className="currency">{state.currency }</p>
                    <p className="cost">{state.cost}</p>
                    <p className="currency">m</p>
                </div>
 
            </div>
        </section>
        <div className="buttonsWrapper">
            <Link
                to="/create"
                label="Edit"
                iconBefore="chevronLeft"
                variant="secondary" />
            <Link
                to="/"
                label="Publish rumour"
                iconBefore="done"
                variant="primary" 
                />
        </div>
    </main>
  </div>
  );
};

export default Preview;

