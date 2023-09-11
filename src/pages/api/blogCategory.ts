import { Category } from "@/models/category";

class CategoryApi {
  getBlogCategory(): Promise<Category[]> {
    const blogCategories: Category[] = [
      {
        name: "Technology",
        image:
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description:
          "Explore the latest advancements in technology and discover how they impact our lives.",
        _id: "one",
        slug: "Technology",
      },
      {
        name: "Travel",
        image:
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description:
          "Experience new cultures, discover hidden gems, and plan your next adventure with our travel guides.",
        _id: "two",
        slug: "Travel",
      },
      {
        name: "Food",
        image:
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description:
          "Find inspiration for your next meal and explore different cuisines from around the world.",
        _id: "three",
        slug: "Food",
      },
    ];
    return Promise.resolve(blogCategories);
  }
}

export const categoryApi = new CategoryApi();
