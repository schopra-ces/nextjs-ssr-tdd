import React from "react";
import { render} from "@testing-library/react";
import Blog, { BlogPageProps } from "@/pages/blog";
import { BLOG_TEXT, BLOG_TITLE } from "@/constants/constants";

const props: BlogPageProps = {
  categories: [
    {
      name: "Technology",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description:
        "Explore the latest advancements in technology and discover how they impact our lives.",
        _id: 'one'
    },
    {
      name: "Travel",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description:
        "Experience new cultures, discover hidden gems, and plan your next adventure with our travel guides.",
        _id: 'two'
    }
  ],
};
it("should render blog page with correct title", () => {
  const { container } = render(<Blog  {...props}/>);
  const txt = container.querySelector("h2");
  expect(txt).toHaveTextContent(BLOG_TITLE);
});

it("should render blog page with correct text", () => {
  const { container } = render(<Blog  {...props}/>);
  const txt = container.querySelector("p");
  expect(txt).toHaveTextContent(BLOG_TEXT);
});

