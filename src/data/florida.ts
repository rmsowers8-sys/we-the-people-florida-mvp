export type County = {
  slug: string;
  name: string;
};

export type Official = {
  id: string;
  countySlug: string;
  name: string;
  title: string;
  email?: string;
  phone?: string;
  website?: string;
  bio?: string;
};

export type LegislationItem = {
  id: string;
  countySlug: string;
  kind: 'Bill' | 'Amendment';
  title: string;
  status: 'Proposed' | 'Passed';
  summary: string;
  whyItMatters: string;
  sourceUrl: string;
  relatedOffice: string;
};

export type BudgetAllocation = {
  countySlug: string;
  totalBudget: number;
  categories: { name: string; percent: number }[];
};

export type Post = {
  id: string;
  countySlug: string;
  title: string;
  tag: string;
  body: string;
  createdAtISO: string;
  commentCount: number;
  comments: { id: string; author: string; body: string; createdAtISO: string }[];
};

export const counties: County[] = [
  { slug: 'alachua', name: 'Alachua County' },
  { slug: 'brevard', name: 'Brevard County' },
  { slug: 'broward', name: 'Broward County' },
  { slug: 'clay', name: 'Clay County' },
  { slug: 'collier', name: 'Collier County' },
  { slug: 'jefferson', name: 'Jefferson County' },
  { slug: 'leon', name: 'Leon County' },
  { slug: 'miami-dade', name: 'Miami-Dade County' },
];

export const officials: Official[] = [
  {
    id: 'official-leon-1',
    countySlug: 'leon',
    name: 'Jasmine Ortiz',
    title: 'County Commissioner, District 3',
    email: 'jasmine.ortiz@leon.gov',
    phone: '(850) 555-1430',
    website: 'https://leoncounty.gov/commission',
    bio: 'Community organizer turned commissioner focusing on neighborhood resilience and small business support.',
  },
  {
    id: 'official-leon-2',
    countySlug: 'leon',
    name: 'Michael Abrams',
    title: 'Supervisor of Elections',
    email: 'vote@leonvotes.gov',
    phone: '(850) 555-0124',
    website: 'https://www.leonvotes.gov',
    bio: 'Oversees election operations and voter outreach with a focus on clear, accessible voting information.',
  },
  {
    id: 'official-miami-1',
    countySlug: 'miami-dade',
    name: 'Carla Dominguez',
    title: 'Mayor, Miami-Dade County',
    email: 'mayor@miamidade.gov',
    phone: '(305) 555-7000',
    website: 'https://www.miamidade.gov',
    bio: 'Leading climate resilience, transportation modernization, and community safety initiatives across the county.',
  },
  {
    id: 'official-jefferson-1',
    countySlug: 'jefferson',
    name: 'Aaron Fields',
    title: 'County Clerk',
    email: 'clerk@jeffersonclerk.gov',
    phone: '(850) 555-0921',
    website: 'https://jeffersonclerk.gov',
    bio: 'Dedicated to transparent record-keeping and expanding online services for rural residents.',
  },
  {
    id: 'official-broward-1',
    countySlug: 'broward',
    name: 'Sasha Patel',
    title: 'School Board Chair',
    email: 'schools@browardschools.gov',
    phone: '(954) 555-7741',
    website: 'https://www.browardschools.com',
    bio: 'Advocates for student mental health resources and career readiness pathways.',
  },
];

export const legislation: LegislationItem[] = [
  {
    id: 'leg-leon-1',
    countySlug: 'leon',
    kind: 'Bill',
    title: 'Neighborhood Resilience Fund',
    status: 'Proposed',
    summary: 'Creates a micro-grant program for neighborhoods to add cooling shade trees and flood-ready landscaping.',
    whyItMatters: 'Helps block-by-block projects that reduce heat and flooding in vulnerable areas.',
    sourceUrl: 'https://example.org/leon/resilience',
    relatedOffice: 'Sustainability Office',
  },
  {
    id: 'leg-leon-2',
    countySlug: 'leon',
    kind: 'Amendment',
    title: 'Transit Access Expansion',
    status: 'Passed',
    summary: 'Adds evening service hours on key bus routes serving job centers.',
    whyItMatters: 'Extends reliable transportation for late-shift workers and students.',
    sourceUrl: 'https://example.org/leon/transit',
    relatedOffice: 'StarMetro',
  },
  {
    id: 'leg-leon-3',
    countySlug: 'leon',
    kind: 'Bill',
    title: 'Open Data Refresh',
    status: 'Proposed',
    summary: 'Requires quarterly updates to public datasets on spending, zoning, and public safety.',
    whyItMatters: 'Keeps residents and journalists informed with timely information.',
    sourceUrl: 'https://example.org/leon/opendata',
    relatedOffice: 'Office of Technology & Innovation',
  },
  {
    id: 'leg-miami-1',
    countySlug: 'miami-dade',
    kind: 'Bill',
    title: 'Bayfront Flood Barriers',
    status: 'Passed',
    summary: 'Funds modular floodwalls to protect low-lying neighborhoods along Biscayne Bay.',
    whyItMatters: 'Reduces tidal flooding and keeps coastal roads open after storms.',
    sourceUrl: 'https://example.org/miami/flood',
    relatedOffice: 'Resilience Department',
  },
  {
    id: 'leg-broward-1',
    countySlug: 'broward',
    kind: 'Amendment',
    title: 'School Safety Upgrades',
    status: 'Passed',
    summary: 'Allocates funding for secure entry systems and campus counselors.',
    whyItMatters: 'Pairs physical security with student support staff.',
    sourceUrl: 'https://example.org/broward/schools',
    relatedOffice: 'Broward Schools',
  },
  {
    id: 'leg-jefferson-1',
    countySlug: 'jefferson',
    kind: 'Bill',
    title: 'Rural Broadband Match',
    status: 'Proposed',
    summary: 'Sets aside local matching funds to attract state broadband grants.',
    whyItMatters: 'Expands access to online education and telehealth.',
    sourceUrl: 'https://example.org/jefferson/broadband',
    relatedOffice: 'County Administrator',
  },
];

export const budgets: BudgetAllocation[] = [
  {
    countySlug: 'leon',
    totalBudget: 820_000_000,
    categories: [
      { name: 'Education', percent: 28 },
      { name: 'Public Safety', percent: 24 },
      { name: 'Infrastructure', percent: 18 },
      { name: 'Health', percent: 16 },
      { name: 'General Government', percent: 14 },
    ],
  },
  {
    countySlug: 'miami-dade',
    totalBudget: 9_600_000_000,
    categories: [
      { name: 'Education', percent: 30 },
      { name: 'Public Safety', percent: 27 },
      { name: 'Infrastructure', percent: 20 },
      { name: 'Health', percent: 13 },
      { name: 'General Government', percent: 10 },
    ],
  },
  {
    countySlug: 'jefferson',
    totalBudget: 74_000_000,
    categories: [
      { name: 'Education', percent: 25 },
      { name: 'Public Safety', percent: 26 },
      { name: 'Infrastructure', percent: 20 },
      { name: 'Health', percent: 12 },
      { name: 'General Government', percent: 17 },
    ],
  },
  {
    countySlug: 'broward',
    totalBudget: 5_100_000_000,
    categories: [
      { name: 'Education', percent: 32 },
      { name: 'Public Safety', percent: 23 },
      { name: 'Infrastructure', percent: 19 },
      { name: 'Health', percent: 14 },
      { name: 'General Government', percent: 12 },
    ],
  },
];

export const posts: Post[] = [
  {
    id: 'post-leon-1',
    countySlug: 'leon',
    title: 'Trail connector ribbon cutting this weekend',
    tag: 'Outdoors',
    body: 'The Miccosukee Greenway connector opens Saturday at 10am with a family ride and local food trucks.',
    createdAtISO: '2025-12-15T15:30:00Z',
    commentCount: 4,
    comments: [
      { id: 'comment-1', author: 'Sam', body: 'Love seeing more shaded trails!', createdAtISO: '2025-12-15T17:00:00Z' },
      { id: 'comment-2', author: 'Avery', body: 'Is there parking near the trailhead?', createdAtISO: '2025-12-15T17:45:00Z' },
      { id: 'comment-3', author: 'Nia', body: 'County says bike valet will be on site.', createdAtISO: '2025-12-15T18:20:00Z' },
      { id: 'comment-4', author: 'Jordan', body: 'Will there be ADA accessible restrooms?', createdAtISO: '2025-12-15T19:05:00Z' },
    ],
  },
  {
    id: 'post-leon-2',
    countySlug: 'leon',
    title: 'Pop-up job fair near Frenchtown',
    tag: 'Jobs',
    body: 'Local employers and workforce coaches will be at the farmers market lot Thursday 4–7pm.',
    createdAtISO: '2025-12-14T13:00:00Z',
    commentCount: 3,
    comments: [
      { id: 'comment-5', author: 'Kai', body: 'Are resume reviews on-site?', createdAtISO: '2025-12-14T13:45:00Z' },
      { id: 'comment-6', author: 'Lena', body: 'Yes, plus a photographer for LinkedIn headshots.', createdAtISO: '2025-12-14T14:10:00Z' },
      { id: 'comment-7', author: 'Rafael', body: 'Is childcare provided?', createdAtISO: '2025-12-14T15:00:00Z' },
    ],
  },
  {
    id: 'post-miami-1',
    countySlug: 'miami-dade',
    title: 'Heat relief centers open late',
    tag: 'Public Safety',
    body: 'Five libraries will extend hours during the heat advisory with cold water and charging stations.',
    createdAtISO: '2025-12-16T11:20:00Z',
    commentCount: 2,
    comments: [
      { id: 'comment-8', author: 'Elena', body: 'Are pets allowed inside?', createdAtISO: '2025-12-16T11:45:00Z' },
      { id: 'comment-9', author: 'Marco', body: 'Service animals yes, others need carriers.', createdAtISO: '2025-12-16T12:10:00Z' },
    ],
  },
  {
    id: 'post-jefferson-1',
    countySlug: 'jefferson',
    title: 'Farm-to-school tasting day',
    tag: 'Food',
    body: 'Local growers are bringing samples to the elementary cafeteria Friday at lunch.',
    createdAtISO: '2025-12-13T09:00:00Z',
    commentCount: 1,
    comments: [
      { id: 'comment-10', author: 'Maya', body: 'Kids can vote on their favorite veggies.', createdAtISO: '2025-12-13T09:30:00Z' },
    ],
  },
];
