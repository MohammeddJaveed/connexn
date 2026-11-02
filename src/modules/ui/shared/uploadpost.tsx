import Button from "./button";
export default function UploadPost() {
  return (
    <form className="mt-5 space-y-4   p-5 ">
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">
          Title
        </span>
        <input
          name="title"
          type="text"
          placeholder="Give your post a title"
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
        />
      </label>
      <label className="block">
        <textarea
          name="content"
          rows={4}
          placeholder="Write something..."
          className="w-full resize-y rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
        />
      </label>
      <div className="flex justify-end">
        <Button type="submit">Share post</Button>
      </div>
    </form>
  );
}
