# Financial Advisory Portfolio Landing Page Design

## Goal

Create a Vercel-ready Next.js portfolio landing page for a financial advisory business that closely follows the supplied reference image while remaining responsive and usable on mobile, tablet, and desktop.

## Scope

The first release is a static marketing page. It includes anchor navigation and consultation CTAs, but no database, authentication, payment flow, or consultation API. Contact details and copy are easy to replace in one content module or component data arrays.

## Technology

- Next.js App Router
- TypeScript
- Tailwind CSS
- `next/image` for the hero and supporting imagery
- Server components by default
- One small client component for the mobile navigation toggle

## Page structure

`app/page.tsx` composes these sections:

1. `Header`: brand, desktop navigation, mobile menu toggle, consultation CTA.
2. `Hero`: eyebrow, headline, supporting copy, service/video CTAs, responsive hero image.
3. `ValueStrip`: four promises — goal-based planning, protection, wealth growth, and trust/transparency.
4. `SolutionsGrid`: six financial solution cards with icon, description, and anchor link.
5. `WhyChooseUs`: checklist, savings-growth visual, quote, and four proof metrics.
6. `ConsultationBanner`: calendar message and green consultation CTA.
7. `Footer`: brand statement, quick links, services, contact details, social links, and legal row.

Reusable components live under `components/`. Styling and global accessibility/motion rules live in `app/globals.css`; Tailwind theme values are centralized in the project configuration.

## Visual system

- Deep navy: `#06244D`
- Royal blue: `#0B4A91`
- Leaf green: `#2F8B3B`
- Sky background: `#EEF6FC`
- White: `#FFFFFF`
- Soft border: `#D9E4EF`

Typography uses a modern sans-serif system with strong navy display headings, readable body copy, and compact utility labels. The signature visual is the oversized rounded navy value strip overlapping the bottom edge of the hero on desktop. On mobile, it becomes a normal stacked section to avoid cramped overlap.

## Responsive behavior

- Desktop: full navigation, two-column hero, six-card grid, and four-column footer.
- Tablet: reduced spacing and flexible two-column layouts where space allows.
- Mobile: collapsible navigation, stacked hero, vertically arranged value promises, one-column solution cards, and stacked footer groups.
- Interactive controls use comfortable touch targets, visible `:focus-visible` styles, and hover states.
- `prefers-reduced-motion` disables nonessential transitions and reveal effects.

## Accessibility and behavior

- Use semantic landmarks and heading hierarchy.
- Give meaningful images descriptive alt text; decorative icons are hidden from assistive technology.
- Mobile navigation exposes `aria-expanded` and `aria-controls`, closes on Escape, and closes after selecting a section link.
- All CTAs use stable, descriptive labels and section anchors.
- Page metadata includes a descriptive title and summary.

## Verification

- Run lint and TypeScript checks.
- Run the production build.
- Inspect the page at mobile, tablet, and desktop widths.
- Confirm navigation and CTA anchors work.
- Confirm there is no horizontal overflow at narrow widths.
- Confirm the project can be deployed to Vercel without runtime services or environment variables.

## Out of scope

- Persisted consultation requests
- CMS or admin dashboard
- Authentication
- Payment or financial-account integrations
- Multi-page routing beyond the landing page
