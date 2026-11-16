import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, useOutlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileCTA from './MobileCTA';
import ArchiveModal from './ArchiveModal';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only z-[3000] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-full focus:bg-renewal-green focus:px-5 focus:py-3 focus:font-bold focus:text-graphite-industrial"
      >
        Skip to content
      </a>

      <ScrollToTop />
      <Navbar />

      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          id="main-content"
          key={location.pathname}
          className="flex-1"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          {outlet}
        </motion.main>
      </AnimatePresence>

      <Footer />
      <MobileCTA />
      <ArchiveModal />
    </div>
  );
}
