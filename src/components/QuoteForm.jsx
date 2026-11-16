import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronDown, MessageCircle, ShieldCheck } from 'lucide-react';
import { useStore } from '../store/useStore';
import { CONTACT, SERVICE_OPTIONS } from '../data/site';

export default function QuoteForm() {
  const quoteForm = useStore((state) => state.quoteForm);
  const setQuoteField = useStore((state) => state.setQuoteField);
  const resetQuoteForm = useStore((state) => state.resetQuoteForm);
  const [submittedUrl, setSubmittedUrl] = useState('');

  const handleChange = (field) => (event) => {
    setQuoteField(field, event.target.value);
    if (submittedUrl) setSubmittedUrl('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceLabel =
      SERVICE_OPTIONS.find((option) => option.value === quoteForm.service)?.label ||
      quoteForm.service;

    const rawMessage = [
      '*New Quote Request* 🌟',
      '',
      `*Name:* ${quoteForm.name}`,
      `*Phone:* ${quoteForm.phone}`,
      `*Service:* ${serviceLabel}`,
      `*Details:* ${quoteForm.details}`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
      rawMessage,
    )}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmittedUrl(whatsappUrl);
    resetQuoteForm();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="quote-name" className="form-label">
            Full Name
          </label>
          <input
            id="quote-name"
            name="name"
            type="text"
            autoComplete="name"
            className="form-control"
            placeholder="e.g., John Doe"
            value={quoteForm.name}
            onChange={handleChange('name')}
            required
          />
        </div>

        <div>
          <label htmlFor="quote-phone" className="form-label">
            Phone Number
          </label>
          <input
            id="quote-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="form-control"
            placeholder="+267 75 000 000"
            value={quoteForm.phone}
            onChange={handleChange('phone')}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="quote-service" className="form-label">
          Service Needed
        </label>
        <div className="relative">
          <select
            id="quote-service"
            name="service"
            className="form-control cursor-pointer appearance-none pr-11"
            value={quoteForm.service}
            onChange={handleChange('service')}
            required
          >
            <option value="" disabled>
              Select a service...
            </option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-renewal-green"
            aria-hidden="true"
          />
        </div>
      </div>

      <div>
        <label htmlFor="quote-details" className="form-label">
          Project Details
        </label>
        <textarea
          id="quote-details"
          name="details"
          rows="4"
          className="form-control resize-y"
          placeholder="Tell us about your project (size, timeline, specific requirements)..."
          value={quoteForm.details}
          onChange={handleChange('details')}
          required
        />
      </div>

      <button type="submit" className="btn-submit">
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        Request My Free Quote
      </button>

      <p className="flex items-start justify-center gap-2 text-center text-[0.72rem] leading-relaxed text-cool-grey/50">
        <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-renewal-green" aria-hidden="true" />
        Your details are sent securely to our team on WhatsApp. No spam, ever.
      </p>

      <AnimatePresence>
        {submittedUrl && (
          <motion.div
            initial={{ opacity: 0, y: 8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
            role="status"
            aria-live="polite"
          >
            <div className="rounded-xl border border-renewal-green/30 bg-renewal-green/10 p-4 text-center">
              <p className="flex items-center justify-center gap-2 text-sm font-semibold text-renewal-green">
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                Your request is ready in WhatsApp.
              </p>
              <a
                href={submittedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-xs font-semibold text-cool-grey/80 underline decoration-renewal-green/50 underline-offset-4 hover:text-pure-white"
              >
                WhatsApp didn&apos;t open? Tap here to send it.
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
