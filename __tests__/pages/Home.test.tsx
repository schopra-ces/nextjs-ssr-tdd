import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "@/pages";
import { BLOG_TEXT } from "@/constants/constants";

it("Render Home page", () => {
  render(<Home />);
  const el = screen.getByTestId("home");
  expect(el).toBeInTheDocument();
});

it("should render Page with welcome text", () => {
  const { container } = render(<Home />);
  const txt = container.querySelector("span");
  expect(txt).toHaveTextContent(BLOG_TEXT);
});

it("validate href for home page link", () => {
  render(<Home />);
  expect(screen.getByRole("link")).toHaveAttribute("href", "/blog");
});
