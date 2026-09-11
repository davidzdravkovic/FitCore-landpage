import { useEffect, useId, useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarCheck,
  ChevronDown,
  IdCard,
  Mail,
  Play,
  Shield,
  Users,
  UserRound,
} from 'lucide-react'
import { CONTACT_EMAIL, site } from './content'

function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-surface-border/70 bg-surface/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold tracking-tight text-white">
            FC
          </span>
          <span className="font-semibold tracking-tight text-white">
            {site.name}
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
          <a href="#product" className="transition hover:text-white">
            Product
          </a>
          <a href="#access" className="transition hover:text-white">
            Get started
          </a>
          <a href="#faq" className="transition hover:text-white">
            FAQ
          </a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-500"
        >
          {site.hero.ctaPrimary}
        </a>
      </div>
    </header>
  )
}

function ProductPreview({ active }: { active: (typeof site.productTabs)[number]['id'] }) {
  if (active === 'staff') {
    return (
      <div className="flex h-full flex-col justify-between p-6 md:p-8">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-400">
            Staff
          </p>
          <h3 className="mt-2 font-display text-3xl text-white md:text-4xl">
            Coach day view
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
            Schedules, roster, and check-ins for the people running the floor —
            without touching the owner console.
          </p>
        </div>
        <div className="mt-8 space-y-3">
          {['Morning block · Studio A', 'PT · Alex M.', 'Open check-in desk'].map(
            (row) => (
              <div
                key={row}
                className="flex items-center justify-between border-b border-surface-border/80 py-3 last:border-0"
              >
                <span className="text-sm text-slate-300">{row}</span>
                <span className="text-xs text-slate-500">Today</span>
              </div>
            ),
          )}
        </div>
      </div>
    )
  }

  if (active === 'member') {
    return (
      <div className="flex h-full flex-col justify-between p-6 md:p-8">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-400">
            Member
          </p>
          <h3 className="mt-2 font-display text-3xl text-white md:text-4xl">
            Your membership
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
            Plan status, bookings, and visits — so members stay informed without
            messaging the desk.
          </p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            { k: 'Plan', v: 'Unlimited Monthly' },
            { k: 'Status', v: 'Active' },
            { k: 'Visits left', v: 'Open' },
            { k: 'Next visit', v: 'Book in app' },
          ].map((item) => (
            <div key={item.k} className="border-t border-surface-border pt-3">
              <p className="text-xs text-slate-500">{item.k}</p>
              <p className="mt-1 text-sm font-medium text-white">{item.v}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="grid h-full min-h-[280px] grid-cols-[7.5rem_1fr] md:grid-cols-[11rem_1fr]">
      <aside className="border-r border-surface-border bg-surface/80 p-4 md:p-5">
        <p className="font-display text-lg text-white">FitCore</p>
        <p className="mt-1 truncate text-xs text-slate-500">Northside Athletics</p>
        <ul className="mt-6 space-y-1 text-sm">
          {['Overview', 'Members', 'Staff', 'Memberships', 'Check-ins'].map(
            (item, i) => (
              <li
                key={item}
                className={`rounded-md px-2.5 py-2 ${
                  i === 1
                    ? 'bg-brand-600/15 font-medium text-brand-400'
                    : 'text-slate-500'
                }`}
              >
                {item}
              </li>
            ),
          )}
        </ul>
      </aside>
      <div className="flex flex-col p-4 md:p-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-slate-500">Owner · Members</p>
            <p className="mt-1 text-lg font-semibold text-white">People</p>
          </div>
          <span className="rounded-full bg-brand-600 px-3 py-1.5 text-xs font-medium text-white">
            Invite member
          </span>
        </div>
        <div className="mt-5 space-y-2">
          {[
            { name: 'Mia Petrov', meta: 'Unlimited · Active' },
            { name: 'Jonas Berg', meta: '10-pack · 4 left' },
            { name: 'Elena Ruiz', meta: 'Unlimited · Active' },
          ].map((row) => (
            <div
              key={row.name}
              className="flex items-center justify-between border-b border-surface-border/70 py-3 last:border-0"
            >
              <div>
                <p className="text-sm font-medium text-white">{row.name}</p>
                <p className="text-xs text-slate-500">{row.meta}</p>
              </div>
              <span className="text-xs text-slate-500">View</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Hero() {
  const [tab, setTab] = useState<(typeof site.productTabs)[number]['id']>('owner')

  return (
    <section className="relative overflow-hidden pt-28 md:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(16,185,129,0.18),transparent)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(30,42,54,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(30,42,54,0.35)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="anim-fade-up max-w-3xl">
          <p className="text-sm font-medium tracking-wide text-brand-400">
            {site.name}
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            {site.hero.headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-400">
            {site.hero.subhead}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 font-medium text-white transition hover:bg-brand-500"
            >
              {site.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#product"
              className="inline-flex items-center gap-2 rounded-full border border-surface-border px-6 py-3 font-medium text-slate-300 transition hover:border-slate-500 hover:text-white"
            >
              {site.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div
          id="product"
          className="anim-fade-up-delay relative mt-14 md:mt-16"
        >
          <div className="overflow-hidden rounded-t-2xl border border-surface-border border-b-0 bg-surface-raised shadow-[0_-20px_80px_-20px_rgba(16,185,129,0.25)]">
            <div className="flex items-center justify-between gap-3 border-b border-surface-border px-4 py-3 md:px-5">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
              </div>
              <div className="flex gap-1 rounded-full bg-surface p-1">
                {site.productTabs.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTab(item.id)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium transition md:px-4 ${
                      tab === item.id
                        ? 'bg-brand-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <span className="hidden text-xs text-slate-600 sm:inline">
                product
              </span>
            </div>
            <div className="min-h-[300px] bg-surface md:min-h-[340px]">
              <ProductPreview active={tab} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const dayOneIcons = [Users, IdCard, Building2, UserRound, BadgeCheck, Shield]

function DayOne() {
  return (
    <section className="border-t border-surface-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl text-white md:text-5xl">
            {site.dayOne.title}
          </h2>
          <p className="mt-4 text-lg text-slate-400">{site.dayOne.subtitle}</p>
        </div>
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {site.dayOne.items.map((item, i) => {
            const Icon = dayOneIcons[i] ?? CheckIcon
            return (
              <article key={item.title} className="group">
                <div className="mb-4 text-brand-400 transition group-hover:text-brand-500">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CheckIcon(props: { className?: string; strokeWidth?: number }) {
  return <CalendarCheck {...props} />
}

function DeepFeatures() {
  return (
    <section className="border-t border-surface-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl space-y-20 px-6 md:space-y-28">
        {site.deepFeatures.map((feature, index) => (
          <div
            key={feature.title}
            className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
              index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
            }`}
          >
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-brand-400">
                {feature.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl text-white md:text-5xl">
                {feature.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 md:text-lg">
                {feature.body}
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-surface-border bg-surface-raised">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_55%)]" />
              <div className="relative space-y-4 p-8 md:p-10">
                {[0, 1, 2].map((line) => (
                  <div
                    key={line}
                    className="h-3 rounded-full bg-surface-border/80"
                    style={{ width: `${88 - line * 18}%` }}
                  />
                ))}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="h-24 rounded-xl border border-surface-border bg-surface/60" />
                  <div className="h-24 rounded-xl border border-brand-600/30 bg-brand-600/10" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function DemoSlot() {
  return (
    <section id="demo" className="border-t border-surface-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-4xl text-white md:text-5xl">
              {site.demo.title}
            </h2>
            <p className="mt-4 max-w-xl text-lg text-slate-400">{site.demo.body}</p>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=FitCore%20walkthrough`}
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-400 transition hover:text-brand-500"
            >
              {site.demo.cta}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=FitCore%20walkthrough`}
            className="relative aspect-video overflow-hidden rounded-2xl border border-surface-border bg-surface-raised transition hover:border-brand-600/40"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.14),transparent_60%)]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-surface-border bg-surface/80 text-brand-400">
                <Play className="h-6 w-6 fill-current" />
              </span>
              <p className="text-sm text-slate-300">Watch the walkthrough</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

function Access() {
  return (
    <section id="access" className="border-t border-surface-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl text-white md:text-5xl">
            {site.access.title}
          </h2>
          <p className="mt-4 text-lg text-slate-400">{site.access.subtitle}</p>
        </div>
        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {site.access.steps.map((step) => (
            <li key={step.n} className="relative">
              <p className="font-display text-4xl text-brand-400/80">{step.n}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div className="border-b border-surface-border">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-base font-medium text-white md:text-lg">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-slate-500 transition ${
            open ? 'rotate-180 text-brand-400' : ''
          }`}
        />
      </button>
      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-sm leading-relaxed text-slate-400 md:text-base">
            {a}
          </p>
        </div>
      </div>
    </div>
  )
}

function Faq() {
  return (
    <section id="faq" className="border-t border-surface-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-4xl text-white md:text-5xl">
          Straight answers
        </h2>
        <div className="mt-10 max-w-3xl">
          {site.faq.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="border-t border-surface-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-brand-600/25 bg-gradient-to-br from-brand-600/15 via-surface-raised to-surface px-8 py-12 md:px-14 md:py-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-500/10 blur-3xl" />
          <h2 className="relative max-w-2xl font-display text-4xl text-white md:text-5xl">
            {site.cta.title}
          </h2>
          <p className="relative mt-4 max-w-xl text-lg text-slate-300">
            {site.cta.body}
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=FitCore%20access%20request`}
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-8 py-4 text-base font-medium text-white transition hover:bg-brand-500"
          >
            <Mail className="h-5 w-5" />
            {site.cta.button}
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-surface-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-slate-500 md:flex-row">
        <span>{site.footer}</span>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="transition hover:text-slate-300"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('motion-ready')
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <DayOne />
        <DeepFeatures />
        <DemoSlot />
        <Access />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
