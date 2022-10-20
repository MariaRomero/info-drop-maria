import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";

import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Link from "../../components/Link/Link";
import Tag from "../../components/Tag/Tag";
import StatusMessage from "../../components/StatusMessage/StatusMessage";

import { CustomContext, initialState } from "../../store";

import "./Preview.css";

const Preview = (props) => {
  const [loading, setLoading] = useState(false);
  const { state, updateState } = useContext(CustomContext);

  const jsonData = {
    companyName: state.companyName,
    date: {
      day: Number(state.day),
      month: Number(state.month),
      year: Number(state.year),
    },
    amount: Number(state.amount),
    currency: state.currency,
    sourceCodename: state.sourceCodename,
    isTrustedSource: state.isTrustedSource,
  };

  const handleClick = () => {
    setLoading(true);
    fetch("https://rocky-chamber-70595.herokuapp.com/rumour", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error(response.status);
      })
      .then((data) => {
        if (data.message === "accepted") {
          initialState.success = true;
          updateState(initialState);
          props.history.push("./");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(`${error} - Please try again`);
      });
  };

  return (
    <div>
      <Header title="Preview" subtitle="Here’s what will be published" />
      <main data-testid="Preview">
        <section className="previewContainer">
          <div className="previewContent">
            <h2 className="title">New Rumour</h2>
            <div className="companyTitleWrapper">
              <p className="companyTitle">{state.companyName}</p>
              {state.isTrustedSource && <Tag label="Trusted Source" />}
            </div>
            <p className="contentText">says</p>
            <p className="codenameTitle">{state.sourceCodename}</p>
            <p className="contentText">will be raising</p>
            <div className="costWrapper">
              <p className="currency">{state.currency}</p>
              <p className="cost">{state.amount}</p>
              <p className="currency">m</p>
            </div>
          </div>
        </section>

        {loading && (
          <div className="loadingMessage">
            <StatusMessage label="Loading" variant="loading" />
          </div>
        )}

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
            variant={loading ? "secondary" : "primary"}
            onClick={() => handleClick()}
          />
        </div>
      </main>
    </div>
  );
};

export default withRouter(Preview);
