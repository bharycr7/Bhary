# Bharath’s Portfolio

Next.js App Router, React 19, TypeScript, and Motion. The current site combines five original owner-uploaded reels, four interactive product workflow concepts, and four detailed case studies.

## Run
Node 20.9+ required. From this directory: `npm ci`, then `npm run dev`. Production: `npm run build`, then `npm start` (port 3000). Type check: `npm run typecheck`. Geometry checks for the retained experimental entrance: `node src/lib/reel-pose.test.mjs`.

## Content
- `content/profile.ts`: name, social profiles, career history.
- `content/reels.ts`: five reel summaries grounded in filenames and inspected footage.
- `content/case-studies.ts`: problems, decisions, tradeoffs, outcomes, source limitations.
- `content/product-demos.ts`: four conceptual product walkthroughs using fictional sample data.
- `public/reels/`: optimized original reels with audio, muted seven-second previews, JPEG covers, and the separately generated Aexvion teaser.

## Routes
`/`, `/styleguide`, `/resources/mastery`, `/resources/validation`, `/work/test-data-platform`, `/work/data-state-intelligence`, `/work/usage-analytics`, `/work/aexvion`, `/llms.txt`.

## Source integrity and outstanding media
The five original reels were uploaded by the owner and optimized to 720×1280 with audio. They are not synthetic recreations. No full audio transcripts were generated; summaries derive from sampled on-screen content. The Anoria Emotion Tracker upload and all four monthly ZIPs exceed the transfer tool's 32 MiB limit. Live Drive, Instagram and Avi site inspection remain blocked; those access failures do not affect local playback of the five uploaded reels. See CONTENT_SOURCES.md for attribution and measurement limits.

The interfaces demonstrate product behavior and are labeled conceptual/sample. Quantitative case studies retain source qualifications, and modeled savings are distinguished from reported outcomes.

All current revisions remain local pending design review. Do not push or deploy without the owner's approval. Vercel deployment settings are in vercel.json and DEPLOYMENT.md.

### Current portfolio structure

The introduction now explains Bharath's value, product and creator work, interactive expertise mindmap, profile-backed recognition, and current interests. `/work` is the project index; four `/work/[slug]` pages contain dedicated interactive workflows and case narratives. Nine original July reels appear in a floating, keyboard-accessible gallery, including the additional OpenCode, Remotion, Claude image-creation, and X Bookmarks uploads. Repeated Swiggy footage appears once. Use `/styleguide` for the burgundy/paper/yellow editorial system and motion contract.
