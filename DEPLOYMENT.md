# Deploy Bharath’s Portfolio to Vercel

The app needs no runtime environment variables or API secrets.

## Deploy from GitHub

Open https://vercel.com/new/import?s=https%3A%2F%2Fgithub.com%2Fbharycr7%2FBhary and sign in to the intended Vercel account. Import `bharycr7/Bhary`, select the `master` branch and repository root, and keep the detected Next.js framework. Suggested project name: `bharath-portfolio`.

The checked-in `vercel.json` configures `npm ci` and `npm run build`. Click Deploy. If Vercel requests GitHub access, grant its integration access to this repository. A connected Vercel project can then deploy future updates to `master` automatically.

Use the generated production `.vercel.app` address. Verify that it opens without a Vercel login. If deployment protection restricts production, change this project's production protection setting to allow public access, as requested by the portfolio owner. Leave unrelated account settings unchanged.

## Verification

Check `/`, `/work`, each of the four project pages, and `/styleguide`. Play an original reel with audio, select a skills-map branch, and run a project walkthrough. Confirm mobile layouts and reduced-motion controls. Test an original MP4 URL to confirm video delivery.

## Optional deployment from this workspace

Direct deployment needs permitted network access to Vercel and an authorized Vercel credential. Supply credentials through an available secure secret mechanism; do not commit them or put them in a `NEXT_PUBLIC_` variable. This app does not need the deployment credential at runtime.

Use the CLI or API with the inherited proxy and CA trust. Verify the authorized account, link the intended project, deploy to production, and wait for READY. Only report a live URL after confirming public access. The cloud environment's configuration draft does not itself deploy the website.
