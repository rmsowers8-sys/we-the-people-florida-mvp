'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { TopBar } from '@/components/TopBar';
import { SearchInput } from '@/components/SearchInput';
import { Card } from '@/components/Card';
import { counties } from '@/data/florida';

export default function SelectCountyPage() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return counties;
    return counties.filter((county) => county.name.toLowerCase().includes(trimmed));
  }, [query]);

  return (
    <main className="min-h-screen bg-muted">
      <TopBar title="Select Your County" subtitle="Search to jump into your county snapshot." backHref="/" />
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-4 pb-16 pt-4">
        <SearchInput value={query} onChange={setQuery} placeholder="Search by county name" />

        <div className="grid gap-3">
          {filtered.map((county) => (
            <Link key={county.slug} href={`/county/${county.slug}`}>
              <Card className="border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{county.name}</p>
                    <p className="text-xs text-gray-500">Florida</p>
                  </div>
                  <span aria-hidden>→</span>
                </div>
              </Card>
            </Link>
          ))}

          {filtered.length === 0 ? (
            <Card className="border border-dashed border-border bg-white/60 text-sm text-gray-500">
              No counties found yet. Try a shorter name.
            </Card>
          ) : null}
        </div>
      </div>
    </main>
  );
}
