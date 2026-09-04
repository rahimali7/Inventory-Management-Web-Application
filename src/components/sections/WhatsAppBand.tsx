import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Button, ArrowRight } from "@/components/ui/Button";
import { whatsapp } from "@/data/site";

/** Invitation to the masjid's WhatsApp community, with a scannable QR. */
export function WhatsAppBand() {
  return (
    <Section tone="sand" size="compact">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-[1fr_auto] md:gap-16">
          <div>
            <SectionHeading
              eyebrow="Stay connected"
              title="Join the"
              accent="community"
            >
              Announcements, class reminders, and event news reach the community
              first on WhatsApp.
            </SectionHeading>

            <Reveal from="up" delay={0.15}>
              <Button
                href={whatsapp.inviteUrl}
                external
                size="lg"
                className="mt-9"
              >
                Join the WhatsApp group
                <ArrowRight />
              </Button>
              <p className="mt-4 text-sm text-muted">
                Or scan the code with your phone&rsquo;s camera.
              </p>
            </Reveal>
          </div>

          <Reveal from="up" delay={0.1}>
            <a
              href={whatsapp.inviteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-fit rounded-2xl border border-navy-800/10 bg-white p-5 transition-shadow duration-500 hover:shadow-[0_24px_60px_-40px_rgba(0,30,66,0.45)]"
            >
              <Image
                src={whatsapp.qrImage}
                alt={`QR code to join the ${whatsapp.groupName} WhatsApp group`}
                width={200}
                height={200}
                className="h-[200px] w-[200px]"
              />
              <span className="mt-4 block text-center text-xs uppercase tracking-[0.16em] text-muted">
                {whatsapp.groupName}
              </span>
            </a>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
