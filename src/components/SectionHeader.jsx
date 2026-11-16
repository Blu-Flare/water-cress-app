import AnimatedText from './AnimatedText';
import Reveal from './Reveal';

export default function SectionHeader({
  eyebrow,
  title,
  accent = '',
  subtitle,
  align = 'center',
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`${isCenter ? 'mx-auto text-center' : 'text-left'} mb-12 max-w-2xl md:mb-16 ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <span className="section-eyebrow">
            <span className="h-px w-8 bg-renewal-green/80" aria-hidden="true" />
            {eyebrow}
          </span>
        </Reveal>
      )}

      <AnimatedText
        as="h2"
        text={title}
        accent={accent}
        accentBlock={false}
        className="mt-4 text-3xl leading-[1.15] sm:text-4xl md:text-[2.65rem]"
      />

      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base font-medium leading-relaxed text-renewal-green/90 sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
