# Bailey Anderson — Engineering Portfolio

A standalone Next.js and TypeScript portfolio for Bailey Anderson, founder of Red Phoenix Global LLC. The home page includes project filters, eight expandable project studies, technical expertise, experience, contact and a downloadable PDF. Five flagship projects have individual permanent pages.

## Run locally

Use Node.js 22 or 24. Run `npm ci`, then `npm run dev`. For a production export run `npm run build`, then `npm run typecheck`. Run `npm start` to serve the finished export. Images and fonts are served locally. YouTube players load after a visitor requests playback.

## Publish to GitHub and Vercel

From this repository, sign in with `gh auth login`. Run:

```sh
gh repo create bailey-anderson-portfolio --public --source=. --remote=origin --push
```

Sign in to Vercel, choose **Add New → Project**, and import the new GitHub repository under the intended account. Select **Next.js**, keep the root directory at the repository root and deploy. The project uses the standard Next.js build and static export. No application secrets are required. Automatic system environment variables should be enabled in Vercel so canonical and social URLs can use the assigned production hostname. Every subsequent push to main can redeploy through the integration.

## Editorial maintenance

Project text lives in content/. Assets and project evidence are documented in ASSETS.md. Product links point to public sites. The private sources of existing applications are excluded. Regenerate the PDF and social artwork when the project summaries or branding change. The downloadable PDF is included in public/.

The deliverable ZIP contains the portfolio folder including a self-contained local Git history. The additional preview folder is a prebuilt copy suitable for a static web server.
