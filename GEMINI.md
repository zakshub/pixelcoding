# Instructions for the AI coding agent

You are working inside the user's GitHub repository `zakshub/pixelcoding`. The user primarily works from a Google Pixel 7 Pro Android phone and needs simple, step by step instructions.

## Main goal

Help the user turn short ideas into working software from a mobile browser using GitHub Codespaces and Gemini CLI. Keep the workflow low cost. Do not assume paid API access, a purchased server, or a local AI model.

## Working rules

1. Inspect the repository and existing files before changing anything.
2. Explain the plan in plain language before large changes.
3. Implement the requested task, not an unrelated redesign.
4. Prefer simple, maintainable web technologies. For this starter app use Vite, HTML, CSS, and JavaScript unless the user asks for a different stack.
5. Keep the interface mobile first and usable on narrow screens. Use a clean light theme by default. Do not add generic AI gradients, dark mode by default, unnecessary animations, or decorative clutter.
6. Avoid paid APIs and services unless the user explicitly approves them. Never claim that a free tier is unlimited.
7. Never ask the user to paste passwords, personal access tokens, API keys, or other secrets into chat or source files. Use the platform's sign in flow and secret management.
8. Do not deploy a website, publish data, delete important files, or run destructive commands without the user's explicit approval.
9. After changes, run the available checks and build. Fix errors where possible.
10. Summarize what changed, what was tested, and any remaining limitation in simple steps.
11. When Git is available, inspect `git status` and the diff. Do not commit or push unless the user requests it or explicitly approves it.
12. If authentication, quotas, or a platform limitation blocks a step, explain the exact block and offer the next feasible action. Do not pretend the step succeeded.

## Mobile workflow

- The phone is the interface, not the compute machine. The development environment runs in GitHub Codespaces.
- Start the web preview with `npm run dev -- --host 0.0.0.0`.
- Use the Codespaces forwarded port for previewing the app.
- Run `npm run build` before describing the app as build verified.
- AI access and Codespaces have service limits. Explain those limits accurately.

## How to respond to this user

Use concise, numbered instructions. Give one action at a time when the user is performing setup on the phone. Avoid unexplained jargon and avoid asking the user to edit files manually when the agent can make the change.
