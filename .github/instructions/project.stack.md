---
description: "DH Finance App stack, versions, and best practices"
globs: "**/*"
alwaysApply: true
---
# Project Stack

Use this rule as a reference when creating or changing code in the DH Finance App. Preserve the versions and patterns below unless an upgrade is explicitly requested.

## Runtime and Application

- **Node.js:** runtime required by Next.js and the project tools. Check the environment's configured version before upgrading dependencies.
- **Next.js:** `16.3.1`, using the App Router in `src/app`.
- **React:** `19.2.8` and **React DOM:** `19.2.8`.
- **TypeScript:** `^5`, with `strict: true`, `noEmit: true`, `moduleResolution: "bundler"`, `react-jsx`, and the `@/*` alias for `src/*`.
- The project is ESM (`"type": "module"`). Prefer `import`/`export` and follow the extensions and configuration supported by the Next bundler.
- Keep Server Components and Client Components separate. Use `"use client"` only in components that require state, effects, browser events, or client-side APIs.
- Preserve App Router conventions: `page.tsx`, `layout.tsx`, and Route Handlers in `src/app/**/route.ts`.

## Database and Prisma

- **Prisma ORM:** `^7.9.1` in `prisma` and **Prisma Client:** `^7.9.1` in `@prisma/client`.
- **PostgreSQL driver:** `^7.9.1` in `@prisma/adapter-pg`.
- **Schema:** `prisma/schema.prisma`, with the `postgresql` provider and Client generated in `src/generated/prisma`.
- **Configuration:** `prisma.config.ts` loads `dotenv/config`, points to the schema and migrations, and reads `DATABASE_URL` from the environment.
- Import the Client from the existing wrapper in `src/lib/prisma.ts`; do not create new connections on every request.
- In Prisma 7, keep the PostgreSQL driver adapter configured when creating the Client and use the Client's typed APIs. Do not copy Prisma 6 patterns that depend on the old configuration.
- After changing `prisma/schema.prisma`, format, validate, generate the Client, and create a migration with the appropriate Prisma commands. Do not edit applied migrations to rewrite history.
- Never expose `DATABASE_URL`, credentials, or tokens in Client Components, API responses, logs, or versioned files.
- Prefer explicit `select`/`include`, database-side filters, and transactions for related operations. Validate inputs before queries and handle constraint errors in a controlled way.

## Authentication and Security

- **NextAuth/Auth.js:** `^5.0.0-beta.32`, integrado por `@auth/prisma-adapter` `^2.11.3`.
- Authentication routes live in `src/app/api/auth/[...nextauth]/route.ts`; keep configuration, callbacks, and session access on the server.
- **bcryptjs:** `^3.0.3`. Never store plaintext passwords; use an appropriate-cost hash and compare with `bcryptjs` on the server. Do not return hashes in payloads.
- **dotenv:** `^17.4.2`. Variables intended for the browser must use the prefix and handling required by Next; secrets must remain without a public prefix.
- **Zod:** `^4.4.3`. Validate form data and Route Handler payloads at the application boundary before persistence or authentication.
- **@hookform/resolvers:** `^5.9.1` and **react-hook-form:** `^7.86.0`. Centralize Zod schemas and connect them through a resolver; do not duplicate validation rules only in the component.

## UI, Styling, and Components

- **Tailwind CSS:** `^4`, com **@tailwindcss/postcss:** `^4` em `postcss.config.mjs`.
- **tw-animate-css:** `^1.4.0`, **tailwind-merge:** `^3.6.0`, **clsx:** `^2.1.1`, and **class-variance-authority:** `^0.7.1` support class composition and variants.
- **@base-ui/react:** `^1.7.0` provides accessible primitives; **shadcn:** `^4.18.0` supports composing local components in `src/components/ui`.
- Reuse local components before adding new markup. Preserve accessibility, keyboard focus, disabled/loading/error states, and HTML semantics.
- When combining conditional classes, follow the existing helpers in `src/lib/utils.ts`; use `tailwind-merge` to resolve conflicts and `clsx`/CVA for variants.
- In Tailwind 4, keep configuration through PostCSS and global tokens/styles in `src/app/globals.css`; do not introduce Tailwind 3 configuration without a clear need.
- **lucide-react:** `^1.33.0`, **lucide:** `^1.34.0`, and **react-icons:** `^5.7.0` are available for icons. Prefer one library per component and accessible icons with `aria-label` when no visible text is present.

## Development Tools and Types

- **@types/node:** `^20.19.43`, **@types/react:** `^19`, and **@types/react-dom:** `^19` provide types; keep them compatible with the installed runtime and React versions.
- Use `npm` and preserve `package-lock.json`. Dependency changes must update `package.json` and the lockfile together.
- Main commands: `npm run dev`, `npm run build`, `npm start`, and `npm run contract:emit`.
- Before finalizing changes, run at least `npm run build`; after schema changes, also validate and generate the Prisma Client.
- Do not add dependencies to solve something already covered by the stack. Remove redundant dependencies only after confirming that no imports or scripts use them.
- Versions using `^` allow compatible updates; `next` is pinned to `16.3.1`. Check changelogs and run builds/tests before updating major versions or beta releases.

## Declared Version Inventory

Production dependencies: `@auth/prisma-adapter ^2.11.3`, `@base-ui/react ^1.7.0`, `@hookform/resolvers ^5.9.1`, `@prisma/adapter-pg ^7.9.1`, `@prisma/client ^7.9.1`, `bcryptjs ^3.0.3`, `class-variance-authority ^0.7.1`, `clsx ^2.1.1`, `dotenv ^17.4.2`, `lucide ^1.34.0`, `lucide-react ^1.33.0`, `next 16.3.1`, `next-auth ^5.0.0-beta.32`, `react 19.2.8`, `react-dom 19.2.8`, `react-hook-form ^7.86.0`, `react-icons ^5.7.0`, `shadcn ^4.18.0`, `tailwind-merge ^3.6.0`, `tw-animate-css ^1.4.0`, and `zod ^4.4.3`.

Development dependencies: `@tailwindcss/postcss ^4`, `@types/node ^20.19.43`, `@types/react ^19`, `@types/react-dom ^19`, `prisma ^7.9.1`, `tailwindcss ^4`, and `typescript ^5`.

The `package-lock.json` is the source of truth for the installed resolution. When documenting or diagnosing a specific behavior, distinguish the declared version above from the version actually resolved in the lockfile.