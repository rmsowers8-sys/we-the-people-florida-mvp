'use client';

import { useMemo, useState } from 'react';
import { notFound, useParams, useRouter } from 'next/navigation';
import { TopBar } from '@/components/TopBar';
import { TabBar } from '@/components/TabBar';
import { Card } from '@/components/Card';
import { Modal } from '@/components/Modal';
import { budgets, counties, legislation, officials, posts } from '@/data/florida';

const tabs = [
  { key: 'officials', label: 'Officials' },
  { key: 'legislation', label: 'Legislation' },
  { key: 'budget', label: 'Budget' },
  { key: 'community', label: 'Community' },
] as const;

type TabKey = (typeof tabs)[number]['key'];

export default function CountyPage() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const county = useMemo(() => counties.find((c) => c.slug === slug), [slug]);
  const countyOfficials = useMemo(() => officials.filter((o) => o.countySlug === slug), [slug]);
  const countyLegislation = useMemo(() => legislation.filter((item) => item.countySlug === slug), [slug]);
  const countyBudget = useMemo(() => budgets.find((b) => b.countySlug === slug), [slug]);
  const countyPosts = useMemo(() => posts.filter((p) => p.countySlug === slug), [slug]);

  const [activeTab, setActiveTab] = useState<TabKey>('officials');
  const [openOfficialId, setOpenOfficialId] = useState<string | null>(null);
  const [openLegislationId, setOpenLegislationId] = useState<string | null>(null);
  const [openPostId, setOpenPostId] = useState<string | null>(null);

  if (!county) {
    return notFound();
  }

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);

  return (
    <main className="min-h-screen bg-muted">
      <TopBar
        title={`${county.name}, Florida`}
        subtitle="Mobile-first civic snapshot"
        backHref="/select-county"
        action={
          <button
            onClick={() => router.push('/select-county')}
            className="hidden rounded-full border border-border px-3 py-2 text-sm text-gray-700 transition hover:bg-white md:inline-flex"
          >
            Switch County
          </button>
        }
      />

      <TabBar options={tabs} active={activeTab} onChange={(key) => setActiveTab(key)} />

      <div className="mx-auto flex max-w-4xl flex-col gap-4 px-4 pb-16 pt-4">
        {activeTab === 'officials' && (
          <section className="grid gap-3">
            {countyOfficials.length === 0 ? (
              <Card className="border border-dashed border-border text-sm text-gray-500">No officials listed yet.</Card>
            ) : (
              countyOfficials.map((official) => (
                <Card key={official.id} onClick={() => setOpenOfficialId(official.id)} className="border border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-semibold text-gray-900">{official.name}</p>
                      <p className="text-sm text-gray-600">{official.title}</p>
                    </div>
                    <span aria-hidden>→</span>
                  </div>
                </Card>
              ))
            )}
          </section>
        )}

        {activeTab === 'legislation' && (
          <section className="grid gap-3">
            {countyLegislation.length === 0 ? (
              <Card className="border border-dashed border-border text-sm text-gray-500">No items yet.</Card>
            ) : (
              countyLegislation.map((item) => (
                <Card key={item.id} onClick={() => setOpenLegislationId(item.id)} className="border border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">{item.kind}</span>
                        <span
                          className={`rounded-full px-2 py-1 text-xs font-medium ${
                            item.status === 'Passed'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-amber-100 text-amber-700'
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <p className="mt-1 text-base font-semibold text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.summary}</p>
                    </div>
                    <span aria-hidden>→</span>
                  </div>
                </Card>
              ))
            )}
          </section>
        )}

        {activeTab === 'budget' && (
          <section className="grid gap-3">
            {countyBudget ? (
              <>
                <Card className="border border-border">
                  <p className="text-sm uppercase tracking-[0.2em] text-primary">Total Budget</p>
                  <p className="text-3xl font-bold text-gray-900">{formatCurrency(countyBudget.totalBudget)}</p>
                  <p className="text-sm text-gray-600">FY25 mock allocation</p>
                </Card>
                <div className="grid gap-3 sm:grid-cols-2">
                  {countyBudget.categories.map((category) => {
                    const amount = (category.percent / 100) * countyBudget.totalBudget;
                    return (
                      <Card key={category.name} className="border border-border">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-semibold text-gray-900">{category.name}</p>
                            <p className="text-sm text-gray-600">{category.percent}%</p>
                          </div>
                          <p className="text-base font-bold text-gray-800">{formatCurrency(amount)}</p>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </>
            ) : (
              <Card className="border border-dashed border-border text-sm text-gray-500">Budget data coming soon.</Card>
            )}
          </section>
        )}

        {activeTab === 'community' && (
          <section className="grid gap-3">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-700">Community posts are mock and read-only in this MVP.</p>
              <button
                disabled
                title="Posting in MVP is coming soon"
                className="rounded-full bg-gray-300 px-4 py-2 text-xs font-semibold text-gray-600 opacity-70"
              >
                Create Post
              </button>
            </div>
            {countyPosts.length === 0 ? (
              <Card className="border border-dashed border-border text-sm text-gray-500">No posts yet.</Card>
            ) : (
              countyPosts.map((post) => (
                <Card key={post.id} onClick={() => setOpenPostId(post.id)} className="border border-border">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">{post.tag}</span>
                        <span>{new Date(post.createdAtISO).toLocaleDateString()}</span>
                        <span aria-hidden>•</span>
                        <span>{post.commentCount} comments</span>
                      </div>
                      <p className="mt-1 text-base font-semibold text-gray-900">{post.title}</p>
                      <p className="text-sm text-gray-600">{post.body}</p>
                    </div>
                    <span aria-hidden>→</span>
                  </div>
                </Card>
              ))
            )}
          </section>
        )}
      </div>

      <Modal
        open={Boolean(openOfficialId)}
        onClose={() => setOpenOfficialId(null)}
        title={countyOfficials.find((o) => o.id === openOfficialId)?.name || ''}
      >
        {(() => {
          const official = countyOfficials.find((o) => o.id === openOfficialId);
          if (!official) return null;
          return (
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-900">{official.title}</p>
              <div className="space-y-1 text-sm text-gray-700">
                {official.email ? <p>Email: {official.email}</p> : null}
                {official.phone ? <p>Phone: {official.phone}</p> : null}
                {official.website ? (
                  <p>
                    Website:{' '}
                    <a className="underline" href={official.website} target="_blank" rel="noreferrer">
                      {official.website}
                    </a>
                  </p>
                ) : null}
              </div>
              {official.bio ? <p className="text-gray-700">{official.bio}</p> : null}
            </div>
          );
        })()}
      </Modal>

      <Modal
        open={Boolean(openLegislationId)}
        onClose={() => setOpenLegislationId(null)}
        title={countyLegislation.find((l) => l.id === openLegislationId)?.title || ''}
      >
        {(() => {
          const item = countyLegislation.find((l) => l.id === openLegislationId);
          if (!item) return null;
          return (
            <div className="space-y-2 text-sm text-gray-700">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">{item.kind}</p>
              <p className="font-semibold text-gray-900">Status: {item.status}</p>
              <p>{item.summary}</p>
              <p className="font-semibold text-gray-900">Why it matters</p>
              <p>{item.whyItMatters}</p>
              <p className="font-semibold text-gray-900">Sponsor / Office</p>
              <p>{item.relatedOffice}</p>
              <p>
                Source:{' '}
                <a className="underline" href={item.sourceUrl} target="_blank" rel="noreferrer">
                  {item.sourceUrl}
                </a>
              </p>
            </div>
          );
        })()}
      </Modal>

      <Modal open={Boolean(openPostId)} onClose={() => setOpenPostId(null)} title={countyPosts.find((p) => p.id === openPostId)?.title || ''}>
        {(() => {
          const post = countyPosts.find((p) => p.id === openPostId);
          if (!post) return null;
          return (
            <div className="space-y-3">
              <div className="text-sm text-gray-700">
                <p className="font-semibold text-gray-900">{post.tag}</p>
                <p className="text-xs text-gray-500">{new Date(post.createdAtISO).toLocaleString()}</p>
                <p className="mt-2 text-gray-800">{post.body}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-900">Comments</p>
                {post.comments.map((comment) => (
                  <div key={comment.id} className="rounded-xl bg-muted p-3 text-sm text-gray-800">
                    <p className="font-semibold text-gray-900">{comment.author}</p>
                    <p className="text-xs text-gray-500">{new Date(comment.createdAtISO).toLocaleString()}</p>
                    <p className="mt-1">{comment.body}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </Modal>
    </main>
  );
}
