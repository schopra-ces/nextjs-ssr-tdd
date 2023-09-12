import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "@/pages";
import { WELCOME_TEXT } from "@/constants/constants";

it("Render Home page", () => {
  render(<Home />);
  const homeElement = screen.getByTestId("home");
  expect(homeElement).toBeInTheDocument();
});

it("should render Page with welcome text", () => {
  const { container } = render(<Home />);
  const blogTxtElement = container.querySelector("span");
  expect(blogTxtElement).toHaveTextContent(WELCOME_TEXT);
});

it("validate href for home page link", () => {
  render(<Home />);
  expect(screen.getByRole("link")).toHaveAttribute("href", "/blog");
});
