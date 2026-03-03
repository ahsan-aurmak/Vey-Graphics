import { useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  Brain,
  Gauge,
  Linkedin,
  Mail,
  MessagesSquare,
  MoveRight,
  NotebookPen,
  UserRoundSearch,
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
      'We align product vision, evidence, and measurable outcomes to create practical UX roadmaps for delivery teams.',
    icon: BarChart3,
  },
  {
    title: 'UX Audit & Improvement',
    description:
      'Our audits uncover friction across journeys, then prioritise improvements using qualitative and quantitative data.',
    icon: UserRoundSearch,
  },
  {
    title: 'UX Training/Certification',
    description:
      'Capability programmes that help teams embed research, accessibility, and continuous testing into daily work.',
    icon: NotebookPen,
  },
];

const processSteps = [
  {
    name: 'Consultation',
    description: 'Discovery of goals, users, and constraints to define success criteria.',
  },
  {
    name: 'Estimation',
    description: 'Scope planning with timeline, budget, and research-led priorities.',
  },
  {
    name: 'Agreement',
    description: 'Shared delivery plan and governance model to begin execution confidently.',
  },
];

const caseStudies = [
  {
    client: 'Castrol',
    title: 'CarLounge MVP Experience',
    impact: '80% increase in customer satisfaction after redesign and guided onboarding.',
    details:
      'Delivered a validated MVP journey, reducing task abandonment and improving confidence during key service interactions.',
  },
  {
    client: 'RBS',
    title: 'High-Fidelity Checkout Prototyping',
    impact: '60% faster checkout speeds during test scenarios across devices.',
    details:
      'Built high-fidelity prototypes and iterative usability tests that removed bottlenecks in payment and verification.',
  },
  {
    client: 'GTT',
    title: 'SaaS/IaaS Platform Usability',
    impact: '80% approval rates from stakeholders and end users in validation rounds.',
    details:
      'Reframed complex workflows into clear, role-based interactions for enterprise customers and internal operations teams.',
  },
];

const blogPosts = [
  {
    title: 'Design without testing can cost lives',
    preview:
      'In regulated sectors, assumptions are expensive. Practical guidance for evidence-led design decisions under pressure.',
  },
  {
    title: 'Agile vs UX Design',
    preview:
      'A clear framework for integrating discovery and design quality into sprint-driven delivery models.',
  },
  {
    title: 'Using AI to accelerate research synthesis',
    preview:
      'How to apply machine learning tools responsibly while keeping human context and ethics at the centre.',
  },
];

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  }

  return (
    <div className="bg-brand-navy text-brand-white">
      <header className="sticky top-0 z-50 border-b border-brand-slate/20 bg-brand-navy/95 backdrop-blur-sm">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a href="#home" className="text-lg font-semibold tracking-tight">
            Vey Graphics
          </a>
          <ul className="flex gap-4 text-sm font-medium text-brand-slate sm:gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a className="transition-colors hover:text-brand-white" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="mx-auto flex w-full max-w-6xl scroll-mt-24 flex-col px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-20 lg:px-10"
        >
          <p className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-brand-slate/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-brand-slate">
            <Gauge size={14} />
            UX Design & Research Agency
          </p>
          <h1 className="max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            We design experiences driven by data & research.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-brand-slate sm:text-lg">
            Partnering with startups to FTSE 100 companies.
          </p>
          <a
            href="#customers"
            className="mt-10 inline-flex w-fit items-center gap-2 rounded-lg bg-brand-white px-6 py-3 text-sm font-semibold text-brand-navy transition hover:bg-slate-100"
          >
            View Case Studies
            <ArrowRight size={16} />
          </a>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28 lg:px-10">
          <div className="mb-10 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold sm:text-3xl">Services</h2>
            <span className="text-sm uppercase tracking-[0.15em] text-brand-slate">What we deliver</span>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="rounded-2xl border border-brand-slate/25 bg-[#112340] p-7 shadow-card"
                >
                  <Icon className="mb-5 text-brand-slate" size={24} />
                  <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                  <p className="leading-relaxed text-brand-slate">{service.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28 lg:px-10">
          <h2 className="mb-10 text-2xl font-semibold sm:text-3xl">Process</h2>
          <ol className="grid gap-6 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <li
                key={step.name}
                className="rounded-2xl border border-brand-slate/25 bg-[#0e203a] p-6"
              >
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-white text-sm font-bold text-brand-navy">
                  {index + 1}
                </span>
                <h3 className="mb-2 text-lg font-semibold">{step.name}</h3>
                <p className="text-brand-slate">{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section
          id="about"
          className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-28 lg:px-10"
        >
          <div className="rounded-3xl border border-brand-slate/25 bg-[#112340] p-8 sm:p-12">
            <h2 className="text-2xl font-semibold sm:text-3xl">About Us</h2>
            <p className="mt-6 max-w-4xl leading-relaxed text-brand-slate">
              For over 20 years, Vey Graphics has delivered user-centred strategy and digital product design across
              finance, medical, and automotive sectors. We combine robust research with delivery discipline to help
              teams make confident product decisions.
            </p>
            <p className="mt-5 max-w-4xl leading-relaxed text-brand-slate">
              Our specialists design for complex ecosystems, including AI and machine learning products where clarity,
              trust, and explainability are essential to adoption. The outcome is practical UX that supports measurable
              business performance.
            </p>
            <div className="mt-8 grid gap-4 text-sm text-brand-slate sm:grid-cols-3">
              <div className="rounded-xl border border-brand-slate/25 p-4">20+ years in enterprise UX</div>
              <div className="rounded-xl border border-brand-slate/25 p-4">Sectors: Finance, Medical, Automotive</div>
              <div className="rounded-xl border border-brand-slate/25 p-4">Advanced design for AI/ML products</div>
            </div>
          </div>
        </section>

        <section
          id="customers"
          className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-28 lg:px-10"
        >
          <div className="mb-10 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold sm:text-3xl">Customers</h2>
            <span className="text-sm uppercase tracking-[0.15em] text-brand-slate">Case studies</span>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((caseStudy) => (
              <article
                key={caseStudy.client}
                className="rounded-2xl border border-brand-slate/25 bg-[#112340] p-7"
              >
                <p className="text-sm uppercase tracking-[0.15em] text-brand-slate">{caseStudy.client}</p>
                <h3 className="mt-3 text-xl font-semibold leading-tight">{caseStudy.title}</h3>
                <p className="mt-4 leading-relaxed text-brand-slate">{caseStudy.details}</p>
                <p className="mt-6 flex items-start gap-2 text-sm font-medium text-brand-white">
                  <MoveRight className="mt-0.5 text-brand-slate" size={16} />
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
          <div className="mb-10 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold sm:text-3xl">Blog</h2>
            <span className="text-sm uppercase tracking-[0.15em] text-brand-slate">Latest thinking</span>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="group rounded-2xl border border-brand-slate/25 bg-[#0e203a] p-7 transition hover:border-brand-slate/60"
              >
                <h3 className="text-xl font-semibold leading-snug">{post.title}</h3>
                <p className="mt-4 leading-relaxed text-brand-slate">{post.preview}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-white"
                  aria-label={`Read article: ${post.title}`}
                >
                  Read article
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-brand-slate/20 bg-[#091224]">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Let’s discuss your next UX challenge</h2>
            <p className="mt-4 max-w-md leading-relaxed text-brand-slate">
              Share your goals and we will respond with the right team structure, timeline, and delivery approach.
            </p>
            <div className="mt-7 flex items-center gap-4 text-brand-slate">
              <a
                href="mailto:hello@veygraphics.co.uk"
                className="inline-flex items-center gap-2 transition-colors hover:text-brand-white"
              >
                <Mail size={16} /> hello@veygraphics.co.uk
              </a>
            </div>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-brand-slate/25 px-4 py-2 text-sm text-brand-slate transition hover:text-brand-white"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-brand-slate/25 px-4 py-2 text-sm text-brand-slate transition hover:text-brand-white"
              >
                <MessagesSquare size={16} /> X
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-brand-slate/25 bg-brand-navy p-6 sm:p-8">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-brand-slate">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(event) => {
                  setIsSubmitted(false);
                  setFormData((prev) => ({ ...prev, name: event.target.value }));
                }}
                className="w-full rounded-lg border border-brand-slate/35 bg-transparent px-4 py-3 outline-none ring-brand-white transition focus:ring"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-brand-slate">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(event) => {
                  setIsSubmitted(false);
                  setFormData((prev) => ({ ...prev, email: event.target.value }));
                }}
                className="w-full rounded-lg border border-brand-slate/35 bg-transparent px-4 py-3 outline-none ring-brand-white transition focus:ring"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-brand-slate">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={(event) => {
                  setIsSubmitted(false);
                  setFormData((prev) => ({ ...prev, message: event.target.value }));
                }}
                className="w-full resize-none rounded-lg border border-brand-slate/35 bg-transparent px-4 py-3 outline-none ring-brand-white transition focus:ring"
                required
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-white px-5 py-3 text-sm font-semibold text-brand-navy transition hover:bg-slate-100"
            >
              Send Message
              <Brain size={16} />
            </button>

            {isSubmitted && (
              <p className="text-sm text-brand-slate">
                Thank you. Your message has been sent and our team will be in touch shortly.
              </p>
            )}
          </form>
        </div>
      </footer>
    </div>
  );
}

export default App;
