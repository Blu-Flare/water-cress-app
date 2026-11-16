import { Link } from 'react-router-dom';

export default function Logo({
  onClick,
  className = '',
  textClassName = 'text-xl',
  asButton = false,
  ...props
}) {
  const classes = `group flex shrink-0 items-center gap-3 ${className}`;

  const content = (
    <>
      <span className="relative grid h-11 w-11 shrink-0 place-items-center">
        <span className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,#002E32_0%,#BAD435_100%)] ring-2 ring-pure-white transition-transform duration-500 group-hover:rotate-[18deg]" />
        <span className="relative h-2.5 w-5 rounded-full border-b-2 border-graphite-industrial/70" />
        <span className="absolute inset-0 rounded-full ring-1 ring-renewal-green/40 transition-all duration-500 group-hover:ring-2 group-hover:ring-renewal-green" />
      </span>
      <span
        className={`font-medium leading-tight tracking-wide text-pure-white ${textClassName}`}
      >
        Water <span className="font-black text-renewal-green">Cress</span>
        <span className="block text-[0.6em] font-semibold uppercase tracking-[0.3em] text-cool-grey/60">
          Designers
        </span>
      </span>
    </>
  );

  if (asButton) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label="Open contact options"
        className={classes}
        {...props}
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Water Cress Designers — home"
      className={classes}
      {...props}
    >
      {content}
    </Link>
  );
}
