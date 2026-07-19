# GitHub Copilot Instructions: wrappedether.org

> GitHub Copilot only reads this file and project code — it does not have
> access to Claude's global config. LTS rules are restated here for that reason.

## Project

Public good educational site for Wrapped Ether (WETC), the ERC-20 tokenized
form of Ethereum Classic's native ETC. Not for profit. Static/educational only.

## LTS Enforcement (CRITICAL)

| Technology | Version |
|------------|---------|
| Node.js | 24.x |
| Next.js | 16.x |
| React | 19.x |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |
| pnpm | 10.x |

**Never suggest:** Node 22 or below, Next.js 14/15, React 18.
If unsure, verify at https://endoflife.date

## Tech Stack (actual, from package.json)

- Next.js 16.x (App Router), React 19.x, TypeScript 5.x
- Tailwind CSS 4.x, Framer Motion 12.x
- pnpm, single-package workspace

Exact versions live in `package.json` — read them there, not from this file.

## Commands

```bash
pnpm install     # Dependencies
pnpm dev         # Dev server
pnpm build       # Build
pnpm lint        # Lint (eslint)
pnpm type-check  # tsc --noEmit
```

There is no `pnpm test` script in this repo — do not invent one without being asked.

## Key Rules

1. TypeScript strict mode — already enabled in `tsconfig.json`, keep it that way
2. Follow existing component patterns in `src/components/`
3. Tailwind utility classes for styling
4. No wallet-connect or in-app wrap/unwrap UI — route to ETCswap
   (https://etcswap.org) and Classic OS (https://app.classicos.org)
5. Run lint and type-check before proposing a commit

## Protected Files

Do not modify without explicit request:

- `package.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`
- `tsconfig.json`, `next.config.ts`
- `src/lib/constants.ts` (canonical contract addresses)

## Validation

```bash
pnpm lint && pnpm type-check && pnpm build
```

All three must pass before proposing a PR.

## Structure

```
src/
├── app/            # Next.js App Router pages, sitemap, robots
├── components/     # sections/, animations/, ui/
└── lib/            # constants.ts, animations.ts
```

## Don't

- Commit `.env` files or secrets
- Use `any` without justification
- Skip TypeScript errors with `@ts-ignore`
- Use deprecated versions (Node 22 and below, Next.js 14/15, React 18)
- Add wallet connection or wrapping logic — this site only educates and routes
- Add server-side/backend features — this is a static, educational site

## Response Style

- No pleasantries, code first, concise bullets, don't repeat the prompt back
