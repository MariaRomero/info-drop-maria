import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Create from "./Create";
// import { useStateMachine } from "luseStateMachine";
// jest.mock('useStateMachine', () => jest.fn())

const useStateMachine = jest.createMockFromModule('little-state-machine');

// jest.mock('useStateMachine');

useStateMachine.mockReturnValue({
  get: jest.fn().mockResolvedValue({ something: jest.fn() }),
});
describe("Create", () => {
  it("renders", () => {
    render(
      <Router>
        <Create />
      </Router>
    );

    expect(screen.getByTestId("Create")).toBeInTheDocument();
  });

  it("displays the header", () => {
    render(
      <Router>
        <Create />
      </Router>
    );

    expect(screen.getByText(/New Rumour/i)).toBeInTheDocument();
  });

  it("displays the form", () => {
    render(
      <Router>
        <Create />
      </Router>
    );

    expect(screen.getByTestId(/Form/i)).toBeInTheDocument();
  });
});
