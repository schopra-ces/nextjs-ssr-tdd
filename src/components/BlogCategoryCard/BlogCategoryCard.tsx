import { Category } from "@/models/category";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { blogCategoryCardClassNames } from "./blogCategoryClassNames";

const BlogCategoryCard: FC<Category> = (props) => {
  const { image, name, slug, description } = props;

  return (
    <Link href={{pathname:`/blog/${slug}`}}>
      <div className={blogCategoryCardClassNames.categoryCard}>
        <Image
          width={100}
          height={100}
          className={blogCategoryCardClassNames.categoryImage}
          src={image}
          alt={name}
        />
        <h3 className={blogCategoryCardClassNames.categoryName}>{name}</h3>
        <p className={blogCategoryCardClassNames.categoryDescription}>
          {description.slice(0, 100)}...
        </p>
      </div>
    </Link>
  );
};

export default BlogCategoryCard;

