import PostCard from "@/src/modules/ui/shared/postcard";
import { posts } from "@/src/modules/ui/shared/posts";

export default function GetPosts() {
  return (
    <section
      aria-labelledby="all-posts-heading"
      className="mx-auto w-full max-w-5xl"
    >
      <div className="mb-5 flex items-baseline justify-between">
        <h2
          id="all-posts-heading"
          className="text-2xl font-bold tracking-tight"
        >
          All posts
        </h2>
        <span className="text-sm text-slate-500">{posts.length} posts</span>
      </div>
      <div className="mx-auto grid w-full grid-cols-1 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
