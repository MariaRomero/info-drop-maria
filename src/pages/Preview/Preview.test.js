import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Preview from "./Preview";

import { StoreProvider } from "../../store";

describe("Preview", () => {
  it("renders", () => {
    render(
      <StoreProvider>
        <Router>
          <Preview />
        </Router>
      </StoreProvider>
    );

    expect(screen.getByTestId("Preview")).toBeInTheDocument();
  });

  it("displays the header", () => {
    render(
      <StoreProvider>
        <Router>
          <Preview />
        </Router>
      </StoreProvider>
    );
    expect(screen.getByText(/New Rumour/i)).toBeInTheDocument();
  });

  it("displays the bottom links", () => {
    render(
      <StoreProvider>
        <Router>
          <Preview />
        </Router>
      </StoreProvider>
    );

    expect(screen.getByText(/Edit/i)).toBeInTheDocument();
    expect(screen.getByText(/Publish rumour/i)).toBeInTheDocument();
  });
});
