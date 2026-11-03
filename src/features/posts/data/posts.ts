export type Post = {
  id: number;
  title: string;
  content: string;
};

export const posts: Post[] = [
  { id: 1, title: "A fresh start", content: "This is the content of post 1." },
  {
    id: 2,
    title: "Ideas worth sharing",
    content: "This is the content of post 2.",
  },
  {
    id: 3,
    title: "Hello, community",
    content: "This is the content of post 3.",
  },
  {
    id: 4,
    title: "A little update",
    content: "This is the content of post 4.",
  },
];
