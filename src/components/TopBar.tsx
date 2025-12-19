'use client';

import Link from 'next/link';

export type TopBarProps = {
  title: string;
  subtitle?: string;
  backHref?: string;
  action?: React.ReactNode;
};

export function TopBar({ title, subtitle, backHref, action }: TopBarProps) {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          {backHref ? (
            <Link
              href={backHref}
              className="rounded-full border border-border px-3 py-1 text-sm text-gray-700 hover:bg-muted"
            >
              ← Back
            </Link>
          ) : null}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary">We The People</p>
            <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
            {subtitle ? <p className="text-sm text-gray-500">{subtitle}</p> : null}
          </div>
        </div>
        {action}
      </div>
    </header>
  );
}
