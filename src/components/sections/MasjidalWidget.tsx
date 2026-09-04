import Script from "next/script";
import { masjidal } from "@/data/prayer";

/**
 * Optional override: the masjid's published Masjidal widget.
 *
 * Renders only once `embedHtml` is set in src/data/prayer.ts (the markup
 * Masjidal's "Embed" button generates). The loader script is added here
 * rather than in the root layout so only this page pays for it.
 *
 * Returns null when unconfigured, so the caller falls back to the calculated
 * table.
 */
export function MasjidalWidget() {
  if (!masjidal.embedHtml) return null;

  return (
    <>
      <div
        className="masjidal-widget overflow-hidden rounded-2xl border border-navy-800/10 bg-white"
        // Trusted content: authored in src/data/prayer.ts by someone with
        // commit access. Never derived from user input or request data.
        dangerouslySetInnerHTML={{ __html: masjidal.embedHtml }}
      />
      <Script src={masjidal.scriptSrc} strategy="afterInteractive" />
    </>
  );
}
