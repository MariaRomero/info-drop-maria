import { render, screen } from "@testing-library/react";

import DateInputGroup from "./DateInputGroup";

const props = {
  labelText: "When did this happen?",
  register: jest.fn(),
  defaultValue: {
    day: 23,
    month: 12,
    year: 2021,
  },
};

describe("DateInputGroup", () => {
  it("renders", () => {
    render(<DateInputGroup {...props} />);

    expect(screen.getByTestId("DateInputGroup")).toBeInTheDocument();
  });

  it("displays the label text", () => {
    render(<DateInputGroup {...props} />);

    expect(screen.getByText(/When did this happen?/i)).toBeInTheDocument();
  });

  it("should fail to load when required prop is not passed", () => {
    jest.spyOn(console, "error");
    const props = {
      register: jest.fn(),
      defaultValue: {
        day: 23,
        month: 12,
        year: 2021,
      },
    };
    render(<DateInputGroup {...props} />);

    expect(console.error).toBeCalled();
  });
});
