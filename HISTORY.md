# Histórico de Mudanças

Este arquivo mantém um registro de todas as mudanças relevantes do projeto.

## 2025-09-24

### DOCS: docs: new doc

**Commit:** 77e7e8a | **Author:** leobrizolladev

**Arquivos alterados:**

- README.md

---

## 2025-09-24

### FIX: fix: configure Vercel deployment with pnpm v9 compatibility

**Commit:** fd21c9a | **Author:** leobrizolladev

**Arquivos alterados:**

- .nvmrc
- package.json
- vercel.json

---

## 2025-09-24

### FIX: fix: install dependencies in Vercel

**Commit:** 3646913 | **Author:** leobrizolladev

**Arquivos alterados:**

- pnpm-lock.yaml

---

## 2025-09-24

### FEAT: feat: add new components and features for list tasks

**Commit:** 0feb862 | **Author:** leobrizolladev

**Arquivos alterados:**

- eslint.config.mjs
- next.config.ts
- package.json
- pnpm-lock.yaml
- pnpm-workspace.yaml
- src/app/layout.tsx
- src/app/page.tsx
- src/app/todo-list/componentes/page.tsx
- src/app/todo-list/layout.tsx
- src/app/todo-list/page.tsx
- src/assets/icons/check.svg
- src/assets/icons/pencil.svg
- src/assets/icons/plus.svg
- src/assets/icons/trash.svg
- src/assets/icons/x.svg
- src/assets/images/logo.svg
- src/components/todo-list/badge/index.tsx
- src/components/todo-list/button-icon/index.tsx
- src/components/todo-list/button/index.tsx
- src/components/todo-list/card/index.tsx
- src/components/todo-list/container/index.tsx
- src/components/todo-list/icon/index.tsx
- src/components/todo-list/input-checkbox/index.tsx
- src/components/todo-list/input-text/index.tsx
- src/components/todo-list/skeleton/index.tsx
- src/components/todo-list/text/index.tsx
- src/core-components/task-item/index.tsx
- src/core-components/tasks-list/index.tsx
- src/core-components/tasks-summary/index.tsx
- src/core-components/todo-list/footer/index.tsx
- src/core-components/todo-list/header/index.tsx
- src/core-components/todo-list/main-content/index.tsx
- svgr.d.ts
- tsconfig.json

---

## 2025-09-23

### FEAT: feat: add new SVG icons for application

**Commit:** 375e2fd | **Author:** leobrizolladev

**Arquivos alterados:**

- src/app/globals.css
- src/assets/icons/check.svg
- src/assets/icons/pencil.svg
- src/assets/icons/plus.svg
- src/assets/icons/spinner.svg
- src/assets/icons/trash.svg
- src/assets/icons/x.svg
- src/assets/images/logo.svg

---

## 2025-09-22

### FEAT: feat: implement Calculator Component with tests and context integration

**Commit:** 8f8841b | **Author:** leobrizolladev

**Arquivos alterados:**

- src/app/calculator/page.tsx
- src/components/calculator-component/**tests**/index.test.tsx
- src/components/calculator-component/index.tsx
- src/components/calculator-display/**tests**/index.test.tsx
- src/components/operation-history/**tests**/index.test.tsx
- src/components/operation-history/index.tsx
- src/context/calculator-context/**tests**/index.test.tsx
- src/context/calculator-context/index.tsx
- src/hooks/useCalculator/**tests**/index.test.tsx
- src/hooks/useCalculator/index.tsx

---

## 2025-09-22

### OTHER: feat(component): enchance calculator functionality and update display logic

**Commit:** 2861b4a | **Author:** leobrizolladev

**Arquivos alterados:**

- src/app/calculator/page.tsx
- src/components/button/index.tsx
- src/components/calculator-display/index.tsx

---

## 2025-09-19

### TEST: feat(component): add new component operation history

**Commit:** 912e0cf | **Author:** leobrizolladev

**Arquivos alterados:**

- src/app/calculator/page.tsx
- src/components/operation-history/**tests**/index.test.tsx
- src/components/operation-history/index.tsx
- src/components/text/**tests**/index.test.tsx
- src/components/text/index.tsx

---

## 2025-09-19

### TEST: feat(component): add new component display-calculator

**Commit:** 105e474 | **Author:** leobrizolladev

**Arquivos alterados:**

- src/app/calculator/page.tsx
- src/components/button/index.tsx
- src/components/calculator-display/**tests**/index.test.tsx
- src/components/calculator-display/index.tsx

---

## 2025-09-18

### TEST: feat(component): add new component card

**Commit:** 4f4009e | **Author:** leobrizolladev

**Arquivos alterados:**

- src/app/calculator/page.tsx
- src/components/button/index.tsx
- src/components/card/**tests**/index.test.tsx
- src/components/card/index.tsx

---

## 2025-09-18

### TEST: feat(component): add new component button

**Commit:** 74e8aaa | **Author:** leobrizolladev

**Arquivos alterados:**

- CLAUDE.md
- src/app/calculator/page.tsx
- src/components/button/**tests**/index.test.tsx
- src/components/button/index.tsx
- src/components/text/**tests**/index.test.tsx
- src/components/text/index.tsx

---

## 2025-09-17

### TEST: feat(page): add new page Calculator

**Commit:** 304ca5b | **Author:** leobrizolladev

**Arquivos alterados:**

- src/app/**tests**/page.test.tsx
- src/app/calculator/page.tsx
- src/app/globals.css
- src/app/layout.tsx
- src/app/page.tsx
- src/components/text/index.tsx

---

## 2025-09-12

### OTHER: fix(lint): resolve linting in update-history script

**Commit:** 49eca0e | **Author:** leobrizolladev

**Arquivos alterados:**

- .gitignore

---

## 2025-09-12

### TEST: feat(config): configure system tracking history

**Commit:** 68839fd | **Author:** leobrizolladev

**Arquivos alterados:**

- .gitignore
- .husky/commit-msg
- .husky/post-commit
- .husky/pre-commit
- .lintstagedrc.json
- .prettierignore
- .prettierrc.json
- CLAUDE.md
- commitlint.config.js
- jest.config.js
- jest.setup.js
- package.json
- pnpm-lock.yaml
- scripts/update-history.js
- src/app/**tests**/page.test.tsx

---
