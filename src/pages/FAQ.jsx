import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail, MessageCircle, Phone, Plus } from 'lucide-react';

import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import CallToAction from '../components/CallToAction';
import useSEO from '../hooks/useSEO';
import { faqs } from '../data/faqs';
import { CONTACT } from '../data/site';
import headerImage from '../../assets/Help & FAQ..webp';
import ctaImage from '../../assets/Still Have Questions.jpg';

const HEADER_IMAGE = headerImage;
const CTA_IMAGE = ctaImage;

const HELP_CARDS = [
  {
    icon: Phone,
    title: 'Call our team',
    description: 'Speak to a real person about your project.',
    action: CONTACT.phoneDisplay,
    href: CONTACT.phoneHref,
    external: false,
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp us',
    description: 'Send photos and measurements for a faster quote.',
    action: 'Start a chat',
    href: CONTACT.whatsappHref,
    external: true,
  },
  {
    icon: Mail,
    title: 'Email us',
    description: 'Prefer email? We reply within one working day.',
    action: CONTACT.email,
    href: CONTACT.emailHref,
    external: false,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  useSEO({
    title: 'FAQ & Help | Water Cress Designers Botswana',
    description:
      'Answers to common questions about paving timelines, warranties, payments and service areas across Botswana from Water Cress Designers.',
  });

  return (
    <>
      <PageHeader
        eyebrow="FAQ & help"
        title="Help &"
        accent="FAQ."
        subtitle="Answers to common questions about our services and process."
        image={HEADER_IMAGE}
      />

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.55fr] lg:gap-14">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Good to know"
              title="Questions,"
              accent="Answered."
              subtitle="If you can't find what you need below, our team is one message away."
              className="mb-8"
            />

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {HELP_CARDS.map((card, index) => {
                const Icon = card.icon;

                return (
                  <Reveal key={card.title} delay={index * 0.07}>
                    <a
                      href={card.href}
                      {...(card.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="group flex items-start gap-4 rounded-xl border border-renewal-green/15 bg-graphite-teal/50 p-5 transition-all duration-300 hover:border-renewal-green/40 hover:bg-graphite-teal/80"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-renewal-green/30 bg-renewal-green/10 text-renewal-green transition-colors group-hover:bg-renewal-green group-hover:text-graphite-industrial">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-sm font-extrabold text-pure-white">
                          {card.title}
                        </span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-cool-grey/55">
                          {card.description}
                        </span>
                        <span className="mt-2 block break-all text-xs font-bold text-renewal-green">
                          {card.action}
                        </span>
                      </span>
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <div>
            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const panelId = `faq-panel-${index}`;
                const buttonId = `faq-button-${index}`;

                return (
                  <Reveal key={faq.question} delay={index * 0.04}>
                    <div
                      className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                        isOpen
                          ? 'border-renewal-green/40 bg-graphite-teal/80 shadow-teal-glow'
                          : 'border-pure-white/5 bg-graphite-teal/45 hover:border-renewal-green/20'
                      }`}
                    >
                      <h3>
                        <button
                          type="button"
                          id={buttonId}
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => setOpenIndex(isOpen ? -1 : index)}
                          className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-sm font-bold text-pure-white transition-colors hover:text-renewal-green sm:text-base"
                        >
                          <span>{faq.question}</span>
                          <span
                            className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                              isOpen
                                ? 'rotate-45 border-renewal-green bg-renewal-green text-graphite-industrial'
                                : 'border-renewal-green/30 text-renewal-green'
                            }`}
                            aria-hidden="true"
                          >
                            <Plus className="h-4 w-4" />
                          </span>
                        </button>
                      </h3>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={panelId}
                            role="region"
                            aria-labelledby={buttonId}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="border-t border-pure-white/5 px-5 pb-5 pt-4 text-sm leading-relaxed text-cool-grey/75">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.1} className="mt-6 rounded-xl border border-renewal-green/15 bg-renewal-green/5 p-5">
              <p className="text-xs leading-relaxed text-cool-grey/65">
                <strong className="text-pure-white">Service note:</strong> We are based
                in Gaborone and travel across Botswana. For projects outside our usual
                radius, contact us directly so we can plan logistics and timelines with
                you.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CallToAction
        title="Still Have"
        accent="Questions?"
        subtitle="We're here to help. Reach out to us directly."
        image={CTA_IMAGE}
        quoteLabel="Contact Us Today"
      />
    </>
  );
}
