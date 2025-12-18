import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted px-4">
      <div className="max-w-md rounded-3xl bg-white p-8 text-center shadow-card">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Not found</p>
        <h1 className="mt-2 text-2xl font-bold text-gray-900">County not found</h1>
        <p className="mt-2 text-sm text-gray-600">We could not locate that county page. Try selecting a county again.</p>
        <div className="mt-6 flex flex-col gap-3">
          <Link
            href="/select-county"
            className="rounded-full bg-primary px-4 py-3 text-white shadow-card transition hover:bg-primary/90"
          >
            Back to counties
          </Link>
          <Link href="/" className="text-sm text-primary underline">
            Return to landing
          </Link>
        </div>
      </div>
    </main>
  );
}
