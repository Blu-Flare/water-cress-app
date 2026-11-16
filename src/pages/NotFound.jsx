import { Link } from 'react-router-dom';
import { ArrowLeft, Home as HomeIcon, Search } from 'lucide-react';
import Logo from '../components/Logo';
import useSEO from '../hooks/useSEO';

export default function NotFound() {
  useSEO({
    title: 'Page Not Found | Water Cress Designers',
    description: 'The page you are looking for could not be found.',
  });

  return (
    <section className="relative flex min-h-[75svh] items-center overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-grid opacity-30" aria-hidden="true" />
      <div className="container-page text-center">
        <div className="mb-8 flex justify-center">
          <Logo textClassName="text-xl" />
        </div>
        <p className="text-7xl font-black text-renewal-green sm:text-8xl">404</p>
        <h1 className="mt-4 text-3xl sm:text-4xl">This page is still under construction.</h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cool-grey/65">
          The page you were looking for doesn&apos;t exist — but our paving, tiling and
          hardscaping work certainly does.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn-primary">
            <HomeIcon className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </Link>
          <Link to="/archive" className="btn-ghost">
            <Search className="h-4 w-4" aria-hidden="true" />
            Browse the Archive
          </Link>
        </div>
        <Link
          to="/services"
          className="mt-8 inline-flex items-center gap-1 text-xs font-semibold text-cool-grey/50 transition-colors hover:text-renewal-green"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Or explore our services
        </Link>
      </div>
    </section>
  );
}
