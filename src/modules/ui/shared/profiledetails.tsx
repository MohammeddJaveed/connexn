"use client";

import { useState } from "react";
import Button from "@/src/modules/ui/shared/button";
import EditProfileDialog from "@/src/modules/ui/shared/editProfileDialog";

export default function ProfileDetails() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="relative mx-auto flex w-full flex-col items-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <div
        className="flex size-20 items-center justify-center rounded-full bg-slate-100 text-2xl font-bold text-slate-500"
        aria-hidden="true"
      >
        Y
      </div>
      <h1 className="mt-5 text-2xl font-bold tracking-tight">Your profile</h1>

      <dl className="mt-8 grid w-full gap-5 text-left sm:grid-cols-2">
        <div className="rounded-lg bg-slate-50 p-4">
          <dt className="text-sm font-medium text-slate-500">First name</dt>
          <dd className="mt-1 font-semibold text-slate-900">—</dd>
        </div>
        <div className="rounded-lg bg-slate-50 p-4">
          <dt className="text-sm font-medium text-slate-500">Last name</dt>
          <dd className="mt-1 font-semibold text-slate-900">—</dd>
        </div>
        <div className="rounded-lg bg-slate-50 p-4 sm:col-span-2">
          <dt className="text-sm font-medium text-slate-500">Email</dt>
          <dd className="mt-1 font-semibold text-slate-900">—</dd>
        </div>
        <div className="rounded-lg bg-slate-50 p-4 sm:col-span-2">
          <dt className="text-sm font-medium text-slate-500">Password</dt>
          <dd
            className="mt-1 tracking-widest text-slate-900"
            aria-label="Hidden password"
          >
            ••••••••
          </dd>
        </div>
      </dl>

      <div className="mt-6 flex w-full flex-col gap-2 sm:flex-row sm:justify-center">
        <Button
          type="button"
          onClick={() => setIsDialogOpen(true)}
          className="sm:w-48"
        >
          Edit profile
        </Button>
        <Button type="button" variant="delete" className="sm:w-48">
          Delete profile
        </Button>
      </div>
      {isDialogOpen && (
        <EditProfileDialog onClose={() => setIsDialogOpen(false)} />
      )}
    </section>
  );
}
