# Masjid Bilal Islamic Center — Website

The website for Masjid Bilal Islamic Center in Louisville, Kentucky.

Built with **Next.js 16** (App Router), **Tailwind CSS v4**, and **Motion**
for animation. Every page is statically generated, so the site is fast and
cheap to host.

## Running it locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## Brand

The colour palette is sampled directly from the masjid's logo artwork:

| Token | Hex | Where it comes from |
| --- | --- | --- |
| `navy-800` | `#001E42` | Emblem outline and wordmark |
| `crimson-700` | `#7D0223` | Star points and the rule under the wordmark |
| `gold-400` | `#D4A75F` | Inner frame and crescent |
| `sand-50` | `#FCFAF5` | Page background |

Typography: **Playfair Display** (display headings), **Inter** (body and UI),
**Cinzel** (small-caps eyebrows and the logo lockup, matching the wordmark),
and **Amiri** (Arabic and Qur'anic text).

Logo files live in `public/brand/`.

## Editing content

Everything a non-developer would want to change lives in `src/data/`. No
component code needs to be touched.

| File | What it controls |
| --- | --- |
| `site.ts` | Name, contact details, Zelle number, locations, navigation |
| `prayer.ts` | Prayer-time embed URL, fallback table, Jumu'ah times |
| `programs.ts` | Classes and programs |
| `events.ts` | Upcoming events (past ones move to the archive automatically) |
| `services.ts` | Nikah, janazah, shahada, counseling |
| `leadership.ts` | Imams, board, committees |
| `timeline.ts` | The masjid's history |
| `verses.json` | Qur'anic verses used across the site |

### Prayer times

The masjid uses an external prayer-time service. Paste the embed URL from that
service into `embedUrl` in `src/data/prayer.ts` and the site will render the
live widget. Until then it shows the manual table in the same file.

### Qur'anic verses

Arabic text is the Uthmani script from
[The Noble Qur'an Encyclopedia](https://quranenc.com), obtained through the
`quran-json` package (CC BY 4.0) — **not** transcribed by hand, so the
diacritics are correct.

⚠️ The English translation shipped with that dataset does not name its
translator. The wording matches Sahih International, but this is
**unconfirmed**. Have the imam verify the attribution and approve every verse
before launch. See `_source` at the top of `src/data/verses.json`.

## Before launch

Items marked `NEEDS-CONFIRMATION`, `PLACEHOLDER`, or `TODO` in `src/data/`
must be resolved first. The significant ones:

- [ ] Confirm the public phone number (two different numbers are in play)
- [ ] Add ZIP codes for both locations
- [ ] Real prayer times, or the prayer-service embed URL
- [ ] Real Jumu'ah khutbah and prayer times
- [ ] Real program schedules, or delete programs not offered
- [ ] Real leadership names, roles, and biographies
- [ ] Confirm 501(c)(3) status before making any tax-deductibility claim
- [ ] Verify Qur'an translation attribution
- [ ] Photography (see below)
- [ ] Point the production domain at the deployment and update `site.url`

## Photography

The site currently uses geometric panels built from the logo's eight-pointed
star wherever a photo belongs. They look deliberate rather than empty, but
real photography is the single biggest upgrade available to this design.

To add photos: drop files in `public/img/` and pass `src` to `<ImagePanel />`.

## Accessibility

Every animation is wrapped so that visitors who have asked their operating
system to reduce motion get a still site — both in CSS and in JavaScript.
Colour pairings, focus rings, and a skip link are built in.
