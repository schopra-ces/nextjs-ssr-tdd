import React from "react";
import { render } from "@testing-library/react";
import Blog, { BlogPageProps } from "@/pages/blog";
import { BLOG_TEXT, BLOG_TITLE } from "@/constants/constants";
import { CATEGORY } from "@/mockdata/blog-categories";

const props: BlogPageProps = {
  categories: CATEGORY //mockdata from faker
};
it("should render blog page with correct title", () => {
  const { container } = render(<Blog {...props} />);
  const txt = container.querySelector("h2");
  expect(txt).toHaveTextContent(BLOG_TITLE);
});

it("should render blog page with correct text", () => {
  const { container } = render(<Blog {...props} />);
  const txt = container.querySelector("p");
  expect(txt).toHaveTextContent(BLOG_TEXT);
});
