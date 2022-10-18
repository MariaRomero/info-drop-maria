import React from "react";
import { useStateMachine } from "little-state-machine";

import Header from "../../components/Header/Header";
import Link from "../../components/Link/Link";
import StatusMessage from "../../components/StatusMessage/StatusMessage";
import updateAction from "../../helpers/updateAction";

import "./Splash.css";

const Splash = () => {
  const { state } = useStateMachine({ updateAction });

  return (
    <main className="splash" data-testid="Splash">
      <Header title="Rumour Publisher" />
      <div className="container">
        <Link
          to="/create"
          label="Create new rumour"
          iconBefore="add"
          variant="primary"
        />
        { state.message && <StatusMessage label="Your rumour was created successfully." variant="success"/>}
      </div>
    </main>
  );
};

export default Splash;
