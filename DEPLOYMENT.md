# Public Vercel deployment

The application has no runtime API secrets. VERCEL_TOKEN is a deployment credential, scoped in the cloud environment to api.vercel.com; never expose it with a NEXT_PUBLIC_ prefix or commit it.

## Recommended: GitHub import (no deployment token)

Open https://vercel.com/new and import bharycr7/Bhary. Use the master branch, repository root, and the detected Next.js framework. The checked-in vercel.json supplies npm ci and npm run build. No application environment variables are required. Deploy, then verify the production URL without signing in. If prompted, grant the Vercel GitHub integration access to this repository.

The alternative token-based workflow below is only for deployments from this workspace.

## Alternative: deployment token prerequisite
Create a token in https://vercel.com/account/tokens for the intended account/team. Enter it securely in the cloud environment's VERCEL_TOKEN HTTP secret field and save the settings. No token should be pasted into chat. The saved requirement does not create a token or deploy the site.

## Deployment workflow
From /workspace/Bhary, validate with npm run typecheck and npm run build. Use the Vercel CLI or API through the configured HTTPS proxy and its existing CA trust. First verify token authorization with a read-only account request. Link or create the intended project (suggested name: bhary-portfolio); select the token's authorized team if necessary. Deploy to production. Do not upload .git, node_modules, local credentials, attachments, or environment files.

A live deployment is complete only after Vercel reports READY and the resulting production URL returns the portfolio without requiring a Vercel login. Check /, /styleguide, and /llms.txt, and test navigation and filters in a browser. If production Deployment Protection is enabled, disable it for this portfolio's production site as authorized by the owner's request to make it public. Keep unrelated team/project settings unchanged.

The cloud environment's Publish action snapshots the development environment; it does not publish this website. DNS changes are only needed for a custom domain; the default Vercel production domain is sufficient.
