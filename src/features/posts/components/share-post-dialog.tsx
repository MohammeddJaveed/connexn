"use client";

import type { FormEvent } from "react";
import Button from "@/components/ui/button";
import DialogModel from "@/components/ui/dialog-model";

export default function SharePostDialog({
  onClose,
}: {
  onClose: () => void;
}) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onClose();
  }

  return (
    <DialogModel title="Share a post" onClose={onClose} placement="viewport">
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-left text-sm font-medium text-slate-700">
          Title
          <input
            name="title"
            type="text"
            placeholder="Give your post a title"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </label>
        <label className="block text-left text-sm font-medium text-slate-700">
          What would you like to share?
          <textarea
            name="content"
            rows={5}
            placeholder="Write something..."
            className="mt-1 w-full resize-y rounded-lg border border-slate-300 px-3 py-2.5 font-normal outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </label>
        <div className="flex justify-end gap-3 pt-2">
          <Button
            type="button"
            variant="cancel"
            fullWidth={false}
            className="px-4"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            fullWidth={false}
            className="px-4"
          >
            Share post
          </Button>
        </div>
      </form>
    </DialogModel>
  );
}
