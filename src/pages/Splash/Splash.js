import React, {useContext} from "react";

import Header from "../../components/Header/Header";
import Link from "../../components/Link/Link";
import StatusMessage from "../../components/StatusMessage/StatusMessage";

import { CustomContext }  from "../../store";

import "./Splash.css";

const Splash = () => {
  const { state } = useContext(CustomContext);

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
        { state.success && <StatusMessage label="Your rumour was created successfully." variant="success"/> }
      </div>
    </main>
  );
};

export default Splash;
