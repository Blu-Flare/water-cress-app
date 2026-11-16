import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import AnimatedText from './AnimatedText';
import Reveal from './Reveal';
import defaultImage from '../../assets/Project Archive.webp';

const DEFAULT_IMAGE = defaultImage;

export default function PageHeader({
  eyebrow,
  title,
  accent,
  subtitle,
  image = DEFAULT_IMAGE,
  breadcrumb = 'Home',
  overlayClassName = 'bg-[linear-gradient(to_bottom,rgba(28,28,28,0.72),rgba(28,28,28,0.96))]',
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-renewal-green/10">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className={`absolute inset-0 -z-10 ${overlayClassName}`}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-grid opacity-40" aria-hidden="true" />

      <div className="container-page pb-16 pt-28 text-center md:pb-24 md:pt-36">
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
            <ol className="flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-cool-grey/50">
              <li>
                <Link to="/" className="transition-colors hover:text-renewal-green">
                  {breadcrumb}
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li className="text-renewal-green" aria-current="page">
                {eyebrow || title}
              </li>
            </ol>
          </nav>
        </Reveal>

        {eyebrow && (
          <Reveal delay={0.05}>
            <span className="section-eyebrow justify-center">{eyebrow}</span>
          </Reveal>
        )}

        <AnimatedText
          as="h1"
          text={title}
          accent={accent}
          accentBlock={false}
          delay={0.08}
          className="mt-4 text-4xl leading-[1.08] sm:text-5xl md:text-[4rem]"
        />

        {subtitle && (
          <Reveal delay={0.18}>
            <p className="mx-auto mt-4 max-w-2xl text-base font-semibold leading-relaxed text-renewal-green/90 sm:text-lg">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
