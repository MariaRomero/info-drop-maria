import { render, screen } from "@testing-library/react";

import InputGroup from "./InputGroup";

const props = {
  labelText: "What company?",
  isOptional: true,
  placeholder: "company name",
  name: "companyName",
  inputType: "text",
  register: jest.fn(),
  errors: {},
};

describe("InputGroup", () => {
  it("renders", () => {
    render(<InputGroup {...props} />);

    expect(screen.getByTestId("InputGroup")).toBeInTheDocument();
  });

  it("displays the label text", () => {
    render(<InputGroup {...props} />);

    expect(screen.getByText(/What company?/i)).toBeInTheDocument();
  });

  it("displays the Tag component and no error", () => {
    render(<InputGroup {...props} />);

    expect(screen.getByTestId("Tag")).toBeInTheDocument();
    const statusMessage = screen.queryByText("StatusMessage");
    expect(statusMessage).not.toBeInTheDocument();
  });

  it("should display error message when error is present and no Tag", () => {
    const props = {
      labelText: "What company?",
      placeholder: "company name",
      name: "companyName",
      inputType: "text",
      register: jest.fn(),
      errors: {
        companyName: true,
      },
    };
    render(<InputGroup {...props} />);

    const Tag = screen.queryByText("Tag");
    expect(Tag).not.toBeInTheDocument();
    expect(screen.getByText(/This field is required/i)).toBeInTheDocument();
  });
});
