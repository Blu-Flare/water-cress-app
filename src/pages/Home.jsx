import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Crown,
  FileText,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react';

import AnimatedText from '../components/AnimatedText';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import QuoteForm from '../components/QuoteForm';
import useSEO from '../hooks/useSEO';
import { homeServices } from '../data/services';
import { projects } from '../data/projects';
import { CONTACT, REVIEWS, STATS, VALUES } from '../data/site';
import heroImage from '../../assets/home screen , masterful paving .webp';
import heroLayer from '../../assets/driveway paving(1).webp';
import contactImage from "../../assets/Let's Build Something Beautiful..jpg";

const ICONS = { shield: ShieldCheck, clock: Clock, file: FileText };

const HERO_IMAGE = heroImage;
const HERO_LAYER = heroLayer;
const CONTACT_IMAGE = contactImage;

const TRUST_POINTS = [
  'Free quotes within 24 hours',
  'Workmanship warranty',
  'Serving all Botswana',
];

export default function Home() {
  useSEO({
    title: 'Water Cress Designers | Premium Paving & Tiling in Botswana',
    description:
      'Expert paving, tiling and hardscaping across Botswana. Driveways, patios, pool surrounds, stone cladding and more. Request your free quote today.',
  });

  return (
    <>
      <Hero />
      <StatsStrip />

      {/* Core expertise */}
      <section className="relative z-10 section-pad">
        <div className="container-page">
          <SectionHeader
            eyebrow="What we do"
            title="Our Core"
            accent="Expertise."
            subtitle="Delivering uncompromising quality and durability for your property."
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                description={service.description}
              />
            ))}
          </div>

          <Reveal className="mt-12 text-center" delay={0.1}>
            <Link to="/services" className="btn-secondary">
              Explore All Services
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <WhyChooseUs />
      <GalleryPreview />
      <Reviews />

      {/* Quote section */}
      <section
        id="contact"
        className="relative isolate overflow-hidden scroll-mt-24"
        aria-labelledby="quote-heading"
      >
        <img
          src={CONTACT_IMAGE}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-graphite-industrial/95" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-30" aria-hidden="true" />

        <div className="container-page section-pad">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <span className="section-eyebrow justify-center">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Free, no-obligation quote
              </span>
              <AnimatedText
                as="h2"
                id="quote-heading"
                text="FREE"
                accent="QUOTATION"
                accentBlock={false}
                className="mt-4 text-3xl leading-[1.12] sm:text-4xl md:text-[2.9rem]"
              />
              <Reveal delay={0.08}>
                <p className="mt-3 text-lg font-extrabold text-pure-white sm:text-xl">
                  Let&apos;s Build Something Together
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mx-auto mt-4 max-w-xl text-sm font-medium leading-relaxed text-cool-grey/75 sm:text-base">
                  Lets transform your space. Share a few details and we&apos;ll
                  send a{' '}
                  <strong className="font-bold text-renewal-green">free</strong>,
                  itemised quote within 24Hrs
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.15} y={36}>
              <div className="rounded-2xl border border-renewal-green/25 bg-graphite-teal/80 p-6 shadow-teal-glow backdrop-blur-xl sm:p-8 md:p-10">
                <QuoteForm />

                <div className="mt-8 grid gap-3 border-t border-pure-white/10 pt-6 text-sm sm:grid-cols-2">
                  <a
                    href={CONTACT.phoneHref}
                    className="flex items-center gap-3 rounded-xl border border-pure-white/10 bg-white/5 px-4 py-3 font-semibold text-pure-white transition-colors hover:border-renewal-green/40 hover:text-renewal-green"
                  >
                    <Phone className="h-4 w-4 text-renewal-green" aria-hidden="true" />
                    {CONTACT.phoneDisplay}
                  </a>
                  <a
                    href={CONTACT.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-pure-white/10 bg-white/5 px-4 py-3 font-semibold text-pure-white transition-colors hover:border-renewal-green/40 hover:text-renewal-green"
                  >
                    <MessageCircle className="h-4 w-4 text-renewal-green" aria-hidden="true" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-[86svh] items-center overflow-hidden py-16 md:py-24">
      <img
        src={HERO_IMAGE}
        alt="Aerial view of a premium paved driveway"
        className="absolute inset-0 -z-30 h-full w-full object-cover"
      />
      <img
        src={HERO_LAYER}
        alt=""
        aria-hidden="true"
        className="mask-fade-right absolute inset-0 -z-20 h-full w-full object-cover opacity-70"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(28,28,28,0.96)_0%,rgba(28,28,28,0.82)_48%,rgba(28,28,28,0.45)_100%)] opacity-85"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-grid opacity-25" aria-hidden="true" />

      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex max-w-3xl flex-col items-start"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-renewal-green/30 bg-graphite-teal/70 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-renewal-green backdrop-blur">
            <Crown className="h-3.5 w-3.5" aria-hidden="true" />
            Botswana&apos;s hardscaping specialists
          </span>

          <div className="text-scrim w-full p-6 sm:p-8 md:p-10">
            <AnimatedText
              as="h1"
              text="Masterful Paving & Tiling"
              accent="Craftsmanship."
              delay={0.1}
              className="text-[2.35rem] leading-[1.08] sm:text-5xl md:text-[3.9rem]"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-5 max-w-xl text-sm font-medium leading-relaxed text-cool-grey/85 sm:text-base md:text-lg"
            >
              Transforming Botswana&apos;s outdoor spaces with expert hardscaping,
              driveways, and precision stonework — engineered to withstand the
              elements and built to last a lifetime.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68, duration: 0.55 }}
            className="mt-7 flex w-full flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link to="/#contact" className="btn-primary w-full sm:w-auto">
              Get Your Free Quote
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href={CONTACT.phoneHref} className="btn-secondary w-full sm:w-auto">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Us Now
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-7 flex flex-wrap gap-x-6 gap-y-2"
          >
            {TRUST_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-[0.72rem] font-semibold text-cool-grey/70"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-renewal-green" aria-hidden="true" />
                {point}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      <div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        aria-hidden="true"
      >
        <span className="text-[0.6rem] font-bold uppercase tracking-[0.28em] text-cool-grey/40">
          Scroll
        </span>
        <span className="h-8 w-px animate-scroll-hint bg-renewal-green/70" />
      </div>
    </section>
  );
}

function StatsStrip() {
  return (
    <section className="border-y border-renewal-green/15 bg-graphite-teal/60">
      <div className="container-page grid grid-cols-2 divide-renewal-green/10 py-8 sm:grid-cols-4 sm:divide-x">
        {STATS.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 0.07}
            className="flex flex-col items-center justify-center px-4 py-3 text-center"
          >
            <span className="text-2xl font-black text-renewal-green sm:text-3xl">
              {stat.value}
            </span>
            <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-cool-grey/55">
              {stat.label}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[linear-gradient(135deg,rgba(0,46,50,0.95)_0%,#1C1C1C_72%)] section-pad"
    >
      <div
        className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-renewal-green/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <SectionHeader
          eyebrow="The Water Cress difference"
          title="Why Customers"
          accent="Choose Us."
          subtitle="We don't just build structures; we build lasting relationships."
        />

        <div className="perspective-1200 grid gap-7 md:grid-cols-3">
          {VALUES.map((value, index) => (
            <ParallaxValueCard
              key={value.title}
              value={value}
              index={index}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ParallaxValueCard({ value, index, progress }) {
  const prefersReducedMotion = useReducedMotion();
  const speeds = [0.55, 1, 1.4];
  const speed = speeds[index] ?? 1;
  const y = useTransform(progress, [0, 1], [58 * speed, -58 * speed]);
  const rotateX = useTransform(progress, [0, 1], [9 * speed, -9 * speed]);
  const rotateY = useTransform(
    progress,
    [0, 1],
    index % 2 === 0 ? [-5, 5] : [5, -5],
  );

  const Icon = ICONS[value.icon] || ShieldCheck;

  return (
    <motion.article
      style={
        prefersReducedMotion
          ? undefined
          : { y, rotateX, rotateY, transformStyle: 'preserve-3d' }
      }
      className="group relative flex flex-col items-center rounded-2xl border border-renewal-green/15 bg-white/[0.035] p-8 text-center shadow-teal-glow backdrop-blur-md transition-colors duration-300 hover:border-renewal-green/35 md:p-10"
    >
      <div
        className="mb-6 grid h-[4.5rem] w-[4.5rem] place-items-center rounded-full border border-renewal-green bg-renewal-green/10 text-renewal-green"
        style={{ transform: 'translateZ(36px)' }}
      >
        <Icon className="h-7 w-7" aria-hidden="true" />
      </div>

      <h3
        className="text-xl font-extrabold text-pure-white md:text-2xl"
        style={{ transform: 'translateZ(26px)' }}
      >
        {value.title}
      </h3>
      <p
        className="mt-3 text-sm leading-relaxed text-cool-grey/75"
        style={{ transform: 'translateZ(14px)' }}
      >
        {value.description}
      </p>
    </motion.article>
  );
}

function GalleryPreview() {
  return (
    <section className="border-y border-renewal-green/10 bg-graphite-teal section-pad">
      <div className="container-page">
        <SectionHeader
          eyebrow="Selected work"
          title="Our Recent"
          accent="Masterpieces."
          subtitle="Explore our portfolio of completed paving, tiling, and hardscaping projects across Botswana."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {projects.slice(0, 6).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <Link
              to="/archive"
              className="group flex aspect-square w-full flex-col items-center justify-center gap-5 rounded-xl border-2 border-dashed border-renewal-green/60 bg-graphite-teal/50 p-8 text-center transition-all duration-300 hover:border-solid hover:border-renewal-green hover:bg-renewal-green/5"
            >
              <span className="grid h-16 w-16 place-items-center rounded-full border border-renewal-green/40 text-renewal-green transition-transform duration-300 group-hover:translate-x-2">
                <ArrowRight className="h-7 w-7" aria-hidden="true" />
              </span>
              <span className="text-lg font-extrabold uppercase tracking-[0.12em] text-renewal-green">
                Visit Our Archive
              </span>
              <span className="max-w-[15rem] text-xs leading-relaxed text-cool-grey/55">
                Full case studies, locations and detailed project scopes.
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeader
          eyebrow="Client stories"
          title="Client Success"
          accent="Stories."
          subtitle="Rated 5 stars by homeowners and businesses across Botswana."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <Reveal
              key={review.name}
              delay={index * 0.1}
              className="relative flex h-full flex-col rounded-2xl border border-renewal-green/20 bg-graphite-teal/60 p-7 backdrop-blur-md md:p-8"
            >
              <span
                className="pointer-events-none absolute left-6 top-2 font-serif text-7xl leading-none text-renewal-green/15"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <div className="relative flex gap-1 text-renewal-green" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="h-4 w-4"
                    fill="currentColor"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className="relative mt-4 flex-1 text-sm font-medium italic leading-relaxed text-cool-grey/90">
                &ldquo;{review.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3 border-t border-pure-white/10 pt-5">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-renewal-green bg-graphite-teal text-sm font-extrabold text-renewal-green">
                  {review.initial}
                </span>
                <div>
                  <p className="text-sm font-extrabold text-pure-white">{review.name}</p>
                  <p className="text-[0.7rem] text-cool-grey/55">{review.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
