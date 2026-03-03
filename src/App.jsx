import { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  CarFront,
  CircleGauge,
  HeartPulse,
  Landmark,
  Linkedin,
  Mail,
  Menu,
  MessagesSquare,
  MoveRight,
  NotebookPen,
  Sparkles,
  TrendingUp,
  UserRoundSearch,
  Workflow,
  X,
} from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Customers', href: '#customers' },
  { label: 'Blog', href: '#blog' },
];

const services = [
  {
    title: 'Strategy & Roadmap',
    description:
      'We translate business goals into measurable product decisions, balancing commercial priorities with user outcomes.',
    icon: Workflow,
    points: ['Opportunity mapping', 'Prioritised UX plan'],
  },
  {
    title: 'UX Audit & Improvement',
    description:
      'End-to-end audits combining behavioural analytics and moderated research to reduce friction at pace.',
    icon: UserRoundSearch,
    points: ['Heuristic + data review', 'Actionable backlog'],
  },
  {
    title: 'UX Training/Certification',
    description:
      'Practical coaching programmes that help teams embed accessible, research-led design into delivery.',
    icon: NotebookPen,
    points: ['In-house capability uplift', 'Certification pathways'],
  },
];

const processSteps = [
  {
    name: 'Consultation',
    detail: 'We establish objectives, constraints, and evidence requirements.',
  },
  {
    name: 'Estimation',
    detail: 'Scope, timeline, and investment are modelled against outcomes.',
  },
  {
    name: 'Agreement',
    detail: 'We align governance, delivery cadence, and success metrics.',
  },
];

const sectors = [
  {
    name: 'Finance',
    description: 'High-risk journeys for retail and enterprise banking.',
    icon: Landmark,
  },
  {
    name: 'Medical',
    description: 'Research-led interfaces where safety and clarity are critical.',
    icon: HeartPulse,
  },
  {
    name: 'Automotive',
    description: 'Connected journeys spanning acquisition, service, and support.',
    icon: CarFront,
  },
];

const caseStudies = [
  {
    client: 'Castrol',
    title: 'CarLounge MVP Experience',
    details:
      'Delivered a validated MVP and simplified onboarding flow, removing uncertainty during key service moments.',
    impact: '80% satisfaction increase',
    metric: 'Customer satisfaction index',
    bars: [32, 41, 54, 67, 79, 86],
  },
  {
    client: 'RBS',
    title: 'High-Fidelity Checkout Prototyping',
    details:
      'Iterative high-fidelity prototypes and usability rounds reduced bottlenecks across payment and verification.',
    impact: '60% faster checkout speeds',
    metric: 'Median checkout duration',
    bars: [81, 74, 66, 54, 43, 32],
  },
  {
    client: 'GTT',
    title: 'SaaS/IaaS Platform Usability',
    details:
      'Restructured dense enterprise workflows into role-based journeys for stronger comprehension and confidence.',
    impact: '80% approval rates',
    metric: 'Stakeholder validation score',
    bars: [38, 44, 59, 70, 81, 88],
  },
];

const blogPosts = [
  {
    title: 'Design without testing can cost lives',
    preview:
      'In safety-critical environments, skipping usability validation creates avoidable risk. A practical model for accountable design reviews.',
    category: 'Research',
    readTime: '8 min read',
  },
  {
    title: 'Agile vs UX Design',
    preview:
      'A delivery framework that keeps sprint velocity while protecting discovery quality and interface coherence.',
    category: 'Delivery',
    readTime: '6 min read',
  },
  {
    title: 'AI patterns users actually trust',
    preview:
      'Design patterns for explainability, model confidence, and human override in AI-driven product experiences.',
    category: 'AI UX',
    readTime: '7 min read',
  },
];

const scoreBoard = [
  { label: 'Task success', value: 92 },
  { label: 'User confidence', value: 86 },
  { label: 'Journey efficiency', value: 78 },
  { label: 'Stakeholder alignment', value: 90 },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  }

  return (
    <div className="relative overflow-x-clip bg-brand-navy text-brand-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-overlay absolute inset-0 opacity-25" />
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-brand-slate/20 blur-3xl" />
        <div className="absolute -right-24 top-40 h-96 w-96 rounded-full bg-brand-slate/15 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-brand-slate/20 bg-brand-navy/90 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a href="#home" className="font-display text-lg font-semibold tracking-tight sm:text-xl">
            Vey Graphics
          </a>

          <ul className="hidden items-center gap-7 text-sm font-medium text-brand-mist md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a className="transition-colors hover:text-brand-white" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-brand-slate/35 px-4 py-2 text-brand-white transition hover:border-brand-mist"
              >
                Start a project
                <ArrowUpRight size={14} />
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="inline-flex rounded-lg border border-brand-slate/35 p-2 text-brand-mist md:hidden"
            onClick={() => {
              setMobileMenuOpen((prev) => !prev);
            }}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="rise-in border-t border-brand-slate/20 bg-brand-navy/95 md:hidden">
            <ul className="mx-auto grid max-w-6xl gap-1 px-5 py-4 text-sm sm:px-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className="block rounded-lg px-3 py-2 text-brand-mist transition hover:bg-brand-steel hover:text-brand-white"
                    href={link.href}
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  className="mt-1 block rounded-lg bg-brand-white px-3 py-2 font-medium text-brand-navy"
                  href="#contact"
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                >
                  Start a project
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main>
        <section
          id="home"
          className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20 lg:px-10"
        >
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="rise-in" style={{ animationDelay: '80ms' }}>
              <p className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-brand-slate/35 px-4 py-2 text-xs uppercase tracking-[0.2em] text-brand-mist">
                <Sparkles size={14} />
                UX Design & Research Agency
              </p>

              <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                We design experiences driven by{' '}
                <span className="bg-gradient-to-r from-brand-white via-brand-mist to-brand-white bg-clip-text text-transparent">
                  data & research.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-relaxed text-brand-mist sm:text-lg">
                Partnering with startups to FTSE 100 companies. We shape measurable UX outcomes with structured
                research, robust experimentation, and confident delivery.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#customers"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-white px-6 py-3 text-sm font-semibold text-brand-navy transition hover:bg-slate-100"
                >
                  Explore case studies
                  <ArrowRight size={15} />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-slate/40 px-6 py-3 text-sm font-medium text-brand-mist transition hover:border-brand-mist hover:text-brand-white"
                >
                  Meet the team
                </a>
              </div>

              <div className="mt-10 grid gap-4 text-sm sm:grid-cols-3">
                <div className="glass rounded-2xl border border-brand-slate/30 p-4 shadow-glow">
                  <p className="font-display text-2xl font-semibold">20+</p>
                  <p className="mt-1 text-brand-mist">Years in UX</p>
                </div>
                <div className="glass rounded-2xl border border-brand-slate/30 p-4 shadow-glow">
                  <p className="font-display text-2xl font-semibold">3</p>
                  <p className="mt-1 text-brand-mist">Specialist sectors</p>
                </div>
                <div className="glass rounded-2xl border border-brand-slate/30 p-4 shadow-glow">
                  <p className="font-display text-2xl font-semibold">FTSE 100</p>
                  <p className="mt-1 text-brand-mist">Enterprise delivery</p>
                </div>
              </div>
            </div>

            <div className="rise-in relative" style={{ animationDelay: '180ms' }}>
              <div className="glass rounded-3xl border border-brand-slate/35 p-6 shadow-card sm:p-8">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-sm text-brand-mist">
                    <CircleGauge size={16} />
                    Research signal dashboard
                  </div>
                  <span className="text-xs uppercase tracking-[0.18em] text-brand-mist">Weekly trend</span>
                </div>

                <div className="mt-7 space-y-4">
                  {scoreBoard.map((item, index) => (
                    <div key={item.label} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-brand-mist">{item.label}</span>
                        <span className="font-display text-base text-brand-white">{item.value}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-brand-slate/25">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-brand-mist to-brand-white"
                          style={{ width: `${item.value}%`, animationDelay: `${index * 120}ms` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-brand-slate/30 bg-brand-steel/65 p-4">
                    <p className="text-xs uppercase tracking-[0.15em] text-brand-mist">Current focus</p>
                    <p className="mt-2 text-sm text-brand-white">AI-assisted service design for regulated teams</p>
                  </div>
                  <div className="rounded-xl border border-brand-slate/30 bg-brand-steel/65 p-4">
                    <p className="text-xs uppercase tracking-[0.15em] text-brand-mist">Latest uplift</p>
                    <p className="mt-2 text-sm text-brand-white">+34% in task completion for complex workflows</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 rounded-xl border border-brand-slate/35 bg-brand-navy/90 px-4 py-3 text-xs text-brand-mist shadow-card">
                Evidence-led product direction
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28 lg:px-10">
          <div className="mb-10 flex items-end justify-between gap-5">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Services</h2>
            <span className="text-xs uppercase tracking-[0.2em] text-brand-mist">What we deliver</span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="rise-in group glass rounded-2xl border border-brand-slate/30 p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-mist/60"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="mb-5 inline-flex rounded-xl border border-brand-slate/35 bg-brand-steel/80 p-3 text-brand-mist transition group-hover:text-brand-white">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold leading-tight">{service.title}</h3>
                  <p className="mt-4 leading-relaxed text-brand-mist">{service.description}</p>
                  <ul className="mt-5 space-y-2 text-sm text-brand-mist">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <MoveRight size={15} className="mt-0.5 text-brand-white" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28 lg:px-10">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Process</h2>
            <span className="text-xs uppercase tracking-[0.2em] text-brand-mist">3-step engagement</span>
          </div>

          <ol className="relative grid gap-6 md:grid-cols-3">
            <div className="absolute left-[18%] right-[18%] top-8 hidden h-px bg-brand-slate/35 md:block" />
            {processSteps.map((step, index) => (
              <li key={step.name} className="glass relative rounded-2xl border border-brand-slate/30 p-6 shadow-card">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-slate/35 bg-brand-white font-display text-sm font-semibold text-brand-navy">
                  0{index + 1}
                </span>
                <h3 className="font-display text-xl font-semibold">{step.name}</h3>
                <p className="mt-3 text-brand-mist">{step.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section
          id="about"
          className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-28 lg:px-10"
        >
          <div className="glass rounded-3xl border border-brand-slate/30 p-7 shadow-card sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h2 className="font-display text-3xl font-semibold sm:text-4xl">About Us</h2>
                <p className="mt-5 leading-relaxed text-brand-mist">
                  For over 20 years, Vey Graphics has delivered strategic UX design and applied research across finance,
                  medical, and automotive organisations. We help complex teams make clear product decisions backed by
                  defensible evidence.
                </p>
                <p className="mt-5 leading-relaxed text-brand-mist">
                  Our team also specialises in AI and machine learning design, ensuring automated experiences remain
                  transparent, trustworthy, and understandable for real people in real contexts.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-slate/35 px-4 py-2 text-sm text-brand-mist">
                  <BrainCircuit size={16} />
                  AI/ML design expertise across enterprise products
                </div>
              </div>

              <div className="grid gap-4">
                {sectors.map((sector) => {
                  const Icon = sector.icon;
                  return (
                    <article key={sector.name} className="rounded-2xl border border-brand-slate/30 bg-brand-steel/70 p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-display text-xl font-semibold">{sector.name}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-brand-mist">{sector.description}</p>
                        </div>
                        <Icon className="text-brand-mist" size={20} />
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section
          id="customers"
          className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-28 lg:px-10"
        >
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Customers</h2>
            <span className="text-xs uppercase tracking-[0.2em] text-brand-mist">Portfolio outcomes</span>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((caseStudy, index) => (
              <article
                key={caseStudy.client}
                className="rise-in glass rounded-2xl border border-brand-slate/30 p-6 shadow-card"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="mb-5 rounded-xl border border-brand-slate/30 bg-brand-steel/65 p-4">
                  <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.15em] text-brand-mist">
                    <span>{caseStudy.client}</span>
                    <span>{caseStudy.metric}</span>
                  </div>
                  <div className="flex h-16 items-end gap-1.5">
                    {caseStudy.bars.map((bar, barIndex) => (
                      <div
                        key={`${caseStudy.client}-${barIndex}`}
                        className="w-full rounded-sm bg-gradient-to-t from-brand-slate/45 to-brand-white/70"
                        style={{ height: `${bar}%` }}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="font-display text-2xl font-semibold leading-tight">{caseStudy.title}</h3>
                <p className="mt-4 leading-relaxed text-brand-mist">{caseStudy.details}</p>
                <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand-slate/35 px-3 py-1.5 text-sm font-semibold text-brand-white">
                  <TrendingUp size={14} />
                  {caseStudy.impact}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="blog"
          className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-28 lg:px-10"
        >
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Blog</h2>
            <span className="text-xs uppercase tracking-[0.2em] text-brand-mist">Latest thinking</span>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <article className="glass rounded-2xl border border-brand-slate/30 p-7 shadow-card lg:col-span-2">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-mist">{blogPosts[0].category}</p>
              <h3 className="mt-4 font-display text-3xl font-semibold leading-tight">{blogPosts[0].title}</h3>
              <p className="mt-4 max-w-2xl leading-relaxed text-brand-mist">{blogPosts[0].preview}</p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-white transition hover:text-brand-mist"
                aria-label={`Read article: ${blogPosts[0].title}`}
              >
                Read article
                <ArrowRight size={15} />
              </a>
            </article>

            <div className="grid gap-6">
              {blogPosts.slice(1).map((post) => (
                <article key={post.title} className="glass rounded-2xl border border-brand-slate/30 p-6 shadow-card">
                  <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-brand-mist">
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold leading-tight">{post.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-mist">{post.preview}</p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-white transition hover:text-brand-mist"
                    aria-label={`Read article: ${post.title}`}
                  >
                    Read article
                    <ArrowRight size={14} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-brand-slate/20 bg-[#091224]/95">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-slate/35 px-4 py-2 text-xs uppercase tracking-[0.18em] text-brand-mist">
              <BarChart3 size={14} />
              Contact
            </p>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Let's discuss your next UX challenge</h2>
            <p className="mt-4 max-w-md leading-relaxed text-brand-mist">
              Tell us what you are building. We will reply with a practical plan, team model, and delivery options.
            </p>

            <a
              href="mailto:hello@veygraphics.co.uk"
              className="mt-6 inline-flex items-center gap-2 text-brand-mist transition hover:text-brand-white"
            >
              <Mail size={16} />
              hello@veygraphics.co.uk
            </a>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-brand-slate/35 px-4 py-2 text-sm text-brand-mist transition hover:border-brand-mist hover:text-brand-white"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-brand-slate/35 px-4 py-2 text-sm text-brand-mist transition hover:border-brand-mist hover:text-brand-white"
              >
                <MessagesSquare size={16} /> X
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass space-y-4 rounded-2xl border border-brand-slate/30 p-6 shadow-card sm:p-8">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-brand-mist">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(event) => {
                  setIsSubmitted(false);
                  setFormData((prev) => ({ ...prev, name: event.target.value }));
                }}
                className="w-full rounded-xl border border-brand-slate/40 bg-brand-navy/70 px-4 py-3 text-brand-white outline-none ring-brand-mist/40 transition focus:ring"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-brand-mist">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(event) => {
                  setIsSubmitted(false);
                  setFormData((prev) => ({ ...prev, email: event.target.value }));
                }}
                className="w-full rounded-xl border border-brand-slate/40 bg-brand-navy/70 px-4 py-3 text-brand-white outline-none ring-brand-mist/40 transition focus:ring"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-brand-mist">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                required
                value={formData.message}
                onChange={(event) => {
                  setIsSubmitted(false);
                  setFormData((prev) => ({ ...prev, message: event.target.value }));
                }}
                className="w-full resize-none rounded-xl border border-brand-slate/40 bg-brand-navy/70 px-4 py-3 text-brand-white outline-none ring-brand-mist/40 transition focus:ring"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-brand-white px-5 py-3 text-sm font-semibold text-brand-navy transition hover:bg-slate-100"
            >
              Send message
              <ArrowRight size={15} />
            </button>

            {isSubmitted && (
              <p className="rounded-lg border border-brand-slate/35 bg-brand-steel/70 px-4 py-3 text-sm text-brand-mist">
                Thanks. Your message has been sent and our team will be in touch shortly.
              </p>
            )}
          </form>
        </div>
      </footer>
    </div>
  );
}

export default App;
