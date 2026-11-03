import type { Post } from "@/src/modules/ui/shared/posts";

export default function PostCard({
  post,
  compact = false,
}: {
  post: Post;
  compact?: boolean;
}) {
  return (
    <article
      className={`w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg ${
        compact ? "h-44" : "mx-auto h-56 max-w-3xl"
      }`}
    >
      <div className={`flex h-full flex-col gap-3 ${compact ? "p-4" : "p-6"}`}>
        <h3 className={`${compact ? "text-base" : "text-xl"} font-bold text-slate-900`}>
          {post.title}
        </h3>
        <p className={`text-slate-600 ${compact ? "line-clamp-4" : "line-clamp-5"}`}>
          {post.content}
        </p>
      </div>
    </article>
  );
}
