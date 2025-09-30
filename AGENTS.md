# Repository Guidelines

## Project Structure & Module Organization

Source lives in `src/`. `src/app` holds Next App Router entrypoints (e.g., `layout.tsx`, route segments) and global styles. UI is split between reusable building blocks in `src/core-components` and feature-level composites in `src/components`. Shared state resides under `src/context`, reusable logic under `src/hooks`, domain types in `src/models`, and static assets in `src/assets`. Unit tests stay close to the code inside `__tests__` folders (e.g., `src/components/button/__tests__/index.test.tsx`)—add new specs alongside the module they cover.

## Build, Test, and Development Commands

Target Node 20+ (`nvm use` reads `.nvmrc`). Install deps with `npm install`. Use `npm run dev` for the Turbopack-powered development server and `npm run build` followed by `npm run start` to rehearse production. Quality checks: `npm run lint`, `npm run lint:fix`, `npm run type-check`, and `npm run format:check`. Run Jest suites with `npm test`, keep them running via `npm run test:watch`, and generate coverage reports with `npm run test:coverage` (outputs to `coverage/`).

## Coding Style & Naming Conventions

The stack is TypeScript + React 19 with Tailwind CSS v4 tokens. Follow Prettier (`.prettierrc.json`) defaults: 2-space indentation, single quotes, semicolons, LF endings. Components, hooks, and contexts are PascalCase in code (`CalculatorDisplay`), while directories stay kebab-case. Use readonly props/types where possible, prefer functional components, and keep styling in class utilities or `globals.css`—avoid inline hex colors when a design token exists. Run `npm run format` if manual formatting is needed.

## Testing Guidelines

Jest + Testing Library drive UI tests (`jest.config.js` loads `jest.setup.js` with `@testing-library/jest-dom`). Name files `*.test.tsx` or keep them in `__tests__` to stay inside collection globs. Write interaction-focused tests that assert rendered output, not implementation details. Failing tests block commits via Husky, so run the suite before pushing; regenerate coverage whenever behavior changes and include the summary in the PR if it drops meaningfully.

## Commit & Pull Request Guidelines

Commit lint enforces Conventional Commits (`feat`, `fix`, `docs`, `refactor`, etc.)—use `npm run commit` for the Commitizen prompt. Husky runs `lint-staged` (ESLint + Prettier) and `commitlint`; post-commit triggers `scripts/update-history.js`, so keep `HISTORY.md` current or adjust the script when necessary. PRs should link relevant issues, describe scope and trade-offs, list verification steps (`npm run lint`, `npm test`), and attach UI screenshots when the change touches visuals. Ensure migrations or configuration updates include roll-back notes in the PR body.
