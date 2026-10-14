# Pixel Coding

A phone friendly AI coding workspace for Google Pixel 7 Pro using GitHub Codespaces and Gemini CLI.

## What this setup does

- Runs the coding environment in GitHub Codespaces, not on the phone.
- Installs Gemini CLI in the Codespace.
- Uses Google account sign in for Gemini CLI. Free access has usage limits and is not unlimited.
- Keeps project files in this GitHub repository.

## Start on your phone

1. Open https://github.com/zakshub/pixelcoding
2. Tap the green **Code** button.
3. Open the **Codespaces** tab.
4. Tap **Create codespace on main**.
5. Wait for the browser editor to open.
6. Open **Terminal → New Terminal**.
7. Run:

```bash
gemini
```

8. Choose **Sign in with Google** and follow the login instructions shown in the terminal. If a browser sign in page does not open automatically, follow the URL and code shown by the CLI.
9. When Gemini asks for permission to edit files or run commands, review the request before allowing it.

## First test prompt

Paste this into Gemini CLI:

```text
Inspect this repository. Create a simple responsive expense tracker web app using plain HTML, CSS, and JavaScript. Add expenses, categories, delete actions, and monthly totals. Keep the design clean and light. Test the main interactions, explain what you changed, and do not deploy anything or add paid APIs.
```

## Save changes to GitHub

After Gemini edits the files, inspect the changes in the Source Control panel. Commit and push the changes to this repository. Do not paste a GitHub personal access token into chat or source files.

## Free tier limits

GitHub Codespaces has a monthly free compute and storage quota on personal accounts. Gemini CLI offers a free tier for eligible personal Google accounts, but usage is limited and can change. Neither service is unlimited.

- Codespaces billing: https://docs.github.com/en/billing/concepts/product-billing/github-codespaces
- Gemini CLI authentication: https://geminicli.com/docs/get-started/authentication/
- Gemini CLI quotas: https://geminicli.com/docs/resources/quota-and-pricing/

## Important

This repository is a starter workspace. It does not automatically publish a live website. Hosting and deployment can be added after the app works.
