import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function ProjectCard({ project, index = 0 }) {
  const openModal = useStore((state) => state.openModal);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative aspect-square w-full overflow-hidden rounded-xl border border-pure-white/5 bg-black"
    >
      <img
        src={project.cover}
        alt={`${project.title} — ${project.category} project in ${project.location}`}
        loading={index < 3 ? 'eager' : 'lazy'}
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      <div
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(28,28,28,0.96)_0%,rgba(28,28,28,0.55)_42%,transparent_72%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100 md:opacity-0"
        aria-hidden="true"
      />

      <span
        className="pointer-events-none absolute right-3 top-3 grid h-9 w-9 translate-y-1 place-items-center rounded-full border border-pure-white/20 bg-graphite-industrial/70 text-pure-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        aria-hidden="true"
      >
        <Maximize2 className="h-4 w-4" />
      </span>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-0 p-4 transition-transform duration-300 md:translate-y-2 md:group-hover:translate-y-0 md:p-5">
        <h3 className="text-lg font-extrabold leading-tight text-renewal-green">
          {project.title}
        </h3>
        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.72rem] font-semibold text-cool-grey/75">
          <span>{project.category}</span>
          <span className="h-1 w-1 rounded-full bg-renewal-green/60" aria-hidden="true" />
          <span>{project.location}</span>
        </div>
      </div>

      {/* Full-card hit area kept as a real button for keyboard + screen reader users */}
      <button
        type="button"
        onClick={() => openModal(project)}
        aria-label={`View ${project.title} project details`}
        className="absolute inset-0 z-20 cursor-pointer rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-renewal-green"
      />
    </motion.article>
  );
}
