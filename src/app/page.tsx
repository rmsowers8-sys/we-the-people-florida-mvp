import Link from 'next/link';
import { Card } from '@/components/Card';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-muted">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 px-4 pb-16 pt-14">
        <div className="space-y-4 text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">We The People: Florida</p>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Know your county. Know your officials. Know your money.</h1>
          <p className="text-lg text-gray-600">
            A friendly civic snapshot for Floridians. Tap in to explore who represents you, what is being debated,
            where the budget goes, and what neighbors are talking about.
          </p>
        </div>

        <Card className="flex flex-col gap-4 border border-border bg-white/70">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-gray-700">Florida-only preview</p>
            <p className="text-sm text-gray-500">
              This mobile-first MVP uses mock data. No accounts, no tracking — just fast navigation.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/select-county"
              className="flex-1 rounded-full bg-primary px-6 py-3 text-center text-white shadow-card transition hover:bg-primary/90"
            >
              Enter Florida
            </Link>
            <Link
              href="/county/leon"
              className="flex-1 rounded-full border border-primary px-6 py-3 text-center text-primary transition hover:bg-primary/10"
            >
              Explore Demo (Leon County)
            </Link>
          </div>
        </Card>

        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="border border-border">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Officials</p>
            <h3 className="mt-2 text-lg font-semibold text-gray-900">Clear contacts</h3>
            <p className="text-sm text-gray-600">See who represents you and how to reach them.</p>
          </Card>
          <Card className="border border-border">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Legislation</p>
            <h3 className="mt-2 text-lg font-semibold text-gray-900">Plain-language bills</h3>
            <p className="text-sm text-gray-600">Plain summaries of what is proposed or passed.</p>
          </Card>
          <Card className="border border-border">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Community</p>
            <h3 className="mt-2 text-lg font-semibold text-gray-900">Local pulse</h3>
            <p className="text-sm text-gray-600">Sample posts show what neighbors are discussing.</p>
          </Card>
        </div>
      </div>
    </main>
  );
}
