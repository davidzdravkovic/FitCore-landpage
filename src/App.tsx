import { useEffect, useId, useState, type ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'
import { CONTACT_EMAIL, site } from './content'

const PILOT_MAIL = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('FitCore pilot access')}`

function Spec({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-ink-subtle">
      {children}
    </p>
  )
}

function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-ink/20 bg-surface/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5">
        <a href="#" className="flex items-baseline gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-subtle">
            Ops
          </span>
          <span className="text-lg font-semibold tracking-tight text-ink">
            {site.name}
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-ink-muted md:flex">
          {site.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-sm bg-brand-500 px-4 py-2 text-sm font-semibold text-ink transition hover:bg-brand-400"
        >
          {site.hero.ctaPrimary}
        </a>
      </div>
    </header>
  )
}

const SCHEDULE_SLIDES = [
  {
    id: 'coaches',
    src: `${import.meta.env.BASE_URL}fitcore-schedule-coaches.png`,
    label: 'Day · all coaches',
    alt: 'FitCore day schedule with multiple coaches and their visits side by side',
  },
  {
    id: 'month',
    src: `${import.meta.env.BASE_URL}fitcore-schedule-month.png`,
    label: 'Month view',
    alt: 'FitCore month schedule showing visits across the calendar',
  },
] as const

function ScheduleSlider() {
  const [index, setIndex] = useState(0)
  const count = SCHEDULE_SLIDES.length

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count)
    }, 9000)
    return () => window.clearInterval(id)
  }, [count])

  const go = (next: number) => {
    setIndex((next + count) % count)
  }

  return (
    <figure className="overflow-hidden rounded-sm border border-ink/20 bg-ink shadow-[4px_4px_0_0_rgba(12,35,64,0.12)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-ink/90 px-4 py-2">
        <span className="font-mono text-[10px] uppercase tracking-wider text-white/55">
          fitcore · schedule
        </span>
        <div
          className="inline-flex gap-1 rounded-sm border border-white/15 p-1"
          role="tablist"
          aria-label="Schedule views"
        >
          {SCHEDULE_SLIDES.map((item, i) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              onClick={() => setIndex(i)}
              className={`rounded-sm px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors duration-500 ${
                i === index
                  ? 'bg-brand-500 text-ink'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        {SCHEDULE_SLIDES.map((item, i) => (
          <img
            key={item.id}
            src={item.src}
            alt={item.alt}
            width={1600}
            height={1000}
            className={`schedule-slide block h-auto w-full ${
              i === 0 ? 'relative' : 'absolute inset-0'
            } ${i === index ? 'is-active' : ''}`}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
            aria-hidden={i === index ? undefined : true}
          />
        ))}

        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 md:px-3">
          <button
            type="button"
            aria-label="Previous schedule view"
            onClick={() => go(index - 1)}
            className="pointer-events-auto rounded-sm border border-white/20 bg-ink/70 px-2 py-2 text-white/80 transition hover:bg-ink hover:text-white"
          >
            <span className="font-mono text-sm" aria-hidden>
              ←
            </span>
          </button>
          <button
            type="button"
            aria-label="Next schedule view"
            onClick={() => go(index + 1)}
            className="pointer-events-auto rounded-sm border border-white/20 bg-ink/70 px-2 py-2 text-white/80 transition hover:bg-ink hover:text-white"
          >
            <span className="font-mono text-sm" aria-hidden>
              →
            </span>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 border-t border-white/10 bg-ink/90 py-2.5">
        {SCHEDULE_SLIDES.map((item, i) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Show ${item.label}`}
            aria-current={i === index ? 'true' : undefined}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-700 ease-out ${
              i === index ? 'w-6 bg-brand-500' : 'w-1.5 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </figure>
  )
}

function Hero() {
  return (
    <section className="pt-28 md:pt-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="anim-fade-up max-w-3xl">
          <div className="inline-flex items-center gap-3 border border-ink/15 bg-surface px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            <Spec>{site.hero.eyebrow}</Spec>
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-[3.5rem]">
            {site.hero.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {site.hero.subhead}
          </p>
          <p className="mt-4 max-w-2xl border-l-2 border-brand-500 pl-4 text-base leading-relaxed text-ink">
            {site.hero.recognition}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-sm bg-brand-500 px-5 py-3 text-sm font-semibold text-ink transition hover:bg-brand-400"
            >
              {site.hero.ctaPrimary}
            </a>
            <a
              href="#scope"
              className="inline-flex items-center rounded-sm border border-ink/25 bg-surface px-5 py-3 text-sm font-medium text-ink transition hover:border-ink/50"
            >
              {site.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div id="product" className="anim-fade-up-delay mt-14 md:mt-16">
          <div className="mb-4">
            <Spec>Schedule · day and month</Spec>
          </div>
          <ScheduleSlider />
        </div>
      </div>
    </section>
  )
}

function Delivery() {
  return (
    <section
      id="delivery"
      className="py-[clamp(4.5rem,10vw,8.75rem)]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Spec>{site.delivery.eyebrow}</Spec>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {site.delivery.title}
          </h2>
          <p className="mt-4 text-lg font-medium leading-relaxed text-ink">
            {site.delivery.subtitle}
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            {site.delivery.body}
          </p>
          <ul className="mt-8 max-w-md space-y-0 border-y border-ink/15">
            {site.delivery.focuses.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 border-b border-ink/10 py-3 last:border-0"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                <span className="font-mono text-sm uppercase tracking-wider text-ink">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Pain() {
  return (
    <section
      id="why"
      className="border-y border-ink/15 bg-surface/80 py-[clamp(4.5rem,10vw,8.75rem)]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Spec>{site.pain.eyebrow}</Spec>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {site.pain.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            {site.pain.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <div className="rounded-sm border border-ink/15 bg-canvas/60 p-8 md:p-10">
            <h3 className="text-xl font-semibold text-ink">
              {site.pain.beforeTitle}
            </h3>
            <ul className="mt-6 space-y-3">
              {site.pain.beforeItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-ink-muted"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-subtle" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-sm border border-ink bg-ink p-8 text-canvas md:p-10">
            <h3 className="text-xl font-semibold text-canvas">
              {site.pain.afterTitle}
            </h3>
            <ul className="mt-6 space-y-3">
              {site.pain.afterItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-canvas/80"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Scope() {
  return (
    <section
      id="scope"
      className="py-[clamp(4.5rem,10vw,8.75rem)]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Spec>{site.scope.eyebrow}</Spec>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {site.scope.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            {site.scope.subtitle}
          </p>
        </div>

        <div className="mt-12 max-w-3xl overflow-hidden rounded-sm border border-ink/15 bg-surface">
          <div className="border-b border-ink/15 bg-canvas/70 px-5 py-3">
            <Spec>{site.scope.includedTitle}</Spec>
          </div>
          <div>
            {site.scope.included.map((item) => (
              <article
                key={item.title}
                className="grid gap-1 border-b border-ink/10 px-5 py-5 last:border-0 sm:grid-cols-[11rem_1fr] sm:gap-6"
              >
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Roles() {
  return (
    <section className="border-y border-ink/15 bg-surface/80 py-[clamp(4.5rem,10vw,8.75rem)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {site.roles.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            {site.roles.subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}

function Access() {
  return (
    <section
      id="access"
      className="py-[clamp(4.5rem,10vw,8.75rem)]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {site.access.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            {site.access.subtitle}
          </p>
        </div>
        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {site.access.steps.map((step) => (
            <li
              key={step.n}
              className="rounded-sm border border-ink/15 bg-surface p-6 shadow-[3px_3px_0_0_rgba(12,35,64,0.08)]"
            >
              <p className="font-mono text-sm text-brand-600">{step.n}</p>
              <h3 className="mt-3 text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
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
    <div className="border-b border-ink/15">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-base font-semibold text-ink md:text-lg">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-ink-subtle transition ${
            open ? 'rotate-180 text-ink' : ''
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
          <p className="pb-5 text-sm leading-relaxed text-ink-muted md:text-base">
            {a}
          </p>
        </div>
      </div>
    </div>
  )
}

function Faq() {
  return (
    <section
      id="faq"
      className="border-t border-ink/15 bg-surface/80 py-[clamp(4.5rem,10vw,8.75rem)]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          {site.faq.title}
        </h2>
        <div className="mt-10 max-w-3xl border-t border-ink/15">
          {site.faq.items.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-[clamp(4.5rem,10vw,8.75rem)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-sm border border-ink bg-ink px-8 py-12 text-canvas md:px-14 md:py-16">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-brand-400">
            Next step
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-canvas md:text-4xl">
            {site.cta.title}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-canvas/70">
            {site.cta.body}
          </p>
          <a
            href={PILOT_MAIL}
            className="mt-8 inline-flex min-h-11 items-center rounded-sm bg-brand-500 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-brand-400"
          >
            {site.cta.button}
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-ink/20 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 text-sm text-ink-subtle md:flex-row md:items-center">
        <span className="font-mono text-[11px] uppercase tracking-wider">
          {site.footer}
        </span>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="font-mono text-[11px] text-ink hover:underline"
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
        <Delivery />
        <Pain />
        <Scope />
        <Roles />
        <Access />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
