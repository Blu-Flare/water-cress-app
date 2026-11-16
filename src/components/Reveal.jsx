import { motion } from 'framer-motion';

/** A small reusable scroll-reveal wrapper. */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 28,
  amount = 0.2,
  once = true,
  as = 'div',
}) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
