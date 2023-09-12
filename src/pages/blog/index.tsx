import { NextPage, NextPageContext } from "next";

import BlogCategoryCard from "@/components/BlogCategoryCard/BlogCategoryCard";
import { Category } from "@/models/category";
import { BLOG_TEXT, BLOG_TITLE } from "@/constants/constants";
import { blogSectionClasses } from "./blogClassNames";

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
  const categoriesRes = await  fetch('http://demo0206776.mockable.io/getBlogCategory');
  let data = await categoriesRes.json();
  return {
    props: {
      categories: data
    },
  };
}
