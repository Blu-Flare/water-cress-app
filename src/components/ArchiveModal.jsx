import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  X,
} from 'lucide-react';
import { useStore } from '../store/useStore';

export default function ArchiveModal() {
  const isModalOpen = useStore((state) => state.isModalOpen);
  const activeProject = useStore((state) => state.activeProject);
  const closeModal = useStore((state) => state.closeModal);

  const [slide, setSlide] = useState(0);
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);
  const previouslyFocused = useRef(null);

  const images = activeProject?.images ?? [];
  const total = images.length;

  useEffect(() => {
    setSlide(0);
  }, [activeProject?.id]);

  const nextSlide = useCallback(() => {
    if (!total) return;
    setSlide((current) => (current + 1) % total);
  }, [total]);

  const previousSlide = useCallback(() => {
    if (!total) return;
    setSlide((current) => (current - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (!isModalOpen) return undefined;

    previouslyFocused.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.setTimeout(() => closeButtonRef.current?.focus(), 60);

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
        return;
      }

      if (event.key === 'ArrowRight') nextSlide();
      if (event.key === 'ArrowLeft') previousSlide();

      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
          ),
        ).filter((element) => element.offsetParent !== null);

        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused.current instanceof HTMLElement) {
        previouslyFocused.current.focus();
      }
    };
  }, [isModalOpen, closeModal, nextSlide, previousSlide]);

  return (
    <AnimatePresence>
      {isModalOpen && activeProject && (
        <motion.div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={closeModal}
          role="presentation"
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="archive-modal-title"
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="relative flex h-[88dvh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-cool-grey/25 bg-graphite-teal/40 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.95)] backdrop-blur-2xl md:h-[84vh] md:flex-row"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeModal}
              className="absolute right-3 top-3 z-30 grid h-10 w-10 place-items-center rounded-full border border-pure-white/25 bg-graphite-industrial/80 text-pure-white transition-all duration-300 hover:rotate-90 hover:border-renewal-green hover:bg-renewal-green hover:text-graphite-industrial"
              aria-label="Close project details"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            {/* Slideshow — first on mobile, right-hand side on desktop */}
            <div className="relative order-1 h-[34dvh] min-h-[220px] shrink-0 overflow-hidden bg-black/50 md:order-2 md:h-full md:flex-1">
              <AnimatePresence initial={false}>
                <motion.img
                  key={`${activeProject.id}-${slide}`}
                  src={images[slide]}
                  alt={`${activeProject.title} — view ${slide + 1} of ${total}`}
                  initial={{ opacity: 0, scale: 1.025 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.65),transparent_35%)]"
                aria-hidden="true"
              />

              {total > 1 && (
                <>
                  <button
                    type="button"
                    onClick={previousSlide}
                    className="absolute left-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-pure-white/25 bg-graphite-industrial/75 text-pure-white backdrop-blur transition-colors hover:border-renewal-green hover:bg-renewal-green hover:text-graphite-industrial md:left-5 md:h-11 md:w-11"
                    aria-label="Previous project image"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-pure-white/25 bg-graphite-industrial/75 text-pure-white backdrop-blur transition-colors hover:border-renewal-green hover:bg-renewal-green hover:text-graphite-industrial md:right-5 md:h-11 md:w-11"
                    aria-label="Next project image"
                  >
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-graphite-industrial/75 px-3 py-2 backdrop-blur">
                    {images.map((image, index) => (
                      <button
                        key={`${activeProject.id}-dot-${index}`}
                        type="button"
                        onClick={() => setSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === slide
                            ? 'w-6 bg-renewal-green'
                            : 'w-2 bg-pure-white/35 hover:bg-pure-white/70'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                        aria-current={index === slide}
                      />
                    ))}
                  </div>

                  <span className="absolute left-3 top-3 z-10 rounded-full bg-graphite-industrial/70 px-3 py-1.5 font-mono text-[0.65rem] font-bold tracking-widest text-pure-white/90 backdrop-blur md:left-5 md:top-5">
                    {String(slide + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                  </span>
                </>
              )}
            </div>

            {/* Project details */}
            <div className="order-2 flex min-h-0 flex-1 flex-col overflow-y-auto bg-graphite-teal/70 p-6 md:order-1 md:w-[38%] md:flex-none md:p-9">
              <span className="w-fit rounded-full border border-renewal-green/30 bg-renewal-green/10 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-renewal-green">
                {activeProject.category}
              </span>

              <h2
                id="archive-modal-title"
                className="mt-4 pr-8 text-2xl leading-tight text-renewal-green md:text-3xl"
              >
                {activeProject.title}
              </h2>

              <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-pure-white">
                <MapPin className="h-4 w-4 shrink-0 text-renewal-green" aria-hidden="true" />
                {activeProject.location}
              </p>

              <div className="my-6 h-px bg-pure-white/10" aria-hidden="true" />

              <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-cool-grey/60">
                Project Scope
              </p>
              <p className="mt-2 text-sm leading-relaxed text-cool-grey/90">
                {activeProject.scope}
              </p>

              <div className="mt-auto pt-8">
                <Link
                  to="/#contact"
                  onClick={closeModal}
                  className="btn-primary w-full !px-5 !py-3.5 !text-[0.7rem]"
                >
                  Start a Similar Project
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <p className="mt-3 text-center text-[0.7rem] leading-relaxed text-cool-grey/50">
                  Free, no-obligation quote within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
