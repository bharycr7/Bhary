Feed this to your coding agent one phase at a time, not all at once. Each phase ends with a checkpoint; review it in the browser, then paste the next phase. Agents do their best work on small, verifiable steps, and a 3D entrance built on a shaky foundation is painful to fix later.
AlsThe reference is avivashishta.com, a white, airy portfolio whose loader and 3D carousel hero are a single scene caught at two moments. This prompt rebuilds that system for you, not a copy of it. Use your own art, your own work and your own words; the site owner's painted skies, Reels and copy are his.
The designer's mindset behind the order of phases:
1. Story before pixels. Decide the one sentence a visitor should leave with, and the three doors you want them to walk through. Every visual decision later serves that sentence.
2. One signature moment, everything else quiet. The reference spends its whole "wow" budget on the first three seconds (loader to hero). The rest of the site is calm typography on paper-white. Copy that restraint, not just the effect.
3. Systems over screens. Tokens, a content file and one pose function come first, so every page and animation inherits them.
4. Honest motion. Real loading progress, interruptible entrances, reduced-motion fallbacks. Motion that wastes the visitor's time reads as amateur.
5. Built for two audiences. Humans get the experience; recruiters' AI tools and agents get clean Markdown, JSON and llms.txt. This is a genuine differentiator in 2026.
Tip: save this whole doc as PORTFOLIO_SPEC.md in the repo root and tell the agent: "Read PORTFOLIO_SPEC.md. Do only Phase N. Stop at the checkpoint." With BMAD (Phase 0B), this spec becomes the input to the PRD and the agent works story by story instead, with testing (Phase 18B) and deployment (Phase 19B) built in from the start.
Your brief (fill this in before Phase 1)
The agent cannot invent your story. Fill every [bracket] below and paste this block in with Phase 0. Anything you leave blank becomes a clearly marked placeholder, never invented copy.
NAME: [Your full name]
WORDMARK: [Short name + period, e.g. "Sam."]
ONE-LINE TAGLINE: [e.g. "I build cool things with AI." — under 7 words]
ROLE / CREDIBILITY LINE: [e.g. "Product engineer at X, ex-founding engineer at Y"]
LOCATION + TIMEZONE: [City, UTC offset]
EMAIL: [address you actually reply from]

THREE DOORS (the nav + headline links). Rename to fit you:
  01 [Build]  -> who it's for: [founders]  -> page: /projects
  02 [Brand]  -> who it's for: [brands]    -> page: /brands (media kit) — or [Write], [Speak], [Design]
  03 [Learn]  -> who it's for: [students]  -> page: /blog
  04 "talk to my AI" -> opens the chat

HEADLINE SENTENCE (one sentence, links on the audience words):
  "I build [products] for [founders], [campaigns] for [brands] and [free roadmaps] for [students]. Or just talk to my AI."

PROOF STATS (exactly 3, real numbers only):
  [Views 1.2M+] [Followers 8K] [Readers 3K]  — or [Projects shipped] [Years] [Users served]

CAROUSEL ITEMS (12–24): the things your ring shows. For each:
  title, category (one of your three doors), metric (views/stars/users), cover image 9:16, optional muted preview video, link
  Don't make content? Use project screenshots, product shots, talks, GitHub repos, or design shots as 9:16 cards.

PROJECTS (3–8): name, one-line outcome, your role, stack, year, link, 2–4 images
EXPERIENCE: company, title, dates, 1–2 outcome bullets each
SOCIALS: [Instagram] [YouTube] [LinkedIn] [GitHub] [X]
VISUAL MOOD: [e.g. hand-painted golden-hour sky | risograph paper | brutalist grid] + 1 accent colour [hex]
Designer's note: the headline sentence is the most important line on the site. Write it three ways, read each aloud, keep the one a stranger could repeat back after one read.
Phase 0 — Role and ground rules (paste first, keep in context)
You are a senior design engineer building my personal portfolio. You care about
typography, motion and performance as much as correctness.

Rules for the whole project:
1. Work one phase at a time. At the end of each phase, stop, list what you built,
   list anything you assumed, and tell me exactly what to check in the browser.
2. Never invent facts about me. Missing content = a visible placeholder like
   [TODO: project outcome] and a note in TODO.md.
3. All copy and data live in /content (Phase 1). Components never hard-code copy.
4. Pure logic (math, formatting, progress) lives in /lib with unit tests.
5. Every animation must be: interruptible, skippable, and fully disabled under
   prefers-reduced-motion. Animate only transform and opacity unless told otherwise.
6. Mobile is not an afterthought: check 375px, 768px, 1280px, 1920px at every checkpoint.
7. Commit after every phase with a message like "phase-3: design tokens".
8. If a requirement conflicts with performance or accessibility, tell me before
   choosing; don't silently drop it.
9. Prefer fewer dependencies. Ask before adding any library not listed in Phase 2.

Here is my brief: [paste the brief]
Checkpoint: the agent restates your brief back in its own words and lists the questions it still has. Answer them before Phase 1.
Phase 0B — Run the build with the BMAD Method
BMAD (Breakthrough Method for Agile AI-Driven Development) turns this spec into a proper agile project: planning documents first, then small story files that a dev agent implements and a review step checks. That structure is what lets you keep adding projects for years without the codebase rotting. The official workflow map runs in four phases, and each document becomes the context for the next.
Setup (once):
# Node 20+ required
npx bmad-method install
# Choose the BMad Method (BMM) module and your tool (Claude Code, Cursor, etc.).
# Add the Test Architect (TEA) module too: it brings risk-based test planning and quality gates.
# Not sure what's next at any point? Run /bmad-help inside your agent.
Command names change between BMAD versions; if one below doesn't exist, run /bmad-help and use the name it suggests. If your agent (for example Codex) isn't in the installer's list, tell it: "Read the BMAD workflow files in _bmad/ and follow the workflow for <step> exactly."
How this doc maps to BMAD:
BMAD phase
Workflow (agent)
Input from this doc
Output
1 Analysis
product-brief (Analyst)
Your brief + "How to use this prompt"
product-brief.md
2 Planning
prd (PM)
Phases 0–19, hero formats, Vox section
prd.md with functional and non-functional requirements
2 Planning
create-ux-design (UX Designer)
Phases 3, 4, 9B, 10, 11, 16, 17
UX spec
3 Solutioning
create-architecture (Architect)
Phases 1, 2, 6, 12, 14, 18
architecture.md
3 Solutioning
create-epics-and-stories (PM)
PRD + architecture
epics.md
3 Solutioning
check-implementation-readiness
All of the above
Go / no-go gate
4 Implementation
sprint-planning → create-story → dev-story → code-review (Dev/SM)
One story at a time
Code, tests, sprint-status.yaml
Epics to ask the PM for (one per group of phases):
1. Foundation — content model, setup, design tokens, chrome (Phases 1–4).
2. Signature hero — sky, ring math, carousel, loader, reveal (Phases 5–9).
3. Hero formats — switcher plus one story per format (Phase 9B).
4. Story and pages — headline, sections, Vox-style explainer, chat, inner pages (Phases 10–13).
5. Discoverability — agent layer, SEO, social cards (Phases 14–15).
6. Craft and quality — polish, accessibility, performance, testing (Phases 16–18B).
7. Ship — deploy, monitoring, update workflow (Phases 19–19B).
Paste this into your agent after installing BMAD:
We are building my portfolio with the BMAD Method. PORTFOLIO_SPEC.md in the repo root is
the source of truth for every requirement. Rules:
- Run each BMAD workflow in a FRESH chat, in order: product-brief -> prd -> create-ux-design
  -> create-architecture -> create-epics-and-stories -> check-implementation-readiness
  -> sprint-planning. Do not write app code before readiness passes.
- Every spec phase must map to at least one story; list any requirement you could not map.
- One story = one PR-sized change, completable in under a day, with testable acceptance
  criteria copied from the spec's Checkpoint lines.
- Story loop: create-story -> dev-story -> code-review. If review finds issues, back to
  dev-story. A story is Done only when the Definition of Done below passes.
- Keep all BMAD output committed under _bmad-output/ so future sessions have context.

DEFINITION OF DONE (every story):
[ ] Acceptance criteria met and demonstrated (screenshot or clip for visual work)
[ ] Unit + component tests added; all suites green locally and in CI (Phase 18B)
[ ] No new axe violations; keyboard path works; reduced-motion path works
[ ] Visual regression snapshots updated intentionally, not blindly
[ ] Performance budgets in Phase 18 still pass
[ ] Vercel preview deployment checked on a phone
[ ] sprint-status.yaml updated; story file notes what changed and why
For regular updates later (a new project, a new reel, a stats refresh), use BMAD's Quick Flow instead of the full cycle: a short tech spec, then dev, then code review. Phase 19B gives you the exact routine.
Phase 1 — Content model (single source of truth)
Every page, the AI chat, llms.txt and the JSON API will read from these files. Build them first so nothing drifts later.
Create typed content files in /content using TypeScript + zod schemas:

/content/site.ts       name, wordmark, tagline, role line, email, location, timezone,
                       socials[], headline sentence parts, stats[3]
/content/doors.ts      the three doors: id, label, audience, href, index ("01"…"03"),
                       one-paragraph summary for the homepage card
/content/reels.ts      carousel items: id, title, category (door id), metric (number),
                       metricLabel, cover (path), preview (optional mp4/webm path),
                       href, external (bool), publishedAt
/content/projects.ts   slug, name, outcome (one line), role, stack[], year, links,
                       images[], body (MDX path), featured (bool)
/content/experience.ts company, title, start, end|null, bullets[]
/content/brands.ts     (only if you have a media-kit door) partners[], results,
                       audience breakdown, rates or "on request"
/content/posts/        MDX blog posts with frontmatter: title, description, date,
                       type (prompt | build | resource), readingTime (computed), cover

Requirements:
- Validate everything with zod at build time; a bad entry fails the build loudly.
- Write a formatter in /lib/format.ts: compactNumber(773000) -> "773K",
  compactNumber(1400000) -> "1.4M", compactNumber(10200) -> "10.2K". Unit-test it.
- Stats can say "12.7M+" — store the raw number and the suffix separately.
- Fill from my brief; use [TODO] placeholders for anything missing.
Checkpoint: npm test passes and a /content-preview dev-only page dumps all content as a plain list so you can proof-read it.
Phase 2 — Project setup and stack
The reference serves its pages through Next.js, and its hero is plain CSS 3D transforms driven by Motion, with no WebGL. That choice keeps the hero light and the cards as real, accessible links.
Scaffold:
- Next.js (App Router) + TypeScript strict + React 19
- Styling: CSS Modules + a global tokens.css (or Tailwind v4 with tokens mapped to theme;
  pick one and stay consistent)
- Motion (motion/react, the framer-motion successor) for all JS animation
- MDX for blog posts (next-mdx-remote or @next/mdx), shiki for code highlighting
- Vitest for unit tests, Playwright for one smoke test per page
- ESLint + Prettier, path alias @/ -> src/
- Vercel AI SDK (only from Phase 12)

Folder structure:
src/app/            routes
src/components/     ui primitives (Link, Button, Tag, Counter, ScrambleText…)
src/features/hero/  ReelRing, Loader, Card, useRingDrag, entrance state
src/lib/            pure functions + tests (ring math, format, progress)
content/            Phase 1 files
public/             images, reels covers (webp), previews (mp4/webm), og art

Fonts via next/font (self-hosted, no layout shift):
- Display/body: a characterful grotesk or serif (e.g. Inter Display, Geist,
  Instrument Serif, PP Neue Montreal if licensed)
- Mono: Geist Mono / JetBrains Mono, used for counters, captions, indexes, metadata
Checkpoint: npm run dev shows a blank page with the correct fonts loaded, npm test and npm run lint pass, and the first commit is in.
Phase 3 — Design system tokens
The look is paper-white, near-black ink, huge type, mono metadata and almost no colour, so the art and the cards carry the colour. Tokens make that consistent across every page.
Create src/styles/tokens.css with CSS custom properties, plus a /styleguide dev page
that renders every token.

COLOUR (light first, dark mode later under [data-theme="dark"] + prefers-color-scheme):
--paper: #FFFFFF (or warm #FBFAF7)   --ink: #0E0E0E
--ink-2: 60% ink (secondary text)    --ink-3: 35% ink (metadata, rules)
--rule: 10% ink hairlines            --accent: [my accent hex], used for focus,
                                       selection, the active nav item only
--sky-*: 3–4 colours sampled from my hero art, used only near the hero

TYPE SCALE (fluid with clamp, 1.25 ratio; display sizes go big):
--t-display: clamp(2.75rem, 6vw + 1rem, 7.5rem); line-height 0.95; tracking -0.035em
--t-h1 / --t-h2 / --t-h3 / --t-body (1.0625rem, lh 1.55) / --t-small / --t-micro
--font-mono for: numbers, indexes (01–04), captions, dates, metric badges
All numbers use font-variant-numeric: tabular-nums.
Text measure: max 68ch for paragraphs.

SPACE: 4px base -> --s-1 4, --s-2 8, --s-3 12, --s-4 16, --s-6 24, --s-8 32,
--s-12 48, --s-16 64, --s-24 96, --s-32 128. Section gaps use --s-24 or more.

LAYOUT: 12-col grid, max content width 1440px, gutters clamp(16px, 3vw, 40px).
RADII: --r-card 18px (9:16 cards), --r-pill 999px, --r-sm 6px.
SHADOW: one soft card shadow, one lifted hover shadow. No others.

MOTION TOKENS:
--ease-out: cubic-bezier(.16,1,.3,1)    --ease-in-out: cubic-bezier(.65,0,.35,1)
--ease-reveal: cubic-bezier(.5,0,.15,1) (the hero opening)
--d-fast 150ms  --d-base 300ms  --d-slow 600ms  --d-entrance 1900ms
Spring presets in /lib/motion.ts: drag {stiffness 120, damping 24}, ui {300, 30}

Z-INDEX SCALE: base 0, header 50, chat 80, loader 100, ring-while-entering 101,
skip-button 110, toast 120.
Designer's note: limit yourself to two typefaces and one accent. Restraint is what makes the 3D moment feel expensive.
Checkpoint: /styleguide shows every colour, type size, space step and an easing demo; dark mode toggles cleanly.
Phase 4 — Header, nav, frame and footer
The chrome is tiny and typographic: a wordmark with a period, slash-separated nav, a Human / Agent switch and a thin frame. It must never compete with the hero.
HEADER (fixed, transparent over hero, paper background + hairline after 40px scroll):
- Left: wordmark "[Name]." stacked over the tagline in --t-small --ink-2.
  The whole block links home. Give the wordmark a ref/id: the loader animates INTO it.
- Centre/right: nav rendered as  /Build/Brand/Learn  — slashes in --ink-3,
  labels in --ink, active route gets --accent and aria-current="page".
- Right: a segmented toggle "Human / Agent" (built in Phase 14; render it disabled now).
- Hide-on-scroll-down, show-on-scroll-up, 300ms, transform only.
- Mobile (<768px): wordmark left, a "Menu" text button right that opens a full-screen
  sheet with the three doors as huge display-size links, numbered 01–03 in mono.

FRAME: a 1px --rule inset border around the viewport on the homepage only
(inset clamp(8px,1.2vw,16px), radius 20px). It fades in during the hero reveal.

FOOTER (every page):
- Row of text links: Instagram, YouTube, LinkedIn, GitHub, email (copy-to-clipboard
  with a 1.5s "Copied" swap), RSS, Privacy, Developers.
- Mono line: "© [year] [Name] · [City] · local time HH:MM" (live, in my timezone).
- Optional giant wordmark clipped at the bottom edge.

LINK STYLE (global): no underline at rest; on hover a 1px underline that draws
left-to-right (background-size trick, 300ms --ease-out). External links get a small ↗
that nudges 2px up-right on hover.
Checkpoint: navigate between empty placeholder routes for /, /projects, /brands, /blog, /about, /contact, /privacy, /developers; keyboard Tab order is logical and every focus ring is visible.
Phase 5 — Painted sky and cloud backdrop
The reference layers a hand-painted golden-hour sky behind the ring and a bank of painted clouds in front of it, so the cards appear to float inside the sky. Make your own art: generate it with an image model, commission an illustrator, or paint it yourself.
Art you need to produce first (not the agent's job):
• sky.webp: wide painted sky, 3840×2160, soft gradient, no hard horizon, calm centre where the ring sits.
• clouds-front.webp: a cloud bank with a transparent top half, 3840 wide, so it overlaps the bottom of the ring.
• Optional sky-dark.webp + clouds-front-dark.webp for dark mode (night or dusk).
Build <SkyBackdrop/> for the homepage hero:
- Layer order (back to front): sky (z 0) -> ReelRing (z 1) -> clouds-front (z 2) ->
  headline (z 3).
- Use next/image with priority for the sky, sizes="100vw", quality 75, AVIF/WebP.
  Provide a tiny blurred placeholder so the first paint is coloured, not white.
- Clouds: pointer-events none; the ring must still receive drag through them.
- Parallax: on scroll, sky moves at 0.15x, clouds at 0.4x, and the clouds also scale
  1 -> 1.08 so they "rise" over the ring as you scroll into the headline.
  Use a single scroll MotionValue; transform only.
- Pointer parallax (desktop, fine pointer only): sky shifts up to 8px, clouds 20px,
  opposite to cursor, eased with a spring. Off under reduced motion.
- Swap art by theme with a 600ms crossfade, never a flash.
Designer's note: sample 3–4 colours from the finished painting into the --sky-* tokens. Using them for the stat numbers and chat bubble ties the page to the art.
Checkpoint: hero shows sky + clouds with a placeholder ring box between them; parallax feels subtle, not seasick; Lighthouse LCP under 2.5s on throttled 4G.
Phase 6 — Ring math as pure, tested functions
The core idea, which the site owner explains in his write-up of the homepage: the loader and the hero are the same ring of cards, viewed at two moments. Two numbers from 0 to 1 drive everything. formation deals the cards around the ring; expansion opens the small tilted ring into the full-screen carousel. Build the math alone, with tests, before any UI.
Create src/lib/ring.ts (no React, no DOM) and src/lib/ring.test.ts.

CONSTANTS (tune later, keep them in one exported object):
SLOTS = 16; CARD = { w: 270, h: 480 } // 9:16
LOADER_SCENE = { radius: 460, perspective: 1000, tilt: -22, roll: -20, scale: 0.52 }
HERO_SCENE   = { radius: 1800, perspective: 450,  tilt: 0,   roll: 0,   scale: 2.3 }
DEAL_SHARE = 0.3  // fraction of formation each card spends moving; rest is stagger

1. wrapAngle(deg) -> (-180, 180]
2. slotAngle(slot, ringTurn, slots) -> wrapped resting angle of a slot after the
   ring has turned by ringTurn degrees. Convention: 0 = far centre of the ring,
   ±180 = the card nearest the camera.
3. sceneAt(expansion) -> { radius, perspective, tilt, roll, scale, anchorY }
   Linear lerp for radius/perspective/tilt/roll. Scale uses expansion² so cards
   stay small for the first half and swell at the end (feels like the camera drops in).
   anchorY: a small vertical correction so the back of the ring travels on one smooth
   path while the tilt flattens (solve it so the far card's screen Y is monotonic).
4. cardPose(angle, formation, scene) -> { x, y, z, yaw, scale, opacity, behindCamera }
   - Each card gets an order = its position around the ring from the front (0..1).
   - Its personal progress t = clamp((formation - order*(1-DEAL_SHARE)) / DEAL_SHARE).
   - Ease t with ease-out cubic -> dealt.
   - The card swings from the front (-180°) toward its true angle by `dealt`.
   - Undealt cards sit slightly inward (radius minus a few px * order) so the waiting
     stack reads as ONE card.
   - x = -sin(a)*radius, z = -cos(a)*radius, yaw = a (degrees).
   - opacity ramps in fast (≈ t*2.5, clamped) so the stack is never seen.
   - behindCamera = true when the card would sit behind the viewer at this scene.
5. isFacing(angle, limitDeg = 78) -> bool  (which cards may play video)
6. easeOutCubic, lerp, clamp helpers.

TESTS (write these first, then make them pass):
- At formation=1 every card lies on a circle of exactly scene.radius (±0.01).
- At formation=0 every card is at the front angle and only the first card is visible.
- Cards are dealt in angular order (card k finishes before card k+1 starts moving much).
- sceneAt(0) equals LOADER_SCENE, sceneAt(1) equals HERO_SCENE.
- wrapAngle is stable for huge positive/negative inputs.
- The far card's projected Y never reverses direction across expansion 0..1.
- slotAngle spacing is exactly 360/SLOTS for all slots.
Checkpoint: all tests green. Ask the agent for a throwaway /lab/ring page with two sliders (formation, expansion) rendering coloured rectangles, so you can feel the motion by hand.
Phase 7 — The 3D carousel wall (hero end state)
Build the hero as if the entrance is already finished (expansion = 1, formation = 1). The loader in Phase 8 only animates those two values down and back up.
Build <ReelRing/> with plain CSS 3D (no Three.js):

STRUCTURE
<section class=stage style="perspective: var(--ring-persp)">
  <div class=ring style="transform-style:preserve-3d;
        transform: rotateZ(var(--ring-roll)) rotateX(var(--ring-tilt))
                   translateY(var(--ring-anchor))">
    16 x <a class=card> positioned with
      translate3d(x, y, z) rotateY(yaw) scale(s)
Shared values (perspective, tilt, roll, anchor) are CSS variables on .ring,
not per card. Per-card values are written only when they change (write-cache below).

CARD ANATOMY (9:16, radius --r-card, overflow hidden):
- Cover image (webp) filling the card; optional muted, looped, playsinline preview
  video layered on top, fading in when it can play.
- Bottom gradient scrim (transparent -> 55% black) for legibility.
- Top-left: metric badge in mono, e.g. "773K", with a small eye/play icon.
- Bottom-left: category label in mono caps (BUILD / BRAND / LEARN), then the title
  in 2 lines max, then a ↗ glyph.
- The whole card is one <a> with aria-label "Watch [title] on [platform], [metric]
  views (opens in a new tab)".
- Hover (fine pointer): card lifts 12px toward the camera, scrim lightens, ↗ nudges,
  video stays muted (never autoplay sound).

MOTION
- Idle auto-spin: ~0.3°/frame equivalent, time-based (deg per second, not per frame).
- Drag / swipe / wheel / arrow keys move a TARGET turn; the visible turn follows a
  spring (drag preset) so it never snaps. Momentum on release (velocity * 0.4s).
- Auto-spin pauses on hover/drag/focus and resumes 2s after the last interaction.
- Click vs drag: if pointer moved > 6px, suppress the link click.
- Vertical page scroll must still work on touch: only capture horizontal swipes
  (decide axis on the first 8px of movement).

RECYCLING (show any number of items with 16 DOM cards)
- Keep a cursor into the reels array. When a card passes the back of the cylinder
  (angle within ±20° of 0, where it's hidden or tiny), swap its content to the next
  reel. Direction-aware so reverse drag shows previous items.

PERFORMANCE RULES
- One requestAnimationFrame loop for the whole ring, owned by a hook.
- write(key, value, apply) cache: skip DOM writes whose string value is unchanged.
- Read layout (hover hit-testing) BEFORE writes, and only every 3rd frame.
- Only cards where isFacing() is true play video; others pause and drop to
  preload="none". Max 4 videos playing at once.
- will-change: transform only on .ring and cards during motion; remove when idle.
- Pause everything when the tab is hidden (visibilitychange) or the hero is
  scrolled out of view (IntersectionObserver).
Checkpoint: the ring spins on load with your real covers, drag feels weighty and smooth on a phone, a trackpad and a mouse wheel, and DevTools Performance shows steady 60fps with no long tasks while spinning.
Phase 8 — The loader
The loader is a white page, a giant rolling percentage and a small tilted ring of cards being dealt out one by one. The percentage must be real progress, never a fake timer.
Build <Loader/> that overlays the hero on first visit only.

BACKDROP: position fixed, inset 0, --paper, z-index 100. The ring sits ABOVE it
(z 101) during the entrance so the cards rise over the white instead of hiding
behind it.

PROGRESS (src/lib/progress.ts, unit-tested):
- Track real assets: the sky image, fonts (document.fonts.ready), and the covers +
  first preview frames of the cards that will face the camera at the end.
- progress = loaded / total, smoothed so it only ever goes up and moves at most
  ~4%/frame (no jumps from 12 to 90).
- Hard timeout at 6s: treat remaining assets as "ready" and continue; log which ones
  stalled.

COUNTER (bottom-right, mono, tabular-nums, ~18vw on desktop, ~28vw on mobile):
- Three digit columns + "%". Each column is a vertical strip "0123456789" inside an
  overflow-hidden mask; translateY to the current digit with a short spring, so
  digits ROLL rather than swap. The hundreds column only appears at 100.
- aria-live="polite" region announces 25/50/75/100 only (not every number).

CAPTION (above counter, --t-micro mono caps): "Loading reels" with a scramble
effect: characters cycle through random glyphs and resolve left-to-right over 600ms,
re-scrambling subtly every few seconds while waiting. Build a reusable
<ScrambleText/> — you'll reuse it on hover states later.

BRAND WORD (top-left): the wordmark "[Name]." in display size. In Phase 9 it flies
into the header wordmark.

FORMATION: animate formation 0 -> 1 over 2.6s, linear (each card has its own eased
slice from Phase 6). Expansion stays at 0, so the ring is small, tilted and rolled.
The ring keeps spinning slowly while it forms.

SKIP: a small "Skip intro" text button bottom-left, visible after 800ms.
Escape and Tab also skip. Skipping jumps formation and expansion straight to 1.

WHEN TO SHOW:
- First visit in a session only (sessionStorage flag). Later navigations to / land
  directly on the finished hero.
- Never under prefers-reduced-motion.
- Lock scroll (overflow hidden on html) while the loader is active; restore after.
Checkpoint: throttle the network to Slow 4G and confirm the counter crawls honestly; on a fast connection, the deal still plays its full 2.6s so the loader never flashes by.
Phase 9 — Reveal choreography
The reveal starts only when two gates are both open: the deal has finished AND the real assets are ready. Then the ring opens while the page chrome arrives early, overlapping, so it never feels like "loading screen, then website".
Time after reveal starts
What happens
0 ms
expansion animates 0 → 1 over 1900 ms with --ease-reveal; counter and caption fade out over 300 ms
0–600 ms
White backdrop fades to transparent; the cards keep moving the whole time, nothing resets
150 ms
Loader wordmark starts its flight into the header wordmark (700 ms)
600 ms
Sky and clouds fade/scale up from 1.04 → 1.0 behind the opening ring
1050 ms
Header nav, frame and headline begin entering while the ring is still settling
1900 ms
Ring reaches hero scene; ring drops to z-index 1, auto-spin and drag hand over seamlessly
2300 ms
Scroll unlocks; the skip button is removed from the DOM
Implement the entrance state machine in src/features/hero/useEntrance.ts:
states: idle -> forming -> waitingForAssets -> revealing -> done  (+ skipped)

- Two MotionValues (formation, expansion); no keyframe timeline. Everything else
  derives from them or from the state.
- tryReveal(): runs when formation completes AND progress === 1, whichever is later.
- WORDMARK FLIGHT (FLIP): measure the header wordmark with getBoundingClientRect at
  reveal time (never hard-code coordinates), then animate the loader wordmark's
  x, y and scale to match, and cross-fade to the real header element on landing.
  Re-measure on resize during the flight.
- Header items enter with a 40 ms stagger: opacity 0 -> 1, y 12px -> 0, 500 ms --ease-out.
- Headline words reveal with a mask (each word in an overflow-hidden span, inner span
  translates from 110% to 0), 35 ms stagger.
- Skip / Escape / Tab / reduced-motion: set both values to 1, state = done, render
  final layout in one frame.
- Expose a dev-only ?intro=always query param to replay the entrance.
Checkpoint: record the entrance at 60fps (screen recording) and scrub it frame by frame. Look for any moment where something resets, jumps or waits for something else to finish. Fix those before moving on.
Phase 9B — Fourteen alternate hero formats
The ring stays the default hero; these fourteen are alternate formats a visitor can switch between: Sliced, Mirrored, Big and Small, Bird's eye view, Collage, Inside the head, Performance Grid, Glitch, Teleport, Timelapse, Clone, Angle Switch, Silhouette and Gadget iPhone. Each is a different visual idea built on the same content, the same headline below it and the same performance and accessibility rules. Build the shared switcher first, then one format per checkpoint.
Photos you need to shoot first (not the agent's job):
• A sharp front-facing portrait on a plain background, 4000px tall, plus a cut-out version with transparency (WebP/PNG with alpha).
• A clean side-profile portrait, also cut out (for Inside the head).
• 3–5 small full-body cut-out poses: sitting, pointing, climbing, waving (for Big and Small).
• 8–12 personal photos and ephemera: workspace, sketches, tickets, screenshots, handwritten notes (for Collage).
• Optional: a top-down photo of your desk (for Bird's eye view).
Extra assets for formats 08–15:
• 3–4 tripod shots from the same position and light, you in different spots and poses (Clone).
• 3–4 shots of one moment from different angles: front, side, three-quarter, above (Angle Switch).
• One photo per era of your career, plus 60–120 sky frames from dawn to night, rendered or AI-generated (Timelapse).
• A high-contrast cut-out for the particle and mask effects (Teleport, Silhouette, Glitch).
• Short screen recordings of your projects in 9:16 for phone screens and grid tiles (Gadget iPhone, Performance Grid).
Shared format system (build this first)
Create src/features/hero/formats/ with a registry:
  { id, label, index ("01"…"15"), component, assets[], entranceMs, staticFallback }
Formats: ring (default), sliced, mirrored, big-small, birds-eye, collage, inside-head,
         performance-grid, glitch, teleport, timelapse, clone, angle-switch,
         silhouette, gadget-iphone.

RULES EVERY FORMAT FOLLOWS
- Reads only from /content (reels, projects, doors, site). No format-specific copy.
- Entrance ≤ 2 s, skippable (Escape / Tab / skip button), uses the same Loader counter
  for real asset progress, then its own reveal.
- prefers-reduced-motion: renders its final static frame, no idle motion.
- Decorative layers get aria-hidden; anything clickable is a real <a> or <button>
  with a text label. Tab order follows visual reading order.
- Mobile (<768px) has its own composition, not a squeezed desktop one.
- Same budgets as Phase 18: transform/opacity only, one rAF loop, no layout reads
  after writes, pause when off-screen or tab hidden.
- Lazy-load each format's code and assets; only the active format ships on first load.

SWITCHER
- Bottom-left of the hero, mono --t-micro: "Format  01 Ring ▾". Opens a small list
  of all fifteen with index, name and a 48px animated thumbnail.
- Keyboard: F cycles formats, Shift+F goes back. URL param ?format=sliced for
  sharing. Persist the last choice in localStorage.
- Optional: first visit picks the default; a "Surprise me" item picks at random.
- Transition between formats: outgoing scales 1 -> 0.98 and fades (250 ms), incoming
  scales 1.02 -> 1 and fades in (450 ms, --ease-out). The headline and stats below
  never move.
- Analytics event per switch so you learn which format people prefer.
02 — Sliced
Your portrait cut into vertical strips that slide into alignment, like a shuffled paper print snapping together.
- 9 vertical slices (5 on mobile) of the portrait, each a div using the same image
  with background-position offset (or clip-path: inset). Thin 2px paper-coloured gaps.
- ENTRANCE: odd slices start translated -100% Y, even +100% Y, and slide to 0 with a
  70 ms stagger from the centre outwards, --ease-reveal, 1200 ms total.
- IDLE: pointer X position offsets each slice vertically by a different amount
  (sin wave across slices, max 24px), spring-smoothed, so the face "ripples" as you
  move. Off on touch devices; replaced by a gentle 6 s breathing wave.
- HOVER A SLICE: that slice swaps to a cover from /content/reels (cross-fade 200 ms)
  and shows its title in mono at the bottom; click opens it. So the portrait doubles
  as a hidden gallery of 9 pieces of work.
- SCROLL: as you scroll into the headline, slices separate (gaps widen to 24px) and
  drift apart vertically, revealing the sky behind them.
- The wordmark sits across the slices and is sliced too (same offsets), re-aligning
  only when the slices align.
- Reduced motion: aligned portrait, hover-swap still works.
03 — Mirrored
A central seam with you on one side and your reflection on the other, the reflection lagging slightly like a mirror with a mind of its own.
- Split the hero at the vertical centre. Left: the cut-out portrait. Right: the same
  portrait with transform scaleX(-1), meeting at the seam. A 1px --rule seam line.
- The reflection follows pointer-driven parallax with a deliberate 120 ms lag
  (separate, softer spring), so the two halves are almost but not quite in sync.
- Water-ripple option: an SVG feTurbulence + feDisplacementMap filter on the
  reflection, with baseFrequency animated slowly; ripple strength spikes briefly
  when the pointer crosses the seam. Disable the filter on low-power devices.
- Door labels: left half is labelled "Build", right half "Brand" (mirrored text
  rendered the right way round), with "Learn" on the seam. Hovering a half brightens
  it and dims the other to 40%.
- Floor reflection: below the portrait, the headline's first line is repeated
  upside down at 20% opacity with a gradient mask fading to paper (aria-hidden).
- ENTRANCE: the real half fades up; the reflection "develops" from blur(12px) and
  0 opacity to sharp over 900 ms, starting 300 ms later.
- Mobile: split horizontally instead (top real, bottom reflection).
04 — Big and Small
Forced-perspective scale play: a giant you and tiny versions of you interacting with the oversized interface.
- One GIANT cut-out of you, cropped by the viewport edge (shoulders up), filling
  ~90vh on the right third, slightly blurred (2px) as if close to the camera.
- 3–5 TINY cut-out poses (60–120px tall) placed on giant UI elements in the left
  two-thirds: one sitting on top of a giant stat number, one leaning on a giant
  9:16 card, one climbing the "0" of the counter, one waving from the wordmark's period.
- Each tiny figure is a button linked to a door (Build / Brand / Learn / AI chat).
  Hover: figure does a small 6px hop (spring), a mono speech label appears
  ("see my work", "brand deals", "free roadmaps", "ask me anything").
- Depth parallax on pointer: giant layer moves most (24px), giant UI 12px, tiny
  figures 8px, sky 4px. That ordering sells the scale illusion.
- Typography mirrors the idea: the name in giant display type, a tiny mono caption
  under it.
- ENTRANCE: the giant you slides in from the right edge (700 ms); tiny figures drop
  onto their perches one by one with a squash-and-stretch landing (scaleY 0.85 ->
  1.05 -> 1), 120 ms stagger.
- Mobile: giant you at the bottom (cropped at chest), tiny figures in a row above it.
05 — Bird's eye view
The camera starts directly above the cards laid out on a table, then tilts down to eye level as you scroll. This reuses the Phase 6 ring math with a different tilt range.
- Extend sceneAt() with a BIRDSEYE_SCENE: tilt -82°, roll 0, radius 900, perspective
  1400, scale 0.8. Add a unit test that the far card's projected Y stays monotonic
  between BIRDSEYE_SCENE and HERO_SCENE.
- Cards lie flat like tiles on a desk around a centre object (your portrait in a
  circular frame or a desk photo shot from above). Each card casts a soft shadow
  offset by its position (a blurred dark ellipse on the "table" plane).
- SCROLL SCRUB: scroll progress 0 -> 1 over the first 120vh drives the camera from
  bird's eye to level (HERO_SCENE). Use a sticky container so the hero pins while
  the camera moves; the headline arrives when the camera is level.
- HOVER (bird's eye): a tile lifts 20px toward the camera (shadow grows and softens),
  shows its title. Click opens it.
- Optional desk layer: the top-down desk photo under the tiles, with hotspots on
  real objects (laptop -> Build, phone -> Brand, notebook -> Learn).
- Reduced motion: no scroll scrub; show the bird's eye layout statically with a
  "View as carousel" button.
- Mobile: tiles in a 2-column top-down grid, scroll tilts each tile up individually.
06 — Collage
A cut-paper scrapbook of your work and life: torn photos, tape, stickers and handwritten notes, which visitors can drag around.
- 12–18 pieces from /content (reel covers, project shots) plus your personal
  ephemera. Each piece: torn or straight-cut edge (SVG mask from 4 hand-made torn-edge
  shapes, picked by seeded random), random rotation -8°..8°, a strip of semi-
  transparent "tape" (a paper-texture div at a random angle), a soft drop shadow.
- LAYOUT: seeded random placement with a collision pass that keeps a clear safe
  zone for the wordmark and avoids covering more than 40% of any piece. Same seed
  = same layout, so it's stable across reloads; a "Shuffle" button reseeds and
  animates every piece to its new spot (spring, 40 ms stagger).
- DRAG: any piece can be dragged with pointer or touch, rises to the top (z-index)
  and scales to 1.04 while held, settles with a spring and a slight random rotation
  on drop. Keep drag inside the hero bounds. Click without drag opens the link.
- Handwritten notes: 2–3 short notes in a handwriting font ("shipped this in 3
  weeks", "773K views!") that are real text, not images.
- Paper texture overlay on the whole hero at 6% opacity (multiply blend).
- ENTRANCE: pieces are "thrown" onto the table from off-screen in a random order,
  60 ms apart, each overshooting its rotation by 4° before settling.
- Keyboard: pieces are in a logical tab order; arrow keys nudge the focused piece.
- Mobile: no free drag; pieces become a stacked deck you swipe through like cards.
07 — Inside the head
A side-profile portrait whose head opens to reveal what's inside: your work, ideas and interests floating in a small world. The most ambitious format, so build it last.
- LAYERS (back to front): sky -> head-back (profile silhouette, paper colour) ->
  INTERIOR scene clipped to the head silhouette with an SVG clip-path -> head-front
  (face edge + hair outline) -> the "lid" (top of the skull as its own layer).
- INTERIOR: the reel ring from Phase 7 at small scale, spinning inside the head,
  plus floating "thoughts": project names, small icons, a few interest words, each
  drifting with simplex-noise motion (amplitude 8–16px, very slow). Each thought is
  a link.
- ENTRANCE / SCROLL: at rest the lid is closed and the inside is visible through a
  soft circular cutaway at the temple. Scrolling (sticky, 150vh) lifts the lid
  (rotate -35° around the back of the head, like a hinged cap), then the camera
  zooms into the head (scale the whole stage to 6x with transform-origin at the
  head centre) until the interior fills the viewport and becomes the full-screen
  ring hero. The headline follows.
- Pointer: the eye of the profile follows the cursor slightly (a pupil layer
  translated within a small circle).
- Clicking the head on first load skips the scroll and plays the zoom in 1.4 s.
- Reduced motion: lid open, interior visible, no zoom; a "Step inside" button jumps
  to the ring hero.
- Mobile: profile faces up-left at the bottom of the screen, interior above it; the
  zoom still works but at 4x.
- Performance: the interior ring uses 10 cards, no video, until the zoom completes.
08 — Performance Grid
A wall of live tiles that "performs" like a stage lighting rig: your reels and stats light up in choreographed patterns, with you at the centre.
- Grid: 6x4 on desktop, 3x4 on tablet, 2x3 on mobile. Centre 2x2 tile = your portrait
  (or a looping clip of you). Every other tile = a reel/project cover with its metric
  in mono ("773K") and category label.
- CHOREOGRAPHY: a small pattern engine in /lib/grid-patterns.ts (pure, unit-tested)
  returns which tiles are "lit" at time t: wave (left->right), diagonal, ripple from
  centre, checkerboard, random sparkle. Cycle patterns every 4 s. Lit tiles go to
  100% brightness and play their preview; unlit tiles sit at 45% brightness, paused.
- Max 4 tiles playing video at once; the rest show covers.
- HOVER: the hovered tile expands to 2x2 with a FLIP animation (neighbours reflow
  with layout animation, 350 ms), shows title + ↗. Pattern pauses while hovering.
- STATS ROW: the three proof stats count up inside three dedicated tiles.
- ENTRANCE: tiles flip in (rotateX 90° -> 0) in the ripple-from-centre order, 30 ms stagger.
- Reduced motion: static grid, no patterns, no autoplay.
09 — Glitch
Your portrait and name break up into RGB-split, sliced, scan-lined fragments, then snap back clean, like a corrupted signal locking on.
- Layers: the portrait three times (red, green, blue channel versions using CSS
  filters or pre-exported channel images) with mix-blend-mode: screen on a dark
  hero variant (or multiply on paper). Offsets of 0–8px create the RGB split.
- SLICE DISPLACEMENT: 6–10 horizontal bands (clip-path inset) jump sideways by random
  amounts for 60–120 ms bursts.
- Scanline overlay (repeating-linear-gradient, 3% opacity) and a faint noise texture.
- The name glitches between your name and your role/tagline ("[Name]" <-> "AI builder")
  using <ScrambleText/> during bursts.
- TRIGGERS: entrance (one 600 ms burst, then lock on clean), hover on the portrait, and
  an idle burst every 8–12 s (random).
- SAFETY (non-negotiable): never more than 3 flashes per second and no large
  full-screen red flashes (WCAG 2.3.1). Bursts are offset/displacement only, not
  brightness strobes. Reduced motion = no glitch at all, clean portrait.
- Implementation: CSS only, or a small Canvas 2D pass if CSS is too heavy. No WebGL.
10 — Teleport
You dissolve into particles in one spot and re-form somewhere else, next to whatever the visitor is pointing at.
- Sample your cut-out portrait's alpha channel into ~8,000 points (desktop), ~3,000
  (mobile), stored as a precomputed Float32Array (build-time script, not at runtime).
- Render with Canvas 2D (or a single WebGL points draw call if Canvas is too slow;
  ask before adding a library). Each particle has home position + colour.
- TELEPORT: hovering a door label (Build / Brand / Learn / AI) makes the figure
  dissolve upward from the feet (particles scatter with noise, 500 ms), a thin
  vertical beam of light appears at the destination, then particles stream along
  curved paths and re-form beside that label (600 ms, --ease-out).
- Idle: particles breathe subtly; the pointer repels particles within 60px.
- ENTRANCE: particles start as a scattered cloud, converge into you, beam flashes once.
- Loader integration: the real progress counter drives convergence (0% = cloud,
  100% = solid figure), so loading IS the teleport.
- Reduced motion: static portrait beside the first door; doors still work.
11 — Timelapse
Your journey compressed into seconds: scroll scrubs through the years while the sky moves from dawn to night and your milestones tick past.
- Data from /content/experience.ts and projects.ts, sorted by date.
- Sticky hero, 300vh of scroll = full timeline. A large rolling year counter (reuse the
  Phase 8 digit columns) shows the year at the current scroll position.
- Background: an image sequence of the sky (60–120 WebP frames, dawn -> golden hour ->
  night) drawn to a <canvas> and scrubbed by scroll (not a <video>; frames scrub
  smoothly both directions). Preload the first 10 frames, stream the rest.
- Foreground: portrait/workspace photos from each era crossfade as their year passes.
- Milestone cards (company, role, one outcome) slide in from the right as you reach
  their date and stack into a column; the current one is full-strength, past ones 50%.
- A thin progress track along the bottom with year ticks; clicking a tick scrolls there.
- Clouds drift faster when scrolling faster (velocity-linked), like a real timelapse.
- Reduced motion: no scrub; a static vertical timeline with one sky image.
12 — Clone
Several of you in one frame, each version doing a different job: the builder, the creator, the teacher.
- Assets: 3–4 photos shot from the SAME tripod position and lighting, each with you in
  a different spot and pose (at a laptop, holding a camera, at a whiteboard, waving).
  Cut each out; composite on one shared background plate.
- Each clone = one door. Mono label under each ("01 Builder", "02 Creator",
  "03 Teacher", "04 Ask my AI").
- ENTRANCE: the original you appears first, then each clone "copies out" of the
  previous one: a duplicate slides sideways from behind the original with a brief
  outline/ghost trail (two 30%-opacity echoes), 250 ms apart.
- HOVER a clone: the others desaturate and fade to 35%, the hovered clone gets a soft
  rim light (drop-shadow in --accent) and a 1-sentence speech label.
- Clicking a clone goes to its door; the clone "walks" out of frame in that direction
  (translateX + fade) as the page transitions.
- Mobile: clones in a horizontal swipe row, one per screen width, with dots.
13 — Angle Switch
The same moment seen from several cameras, cutting between them like a multicam livestream.
- Two layers of the idea:
  1. PHOTO MULTICAM: 3–4 photos of the same moment from different angles (front,
     side, three-quarter, from above). A mono "CAM 1 / CAM 2 / CAM 3 / CAM 4" switcher
     sits top-right with a red REC dot; the active cam is highlighted.
  2. RING CAMERAS: reuse sceneAt() with named camera presets (front-level, low-angle,
     high-angle, side-orbit, bird's eye). Switching cams animates the camera between
     presets with --ease-reveal over 900 ms.
- Cuts: auto-switch every 4 s, or on click, or keys 1–4. Photo cuts are hard cuts with
  a 2-frame white flash at 20% opacity (not a strobe) or a quick whip-pan blur
  (translateX + motion blur filter, 200 ms).
- A thin timecode in mono (HH:MM:SS:FF) runs in the corner for the broadcast feel.
- Auto-switch pauses on hover and under reduced motion (manual switching only).
14 — Silhouette
A solid silhouette of you, backlit against the bright painted sky, with your work playing inside the shape.
- The cut-out portrait used as a CSS mask (mask-image with its alpha). Inside the mask:
  a slow montage of reel previews and project shots crossfading every 2.5 s.
- Outside the mask: the golden-hour sky, slightly overexposed around the edges of the
  silhouette (a radial glow behind the figure) to sell the backlight.
- At rest the silhouette is solid --ink; on hover (or after 1.5 s on touch) the ink
  fades to 15% and the montage inside shows through.
- Your name in huge OUTLINE type (text-stroke 1.5px, transparent fill) behind the
  figure; the part of the name overlapping the silhouette fills solid.
- SCROLL: the silhouette scales up from 1 to 8 with transform-origin at the chest, so
  the inside of the figure becomes a full-screen window into your work, then hands
  off to the headline.
- Reduced motion: no scaling; the montage becomes a static cover image.
15 — Gadget iPhone
Floating phones that play your work on their screens and turn in 3D as you scroll and drag.
- A phone built in CSS 3D: front face (screen + bezel + dynamic-island notch shape),
  back face, and 4 thin side slabs for real thickness. No real device photos and no
  brand logos: draw a generic modern phone so you avoid trademark issues.
- Screen content = a reel preview or a project screenshot, with a glass reflection
  gradient on top that shifts with rotation.
- Hero: 3–5 phones floating at different depths, each slowly bobbing and rotating
  (different periods so they never sync). The centre phone is larger.
- DRAG to rotate the focused phone (spring back to rest on release). SCROLL rotates all
  phones and swaps the centre phone's screen to the next reel at each 90° turn.
- Tap a phone: it flies to centre, turns to face the camera, scales up, and the reel
  plays with a "Watch on Instagram ↗" pill under it.
- Shadows: a soft blurred ellipse under each phone that shrinks as it bobs up.
- Mobile: one phone, swipe to change its screen.
Recommended build order: Bird's eye view and Angle Switch (both reuse the ring math) → Performance Grid → Sliced → Silhouette → Mirrored → Glitch → Gadget iPhone → Collage → Clone → Big and Small → Timelapse → Teleport → Inside the head (hardest last).
Scope advice: launch with the ring plus three formats, then add one format per sprint. Fifteen half-finished heroes look worse than four polished ones, and each format is its own BMAD story with its own tests.
Designer's note: one format should be your default and feel like you; the rest are a playful bonus behind the switcher. If a format doesn't hold up on a phone, ship it desktop-only rather than diluting it.
Checkpoint (per format): it loads in under 2 s on Slow 4G, skips cleanly, has a reduced-motion frame, works on a phone, and every clickable element is reachable by keyboard. Switch between all fifteen formats ten times quickly and confirm nothing leaks (memory, rAF loops, playing videos).
Phase 10 — Headline sentence and stats
Below the ring, one huge sentence does the job of a whole About section: it names who you serve and links each audience word to its door, tagged with a tiny mono index (01–04). The last link opens your AI chat.
Build <HeroSentence/> as the page's only <h1>:
- Text from content/site.ts, display size, max ~18ch per line on desktop,
  balanced with text-wrap: balance.
- Each audience word is a link with a superscript index in mono --t-micro --ink-3:
  "founders⁰¹", "brands⁰²", "students⁰³", "talk to my AI⁰⁴". Render indexes as real
  <sup> inside the link so screen readers read "founders 01"; give the link an
  aria-label without the number.
- Link hover: the word gets a highlighter-style underline (a 0.35em tall --accent bar
  behind the text, scaleX 0 -> 1 from the left, 350 ms), the index scrambles once.
- "talk to my AI" is a <button> that opens the chat panel (Phase 12), not a link.
- Scroll-linked: as the clouds rise (Phase 5), the sentence slides up from behind them.

Build <Stats/> right under it: three columns, each a mono label ("Views") over a
large number ("12.7M+"):
- Numbers count up from 0 when they first enter the viewport (1.2 s, --ease-out),
  formatted live with compactNumber, tabular-nums so the width doesn't wobble.
- Hairline --rule dividers between columns; stack to one column under 480px.
- Optional mono footnote: "Last 6 months · updated [month year]" for honesty.
Designer's note: only show stats you're proud of and can verify. Three strong numbers beat six average ones; if you don't have audience numbers, use outcomes (users served, revenue shipped, years building).
Checkpoint: read the sentence on a phone at arm's length. If it wraps into more than 6 lines, shorten it.
Phase 11 — Homepage sections below the fold
After the spectacle, the page goes calm: three short, text-led sections that a recruiter, a client or an AI summariser can scan in 20 seconds.
SECTION A — "What [Name] does" (h2)
- One paragraph in third person (good for search + AI summaries), 2–3 sentences:
  role, credibility, what you make, who it helps.
- Three door cards in a row (stack on mobile). Each card:
  mono index 01 / 02 / 03, h3 "Build: products for founders", one sentence,
  and a small thumbnail strip of 3 related carousel covers that fan out on hover
  (rotate -6°, 0°, 6°, 200 ms stagger). Whole card is the link.

SECTION B — "Work with [Name]" (h2)
- Three one-line paragraphs: what founders bring, what brands bring, what students
  bring. Then the primary CTA: email address as a big copyable link + "or the
  contact page". Add "Replies within 2 business days" in mono — set expectations.
- Optional availability pill: green dot + "Taking 1 project for [Month]" from content.

SECTION C — "For developers and AI agents" (h2)
- One short paragraph linking to /developers, /openapi.json, /llms.txt, and noting
  every page is available as Markdown. Style the links as mono path chips.

SCROLL REVEALS (all sections): each block fades up 16px once, triggered at 15%
visibility, 500 ms --ease-out, 60 ms stagger inside a block. Never re-animate on
scroll back up. Off under reduced motion.

SPACING: --s-32 between sections on desktop, --s-16 on mobile. Paragraph measure
≤ 68ch, left-aligned to the 12-col grid at column 2 or 3 for an editorial feel.
Checkpoint: turn off CSS entirely (DevTools > Rendering > disable styles) and the homepage still reads as a clear, ordered document.
Phase 11B — Vox-style animations
A Vox-style explainer turns your story into a short documentary on paper. A camera moves across a big textured page, highlighter strokes draw over key phrases, red-pen circles and arrows appear, clippings get taped down and "SHIPPED" stamps land with a thud. The reference site has a page in this style, described in its post The Prompt Behind My Vox-Style Portfolio Page: Paper, Highlighter and a Camera That Reads It for You. Build two things: a reusable Vox micro-kit, and one scroll-driven explainer using it.
Part 1 — The Vox micro-kit (usable anywhere, including MDX blog posts)
Create src/components/vox/ — every piece is real DOM text or SVG, animated with
transform, opacity, clip-path or stroke-dashoffset only:

<Paper>        warm off-white page (#F4EFE4-ish token --paper-vox), tiling paper-fibre
               texture at 8% (multiply), faint grain, soft vignette, 1–2px uneven
               edge shadow. Tile image < 30 KB.
<Highlight>    wraps text in <mark>. A yellow (--vox-yellow ~ #FFE44D) marker stroke
               behind the text: an SVG path with slightly ragged ends and varying
               thickness (3 hand-made path variants, picked by seeded random),
               mix-blend-mode: multiply. Draws left->right via clip-path inset
               (100% -> 0) in 450 ms, --ease-out. Multi-line text: each line draws
               in sequence, 120 ms apart.
<PenCircle>    hand-drawn red ellipse around a word (an overshooting loop, not a
               perfect ellipse), stroke-dashoffset draw in 600 ms.
<PenUnderline> one or two wobbly red strokes under a phrase.
<Arrow>        curved hand-drawn arrow from element A to element B (measures both
               with getBoundingClientRect, recalculates on resize), draws then the
               arrowhead pops.
<Stamp>        rubber-stamp label ("SHIPPED", "773K VIEWS", "YC") in condensed
               caps with a rough ink texture mask; lands from scale 1.6 -> 1 with
               rotation -6° and a 2px page shake (one frame), 250 ms.
<Clipping>     torn-paper photo or newspaper-style cut (reuse the Collage torn-edge
               masks) with a tape strip; slides in and settles with a slight rotate.
<StickyNote>   square note in --vox-yellow with handwriting font, peels in from a corner.
<Typewriter>   text types on at 28 chars/s with a blinking caret; full text is
               present for screen readers from the start (aria-label), only the
               visual is progressive.
<DrawChart>    simple line or bar chart drawn by stroke-dashoffset with hand-drawn
               axis ticks and a highlighted end value; data from /content.
<Redact>       black bar that wipes off to reveal a word ("the secret is...").

Every component:
- triggers via a shared useReveal() (IntersectionObserver at 40%) OR a progress
  prop (0..1) so it can be scrubbed by scroll in Part 2;
- renders its FINAL state immediately under prefers-reduced-motion;
- has a Storybook-style demo on /styleguide and a visual regression snapshot.
Part 2 — "The story so far" explainer (homepage section or /about)
DATA: /content/story.ts — an array of 6–10 BEATS. Each beat:
  { id, camera: { x, y, zoom, rotate }, caption, reveals: [componentId...] }
One giant virtual paper canvas (e.g. 3200 x 2200 px) holds every element of the
story in place: your intro paragraph, clippings of projects, a stamped milestone,
a drawn chart of your growth, sticky notes, a pinned photo of you.

CAMERA: a sticky viewport (100vh) shows part of the canvas. Scroll progress across
the section (one beat = 100vh of scroll) interpolates the camera between beats:
  translate(-x, -y) scale(zoom) rotate(rotate) on ONE wrapper element,
  eased with --ease-in-out between beats, with a slight 0.5–1° rotation drift so it
  feels hand-held. This is the "camera that reads the page for you".

REVEALS: as the camera settles on a beat (last 40% of its scroll range), that beat's
reveals play in order: highlight the key line, circle the number, draw the arrow to
the clipping, land the stamp. Reveals are scrubbed by scroll progress (scrolling
back un-draws them), not fire-once.

CAPTIONS: a lower-third caption bar (mono, paper on ink) shows the beat's caption,
like documentary subtitles.

CONTROLS: a "▶ Play" button runs the explainer automatically like a 30–45 s video
(smooth-scrolls through beats), "Pause", and beat dots on the right edge for jumping.
Keyboard: Space play/pause, arrows next/previous beat.

MOBILE: a portrait canvas layout (separate camera positions per breakpoint in
story.ts), smaller zooms, captions above the thumb zone.

REDUCED MOTION / NO JS: render the canvas as a normal scrolling annotated page
with every highlight, circle and stamp already applied.

PERFORMANCE: only the camera wrapper moves on scroll; elements use their own
composited layers; paper texture is one small tiling image; no layout reads in the
scroll handler (precompute arrow paths on resize).
Designer's note: the Vox look lives in restraint and timing: one yellow, one red, paper and ink, and only one highlight per sentence. Highlight the number or the verb that matters, never a whole paragraph.
Checkpoint: scroll the explainer forward and backward slowly and quickly; nothing should jump, double-draw or leave half-drawn strokes behind. Then test Play mode, keyboard and reduced motion.
Phase 12 — "Talk to my AI" chat
A small chat that answers questions about you, grounded only in your content files. It's the fourth door in the headline and a strong signal if you're an AI builder.
BACKEND: src/app/api/chat/route.ts (Edge or Node runtime)
- Vercel AI SDK streamText with a provider of my choice (key in env, never client-side).
- System prompt generated at build time from /content: bio, experience, projects,
  doors, contact rules. Instructions: answer only about [Name] and their work, in
  first person as "[Name]'s assistant", say "I don't know, email [address]" when the
  content doesn't cover it, never invent dates, clients or numbers, keep answers
  under 120 words, link to the relevant page when useful.
- Guardrails: reject requests whose Origin isn't my domain; rate-limit 10 req/IP/min
  (Upstash Redis or Vercel KV); cap input at 2,000 chars and history at 12 messages;
  stream as Server-Sent Events.
- Log question text (no IPs) to see what people ask; that's free product research.

FRONTEND: <ChatPanel/>
- Opens from the headline button, a floating "Ask my AI" pill (bottom-right,
  appears after the hero), and the keyboard shortcut Ctrl/Cmd+K (or Ctrl+J).
- Desktop: 400px side sheet sliding from the right with a spring. Mobile: bottom
  sheet, 85vh, drag handle, swipe down to close.
- Empty state: 3–4 suggested question chips ("What do you build?", "Are you
  available?", "What's your stack?", "Best project?").
- Messages: user right-aligned in an --ink pill; assistant left, plain text on paper,
  streamed token by token with a blinking mono caret. Render links + inline code.
- States: thinking (three dots), error with retry, rate-limited ("Too many questions —
  email me instead" + copy email button).
- Focus is trapped while open, Escape closes and returns focus to the opener,
  role="dialog" aria-modal, aria-live on the message list.
Checkpoint: ask it 10 tricky questions (your salary, a client you never had, something off-topic, a prompt-injection attempt). It should decline or point to email every time without inventing anything.
Phase 13 — Inner pages
Inner pages drop the 3D and live on the same paper, type and mono details, so they feel like chapters of one book. Build them one at a time; each is its own checkpoint.
SHARED PAGE TEMPLATE
- Breadcrumb in mono: "← Learn" back link, then metadata separated by " · ".
- h1 in display size, a one-sentence dek in --t-h3 --ink-2, then content.
- Page transition: outgoing page fades 150 ms, incoming slides up 12px + fades
  300 ms (View Transitions API with a Motion fallback).

/projects  (Build door)
- Intro sentence + filter chips: All / Startups / Own products / Client work.
- Large list rows, not a card grid: year (mono) · name (display) · one-line outcome ·
  role · ↗. On hover a 9:16 or 4:3 preview image follows the cursor (spring-lagged,
  clipped, desktop only).
- /projects/[slug]: hero image, a facts table (role, timeline, stack, links),
  problem → what I built → result sections, image gallery, "next project" link.

/brands  (media kit; skip or rename if not a creator)
- Headline numbers (views, followers, avg views per post) with count-up.
- Partner logos in a quiet greyscale row; one card per campaign with the Reel cover,
  views and one-line result. Audience breakdown (top countries, age, roles) as
  simple bars. Formats + "rates on request" + email CTA. A "Download media kit
  (PDF)" link.

/blog  (Learn door)
- Filter tabs by type: Prompts / Builds / Resources. Search box (client-side,
  fuse.js over titles + descriptions).
- List rows: date (mono) · title · type tag · reading time.
- Post page: "← Learn · Type · Date · N min" line, h1, dek, a "See it live ↗"
  embed or link when the post is about a build, MDX body with code blocks and a
  copy button, a sticky "On this page" table of contents with mono numbers 01–NN
  that highlights the current section, and a "Keep reading" list of 3 related posts.
- RSS at /blog/feed.xml.

/about    longer bio, experience timeline (company · title · dates · bullets),
          skills grouped by area, a photo, and "currently" (what you're into now).
/contact  what to reach out about (per door), what to include (scope, timeline,
          budget), response time, email + socials. No form needed.
/privacy  plain-language: what analytics you use, what the chat logs, nothing else.
/404      the wordmark, "This page wandered off.", a mini 6-card ring spinning, and
          links to the three doors. Return a real 404 status.
Checkpoint: each page passes the same review: one h1, readable on mobile, every link works, and it looks like the same site with the hero removed.
Phase 14 — Human / Agent machine-readable layer
The reference publishes llms.txt, a JSON API with an OpenAPI spec, and a Markdown version of every page. Recruiters increasingly paste your URL into an AI tool; this layer makes sure it reads you correctly.
All of this is generated from /content, never hand-written twice.

1. HUMAN / AGENT TOGGLE (header): switching to "Agent" re-renders the current page
   as its Markdown source in a mono, paper-white reader view with a "Copy as
   Markdown" button. Persist the choice in localStorage. Keyboard: Ctrl+Shift+A.
2. MARKDOWN EVERYWHERE: any route returns text/markdown when requested with
   Accept: text/markdown, and at /[path].md (e.g. /blog/my-post.md, /index.md).
   Use Next.js middleware to route the Accept header to a markdown handler.
3. /llms.txt: name, one-line summary, key links with one-line descriptions, "when to
   use this site", contact rules, short work history, projects, recent posts.
   /llms-full.txt: the same plus every post's description.
4. JSON API under /api/v1: /profile, /projects, /posts (?type=, ?q=), /posts/[slug].
   Public, cached (s-maxage=3600), CORS open for GET.
5. /openapi.json describing the API; /developers page rendering it as readable docs
   with copyable curl examples.
6. /.well-known/ai-catalog.json and /.well-known/api-catalog pointing to the above.
7. /sitemap.xml, /robots.txt (allow all, point to sitemap and llms.txt).
8. Unknown paths return a true 404 status (agents rely on it).
9. Write AGENTS.md in the repo root describing the codebase for future coding agents.
Checkpoint: run curl -H "Accept: text/markdown" localhost:3000/ and curl localhost:3000/api/v1/projects; both return clean, correct output. Paste your live URL into a couple of AI assistants and check the summary they give.
Phase 15 — SEO and social cards
Your link gets shared in DMs, Slack and LinkedIn far more than it gets visited from search, so the preview card is part of the design.
- Metadata API per route: title pattern "[Page] | [Name]", homepage title
  "[Name] | [Role], [Role], [Role]", description = the third-person bio sentence,
  canonical URL, author, twitter:creator.
- OG images (1200x630) generated with next/og (ImageResponse):
  homepage: sky art background, wordmark, tagline, 5 tiny card covers fanned.
  posts: paper background, "Learn" in mono, the title in display type, date + read time.
  projects: project hero image with name and one-line outcome.
  Always set og:image:alt.
- JSON-LD: Person on home/about (name, jobTitle, worksFor, sameAs socials, url,
  email), BlogPosting on posts, BreadcrumbList on inner pages.
- Favicon set: SVG favicon of the wordmark's first letter + period, apple-touch-icon,
  a theme-color meta per colour scheme, and a web manifest.
Checkpoint: test the homepage and one post in the LinkedIn Post Inspector, the opengraph.xyz preview and Google's Rich Results Test.
Phase 16 — Micro-interactions polish list
This is where "nice" becomes "crafted". Give the agent this checklist after the pages work; ask it to tick each item and show you a short clip of the interesting ones.
[ ] Text selection colour uses --accent at 25% with ink text.
[ ] Custom focus ring: 2px --accent, 3px offset, rounded to match the element; only on :focus-visible.
[ ] Scrollbar: thin, --ink-3 thumb on transparent track (desktop only).
[ ] Cursor: on the ring, show grab / grabbing; on cards, a small mono "Drag · Click" label follows the pointer (fine pointers only).
[ ] Hover arrows ↗ nudge 2px up-right; back arrows ← nudge 2px left.
[ ] Copy-email buttons swap text to "Copied" with a 150 ms crossfade and revert after 1.5s.
[ ] Mono indexes (01, 02…) scramble once on hover using <ScrambleText/>.
[ ] Buttons press to scale(0.97) on active, 100 ms.
[ ] Images fade in from a blurred placeholder; never pop in.
[ ] Card covers get a subtle 1.02 zoom on hover inside their clipped frame.
[ ] The header wordmark's period pulses once in --accent when you return to the homepage.
[ ] Live local time in the footer ticks each minute without layout shift.
[ ] Theme toggle animates via a circular clip-path reveal from the toggle's position (View Transitions).
[ ] Tab title changes to "Come back ↺" when the tab is hidden, restores on return (keep it subtle or skip it).
[ ] console.log greeting for developers who open DevTools: a one-line hello + link to /developers.
[ ] Easter egg keyboard shortcut list on ? (shows all shortcuts in a small sheet).
[ ] Haptic-feeling spring on mobile sheet open/close; no linear easings anywhere in the UI.
Designer's note: every micro-interaction should be shorter than you think. If you notice the animation, it's too slow; most UI motion lives between 120 and 300 ms.
Phase 17 — Accessibility
A big entrance is a gift the first time and a tax on every visit after. These requirements keep the site usable for everyone, and they're what separates a portfolio that impresses designers from one that impresses engineering leads.
[ ] prefers-reduced-motion: no loader, no auto-spin, no parallax, no scroll reveals; the ring renders static at the hero pose and still turns with arrow keys or drag.
[ ] A visible "Pause carousel" control near the ring (WCAG 2.2.2 requires pausing auto-moving content longer than 5s).
[ ] Skip link "Skip to content" as the first focusable element.
[ ] The ring is a role="region" with aria-roledescription="carousel" and a label; cards are real links in DOM order matching ring order; hidden back-facing cards get inert so Tab doesn't land behind the ring.
[ ] Arrow Left/Right turn the ring by one card when it has focus; Home/End jump to the first/last item.
[ ] Colour contrast ≥ 4.5:1 for all text, including text over card scrims and over the sky art.
[ ] All images have meaningful alt text from content; decorative art uses alt="".
[ ] Videos are muted, have no essential audio, and stop when reduced motion is on.
[ ] Every interactive element is reachable and operable by keyboard; tested with VoiceOver (Safari) and NVDA (Firefox/Chrome).
[ ] Zoom to 200% and 400% without horizontal scroll on text pages.
[ ] axe DevTools reports zero serious or critical issues on every route.
Checkpoint: do one full pass of the site with only the keyboard, then one with your screen reader, then one with reduced motion turned on in your OS.
Phase 18 — Performance
Sixteen 3D cards with video can easily stutter on a mid-range Android phone. Set hard budgets and have the agent prove them.
Metric
Budget
How to check
LCP (homepage, Moto G Power, 4G)
< 2.5 s
PageSpeed Insights / Lighthouse mobile
INP
< 200 ms
Web Vitals extension while dragging the ring
CLS
< 0.05
Lighthouse; fonts via next/font, fixed card sizes
JS shipped to homepage
< 150 KB gzipped
next build output, bundle analyzer
Sky + clouds art
< 350 KB combined
AVIF/WebP, 3 responsive widths
Each card cover
< 40 KB
540×960 WebP at quality 70
Each preview clip
< 600 KB
3–5 s, 540p, H.264 + WebM, no audio track
Ring frame time
steady 60 fps, no long tasks
DevTools Performance, 4× CPU throttle
- Lazy-load the chat panel, ScrambleText-heavy bits and the blog search with
  dynamic import; none of them are needed for first paint.
- Preload only the sky image and the covers that face the camera at the end of
  the reveal; everything else loads after the entrance finishes.
- Video: preload="none" by default, set src only when a card becomes facing,
  poster = the cover. On Save-Data or slow connections, never load video at all.
- Static generation for every page; ISR only if content comes from a CMS later.
- Cache headers: immutable for hashed assets, 1 hour for the API and markdown.
- Low-power mode: if the first 60 frames average > 20 ms, drop to 12 cards,
  disable video and parallax automatically.
Checkpoint: Lighthouse mobile ≥ 90 Performance, 100 Accessibility, 100 Best Practices, 100 SEO, recorded in the README with the date.
Phase 18B — Rigorous testing and CI quality gates
A motion-heavy site breaks in quiet ways: a half-drawn stroke on Safari, a carousel that leaks memory after five format switches, a project image with the wrong ratio. The rule is simple: nothing reaches production unless an automated gate has checked it, and every bug found by hand becomes a test. If you installed BMAD's Test Architect (TEA) module, run its test-design workflow per epic to plan risk-based coverage before the dev stories start.
The test layers:
Layer
Tool
What it proves
Runs
Types and lint
tsc --noEmit, ESLint
No type holes, no unused or unsafe code
Every commit (pre-commit hook) + CI
Content
zod + custom checks
Every entry valid, images exist, 9:16 ratio, size budgets, no [TODO]
CI + before every content update
Unit and property
Vitest + fast-check
Ring math, grid patterns, progress, formatters hold for thousands of random inputs
Every commit + CI
Component
Vitest + Testing Library
Each component renders, handles keyboard, reduced-motion final state
CI
End-to-end
Playwright (Chromium, Firefox, WebKit, Pixel 7, iPhone 15 emulation)
Real user flows on every route
CI on every PR, against the Vercel preview
Visual regression
Playwright toHaveScreenshot
No unintended pixel changes on pages, hero formats and entrance frames
CI on every PR
Accessibility
@axe-core/playwright + keyboard scripts
Zero serious/critical violations; full keyboard paths
CI on every PR
Performance
Lighthouse CI + size-limit
Phase 18 budgets, JS size per route
CI on every PR
Links and API
lychee, schema tests vs openapi.json
No broken links; API and Markdown endpoints match their contract
CI + nightly on production
Production
Sentry + uptime check + nightly Playwright smoke
Real errors and outages caught within minutes
Continuous
Make the site TESTABLE first:
- Deterministic test mode (?test=1 or NEXT_PUBLIC_TEST_MODE): fixed clock, seeded
  random (collage layout, glitch bursts, sparkle patterns), auto-spin and autoplay
  off, videos replaced by their posters, fonts awaited before screenshots.
- A test hook (window.__portfolio in test mode only) to set formation, expansion,
  active format and story beat to exact values, so the entrance and the Vox explainer
  can be screenshotted frame by frame (e.g. formation 0, .25, .5, 1; expansion 0, .5, 1).
- Disable Motion animations globally in component tests via its skip-animations
  config; assert final states instead.

REQUIRED E2E FLOWS (each on desktop + mobile projects):
 1. First visit: loader shows, counter reaches 100, ring opens, header wordmark lands
    in the right place (compare boxes within 1px), scroll unlocks.
 2. Skip: Escape, Tab and the Skip button each end the entrance within 100 ms.
 3. Reduced motion (emulateMedia): no loader, static hero, all links work.
 4. Ring: drag, wheel, keyboard arrows turn it; click vs drag threshold respected;
    links open in a new tab.
 5. Every hero format: switch to it via ?format=, assert no console errors, its
    clickable elements are reachable by Tab, screenshot its final frame.
 6. Format soak test: switch formats 30 times; assert the number of active rAF
    loops and playing <video> elements returns to baseline and JS heap growth
    < 10 MB (Chromium performance.memory).
 7. Vox explainer: scroll forward and back through every beat; Play/Pause; keys.
 8. Chat: open/close, focus trap, mocked streaming reply, rate-limit message,
    error + retry. The LLM is mocked in CI; one nightly test hits the real API.
 9. Every route: 200 status, one h1, no console errors, no failed network requests,
    correct <title> and og:image; unknown route returns a real 404.
10. Agent layer: Accept: text/markdown on /, /about, a post; /llms.txt; every
    /api/v1 endpoint validates against openapi.json.

GLOBAL FAIL CONDITIONS (any test): a console error or warning, an uncaught
promise rejection, a 4xx/5xx asset request, a layout shift > 0.05 during load.

FLAKE POLICY: unit tests never retry. E2E may retry once in CI, but any test that
needed a retry is reported, and a test that flakes twice in a week gets its own
fix story before new features. Never "fix" a flake with a longer timeout without
finding the race.

REGRESSION RULE: every bug you or a visitor finds gets a failing test first,
then the fix, in the same PR.

CI (GitHub Actions, .github/workflows/ci.yml), on every pull request:
  install (npm ci, cached) -> typecheck -> lint -> content checks -> unit/property
  -> component -> build -> wait for the Vercel preview URL -> Playwright e2e +
  visual + axe against the preview -> Lighthouse CI against the preview -> size-limit.
Branch protection on main: all checks required, PR review required (BMAD
code-review counts), no direct pushes, linear history.
Nightly (cron): full e2e smoke + link check + Lighthouse against production.

REAL DEVICES before each launch-level release: one iPhone (Safari), one mid-range
Android (Chrome), one iPad; record the entrance and one format on each.
Checkpoint: open a deliberately broken PR (an image with a wrong ratio, a missing alt, a 300 KB cover, a console.error in one format). Every one of those must turn CI red. If any slips through, add the missing gate before continuing.
Phase 19 — QA and launch
Ship on Vercel with your own domain, then spend one focused hour breaking it before you share the link.
[ ] Devices: iPhone Safari, Android Chrome (a mid-range one), iPad, Mac Safari/Chrome/Firefox, Windows Chrome/Edge.
[ ] Entrance tested: first visit, repeat visit in the same session, reduced motion, skip button, Escape, Tab, slow 4G, offline after load.
[ ] Ring tested with mouse drag, trackpad two-finger swipe, mouse wheel, touch swipe (page still scrolls vertically), keyboard arrows.
[ ] Every external link opens in a new tab with rel="noopener"; every internal link works (run a link checker).
[ ] Chat: rate limit trips correctly, errors show the email fallback, API key never appears in client bundles.
[ ] Analytics: privacy-friendly (Vercel Analytics, Plausible or PostHog) with events for door clicks, card clicks, chat opens, email copies.
[ ] Domain + HTTPS + www redirect; preview deployments protected.
[ ] Content proof-read aloud: no [TODO] left (add a build step that fails if one remains).
[ ] Submit sitemap in Google Search Console; verify the OG card in a real LinkedIn draft.
[ ] Write a short README: stack, how to add a reel, a project and a post, how to replay the intro.
Designer's note: a portfolio is a living product. Plan a 15-minute monthly update: refresh the stats, add new carousel items, and post one build write-up. A stale portfolio undoes all of this craft.
Phase 19B — Deploy to Vercel, connect your domain, keep it updated
Vercel is the natural host for a Next.js site: every pull request gets its own preview URL (which the CI tests run against), and every merge to main goes live automatically. The agent can do almost all of this; the steps marked You need your accounts and logins.
One-time setup
1. You: create free accounts on GitHub and Vercel (sign in to Vercel with GitHub). Buy your domain from any registrar (Namecheap, Cloudflare, GoDaddy, or directly in Vercel).
2. Agent: prepare the repo for production.
Prepare this project for Vercel:
- Ensure `npm run build` passes locally with zero warnings.
- Add .env.example listing every variable with a comment, e.g.:
    AI_PROVIDER_API_KEY=        # chat model key (server only, never NEXT_PUBLIC_)
    UPSTASH_REDIS_REST_URL=     # chat rate limiting
    UPSTASH_REDIS_REST_TOKEN=
    NEXT_PUBLIC_SITE_URL=https://[my-domain]
    SENTRY_DSN=                 # error monitoring
- Make sure .env* (except .env.example) is in .gitignore. Scan the repo and git history
  for committed secrets; stop and tell me if you find any.
- Add vercel.json only if needed (headers for /llms.txt and .md content types,
  long cache for /public assets, security headers: CSP, X-Content-Type-Options,
  Referrer-Policy, Permissions-Policy with camera=() unless a format needs it).
- Add a README "Deploy" section with the exact steps below.
- Create the GitHub repo and push: gh repo create [name] --private --source=. --push
  (if gh isn't authenticated, give me the commands to run myself).
3. You: at vercel.com/new, import the GitHub repo. Vercel detects Next.js; keep the default build settings.
4. You: in Project → Settings → Environment Variables, add every variable from .env.example for Production and Preview. Add Upstash Redis from the Vercel Marketplace if you want the keys filled in for you.
5. You: click Deploy. You get a *.vercel.app URL in about a minute.
6. You: in Project → Settings → Domains, add yourdomain.com and www.yourdomain.com. Copy the exact DNS records Vercel shows into your registrar's DNS panel (they can differ per project, so don't copy them from a tutorial). Choose which one redirects to the other. HTTPS is issued automatically.
7. Agent: wire CI to the previews.
- In .github/workflows/ci.yml, wait for the Vercel preview deployment of the PR
  (use the deployment_status event or a wait-for-vercel-preview action), then run
  Playwright, axe and Lighthouse CI against that preview URL (Phase 18B).
- Turn on Vercel Deployment Protection for previews; give CI a protection-bypass
  secret so tests can reach them.
- Add a post-deploy smoke job on push to main that hits production: /, /projects,
  /blog, /llms.txt, /api/v1/profile, and fails loudly (and notifies me) on any error.
- Enable Vercel Analytics and Speed Insights; add Sentry for runtime errors.
8. You: on GitHub, protect main: require the CI checks and one review, block direct pushes. From now on, nothing ships without passing every gate.
Working from the terminal instead (Claude Code can run this after you log in once):
npm i -g vercel
vercel login          # You, once
vercel link           # connect the folder to the Vercel project
vercel env pull       # download env vars into .env.local for local dev
vercel                # deploy a preview
vercel --prod         # deploy to production (normally done by merging to main instead)
Codex vs Claude Code: both can write the code, tests, CI file and README. Claude Code runs on your machine, so it can run vercel and gh after you log in. Cloud agents (like Codex in the cloud) may not have network or your credentials; let them open the PR, then you merge and Vercel deploys.
If something breaks in production: use Vercel's Instant Rollback to the last good deployment (one click), then fix forward with a failing test first.
The regular update routine (BMAD Quick Flow)
You'll update this site often, so the agent should build a tool that makes adding content safe and boring.
Build a content CLI (scripts/content.ts, run with npm run add):
- npm run add project   -> asks for name, outcome, role, stack, year, links; creates
                           the entry in content/projects.ts, an MDX file from a
                           template, and public/projects/[slug]/ for images.
- npm run add reel      -> title, category, metric, link, cover path, preview path.
- npm run add post      -> MDX with frontmatter template.
- npm run stats         -> update the three proof stats + "updated [month year]".
- npm run images        -> converts anything in /incoming to WebP/AVIF at the right
                           sizes and ratio (sharp), strips EXIF, reports sizes vs budget.
Each command runs content validation at the end and refuses to finish if invalid.
Prompt to give your agent each time you add something:
BMAD Quick Flow. Content update: [add project "X" / add 3 reels / refresh stats].
Assets are in /incoming. Use npm run add + npm run images, then run the full test
suite locally. Open a PR titled "content: ...". Do not change components, styles or
animations in a content PR. Wait for CI and the Vercel preview, check the preview on
mobile, then tell me it's ready to merge.
Monthly 15-minute routine: refresh stats, add new reels and projects, review Sentry and Analytics, merge dependency updates (Renovate or Dependabot, auto-merged only when CI is green), and replace the oldest carousel items.
Stretch goals (only after launch)
Pick at most one per month, so the site keeps a single clear signature instead of becoming a demo reel of effects. The reference site's own history lists several of these.
1. Terminal mode: Ctrl+J opens an in-page terminal with commands like about, projects, contact, theme dark, ask <question> (routes to the chat).
2. Gesture control: MediaPipe hand tracking to turn the ring with a swipe in the air and pinch to open a card; strictly opt-in with a camera permission explainer.
3. Live GitHub graph: your real contribution graph, animated in on scroll, cached daily.
4. Second hero variant: a deck of cards dealt into a fan that lifts into a wheel, A/B tested against the ring.
5. "Now" widget: what you're building this week, pulled from a Notion page or a JSON file.
6. Case-study scrollytelling: one flagship project told with scroll-scrubbed image sequences.
7. Guestbook: visitors leave a one-line note and a doodle, moderated, stored in a small database.
Final designer's note: before you start, write down the one feeling you want a visitor to have in the first three seconds. Hold every phase against that sentence; if a feature doesn't serve it, cut it.