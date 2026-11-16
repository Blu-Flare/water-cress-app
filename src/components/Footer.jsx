import { Link } from 'react-router-dom';
import {
  ArrowUp,
  Clock,
  Facebook,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import Logo from './Logo';
import { CONTACT, NAV_LINKS } from '../data/site';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-renewal-green/20 bg-graphite-teal pb-28 pt-16 text-cool-grey lg:pb-12">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-renewal-green/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <Logo textClassName="text-2xl" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cool-grey/70">
              Premium paving, tiling and hardscaping across Botswana. Engineered
              to withstand the elements, finished with uncompromising care.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Water Cress Designers on Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-renewal-green/30 text-renewal-green transition-colors hover:bg-renewal-green hover:text-graphite-industrial"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Water Cress Designers on WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full border border-renewal-green/30 text-renewal-green transition-colors hover:bg-renewal-green hover:text-graphite-industrial"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={CONTACT.emailHref}
                aria-label="Email Water Cress Designers"
                className="grid h-10 w-10 place-items-center rounded-full border border-renewal-green/30 text-renewal-green transition-colors hover:bg-renewal-green hover:text-graphite-industrial"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-pure-white">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-flex text-sm font-medium text-cool-grey/70 transition-colors hover:text-renewal-green"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/#contact"
                  className="inline-flex text-sm font-semibold text-renewal-green transition-colors hover:text-pure-white"
                >
                  Request a Free Quote
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-pure-white">
              Get in touch
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="group flex items-start gap-3 text-cool-grey/75 transition-colors hover:text-renewal-green"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-renewal-green" aria-hidden="true" />
                  <span>
                    <span className="block text-[0.7rem] uppercase tracking-wider text-cool-grey/40">
                      Call us
                    </span>
                    {CONTACT.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="group flex items-start gap-3 text-cool-grey/75 transition-colors hover:text-renewal-green"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-renewal-green" aria-hidden="true" />
                  <span className="break-all">
                    <span className="block text-[0.7rem] uppercase tracking-wider text-cool-grey/40">
                      Email
                    </span>
                    {CONTACT.email}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-cool-grey/75">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-renewal-green" aria-hidden="true" />
                <span>
                  <span className="block text-[0.7rem] uppercase tracking-wider text-cool-grey/40">
                    Based in
                  </span>
                  {CONTACT.location}
                </span>
              </li>
              <li className="flex items-start gap-3 text-cool-grey/75">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-renewal-green" aria-hidden="true" />
                <span>
                  <span className="block text-[0.7rem] uppercase tracking-wider text-cool-grey/40">
                    Working hours
                  </span>
                  {CONTACT.hours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-pure-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-cool-grey/40">
            &copy; {new Date().getFullYear()} Water Cress Designers. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-cool-grey/40">Proudly built in Botswana</p>
            <button
              type="button"
              onClick={scrollToTop}
              className="grid h-9 w-9 place-items-center rounded-full border border-renewal-green/30 text-renewal-green transition-colors hover:bg-renewal-green hover:text-graphite-industrial"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
