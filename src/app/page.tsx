const plannedSteps = [
  'Authentication and role-based access control',
  'Short link CRUD for users',
  'Tags and link categorization',
  'Click tracking and link statistics',
  'Admin panel for users, links, and reports',
]

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <section className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Step 1
        </p>
        <h1 className="text-4xl font-bold tracking-tight">Link Shortener</h1>
        <p className="mt-4 text-lg leading-8 text-slate-300">
          Initial project structure, PostgreSQL database setup, Prisma models, and seed data are ready.
        </p>

        <div className="mt-8 rounded-2xl bg-slate-900 p-5">
          <h2 className="text-xl font-semibold">Main entities</h2>
          <p className="mt-3 text-slate-300">
            User, ShortLink, ClickEvent, Tag, and LinkTag are defined in Prisma schema.
          </p>
        </div>

        <div className="mt-6 rounded-2xl bg-slate-900 p-5">
          <h2 className="text-xl font-semibold">Next steps</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
            {plannedSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
