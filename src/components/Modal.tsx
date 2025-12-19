'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export function Modal({ open, onClose, title, children }: ModalProps) {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', listener);
    if (open) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.removeEventListener('keydown', listener);
      document.body.classList.remove('modal-open');
    };
  }, [onClose, open]);

  if (typeof document === 'undefined' || !open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 px-4 py-6 sm:items-center sm:p-6" role="dialog" aria-modal>
      <div className="absolute inset-0" onClick={onClose} aria-hidden />
      <div className="relative w-full max-w-lg rounded-t-3xl bg-white p-6 shadow-modal transition sm:rounded-3xl">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Details</p>
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-full border border-border px-2 py-1 text-sm text-gray-700 hover:bg-muted"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>
        <div className="space-y-3 text-sm text-gray-700">{children}</div>
      </div>
    </div>,
    document.body
  );
}
