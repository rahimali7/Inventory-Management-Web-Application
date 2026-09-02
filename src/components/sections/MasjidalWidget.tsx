import Script from "next/script";
import { prayerConfig } from "@/data/prayer";

/**
 * Renders the masjid's Masjidal prayer-time widget.
 *
 * Masjidal's install instructions are two-part: load their widget library,
 * then place the markup that their "Embed" button generates. The library is
 * loaded here rather than in the root layout so that only this page pays for
 * the third-party request.
 *
 * Returns null when the widget has not been configured yet, so the caller can
 * fall back to the manually maintained table.
 */
export function MasjidalWidget() {
  const { scriptSrc, embedHtml, embedUrl, embedHeight } = prayerConfig;

  if (embedHtml) {
    return (
      <>
        <div
          className="masjidal-widget overflow-hidden rounded-2xl border border-navy-800/10 bg-white"
          // Trusted content: this string lives in src/data/prayer.ts and is
          // editable only by someone with commit access. It is never derived
          // from user input, request data, or a URL parameter.
          dangerouslySetInnerHTML={{ __html: embedHtml }}
        />
        <Script
          src={scriptSrc}
          strategy="afterInteractive"
          // The container above is server-rendered, so it is already in the
          // DOM by the time the library runs and looks for it.
        />
      </>
    );
  }

  if (embedUrl) {
    return (
      <div className="overflow-hidden rounded-2xl border border-navy-800/10 bg-white">
        <iframe
          src={embedUrl}
          title="Prayer times"
          height={embedHeight}
          className="w-full"
          loading="lazy"
        />
      </div>
    );
  }

  return null;
}
