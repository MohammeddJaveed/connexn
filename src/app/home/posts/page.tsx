import GetPosts from "@/features/posts/components/get-posts";

export default function PostsPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-5 sm:p-8">
      <main className="mx-auto max-w-6xl">
        <GetPosts />
      </main>
    </div>
  );
}
