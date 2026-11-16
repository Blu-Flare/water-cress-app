import { Fragment } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const wordVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.92, rotateX: -20 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: [0.175, 0.885, 0.32, 1.275],
    },
  },
};

/**
 * Framer Motion powered word-pop text.
 * The accent phrase can share the line or drop to a new line.
 */
export default function AnimatedText({
  as: Tag = 'div',
  id,
  text = '',
  accent = '',
  accentBlock = true,
  className = '',
  accentClassName = 'text-renewal-green',
  delay = 0,
  stagger = 0.055,
  once = false,
  amount = 0.35,
}) {
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(/\s+/).filter(Boolean);
  const accentWords = accent.split(/\s+/).filter(Boolean);
  const fullText = [text, accent].filter(Boolean).join(' ');

  if (prefersReducedMotion) {
    return (
      <Tag id={id} className={className}>
        {text}
        {accent && (
          <>
            {accentBlock ? <br /> : ' '}
            <span className={accentClassName}>{accent}</span>
          </>
        )}
      </Tag>
    );
  }

  return (
    <Tag id={id} className={className} aria-label={fullText}>
      <motion.span
        aria-hidden="true"
        className="inline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
        variants={{
          visible: {
            transition: { staggerChildren: stagger, delayChildren: delay },
          },
        }}
      >
        {words.map((word, index) => (
          <Fragment key={`${word}-${index}`}>
            <motion.span
              variants={wordVariants}
              className="inline-block will-change-transform"
            >
              {word}
            </motion.span>
            {index < words.length - 1 && ' '}
          </Fragment>
        ))}
        {accent && !accentBlock && (
          <>
            {words.length > 0 && ' '}
            {accentWords.map((word, index) => (
              <Fragment key={`accent-${word}-${index}`}>
                <motion.span
                  variants={wordVariants}
                  className={`inline-block will-change-transform ${accentClassName}`}
                >
                  {word}
                </motion.span>
                {index < accentWords.length - 1 && ' '}
              </Fragment>
            ))}
          </>
        )}
      </motion.span>

      {accent && accentBlock && (
        <motion.span
          aria-hidden="true"
          className="block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once, amount }}
          variants={{
            visible: {
              transition: {
                staggerChildren: stagger,
                delayChildren: delay + words.length * stagger,
              },
            },
          }}
        >
          {accentWords.map((word, index) => (
            <Fragment key={`accent-block-${word}-${index}`}>
              <motion.span
                variants={wordVariants}
                className={`inline-block will-change-transform ${accentClassName}`}
              >
                {word}
              </motion.span>
              {index < accentWords.length - 1 && ' '}
            </Fragment>
          ))}
        </motion.span>
      )}
    </Tag>
  );
}
