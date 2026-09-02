import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Diamond } from "@/components/ui/StarFrame";
import { contact, footerServices, locations, primaryNav, site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-sand-200">
      <Container size="wide" className="py-20 sm:py-24">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Identity */}
          <div className="lg:col-span-4">
            <div className="relative h-16 w-16">
              <Image
                src="/brand/logo-mark-gem.png"
                alt=""
                fill
                sizes="64px"
                className="object-contain"
              />
            </div>
            <p className="mt-6 font-roman text-sm tracking-[0.16em] text-sand-50">
              MASJID BILAL
            </p>
            <p className="mt-1.5 font-roman text-[0.625rem] tracking-[0.3em] text-gold-400">
              ISLAMIC CENTER
            </p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-sand-200/70">
              {site.tagline}
            </p>
          </div>

          {/* Explore */}
          <nav className="lg:col-span-2" aria-label="Footer">
            <h2 className="eyebrow text-gold-400">Explore</h2>
            <ul className="mt-6 space-y-3.5">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
              <li>
                <FooterLink href="/donate">Donate</FooterLink>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <div className="lg:col-span-3">
            <h2 className="eyebrow text-gold-400">Services</h2>
            <ul className="mt-6 space-y-3.5">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h2 className="eyebrow text-gold-400">Contact</h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href={contact.phoneHref}
                  className="text-sand-200/80 transition-colors hover:text-sand-50"
                >
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all text-sand-200/80 transition-colors hover:text-sand-50"
                >
                  {contact.email}
                </a>
              </li>
              <li className="text-sand-200/80">{contact.hours}</li>
            </ul>

            <h2 className="eyebrow mt-9 text-gold-400">Locations</h2>
            <ul className="mt-6 space-y-4 text-sm">
              {locations.map((loc) => (
                <li key={loc.slug} className="text-sand-200/80">
                  <span className="block text-sand-50">{loc.name}</span>
                  <span className="block">
                    {loc.street}, {loc.city}, {loc.region}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-4" aria-hidden>
          <span className="h-px flex-1 bg-gold-400/20" />
          <Diamond className="h-1.5 w-1.5 text-gold-400/50" />
          <span className="h-px flex-1 bg-gold-400/20" />
        </div>

        <div className="mt-8 flex flex-col gap-3 text-xs text-sand-200/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <a
            href="#top"
            className="transition-colors hover:text-sand-50"
          >
            Back to top ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-sand-200/80 transition-colors duration-300 hover:text-sand-50"
    >
      {children}
    </Link>
  );
}
