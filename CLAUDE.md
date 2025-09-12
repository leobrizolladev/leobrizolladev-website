# Claude Code - Comandos Essenciais

Este arquivo contém os comandos essenciais para desenvolvimento com Claude Code neste projeto.

## Scripts de Desenvolvimento

```bash
# Desenvolvimento
pnpm dev

# Build
pnpm build  

# Lint
pnpm lint

# Typecheck
npx tsc --noEmit
```

## Estrutura do Projeto

- `src/app/` - App Router do Next.js 15
- `src/components/` - Componentes reutilizáveis
- `public/` - Arquivos estáticos
- `package.json` - Dependências e scripts

## Dependências Principais

- **Next.js 15** - Framework React
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Framework CSS
- **ESLint** - Linter de código

## Comandos Úteis

```bash
# Verificar tipagem
npx tsc --noEmit

# Instalar dependência
pnpm add <package>

# Instalar dependência de desenvolvimento
pnpm add -D <package>

# Remover dependência
pnpm remove <package>
```