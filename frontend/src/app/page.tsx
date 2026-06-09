import React from "react";

type Tier = {
  name: string;
  price: string;
  tagline: string;
  cta: string;
  featured?: boolean;
  highlight?: string;
  features: string[];
};

type ComparisonRow = {
  feature: string;
  free: boolean | string;
  pro: boolean | string;
  enterprise: boolean | string;
};

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  initials: string;
  color: string; // tailwind bg color class suffix e.g. "cyan-500"
};

function IconCheck({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMinus({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const tiers: Tier[] = [
  {
    name: "Free",
    price: "$0",
    tagline: "For side projects and trial runs",
    cta: "Start for free",
    features: [
      "Up to 3 projects",
      "Basic analytics",
      "Community support",
      "Email summaries",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    tagline: "For freelancers and small teams",
    cta: "Upgrade to Pro",
    featured: true,
    highlight: "Most popular",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "Custom reports",
      "Export CSV & PDF",
    ],
  },
  {
    name: "Enterprise",
    price: "Contact",
    tagline: "For orgs needing scale & security",
    cta: "Contact sales",
    features: [
      "SAML SSO & SCIM",
      "Dedicated SLA",
      "Security review",
      "Onboarding & training",
      "Custom contracts",
    ],
  },
];

const comparison: ComparisonRow[] = [
  { feature: "Projects", free: "3", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "Analytics", free: "Basic", pro: "Advanced", enterprise: "Advanced" },
  { feature: "Exports", free: false, pro: true, enterprise: true },
  { feature: "Team members", free: "1", pro: "Up to 10", enterprise: "Unlimited" },
  { feature: "SLA", free: false, pro: false, enterprise: true },
  { feature: "SSO (SAML)", free: false, pro: false, enterprise: true },
  { feature: "Support", free: "Community", pro: "Priority", enterprise: "Dedicated" },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Pulse turned our messy spreadsheets into clean insights. We ship faster because we finally see what matters.",
    author: "Alex Rivera",
    role: "Product Lead, Novacode",
    initials: "AR",
    color: "cyan-500",
  },
  {
    quote:
      "The pricing is a no‑brainer. Pro pays for itself every week with the time we save on reporting.",
    author: "Priya Nair",
    role: "Founder, Finch Studio",
    initials: "PN",
    color: "emerald-500",
  },
  {
    quote:
      "Our exec team loves the summaries. Enterprise onboarding was smooth and thorough.",
    author: "Marcus Lee",
    role: "VP Ops, Northwind",
    initials: "ML",
    color: "violet-500",
  },
  {
    quote:
      "Clean UI, fast charts, zero clutter. Pulse earned a permanent spot in our toolkit.",
    author: "Sofia Chen",
    role: "Engineering Manager, Alder",
    initials: "SC",
    color: "rose-500",
  },
];

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-black/20 backdrop-blur " +
        className
      }
    >
      {children}
    </div>
  );
}

function PriceCard({ tier }: { tier: Tier }) {
  const isFeatured = Boolean(tier.featured);
  return (
    <Card
      className={
        (isFeatured ? "ring-2 ring-cyan-400 " : "") +
        "p-6 sm:p-8 flex flex-col h-full"
      }
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-bold tracking-tight text-white">{tier.name}</h3>
        {tier.highlight ? (
          <span className="text-xs font-medium rounded-full bg-cyan-500/20 text-cyan-300 px-3 py-1">
            {tier.highlight}
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-sm text-white/70">{tier.tagline}</p>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-4xl font-extrabold text-white">{tier.price}</span>
        <span className="text-sm text-white/60">{tier.price === "Contact" ? "" : "/mo"}</span>
      </div>

      <ul className="mt-6 space-y-3">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-white/80">
            <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
              <IconCheck className="h-3.5 w-3.5" />
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <a
          href="#pricing"
          className={
            "inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 " +
            (isFeatured
              ? "bg-cyan-500 text-slate-900 hover:bg-cyan-400"
              : "bg-white/10 text-white hover:bg-white/15")
          }
          aria-label={tier.cta}
        >
          {tier.cta}
        </a>
      </div>
    </Card>
  );
}

function ComparisonTable({ rows }: { rows: ComparisonRow[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <div className="grid grid-cols-4 bg-white/5">
        <div className="px-4 py-3 text-left text-sm font-semibold text-white/80">Feature</div>
        <div className="px-4 py-3 text-center text-sm font-semibold text-white/80">Free</div>
        <div className="px-4 py-3 text-center text-sm font-semibold text-white/80">Pro</div>
        <div className="px-4 py-3 text-center text-sm font-semibold text-white/80">Enterprise</div>
      </div>
      <div className="divide-y divide-white/10 bg-white/5">
        {rows.map((r) => (
          <div key={r.feature} className="grid grid-cols-4">
            <div className="px-4 py-3 text-sm text-white/80">{r.feature}</div>
            {[r.free, r.pro, r.enterprise].map((v, i) => (
              <div key={i} className="px-4 py-3 text-sm text-white/80 text-center">
                {typeof v === "boolean" ? (
                  v ? (
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                      <IconCheck className="h-4 w-4" />
                    </span>
                  ) : (
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white/50">
                      <IconMinus className="h-4 w-4" />
                    </span>
                  )
                ) : (
                  <span>{v}</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <Card className="p-6 h-full">
      <blockquote className="text-white/90 text-base leading-relaxed">“{item.quote}”</blockquote>
      <div className="mt-6 flex items-center gap-4">
        <div className={`h-10 w-10 rounded-full bg-${item.color}/30 grid place-items-center text-white font-semibold`}>{item.initials}</div>
        <div>
          <div className="text-sm font-semibold text-white">{item.author}</div>
          <div className="text-xs text-white/60">{item.role}</div>
        </div>
      </div>
    </Card>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 left-1/2 h-96 w-[120rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-cyan-500/0 to-transparent blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 sm:pt-28 sm:pb-20">
          <p className="text-cyan-300 font-medium tracking-wide">Pulse Pricing</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-3xl">
            Simple, predictable pricing for growing teams
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            Choose a plan that scales with you. Start free, upgrade when you need more power, or talk to us for enterprise needs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-5 py-3 text-slate-900 font-semibold hover:bg-cyan-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
            >
              See plans
            </a>
            <a
              href="#faq"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-white font-semibold hover:bg-white/15 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
            >
              Read the FAQ
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section id="pricing" className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold tracking-tight text-white">Choose your plan</h2>
          <p className="mt-2 text-white/70 max-w-prose">Fair, transparent pricing with no surprises. Cancel anytime.</p>

          <div className="mt-10 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {tiers.map((t) => (
              <PriceCard key={t.name} tier={t} />
            ))}
          </div>

          <p className="mt-6 text-xs text-white/50">All prices in USD. Taxes may apply.</p>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold tracking-tight text-white">Compare features</h2>
          <p className="mt-2 text-white/70 max-w-prose">A quick snapshot of what’s included in each plan.</p>

          <div className="mt-8">
            <ComparisonTable rows={comparison} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold tracking-tight text-white">Loved by teams like yours</h2>
          <p className="mt-2 text-white/70 max-w-prose">Real stories from customers who switched to Pulse.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.author} item={t} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 sm:py-24 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold tracking-tight text-white">Frequently asked questions</h2>
          <p className="mt-2 text-white/70 max-w-prose">Everything you need to know about pricing, billing, and plans.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "Can I use Pulse for free?",
                a: "Yes. The Free plan includes up to 3 projects, basic analytics, and community support — perfect for side projects or trials.",
              },
              {
                q: "What forms of payment do you accept?",
                a: "We accept all major credit cards for Pro subscriptions. Enterprise customers can be invoiced via ACH or wire.",
              },
              {
                q: "Can I cancel anytime?",
                a: "Absolutely. You can cancel your subscription at any time in your account settings. Your plan will remain active through the billing period.",
              },
              {
                q: "Do you offer discounts for nonprofits or education?",
                a: "Yes. We offer a 30% discount for eligible nonprofits and educational institutions. Contact support to get set up.",
              },
              {
                q: "Is my data secure?",
                a: "We follow industry best practices including encryption in transit and at rest. Enterprise plans include security reviews and custom DPA.",
              },
              {
                q: "What’s included in onboarding?",
                a: "Enterprise onboarding includes implementation planning, admin training, and a dedicated success manager.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-white/10 bg-white/5 p-5 open:bg-white/7.5 transition"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                  <span className="text-base font-semibold text-white">{item.q}</span>
                  <span className="ml-2 shrink-0 rounded-full bg-cyan-500/20 p-1 text-cyan-300 transition group-open:rotate-45">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-10 text-sm text-white/60">
            Can’t find what you’re looking for? <a href="#pricing" className="text-cyan-300 hover:text-cyan-200 font-medium">Contact sales</a> and we’ll help you pick the right plan.
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <div>© {new Date().getFullYear()} Pulse. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
