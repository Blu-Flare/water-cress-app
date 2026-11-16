import { MessageCircle, Phone } from 'lucide-react';
import { CONTACT } from '../data/site';

export default function MobileCTA() {
  return (
    <div className="safe-bottom fixed inset-x-0 bottom-0 z-[900] grid grid-cols-2 border-t border-renewal-green/20 bg-graphite-teal/95 backdrop-blur-xl lg:hidden">
      <a
        href={CONTACT.phoneHref}
        className="flex items-center justify-center gap-2 px-3 py-3.5 text-sm font-bold text-pure-white transition-colors hover:bg-white/5"
      >
        <Phone className="h-4 w-4 text-renewal-green" aria-hidden="true" />
        Call Now
      </a>
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 border-l border-renewal-green/20 bg-renewal-green/10 px-3 py-3.5 text-sm font-bold text-renewal-green transition-colors hover:bg-renewal-green/20"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  );
}
