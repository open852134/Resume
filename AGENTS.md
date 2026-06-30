<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

- **Stack**: Next.js 16.2.4 (App Router, static export), React 19, Tailwind CSS v4, TypeScript, Framer Motion. No database, no backend API.
- **Node version**: 20+ required. Installed at `/usr/local/bin/node` from binary tarball (not via nvm/nodesource).
- **Package manager**: npm (lockfile is `package-lock.json`).
- **Dev server**: `npm run dev` → http://localhost:3000. Hot reloads on file changes.
- **Lint**: `npm run lint` (ESLint). Note: the repo has pre-existing lint errors (`react-hooks/set-state-in-effect` in `app/template.tsx` and `components/AnimateSection.tsx`); these are not regressions.
- **Build**: `npm run build` produces static HTML in `./out` (configured via `output: "export"` in `next.config.ts`).
- **Blog content**: Markdown files in `content/posts/`. Parsed with `gray-matter` + `marked` at build/render time.
- **No external services**: Fully static site. No Docker, no databases, no API keys needed.
