# Pixel Coding

A phone friendly AI coding workspace for the Google Pixel 7 Pro. The editor and tools run in GitHub Codespaces, while the phone is used to control them in Chrome.

## What is already configured

- A Codespaces development container based on Node.js 22.
- Automatic installation of project dependencies and Gemini CLI when the Codespace is created.
- `GEMINI.md` instructions telling the coding agent how to work safely in this repository.
- A small mobile first starter page built with Vite, HTML, CSS, and JavaScript.
- Port forwarding for the live development preview on port 5173.

## Start on your phone

1. Open https://github.com/zakshub/pixelcoding in Chrome and sign in to GitHub.
2. Tap the green **Code** button.
3. Select **Codespaces**.
4. Tap **Create codespace on main**.
5. Wait for the browser editor to load and for setup to finish. The first setup may take several minutes.
6. Open **Terminal → New Terminal**.
7. Start the AI coding agent by running:

```bash
gemini
```

8. Follow the sign in instructions shown by Gemini CLI. Choose Google account sign in if it is offered. If the free tier is unavailable for your account or region, stop and do not enable paid billing.
9. After the agent opens, ask it to inspect the repository and follow `GEMINI.md`.

## Start the app preview

Open a second terminal using **Terminal → New Terminal**, then run:

```bash
npm run dev -- --host 0.0.0.0
```

Open the **Ports** panel and tap the forwarded port 5173 link to view the app. If it does not open automatically, use the local address shown in the terminal or the forwarded port link.

## First instruction for Gemini CLI

Paste this into the Gemini CLI session:

```text
Read GEMINI.md and inspect the existing project before editing. Improve this starter only if needed, then build a simple expense tracker with add and delete actions, categories, and monthly totals. Keep the design clean, light, and mobile friendly. Run npm run build, fix errors, and explain what changed. Do not deploy, use paid APIs, or commit and push without asking me first.
```

## Save changes to GitHub

Use the Source Control panel in the browser editor to review changed files, enter a commit message, commit, and push. Only push after reviewing the changes. Never paste a GitHub personal access token, password, or API key into the chat or source files.

## Free tier limits

This setup avoids downloading or running an AI model on the phone, but it is not unlimited or guaranteed to cost zero in every account:

- GitHub Codespaces has monthly compute and storage quotas on eligible personal accounts.
- Gemini CLI free access depends on Google's current eligibility, account, region, and quota rules.
- If either service asks you to upgrade or enable billing, do not proceed unless you explicitly choose to pay.

Official details:

- Codespaces billing: https://docs.github.com/en/billing/concepts/product-billing/github-codespaces
- Gemini CLI authentication: https://geminicli.com/docs/get-started/authentication/
- Gemini CLI quotas and pricing: https://geminicli.com/docs/resources/quota-and-pricing/

## Important

This repository does not automatically publish a public website. First create and test the app. Hosting and deployment can be configured later.
