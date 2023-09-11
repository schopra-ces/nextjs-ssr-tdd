import { NextPage, NextPageContext } from "next";

import BlogCategoryCard from "@/components/BlogCategoryCard/BlogCategoryCard";
import { Category } from "@/models/category";
import { BLOG_TEXT, BLOG_TITLE } from "@/constants/constants";
import { blogSectionClasses } from "./blogClassNames";
import { categoryApi } from "../api/blogCategory";

export interface BlogPageProps {
  categories: Category[];
}

const Blog: NextPage<BlogPageProps> = (props) => {
  const { categories } = props;

  return (
    <>
      <section className={blogSectionClasses.container}>
        <h2 className={blogSectionClasses.heading}>{BLOG_TITLE}</h2>
        <p className={blogSectionClasses.subheading}>{BLOG_TEXT}</p>

        <div className={blogSectionClasses.categoriesContainer}>
          {categories.map((blogCategory) => (
            <BlogCategoryCard
              key={blogCategory.name}
              description={blogCategory.description}
              image={blogCategory.image}
              name={blogCategory.name}
              slug={blogCategory.name}
              _id={blogCategory._id}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;

export async function getServerSideProps(context: NextPageContext) {
  const blogCategories = await categoryApi.getBlogCategory();
  return {
    props: {
      categories: blogCategories,
    },
  };
}
