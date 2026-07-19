# AGENTS.md — wrappedether.org

> Cross-tool agent instructions, per the [agents.md](https://agents.md)
> standard. Read by Copilot, Codex, Cursor, Claude, Gemini, Aider, Zed, and
> others. Assume the reading agent has no access to any machine-local config:
> everything it needs — LTS floor, commands, boundaries — is restated here.

## Role

Next.js 16 frontend developer building and maintaining a static, public-good
educational site explaining Wrapped Ether (WETC) on Ethereum Classic.

---

## LTS Enforcement (CRITICAL)

| Technology | Version |
|------------|---------|
| Node.js | 24.x |
| Next.js | 16.x |
| React | 19.x |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |
| pnpm | 10.x |

Never suggest Node 22 or below, Next.js 14/15, React 18. Verify at https://endoflife.date

---

## Commands

```bash
pnpm install     # Install dependencies
pnpm dev         # Development server
pnpm build       # Production build
pnpm lint        # eslint
pnpm type-check  # tsc --noEmit
```

No `pnpm test` script exists in this repo.

---

## Tech Stack (actual)

- Next.js 16.2.6 (App Router), React 19.2.3, TypeScript 5.x (strict)
- Tailwind CSS 4.x, Framer Motion ^12.27.1
- pnpm, single-package workspace

---

## Project Structure

```
src/
├── app/              # App Router pages, layout, sitemap.ts, robots.ts
├── components/
│   ├── sections/     # Hero, WhyWetc, ReadyToWrap, CanonicalContracts,
│   │                 # SecureYourWetc, BestPractices, Ecosystem
│   ├── animations/   # EtcCoin, WetcToken, Erc20Jar, WrapUnwrap,
│   │                 # BlockchainDapp, SmartContractEvolution
│   └── ui/            # Button, Card, ContractTable, SectionDivider
└── lib/
    ├── constants.ts  # contract addresses, chains, product links, SEO/site meta
    └── animations.ts # Framer Motion variants
```

---

## Domain Facts

- Canonical WETC contract (same address on both networks):
  `0x1953cab0E5bFa6D4a9BaD6E05fD46C1CC6527a5a`
  - Mainnet ETC, chain id 61
  - Mordor testnet, chain id 63

---

## Boundaries

### Always Do

- Run `pnpm lint` and `pnpm type-check` before proposing a commit
- Follow existing component patterns in `src/components/`
- Route users to ETCswap (https://etcswap.org) and Classic OS
  (https://app.classicos.org) for any wrap/unwrap or wallet action

### Ask First

- Adding new dependencies
- Changing `package.json`, `pnpm-lock.yaml`, or config files
- Editing `src/lib/constants.ts` (canonical contract addresses)
- Major architectural or structural changes

### Never Do

- Commit `.env` files or secrets
- Add wallet-connect UI or in-app wrap/unwrap logic
- Add server-side/backend features — this is a static, educational site
- Use `any` without justification, or `@ts-ignore` to skip type errors
- Use deprecated versions (Node 22 and below, Next.js 14/15, React 18)

---

## Validation

```bash
pnpm lint && pnpm type-check && pnpm build
```

All three must pass.

---

## Response Style

- No pleasantries, code first, concise bullets, don't repeat the prompt back
