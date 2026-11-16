import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Send, Sparkles } from 'lucide-react';

import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import CallToAction from '../components/CallToAction';
import useSEO from '../hooks/useSEO';
import { projectCategories, projects } from '../data/projects';
import headerImage from '../../assets/Project Archive.webp';
import ctaImage from '../../assets/Inspired by What You See.jpg';

const HEADER_IMAGE = headerImage;
const CTA_IMAGE = ctaImage;

const WHATSAPP_NUMBER = '26775981530';

export default function Archive() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [finishQueryOpen, setFinishQueryOpen] = useState(false);
  const [finishQuery, setFinishQuery] = useState('');

  useSEO({
    title: 'Project Archive | Water Cress Designers Botswana',
    description:
      'Browse completed paving, tiling and hardscaping projects across Botswana. View project photos, locations and full scopes of work.',
  });

  const filteredProjects = useMemo(
    () =>
      activeCategory === 'All'
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  const handleFinishSubmit = (event) => {
    event.preventDefault();
    const request = finishQuery.trim();
    if (!request) return;

    const message = `Hi Water Cress Designers, I'm looking for a specific finish. ${request}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    );

    setFinishQuery('');
    setFinishQueryOpen(false);
  };

  return (
    <>
      <PageHeader
        eyebrow="Project archive"
        title="Project"
        accent="Archive."
        subtitle="Click on any project to view the process and final results."
        image={HEADER_IMAGE}
      />

      <section className="section-pad">
        <div className="container-page">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="section-eyebrow">
                <span className="h-px w-8 bg-renewal-green/80" aria-hidden="true" />
                Selected work
              </span>
              <p className="mt-3 text-sm text-cool-grey/60">
                <span className="font-bold text-pure-white">{filteredProjects.length}</span>{' '}
                {filteredProjects.length === 1 ? 'project' : 'projects'} shown — tap any
                image for the full case study.
              </p>
            </div>

            <div
              className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1"
              role="group"
              aria-label="Filter projects by category"
            >
              {projectCategories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={isActive}
                    className={`shrink-0 rounded-full border px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] transition-all duration-300 ${
                      isActive
                        ? 'border-renewal-green bg-renewal-green text-graphite-industrial'
                        : 'border-pure-white/15 bg-white/5 text-cool-grey/70 hover:border-renewal-green/50 hover:text-renewal-green'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          <Reveal delay={0.1} className="mt-12">
            <div className="mx-auto flex max-w-2xl flex-col items-center">
              <button
                type="button"
                onClick={() => setFinishQueryOpen((open) => !open)}
                aria-expanded={finishQueryOpen}
                aria-controls="finish-request-form"
                className="inline-flex items-center gap-2 rounded-full border border-renewal-green/20 bg-graphite-teal/50 px-5 py-3 text-xs font-semibold text-cool-grey/65 transition-colors hover:border-renewal-green/50 hover:text-renewal-green"
              >
                <MessageCircle className="h-3.5 w-3.5 text-renewal-green" aria-hidden="true" />
                Looking for a specific finish? Ask us for more examples on WhatsApp.
              </button>

              <AnimatePresence initial={false}>
                {finishQueryOpen && (
                  <motion.form
                    id="finish-request-form"
                    key="finish-request-form"
                    onSubmit={handleFinishSubmit}
                    onKeyDown={(event) => {
                      if (event.key === 'Escape') setFinishQueryOpen(false);
                    }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-5 w-full overflow-hidden"
                  >
                    <div className="rounded-2xl border border-renewal-green/20 bg-graphite-teal/55 p-4 text-left backdrop-blur-md sm:p-5">
                      <label htmlFor="finish-request" className="form-label">
                        What finish are you looking for?
                      </label>
                      <div className="flex flex-col gap-3 sm:flex-row">
                        <input
                          id="finish-request"
                          type="text"
                          value={finishQuery}
                          onChange={(event) => setFinishQuery(event.target.value)}
                          placeholder="e.g. large-format white tiles for a bathroom wall"
                          className="form-control flex-1"
                          autoFocus
                        />
                        <button
                          type="submit"
                          disabled={!finishQuery.trim()}
                          className="btn-submit sm:w-auto"
                        >
                          <Send className="h-4 w-4" aria-hidden="true" />
                          Send on WhatsApp
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => setFinishQueryOpen(false)}
                        className="mt-3 text-xs font-semibold text-cool-grey/50 transition-colors hover:text-pure-white sm:ml-1"
                      >
                        Cancel
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-renewal-green/10 bg-graphite-teal/60 py-12">
        <div className="container-page flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <p className="flex items-center justify-center gap-2 text-lg font-extrabold text-pure-white md:justify-start">
              <Sparkles className="h-4 w-4 text-renewal-green" aria-hidden="true" />
              Your project could be next.
            </p>
            <p className="mt-1 text-sm text-cool-grey/60">
              We take on residential and commercial work across Botswana.
            </p>
          </div>
          <Link to="/#contact" className="btn-primary">
            Start Your Project
          </Link>
        </div>
      </section>

      <CallToAction
        title="Inspired by What You See?"
        subtitle="Send us a reference or describe your idea — we'll help shape it into something lasting."
        image={CTA_IMAGE}
        quoteLabel="Request a Free Quote"
      />
    </>
  );
}
