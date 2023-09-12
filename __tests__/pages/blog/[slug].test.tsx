import React from "react";
import { render } from "@testing-library/react";
import BlogItem, { BlogItemProps } from "@/pages/blog/[slug]";
import { BLOG_CONTENT } from "@/mockdata/blog-content";

const props: BlogItemProps = {
    blogPost: BLOG_CONTENT //mockdata from faker
};
it("should render blog page with title", () => {
  const { container } = render(<BlogItem {...props} />);
  const blogTitleEl = container.querySelector("h1");
  expect(blogTitleEl).toBeInTheDocument();
});

it("should render blog page with text", () => {
  const { container } = render(<BlogItem {...props} />);
  const blogTextEl = container.querySelector("p");
  expect(blogTextEl).toBeInTheDocument();
});

