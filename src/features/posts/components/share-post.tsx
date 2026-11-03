"use client";

import { useState } from "react";
import Button from "@/components/ui/button";
import SharePostDialog from "@/features/posts/components/share-post-dialog";

export default function SharePost() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        fullWidth={false}
        className="gap-2 px-4"
        onClick={() => setIsDialogOpen(true)}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          className="size-5"
        >
          <path
            d="M10 4v12M4 10h12"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
        Share a post
      </Button>
      {isDialogOpen && (
        <SharePostDialog onClose={() => setIsDialogOpen(false)} />
      )}
    </>
  );
}
