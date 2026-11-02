import GetPosts from "@/src/modules/ui/shared/getposts";

export default function PostsPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-5 sm:p-8">
      <main className="mx-auto max-w-6xl">
        <GetPosts />
      </main>
    </div>
  );
}
