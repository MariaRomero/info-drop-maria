import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { StoreProvider } from "../../store";

import Create from "./Create";

describe("Create", () => {
  it("renders", () => {
    render(
      <StoreProvider>
        <Router>
          <Create />
        </Router>
      </StoreProvider>
    );

    expect(screen.getByTestId("Create")).toBeInTheDocument();
  });

  it("displays the header", () => {
    render(
      <StoreProvider>
        <Router>
          <Create />
        </Router>
      </StoreProvider>
    );

    expect(screen.getByText(/New Rumour/i)).toBeInTheDocument();
  });

  it("displays the form", () => {
    render(
      <StoreProvider>
        <Router>
          <Create />
        </Router>
      </StoreProvider>
    );

    expect(screen.getByTestId(/Form/i)).toBeInTheDocument();
  });
});
