import LeftBar from "@/src/modules/ui/shared/leftbar";
import UploadPost from "@/src/modules/ui/shared/uploadpost";
import GetPosts from "@/src/modules/ui/shared/getposts";

export default function Homescreen() {
  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-slate-50 text-slate-900 md:flex-row">
      <LeftBar active="posts" />
      <main className="min-h-0 flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
          <UploadPost />
          <div className="my-8 border-t border-slate-200" />
          <GetPosts />
        </div>
      </main>
    </div>
  );
}
