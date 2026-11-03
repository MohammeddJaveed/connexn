import LeftBar from "@/src/modules/ui/shared/leftbar";
import MyPosts from "@/src/modules/ui/screens/myposts";

export default function MyPostsPage() {
  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-slate-50 text-slate-900 md:flex-row">
      <LeftBar active="profile" />
      <main className="min-h-0 flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
          <MyPosts />
        </div>
      </main>
    </div>
  );
}
