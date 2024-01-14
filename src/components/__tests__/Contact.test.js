import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us Page test case", () => {
  test("Should load heading inside Contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact us component", () => {
    render(<Contact />);

    //   const button = screen.getByRole("button");
    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside Contact us component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Enter your message");

    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the Contact us component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
  });
});
