# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**FinTrace** is a Financial Tracking & Education Platform built with React, Vite, and Tailwind CSS. It features a multi-role architecture (public, user, admin) with distinct layouts and navigation patterns. This is a student workshop project (UAS Workshop UI).

**Live:** https://workshop-ui-fintrace.vercel.app/

## Common Commands

```bash
# Development
npm run dev          # Start Vite dev server (port 5173)

# Build & Preview
npm run build        # Production build
npm run preview      # Preview production build locally

# Linting
npm run lint         # Run ESLint (react-hooks + react-refresh rules)
```

## Architecture

### Tech Stack (Actual Versions)
- **Framework**: React 18.3 + Vite 5.2
- **Styling**: Tailwind CSS 3.4 with CSS variables (see `src/styles/globals.css`)
- **Routing**: `react-router-dom` v6 (`createBrowserRouter`)
- **UI Primitives**: Radix UI + `lucide-react` for icons
- **Charts**: Recharts
- **Forms**: `react-hook-form` + `zod`
- **Notifications**: `react-hot-toast`

### Layout Architecture (`src/components/layout/AppLayout.tsx`)

The app uses a dynamic layout system based on the current route. All routes are wrapped in `AppLayout` which conditionally renders headers and sidebars:

1. **Public Layout** (`Header` + `Footer`): Landing page, articles, courses, cart
2. **User Private Layout** (`UserHeader`): Dashboard, checkout, purchases
3. **Admin Layout** (`AdminHeader` + `AdminSidebar`): All `/admin/*` routes with 240px fixed sidebar
4. **Auth Pages** (no header/footer): Login, register

Key logic in `AppLayout.tsx`:
```tsx
const isAuth = pathname === '/login' || pathname === '/register';
const isAdmin = pathname.startsWith('/admin');
const isUserPrivate = pathname.startsWith('/dashboard') ||
  ['/checkout', '/purchases', '/checkout/success'].includes(pathname);
```

### Routing Structure (`src/router.tsx`)

All routes are children of the single `AppLayout` route:

- **Public**: `/`, `/articles`, `/articles/:slug`, `/courses`, `/courses/:slug`, `/cart`
- **Auth**: `/login`, `/register`
- **User Dashboard**: `/dashboard`, `/dashboard/transactions`
- **Payment**: `/checkout`
- **Admin**: `/admin/articles`, `/admin/products`, `/admin/users`, `/admin/transactions`

> The blueprint (`agentic-coding-prompt-fix.md`) defines additional routes not yet implemented: `/dashboard/analytics`, `/dashboard/budget`, `/dashboard/my-courses`, `/dashboard/profile`, `/dashboard/feedback`, `/purchases`, `/checkout/success`, `/admin`, `/admin/feedbacks`, `/admin/profile`.

### State Management

**AuthContext** (`src/context/AuthContext.tsx`): Mock authentication using localStorage key `fintrace_user`. Two mock accounts: `user@fintrace.com` (role: user) and `admin@fintrace.com` (role: admin). Provides `login(role)`, `logout()`, `isAuthenticated`, `isAdmin`.

**CartContext** (`src/context/CartContext.tsx`): Shopping cart state persisted to localStorage key `fintrace_cart`. Provides `items[]`, `addItem()`, `removeItem()`, `clearCart()`, `totalItems`, `totalPrice`.

### Design System (`src/styles/globals.css`)

CSS variables define the color palette:
- `--color-primary: #6366f1`, `--color-primary-dark: #4f46e5`
- `--color-secondary: #8b5cf6`, `--color-accent: #06b6d4`
- Background: `linear-gradient(135deg, #e0f2fe 0%, #fae8ff 50%, #fce7f3 100%)`

Component patterns:
- Cards: `bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-sm`
- Buttons Primary: `bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full`
- Buttons Secondary (cyan): `bg-cyan-500 hover:bg-cyan-600 text-white rounded-full`
- Logo: `WalletIcon` inside gradient box + `gradient-text` class
- Container: `container-1280` enforces max-width 1280px

### Type System (`src/types/index.ts`)

Core entities: `User`, `Article`, `Product`, `Transaction`, `Budget`, `Purchase`, `CartItem`, `Review`, `ConnectedAccount`. All pages use strict TypeScript with `noUnusedLocals` and `noUnusedParameters` enabled in `tsconfig.json`.

### Mock Data (`src/data/`)

All data is mocked in `mockArticles.ts`, `mockProducts.ts`, `mockTransactions.ts`, `mockUsers.ts`. New pages must render with real-looking mock data from these files.

### Imports & Path Aliasing

There is **no path aliasing** configured in `vite.config.ts`. All imports use relative paths (e.g., `./components/layout/AppLayout`, `../types`). Do not use `@/` prefixes.

## Development Guidelines

1. **Always read `agentic-coding-prompt-fix.md`** before structural changes. It contains the complete blueprint, implementation phases, and strict rules.

2. **Styling**: Never use inline styles. Use Tailwind classes with the pre-configured CSS variables. The `container-1280` class enforces max-width 1280px (matches Figma exports).

3. **Components**: Extract reusable UI elements to `src/components/ui/` if used more than twice. Feature-specific components go in `src/components/features/`.

4. **Icons**: Always use `lucide-react`. Never use emoji icons in production code.

5. **Hover States**: All interactive elements must have `hover:` transitions.

6. **Empty States**: All lists and tables must handle empty states.

7. **TypeScript**: `tsconfig.json` has `noUnusedLocals` and `noUnusedParameters` enabled. Unused variables or imports will break the build.

8. **Git Workflow**: Commit messages follow pattern: `type: description` (e.g., `feat: add login page`, `fix: button hover state`).

9. **Git Workflow Commit**: After completing every atomic step, you MUST immediately use the terminal to `git add`, `git commit` -m "fix/feat/chore: ...", and `git push` to github without asking for permission.
