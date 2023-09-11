import { Blogs } from "@/models/blog";

class ContentApi {
  getBlogContent(): Promise<Blogs[]> {
    const blogContent: Blogs[] = [
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
      },
      {
        image:
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Praesent id velit nec felis congue suscipit eu et ipsum",
        description:
          "Praesent id velit nec felis congue suscipit eu et ipsum. Aliquam congue mi eu urna efficitur vestibulum. Donec euismod, ex ut suscipit tristique, nibh nibh venenatis nulla, quis aliquam neque ex a nunc.",
        author: {
          image:
            "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          name: "Jane Smith",
        },
        date: "April 23, 2023",
        slug: "Travel",
        _id: "two",
      },
      {
        image:
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Etiam cursus dui a neque vulputate consectetur",
        description:
          "Etiam cursus dui a neque vulputate consectetur. In ultrices eros quis enim consectetur, vitae gravida tellus hendrerit. Ut vel efficitur sapien. Sed rhoncus hendrerit sapien vitae venenatis.",
        author: {
          image:
            "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          name: "Mike Johnson",
        },
        date: "April 20, 2023",
        slug: "Food",
        _id: "three",
      },
    ];
    return Promise.resolve(blogContent);
  }
}

export const contentApi = new ContentApi();
