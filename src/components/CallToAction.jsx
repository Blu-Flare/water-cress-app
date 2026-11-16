import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone } from 'lucide-react';
import AnimatedText from './AnimatedText';
import Reveal from './Reveal';
import { CONTACT } from '../data/site';
import defaultImage from "../../assets/Let's Bring Your Vision to Life.webp";

const DEFAULT_IMAGE = defaultImage;

export default function CallToAction({
  title = 'Ready to Start Your Project?',
  accent = '',
  subtitle = "Let's discuss your vision and bring it to life.",
  image = DEFAULT_IMAGE,
  quoteLabel = 'Get a Free Quote',
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-graphite-industrial/85" aria-hidden="true" />

      <div className="container-page section-pad">
        <Reveal className="text-scrim mx-auto max-w-3xl px-6 py-12 text-center sm:px-10 md:py-16">
          <span className="section-eyebrow justify-center">
            <span className="h-px w-8 bg-renewal-green/80" aria-hidden="true" />
            Let's build
          </span>
          <AnimatedText
            as="h2"
            text={title}
            accent={accent}
            accentBlock={false}
            className="mt-4 text-3xl leading-[1.15] sm:text-4xl md:text-5xl"
          />
          <p className="mx-auto mt-4 max-w-xl text-base font-semibold leading-relaxed text-renewal-green/90">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link to="/#contact" className="btn-primary w-full sm:w-auto">
              {quoteLabel}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href={CONTACT.phoneHref} className="btn-secondary w-full sm:w-auto">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Us Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
