"use client";
import Button from "./button";
import DialogModel from "./dialogModel";

export default function EditProfileDialog({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <DialogModel title="Edit profile" onClose={onClose}>
      <form className="space-y-4">
        <label className="block text-left text-sm font-medium text-slate-700">
          First name
          <input
            name="firstName"
            type="text"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 font-normal"
          />
        </label>
        <label className="block text-left text-sm font-medium text-slate-700">
          Last name
          <input
            name="lastName"
            type="text"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 font-normal"
          />
        </label>
        <label className="block text-left text-sm font-medium text-slate-700">
          Email
          <input
            name="email"
            type="email"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 font-normal"
          />
        </label>
        <div className="flex justify-end gap-3 pt-2">
          <Button
            type="button"
            onClick={onClose}
            variant="cancel"
            className="w-auto px-4"
          >
            Cancel
          </Button>
          <Button type="submit" variant="success" className="w-auto px-4">
            Save changes
          </Button>
        </div>
      </form>
    </DialogModel>
  );
}
