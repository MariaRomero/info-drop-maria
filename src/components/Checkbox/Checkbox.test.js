import { render, screen } from "@testing-library/react";

import Checkbox from "./Checkbox";

const props = {
  title: "From a trusted source",
  register: jest.fn(),
};

describe("Checkbox", () => {
  it("renders", () => {
    render(<Checkbox {...props} />);

    expect(screen.getByTestId("Checkbox")).toBeInTheDocument();
  });

  it("displays the label text", () => {
    render(<Checkbox {...props} />);

    expect(screen.getByText(/From a trusted source/i)).toBeInTheDocument();
  });
});
