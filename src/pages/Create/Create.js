import React from "react";

import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";

import "./Create.css";

const Create = () => {
  return (
    <div data-testid="Create">
      <Header title="New Rumour" subtitle="Enter the details of the rumour you heard" />
      <main>
      <Form />
      </main>
    </div>
  );
};

export default Create;
