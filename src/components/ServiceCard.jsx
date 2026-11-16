import { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ServiceCard({ service, index = 0, description }) {
  const cardRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const rotateXValue = useMotionValue(0);
  const rotateYValue = useMotionValue(0);
  const rotateX = useSpring(rotateXValue, { stiffness: 170, damping: 20 });
  const rotateY = useSpring(rotateYValue, { stiffness: 170, damping: 20 });

  const handlePointerMove = (event) => {
    if (prefersReducedMotion || event.pointerType !== 'mouse' || !cardRef.current) {
      return;
    }

    const bounds = cardRef.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    rotateYValue.set(x * 9);
    rotateXValue.set(y * -9);
  };

  const resetTilt = () => {
    rotateXValue.set(0);
    rotateYValue.set(0);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 64, rotateX: -12, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.09,
        ease: [0.175, 0.885, 0.32, 1.275],
      }}
      className="group relative [perspective:1200px]"
    >
      <motion.div
        ref={cardRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetTilt}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        whileHover={prefersReducedMotion ? undefined : { scale: 1.025, y: -8 }}
        transition={{ type: 'spring', stiffness: 220, damping: 22 }}
        className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-renewal-green/20 bg-black shadow-teal-glow"
      >
        <div className="gloss-sweep" aria-hidden="true" />

        <img
          src={service.image}
          alt={service.alt || service.title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
        />

        <div
          className="absolute inset-0 bg-[linear-gradient(to_top,#1C1C1C_0%,rgba(28,28,28,0.88)_38%,rgba(28,28,28,0.15)_72%,transparent_100%)]"
          aria-hidden="true"
        />

        <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between p-5">
          <span className="rounded-full border border-renewal-green/30 bg-graphite-industrial/50 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-renewal-green backdrop-blur-sm">
            {service.category}
          </span>
          <span className="font-mono text-[0.65rem] font-bold tracking-widest text-pure-white/40">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <div
          className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-7"
          style={{ transform: 'translateZ(34px)' }}
        >
          <div className="mb-3 flex items-end justify-between gap-4">
            <h3 className="text-xl font-extrabold text-renewal-green transition-colors duration-300 group-hover:text-pure-white md:text-2xl">
              {service.title}
            </h3>
            <span
              className="grid h-9 w-9 shrink-0 translate-y-1 place-items-center rounded-full border border-renewal-green/40 bg-graphite-teal/60 text-renewal-green opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
              aria-hidden="true"
            >
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
          <p className="text-sm leading-relaxed text-cool-grey/90">
            {description || service.description}
          </p>
        </div>
      </motion.div>
    </motion.article>
  );
}
