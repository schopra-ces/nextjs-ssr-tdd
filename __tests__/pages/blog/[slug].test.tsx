import React from "react";
import { render } from "@testing-library/react";
import Blog from "@/pages/blog";
import { BLOG_TEXT, BLOG_TITLE } from "@/constants/constants";
import { BlogItemProps } from "@/pages/blog/[slug]";

const props: BlogItemProps = {
    blogPost: 
    {
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada velit eu enim facilisis, at varius nulla congue. Vestibulum pharetra urna euismod, hendrerit dolor eget, bibendum purus.",
      author: {
        image:
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        name: "John Doe",
      },
      date: "April 25, 2023",
      slug: "Technology",
      _id: "one",
    }
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
