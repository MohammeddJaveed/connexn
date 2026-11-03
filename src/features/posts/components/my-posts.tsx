import Button from "@/components/ui/button";
import PostCard from "@/features/posts/components/post-card";
import { posts } from "@/features/posts/data/posts";

export default function MyPosts({ preview = false }: { preview?: boolean }) {
  const displayedPosts = preview ? posts.slice(0, 3) : posts;

  return (
    <section
      aria-labelledby="my-posts-heading"
      className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 id="my-posts-heading" className="text-2xl font-bold tracking-tight">
          My posts
        </h2>
      </div>
      <div
        className={`grid gap-5 ${
          preview ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1"
        }`}
      >
        {displayedPosts.map((post) => (
          <PostCard key={post.id} post={post} compact={preview} />
        ))}
      </div>
      {preview && (
        <div className="mt-5 flex justify-center">
          <Button
            href="/home/profile/posts"
            fullWidth={false}
            className="px-4"
          >
            See all posts
          </Button>
        </div>
      )}
    </section>
  );
}
