import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Preview from "./Preview";

describe("Preview", () => {
  it("renders", () => {
    render(
      <Router>
        <Preview />
      </Router>
    );

    expect(screen.getByTestId("Preview")).toBeInTheDocument();
  });

  it("displays the header", () => {
    render(
      <Router>
        <Preview />
      </Router>
    );

    expect(screen.getByText(/New Rumour/i)).toBeInTheDocument();
  });

  it("displays the Tag component", () => {
    render(
      <Router>
        <Preview />
      </Router>
    );

    expect(screen.getByTestId(/Tag/i)).toBeInTheDocument();
  });

  it("displays the loading message", () => {
    render(
      <Router>
        <Preview />
      </Router>
    );

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it("displays the bottom links", () => {
    render(
      <Router>
        <Preview />
      </Router>
    );

    expect(screen.getByText(/Edit/i)).toBeInTheDocument();
    expect(screen.getByText(/Publish rumour/i)).toBeInTheDocument();
  });
});
