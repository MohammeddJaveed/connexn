"use client";

import type { ReactNode } from "react";

export default function DialogModel({
  title,
  onClose,
  children,
  placement = "container",
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
  placement?: "container" | "viewport";
}) {
  return (
    <div
      className={`${placement === "viewport" ? "fixed" : "absolute"} inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl sm:p-8"
      >
        <div className="mb-6 flex items-center justify-between">
          <h2
            id="dialog-title"
            className="text-xl font-bold text-slate-900"
          >
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="rounded-md px-2 py-1 text-xl text-slate-500 hover:bg-slate-100 hover:text-slate-900"
          >
            ×
          </button>
        </div>
        {children}
      </section>
    </div>
  );
}
