import Image from "next/image";
import { NextPage, NextPageContext } from "next";

import { Blogs } from "@/models/blog";
import Link from "next/link";
import { classNames } from "./blogClassNames";

export interface BlogItemProps {
  blogPost: Blogs;
}

const BlogItem: NextPage<BlogItemProps> = (props) => {
  const { blogPost } = props;

  return (
    <>
      <div className={classNames.hero}>
        <Link className={classNames.backToHome} href="/blog">
          ← Back to home
        </Link>
        <div className={classNames.heroContent}>
          <div className="lg:w-3/4">
            <h1 className={classNames.title}>{blogPost.title}</h1>
            <p className={classNames.subtitle}>
              {blogPost.description.slice(0, 100)}...
            </p>
            <div className={classNames.author}>
              <Image
                width="200"
                height="200"
                className={classNames.authorAvatar}
                src={blogPost.author.image}
                alt={blogPost.author.name}
              />
              <p className={classNames.authorName}>{blogPost.author.name}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={classNames.blogContentWrapper}>
        <div className={classNames.blogImageWrapper}>
          <Image
            width="200"
            height="200"
            src={blogPost.image}
            alt={blogPost.title}
            className={classNames.blogImage}
          />
        </div>
        <div className={classNames.blogMainContent}>
          <h2 className={classNames.blogTitle}>{blogPost.title}</h2>
          <p className={classNames.blogDate}>{blogPost.date}</p>
          <p className={classNames.blogText}>{blogPost.description}</p>
        </div>
      </div>
    </>
  );
};

export default BlogItem;

export const getServerSideProps = async (context: NextPageContext) => {
  //TODO: Check nextjs module import for getUrl('nextjs-current-url/server') failing for test case
  const urlSlug = context.req?.url?.split(/[?=]/)[2];
  const contentRes = await  fetch('http://demo0206776.mockable.io/getBlogContent'); 
  let data = await contentRes.json();
  let currentPost = data.filter(
    (blogs: { slug: string | null | undefined; }) => blogs.slug === urlSlug
  );
  return {
    props: {
      blogPost: currentPost[0]
    },
  };
};