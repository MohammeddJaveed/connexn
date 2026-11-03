import LeftBar from "@/components/navigation/left-bar";
import SharePost from "@/features/posts/components/share-post";
import GetPosts from "@/features/posts/components/get-posts";

export default function Homescreen() {
  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-slate-50 text-slate-900 md:flex-row">
      <LeftBar active="home" />
      <main className="min-h-0 flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
          <div className="mb-8 flex justify-end border-b border-slate-200 pb-5">
            <SharePost />
          </div>
          <GetPosts />
        </div>
      </main>
    </div>
  );
}
