# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

## User asset preference

Keep clearly labeled, dedicated image slots for content whose final photos are not available yet. Store future user-supplied images in `public/images-to-add/`, keep expected filenames visible in the UI, and centralize those paths in the content data near the top of `src/App.jsx` so replacement is straightforward.

Do not include a standalone About Me section on the homepage. The hero now carries the personal introduction and focus areas, while Education remains its own academic, information-led section immediately afterward.

Keep the homepage Technical Projects section background cream. Use red selectively rather than filling the whole section or every card: the heading, card titles, metadata, borders, and actions may use burgundy, while cards stay soft blush and supporting copy stays warm brown instead of black.

Technical Projects cards should feel dimensional and eye-catching: use varied warm red/blush outer shells, lighter overlapping editorial body panels, inset imagery, burgundy number badges and titles, and warm-brown copy. Avoid flat identical cards and avoid full-red fills.

Keep the homepage Technical Projects section heading structurally identical to the homepage International Experiences heading: a thin top divider, script eyebrow in the narrow left column, and the condensed title with short description in the wider right column. Do not use a full-width oversized projects hero on the homepage.

Style homepage International Experiences as premium editorial cards: keep the section cream, use layered inset photography, blush surfaces, selective burgundy framing and typography, clear place/year hierarchy, and restrained hover elevation rather than full-red cards.

For homepage International Experiences, keep the full section introduction above the cards, use Japan / South Korea / Vietnam for consistent location labels, use meaningful bottom categories, align the section CTA to the grid's right edge, and make each card keyboard-accessible and fully clickable. Match the Technical Projects card anatomy, but follow the selected dark-maroon reference by making JENESYS the single solid-maroon featured card with cream typography; keep ROK–Mekong and AAYLF light blush.

The full International Experiences page should feature three dedicated sections—JENESYS, ROK–Mekong, and AAYLF—with four photos per experience. HPAIR has been removed. Use the existing primary photo when available and show clearly named slots from `public/images-to-add/` for missing gallery images. Homepage cards should jump to their matching section.

Keep the homepage hero primarily professional and structurally stable. Editorial decoration should remain subordinate to the identity, introduction, CTAs, professional links, and portrait.

Use the finalized homepage hero hierarchy: cybersecurity/AI/digital-trust/youth-impact kicker, oversized San Yamin identity, concise professional bio, UIT education credential, View Projects and Download CV actions, focused expertise labels, and LinkedIn/GitHub links alongside the existing portrait.

Use red strategically inside portfolio card systems: Technical Projects should keep the cream section background and pale readable content panels, with saturated red outer shells, burgundy typography, and restrained red detail accents rather than fully red card interiors. International Experiences should use the same complete dark-maroon JENESYS treatment across all three homepage cards, with cream typography and number badges.

For homepage Technical Projects, use a single-layer minimal editorial card system: soft blush surface, thin dusty-red border, flush image with rounded top corners, no overlapping inner content panel, compact spacing, whole-card interaction, and “View case study” as the CTA.

The homepage Technical Projects heading should be a compact cream-background sister to the International Experiences hero: thin top rule, script eyebrow, uppercase portfolio/date kicker, oversized condensed burgundy title, and a short warm-brown description, all left-aligned directly above the cards.

The full `/projects` page hero should match the compact red International Experiences subpage hero exactly in structure, spacing, typography, and cream-on-red treatment, while retaining its project-specific text.

Keep the International Experiences subpage hero content-led and compact—never viewport-height. Preserve the bold red editorial identity, but target roughly 560–620px on desktop with tightly grouped divider, eyebrow, kicker, title, and description so the first experience appears sooner.

Every detail/subpage hero must include a clearly labeled “Back to home” button near the top so users can return without relying on browser controls. Keep the button on its own row, with the script eyebrow beginning below it as on the International Experiences page.

Keep the shared leadership story overview compact on both Sansan’s Yellow Notebook and Aspire Now: use a restrained logo/image panel, tightly grouped overview content, and minimal bottom whitespace before the preview-post section.

The Sansan’s Yellow Notebook detail page includes a dedicated responsive “Preview posts” gallery using the supplied vertical social-post artwork. Preserve each post’s full 4:5 composition, keep the asset filenames centralized in the leadership content data, and let users open previews at full size.

The Aspire Now detail page also includes a dedicated responsive “Preview posts” gallery for supplied opportunity, education, wellbeing, and youth-focused graphics. Keep its image paths and labels centralized in the Aspire Now leadership data and preserve each graphic’s full composition.

Order the Yellow Notebook previews as a visual story: the former post 08 reflection leads as post 01, followed by opening/travel content and then the day-based posts in chronological order from Day 0 through Day 5.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Performance

Fonts are self-hosted in `public/fonts/*.woff2` (DM Sans, Oswald, Petemoss) with `@font-face` at the top of `src/styles.css`; do not reintroduce a Google Fonts `@import` or `fonts.gstatic` request. Keep the `preload` hints in `index.html` for the two text fonts and for `/assets/portrait-hero.webp`.

The hero uses a `<picture>` with `portrait-hero.webp` first and the untouched `portrait-hero.jpg` as fallback, so the protected source `portrait-hero.jpg` is never re-encoded or resized. Add new raster assets as optimized `.webp` siblings the same way.

## Motion system (P0)

Scroll reveal, hero entrance, and route fade are live. Use `.reveal` (fade + 22px rise) for static blocks and `.reveal-fade` (opacity only) for elements with hover transforms (`.project-card`, `.exchange-card`, `.notebook-post`). Stagger with the `--rd` CSS variable. The IntersectionObserver lives in `App()` and re-runs on `path` change; route wrapper is the keyed `.route` div. Keep durations 200–600ms, easing `cubic-bezier(.2,.75,.25,1)`, no parallax/scroll-jacking, and always respect `prefers-reduced-motion`. P1 is live: mobile menu animates via max-height/opacity/visibility (no `display` toggle), header gets `.scrolled` after 40px, section-header top rules draw with `::before scaleX`, and `ImageSlot` images fade in via `.fade-img.is-loaded` (1.5s fallback). P2 is live: `:active` press scale on buttons/arrow links/back/menu/cards, contact-row left-padding sweep with arrow nudge, text-link opacity hover, footer button hover. Focus rings and arrow slides already existed. The motion system (P0–P2) is complete.
