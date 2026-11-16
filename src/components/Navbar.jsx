import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight,
  Facebook,
  Mail,
  Menu,
  MessageCircle,
  X,
} from 'lucide-react';
import Logo from './Logo';
import { CONTACT, NAV_LINKS } from '../data/site';
import { useStore } from '../store/useStore';

const CONTACT_LINKS = [
  { label: 'Facebook', href: CONTACT.facebook, icon: Facebook, external: true },
  {
    label: 'WhatsApp',
    href: CONTACT.whatsappHref,
    icon: MessageCircle,
    external: true,
  },
  { label: 'Email', href: CONTACT.emailHref, icon: Mail },
];

export default function Navbar() {
  const { mobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [logoMenuOpen, setLogoMenuOpen] = useState(false);
  const logoMenuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    closeMobileMenu();
    setLogoMenuOpen(false);
  }, [location.pathname, location.hash, closeMobileMenu]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeMobileMenu();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen, closeMobileMenu]);

  useEffect(() => {
    if (!logoMenuOpen) return undefined;

    const handlePointerDown = (event) => {
      if (!logoMenuRef.current?.contains(event.target)) {
        setLogoMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setLogoMenuOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [logoMenuOpen]);

  const linkClass = ({ isActive }) =>
    `nav-link ${isActive ? 'nav-link-active' : ''}`;

  return (
    <header
      className={`sticky top-0 z-[1000] border-b border-renewal-green/20 bg-graphite-teal/95 backdrop-blur-xl transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_16px_40px_-24px_rgba(0,0,0,0.95)]' : ''
      }`}
    >
      <div className="container-page flex h-[4.75rem] items-center justify-between gap-4">
        <div ref={logoMenuRef} className="relative">
          <Logo
            asButton
            onClick={() => setLogoMenuOpen((open) => !open)}
            aria-haspopup="menu"
            aria-expanded={logoMenuOpen}
            aria-controls="logo-contact-menu"
          />

          <AnimatePresence>
            {logoMenuOpen && (
              <motion.div
                id="logo-contact-menu"
                role="menu"
                aria-label="Contact Water Cress Designers"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 top-full z-[1001] mt-3 w-56 overflow-hidden rounded-xl border border-renewal-green/25 bg-graphite-teal/95 p-2 shadow-teal-glow backdrop-blur-xl"
              >
                {CONTACT_LINKS.map(({ label, href, icon: Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    role="menuitem"
                    {...(external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    onClick={() => setLogoMenuOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-cool-grey/85 transition-colors hover:bg-renewal-green/10 hover:text-renewal-green"
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 text-renewal-green"
                      aria-hidden="true"
                    />
                    {label}
                    <ArrowUpRight
                      className="ml-auto h-3.5 w-3.5 opacity-40"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="grid h-11 w-11 place-items-center rounded-full border border-pure-white/15 bg-white/5 text-pure-white transition-colors hover:border-renewal-green/60 hover:text-renewal-green lg:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-renewal-green/10 bg-graphite-teal/98 lg:hidden"
          >
            <nav className="container-page flex flex-col gap-1 py-5" aria-label="Mobile">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * index, duration: 0.25 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                        isActive
                          ? 'bg-renewal-green/10 text-renewal-green'
                          : 'text-cool-grey hover:bg-white/5 hover:text-renewal-green'
                      }`
                    }
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 opacity-50" aria-hidden="true" />
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
