import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAssistant } from "@/components/sections/FaqAssistant";
import { WhatsAppBand } from "@/components/sections/WhatsAppBand";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { faqCategories, faqs } from "@/data/faq";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about prayer times, Qur'an classes, visiting, nikah and janazah services, and giving at Masjid Bilal Islamic Center in Louisville, Kentucky.",
};

/**
 * Search engines cannot read a chat widget, so every answer is also
 * published as plain text below it, and described in FAQPage structured data.
 */
function FaqStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="Ask us" title="Frequently asked" accent="questions">
        Ask the assistant below, or read the answers in full. For anything it
        cannot answer — and for religious questions — the imam is the right
        person to speak to.
      </PageHero>

      <Section tone="white" size="compact">
        <Container size="narrow">
          <Reveal from="up">
            <FaqAssistant />
          </Reveal>
        </Container>
      </Section>

      {faqCategories.map((cat, index) => {
        const inCategory = faqs.filter((f) => f.category === cat.id);
        if (inCategory.length === 0) return null;

        return (
          <Section
            key={cat.id}
            id={cat.id}
            tone={index % 2 === 0 ? "sand" : "white"}
            size="compact"
          >
            <Container size="narrow">
              <SectionHeading eyebrow="Answers" title={cat.label} as="h2" />
              <Stagger as="ul" className="mt-12 space-y-8">
                {inCategory.map((f) => (
                  <StaggerItem key={f.id} as="li" id={f.id} className="scroll-mt-32">
                    <h3 className="font-display text-xl text-navy-800 sm:text-2xl">
                      {f.question}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted text-pretty">
                      {f.answer}
                    </p>
                  </StaggerItem>
                ))}
              </Stagger>
            </Container>
          </Section>
        );
      })}

      <Section tone="navy" size="compact">
        <Container size="narrow">
          <Reveal from="up">
            <div className="text-center">
              <h2 className="font-display text-3xl text-sand-50 sm:text-4xl">
                Still have a question?
              </h2>
              <p className="mx-auto mt-5 max-w-lg leading-relaxed text-sand-200/80 text-pretty">
                Religious questions, or anything the assistant could not
                answer — please call or come by. Someone will be glad to help.
              </p>
              <p className="mt-8 font-display text-2xl text-gold-300">
                <a href={contact.phoneHref}>{contact.phone}</a>
              </p>
              <p className="mt-2 text-sm text-sand-200/70">
                <a href={`mailto:${contact.email}`} className="break-all">
                  {contact.email}
                </a>
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <WhatsAppBand />
      <FaqStructuredData />
    </>
  );
}
