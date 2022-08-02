import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "src/pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    const { container } = render(<div>hi</div>);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
