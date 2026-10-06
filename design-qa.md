# Design QA — Homepage Technical Projects Header

- Source visual truth: `/var/folders/l_/kk01jrv15t5c4wzzzm64y8300000gn/T/codex-clipboard-3224de2b-b281-42f0-80aa-a719627346c5.png`
- Implementation: `http://127.0.0.1:4173/#projects`
- Browser-rendered evidence: in-app Browser capture emitted during this task (`projects-heading-implementation`)
- Viewport: 1280 × 720 CSS px, device density 1
- Source pixels: 2940 × 444; implementation viewport: 1280 × 720
- State: desktop, default

## Full-view comparison evidence

The implementation uses the same section-header component as International Experiences. Both render a thin top divider, a 190px script-eyebrow column, a 35px grid gap, a condensed uppercase title in the wide column, and supporting copy directly below. The Projects section remains cream with burgundy display type and warm-brown copy. Browser measurements confirmed a 190px / 927px grid and zero horizontal overflow.

## Focused region comparison evidence

The heading region was inspected directly in the browser. Typography hierarchy, divider alignment, column placement, title scale, and description placement match the International Experiences header anatomy. No additional focused crop was required because the complete changed component is fully visible at the captured viewport.

## Required fidelity surfaces

- Fonts and typography: shared Petemoss eyebrow and Oswald condensed uppercase heading; hierarchy and wrapping match the reference section.
- Spacing and layout rhythm: shared grid, divider, top padding, and 48px card gap; no oversized full-width hero remains.
- Colors and visual tokens: cream background, burgundy heading/eyebrow, muted red divider, and warm-brown description are consistent.
- Image quality and asset fidelity: no image assets are part of the changed header; project imagery remains untouched.
- Copy and content: “Selected work,” “Technical projects,” and the requested project description are preserved.

## Findings

No actionable P0, P1, or P2 mismatches remain.

## Comparison history

- Initial mismatch: Projects used a full-width oversized hero and stacked eyebrow/title composition.
- Fix: replaced the custom Projects header with the same shared `SectionHeader` component used by International Experiences.
- Post-fix evidence: browser capture confirms matched two-column anatomy and zero horizontal overflow.

## Primary interactions and console

- The changed header is static; surrounding project-card links remain present and unchanged.
- Page rendered successfully with no visible runtime error state.

## Follow-up polish

No P3 follow-up is required for the requested alignment change.

final result: passed
