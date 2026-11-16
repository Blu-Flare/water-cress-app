import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import Reveal from '../components/Reveal';
import CallToAction from '../components/CallToAction';
import useSEO from '../hooks/useSEO';
import { services } from '../data/services';
import { PROCESS } from '../data/site';
import tiledWall from '../../assets/Gemini_Generated_Image_oywjahoywjahoywj.jpg';
import ctaImage from '../../assets/Your Project Deserves Expert Hands..webp';

const HEADER_OVERLAY =
  'bg-[linear-gradient(to_bottom,rgba(28,28,28,0.57),rgba(28,28,28,0.81))]';

const GUARANTEES = [
  'Written, itemised quotes',
  'Premium, climate-ready materials',
  'Clean, respectful crews',
  'Workmanship warranty',
];

export default function Services() {
  useSEO({
    title: 'Paving, Tiling & Hardscaping Services | Water Cress Designers',
    description:
      'From driveway paving and pool surrounds to precision tiling, stone cladding and retaining walls — explore the full range of Water Cress Designers services in Botswana.',
  });

  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title="The right finish for every space"
        subtitle="From residential driveways to commercial hardscaping, we do it all."
        image={tiledWall}
        overlayClassName={HEADER_OVERLAY}
      />

      <section className="section-pad">
        <div className="container-page">
          <SectionHeader
            eyebrow="Built for Botswana"
            title="The Right Finish for"
            accent="Every Space."
            subtitle="Six specialist services, one standard of craftsmanship."
          />

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <Reveal delay={0.15} className="mt-14">
            <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-2xl border border-renewal-green/15 bg-graphite-teal/55 px-6 py-5">
              {GUARANTEES.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-xs font-semibold text-cool-grey/75"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-renewal-green" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-renewal-green/10 bg-graphite-teal section-pad">
        <div className="container-page">
          <SectionHeader
            eyebrow="The process"
            title="What to"
            accent="Expect."
            subtitle="No surprises — just a clear plan and a tidy site."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((item, index) => (
              <Reveal
                key={item.step}
                delay={index * 0.08}
                className="relative overflow-hidden rounded-2xl border border-renewal-green/15 bg-graphite-industrial/40 p-6"
              >
                <span className="font-mono text-xs font-bold tracking-[0.2em] text-renewal-green/70">
                  STEP {item.step}
                </span>
                <h3 className="mt-3 text-lg font-extrabold text-pure-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cool-grey/65">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-12 text-center">
            <Link to="/#contact" className="btn-primary">
              Request a Free Quote
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page flex flex-col items-center justify-between gap-5 rounded-2xl border border-pure-white/10 bg-white/[0.02] px-6 py-8 text-center sm:flex-row sm:text-left">
          <div>
            <p className="flex items-center justify-center gap-2 text-sm font-extrabold text-pure-white sm:justify-start">
              <Sparkles className="h-4 w-4 text-renewal-green" aria-hidden="true" />
              Seen something that fits your project?
            </p>
            <p className="mt-1 text-sm text-cool-grey/60">
              Browse our archive of completed work, including full project scopes.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/archive" className="btn-ghost">
              View Archive
            </Link>
            <Link to="/" className="btn-secondary">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <CallToAction
        title="Your Project Deserves"
        accent="Expert Hands."
        subtitle="Talk to our team and get a clear, itemised quote within 24 hours."
        image={ctaImage}
      />
    </>
  );
}
