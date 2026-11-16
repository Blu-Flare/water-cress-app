import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Clock,
  FileText,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

import PageHeader from '../components/PageHeader';
import AnimatedText from '../components/AnimatedText';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import CallToAction from '../components/CallToAction';
import useSEO from '../hooks/useSEO';
import { PROCESS, STATS, VALUES } from '../data/site';
import storyImage from '../../assets/People-first craftsmanship.webp';
import headerImage from '../../assets/Complete Services..webp';

const ICONS = { shield: ShieldCheck, clock: Clock, file: FileText };

const STORY_IMAGE = storyImage;
const HEADER_IMAGE = headerImage;

export default function About() {
  useSEO({
    title: 'About Us | Water Cress Designers — Built on Trust',
    description:
      'Meet the team behind Water Cress Designers. Premium paving, tiling and hardscaping rooted in Botswana, built on precision and trust.',
  });

  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Built on"
        accent="Trust."
        subtitle="The story behind Water Cress Designers."
        image={HEADER_IMAGE}
      />

      {/* Story */}
      <section className="section-pad">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="section-eyebrow">
              <span className="h-px w-8 bg-renewal-green/80" aria-hidden="true" />
              Our story
            </span>

            <AnimatedText
              as="h2"
              text="Craftsmanship Rooted in"
              accent="Botswana."
              accentBlock={false}
              className="mt-4 text-3xl leading-[1.12] sm:text-4xl"
            />

            <Reveal delay={0.08}>
              <p className="mt-6 text-sm leading-relaxed text-cool-grey/80 sm:text-base">
                At Water Cress Designers, we believe that the foundation of any
                great property starts from the ground up. Founded with a passion
                for precision and a deep respect for the unique challenges of the
                Botswana climate, we have grown into a trusted name for premium
                paving, tiling, and hardscaping.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-4 text-sm leading-relaxed text-cool-grey/80 sm:text-base">
                We don&apos;t just lay bricks or cut tiles; we engineer outdoor
                spaces that are designed to withstand the harsh sun, heavy rains,
                and everyday wear and tear. Whether it&apos;s a sprawling
                commercial driveway or a private garden sanctuary, we bring the
                same level of{' '}
                <strong className="font-bold text-pure-white">
                  uncompromising quality
                </strong>{' '}
                to every project.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:max-w-md">
                {STATS.slice(0, 2).map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-renewal-green/15 bg-graphite-teal/60 px-5 py-4"
                  >
                    <p className="text-2xl font-black text-renewal-green">{stat.value}</p>
                    <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-cool-grey/55">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/services" className="btn-primary">
                  Explore Our Services
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link to="/archive" className="btn-ghost">
                  View Our Work
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} y={40} className="relative">
            <div
              className="absolute -inset-2 -z-10 rounded-2xl border border-renewal-green/20 md:-inset-3"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-renewal-green/20 shadow-teal-glow">
              <img
                src={STORY_IMAGE}
                alt="Water Cress Designers team at work on site"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-graphite-industrial/80 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-xl border border-renewal-green/25 bg-graphite-teal/85 p-3 backdrop-blur-md">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-renewal-green text-graphite-industrial">
                  <HeartHandshake className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-extrabold text-pure-white">
                    People-first craftsmanship
                  </p>
                  <p className="text-[0.7rem] text-cool-grey/60">
                    Local crew. Honest advice. Lasting results.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-renewal-green/10 bg-graphite-teal section-pad">
        <div className="container-page">
          <SectionHeader
            eyebrow="Our values"
            title="Why Choose"
            accent="Us?"
            subtitle="More than just contractors — we are your building partners."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {VALUES.map((value, index) => {
              const Icon = ICONS[value.icon] || ShieldCheck;

              return (
                <Reveal
                  key={value.title}
                  delay={index * 0.09}
                  className="group relative overflow-hidden rounded-2xl border border-pure-white/5 bg-graphite-industrial/40 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-renewal-green/30 hover:shadow-teal-glow md:p-9"
                >
                  <span
                    className="pointer-events-none absolute -right-6 -top-6 text-8xl font-black text-pure-white/[0.025]"
                    aria-hidden="true"
                  >
                    0{index + 1}
                  </span>
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-full border border-renewal-green/30 bg-renewal-green/10 text-renewal-green">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-extrabold text-pure-white">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cool-grey/70">
                    {value.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeader
            eyebrow="How we work"
            title="A Simple,"
            accent="Proven Process."
            subtitle="Clear communication from the first call to the final walkthrough."
          />

          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div
              className="absolute left-0 right-0 top-[2.4rem] hidden h-px bg-gradient-to-r from-renewal-green/0 via-renewal-green/30 to-renewal-green/0 lg:block"
              aria-hidden="true"
            />
            {PROCESS.map((item, index) => (
              <Reveal
                key={item.step}
                delay={index * 0.08}
                className="relative rounded-2xl border border-renewal-green/15 bg-graphite-teal/50 p-6 backdrop-blur"
              >
                <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-renewal-green/40 bg-graphite-industrial font-mono text-xs font-bold tracking-widest text-renewal-green">
                  {item.step}
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-pure-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cool-grey/65">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-10 text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-renewal-green/20 bg-renewal-green/5 px-4 py-2 text-xs font-semibold text-cool-grey/70">
              <Sparkles className="h-3.5 w-3.5 text-renewal-green" aria-hidden="true" />
              Every quote is free, itemised, and valid for 30 days.
            </p>
          </Reveal>
        </div>
      </section>

      <CallToAction
        title="Let's Bring Your Vision to Life."
        subtitle="Tell us about your space and we'll take care of the rest."
      />
    </>
  );
}
