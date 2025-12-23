"use client";

import { ReactNode, useEffect } from "react";

export default function Modal({
  open,
  title,
  children,
  onClose,
}: {
  open: boolean;
  title?: string;
  children: ReactNode;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        aria-label="Close modal"
        onClick={onClose}
      />
      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-md rounded-t-3xl bg-white p-4 shadow-xl">
        {title ? <div className="mb-3 text-lg font-semibold">{title}</div> : null}
        <div className="max-h-[70vh] overflow-auto">{children}</div>
        <div className="mt-4">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-full bg-black px-4 py-3 text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
