import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import { StoreProvider } from "../../store";

import Splash from "./Splash";

describe("Splash", () => {
  it("renders", () => {
    render(
      <StoreProvider>
        <Router>
          <Splash />
        </Router>
      </StoreProvider>
    );

    expect(screen.getByTestId("Splash")).toBeInTheDocument();
  });

  it("displays the header", () => {
    render(
      <StoreProvider>
        <Router>
          <Splash />
        </Router>
      </StoreProvider>
    );

    expect(screen.getByText(/Rumour Publisher/i)).toBeInTheDocument();
  });

  it("displays the link", () => {
    render(
      <StoreProvider>
        <Router>
          <Splash />
        </Router>
      </StoreProvider>
    );

    expect(screen.getByText(/Create new rumour/i)).toBeInTheDocument();
  });
});
