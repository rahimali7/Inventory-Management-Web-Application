# Deploying and updating the site

Two separate things, and the second is the one you'll do often:

1. **Deploy once** — connect the repo to a host. After that it is automatic.
2. **Update content** — edit a file on GitHub. The site rebuilds itself.

---

## 1. Deploying (one-time setup)

### Recommended: Vercel

Vercel is built by the same team as Next.js, so there is nothing to configure.

1. Go to [vercel.com](https://vercel.com) and **Sign up with GitHub**.
2. Authorize Vercel. You can grant access to **only this repository** rather
   than all of them — pick "Only select repositories".
3. **Add New → Project**, choose this repository, press **Deploy**.
4. Vercel detects Next.js on its own. Do not change the build settings.

That's it. You get a URL like `masjid-bilal.vercel.app` in about a minute.

**Yes, GitHub needs to be connected.** That connection is what makes updates
automatic: every time the repository changes, Vercel rebuilds and publishes.
Without it you would have to upload files by hand each time.

#### Environment variables

If a value is ever needed (such as the Masjidal API key), add it under
**Project → Settings → Environment Variables**, not in a file. See
`.env.example`.

#### Custom domain

**Project → Settings → Domains**, add `bilalislamiccenter.org`, then set the
DNS records Vercel gives you at whoever the domain is registered with. HTTPS is
issued automatically and free.

#### One thing to check before relying on the free tier

Vercel's free plan is called **Hobby**, and its terms describe it as being for
personal, non-commercial use. Plenty of small nonprofits run on it, but a
masjid is an organization rather than a personal project, so this is worth
reading rather than assuming. Vercel does have a nonprofit/open-source
program — worth asking them directly.

I could not verify Vercel's current terms from this environment, so please
confirm on their pricing page rather than taking this as settled.

### Alternatives, all genuinely free

Every page of this site is prerendered — there is no server-side code at
runtime — so it can also be exported as plain static files and hosted almost
anywhere. Verified working with:

```ts
// next.config.ts
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};
```

Then `npm run build` writes a complete site to `out/`.

| Host | Notes |
| --- | --- |
| **Cloudflare Pages** | Generous free tier with no non-commercial restriction. Connects to GitHub the same way. |
| **Netlify** | Free tier, GitHub integration, very similar to Vercel. |
| **GitHub Pages** | Free, already where the code lives. Needs the static export above plus a small Actions workflow. |

The trade-off with static export is that `next/image` optimization is turned
off (`unoptimized: true`), so images are served at full size. That matters
once real photography is added — not while the site uses the geometric
placeholder panels.

**Recommendation:** start on Vercel. It is the least work and the best fit for
Next.js. If the Hobby terms turn out to be a problem, Cloudflare Pages is the
strongest free alternative and moving is a small change.

---

## 2. Updating content

**You do not need to install anything.** Everything editable lives in
`src/data/`, and GitHub lets you edit files in the browser.

### The routine

1. Go to the repository on github.com.
2. Open `src/data/` and click the file you want (see the table below).
3. Click the **pencil icon** (Edit this file).
4. Make your change.
5. Scroll down, write a short note like "Added October iftar", and click
   **Commit changes**.

Vercel rebuilds automatically. The live site updates in roughly a minute.

### Which file to edit

| To change… | Edit |
| --- | --- |
| Events | `src/data/events.ts` |
| Programs and classes | `src/data/programs.ts` |
| Prayer times / Jumu'ah | `src/data/prayer.ts` |
| Imams, board, committees | `src/data/leadership.ts` |
| Phone, email, addresses, Zelle number | `src/data/site.ts` |
| Nikah, janazah, counseling | `src/data/services.ts` |
| The history timeline | `src/data/timeline.ts` |
| Qur'an verses used on the site | `src/data/verses.json` |

### Example: adding an event

In `src/data/events.ts`, copy an existing block and change the values:

```ts
  {
    slug: "eid-al-fitr-prayer",          // short id, lowercase, dashes only
    title: "Eid al-Fitr Prayer",
    date: "2027-03-20",                  // ALWAYS YYYY-MM-DD
    time: "8:00 AM",                     // free text
    category: "Community",               // Community | Youth | Education | Fundraising
    location: "Main Hall — Masjid Bilal South Side",
    summary: "Eid prayer followed by breakfast. All families welcome.",
  },
```

Keep the comma at the end of the block. Past events drop off the upcoming
list and move to the archive on their own — you do not need to delete them.

### Rules that will save you a broken build

- Keep the **quotes** around text and the **commas** between entries.
- If text contains an apostrophe, either use a curly `'` or escape it: `\'`.
- Dates must be `YYYY-MM-DD`. `2027-03-20`, not `March 20`.
- `category` must be one of the four listed above, spelled exactly.

If you get it wrong, **nothing breaks on the live site.** The CI check fails,
GitHub shows a red ✗ on your commit, and the currently published version stays
up until it is fixed. That safety net is the reason the check exists.

### If this becomes a chore

If several people end up updating the site regularly, a proper CMS (a login
and a form, no code at all) is worth adding. Sanity has a free tier that suits
a masjid's volume. Ask, and it can be wired into these same files.
