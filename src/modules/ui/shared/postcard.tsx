import type { Post } from "@/src/modules/ui/shared/getposts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="mx-auto h-56 w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-full flex-col gap-4 p-6">
        <h3 className="text-xl font-bold text-slate-900">{post.title}</h3>
        <p className="text-slate-600 line-clamp-5">{post.content}</p>
      </div>
    </article>
  );
}
