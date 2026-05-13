# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**FinTrace** is a Financial Tracking & Education Platform built with React, Vite, Tailwind CSS v4, and Radix UI. It features a multi-role architecture (public, user, admin) with distinct layouts and navigation patterns.

## Common Commands

```bash
# Development
npm run dev          # Start Vite dev server (port 5173)

# Build & Preview
npm run build        # Production build
npm run preview      # Preview production build locally

# Linting
npm run lint         # Run ESLint
```

## Architecture

### Tech Stack
- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 with CSS variables (see `src/styles/globals.css`)
- **Routing**: `react-router-dom` v7 (data API with `createBrowserRouter`)
- **UI Primitives**: Radix UI + `lucide-react` for icons
- **Charts**: Recharts
- **Forms**: `react-hook-form` + `zod`
- **Notifications**: `react-hot-toast`

### Layout Architecture (`src/components/layout/AppLayout.tsx`)

The app uses a dynamic layout system based on the current route:

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

All routes are wrapped in `AppLayout` which conditionally renders headers:

- **Public**: `/`, `/articles`, `/articles/:slug`, `/courses`, `/courses/:slug`, `/cart`
- **Auth**: `/login`, `/register`
- **User Dashboard**: `/dashboard`, `/dashboard/transactions`, `/dashboard/analytics`, `/dashboard/budget`, `/dashboard/my-courses`, `/dashboard/profile`, `/dashboard/feedback`
- **Payment**: `/checkout`, `/checkout/success`, `/purchases`
- **Admin**: `/admin`, `/admin/articles`, `/admin/products`, `/admin/users`, `/admin/transactions`, `/admin/profile`

### State Management

**AuthContext** (`src/context/AuthContext.tsx`): Mock authentication using localStorage key `fintrace_user`. Two mock accounts: `user@fintrace.com` (role: user) and `admin@fintrace.com` (role: admin). Provides `login(role)`, `logout()`, `isAuthenticated`, `isAdmin`.

**CartContext** (`src/context/CartContext.tsx`): Shopping cart state persisted to localStorage key `fintrace_cart`. Provides `items[]`, `addItem()`, `removeItem()`, `clearCart()`, `totalItems`, `totalPrice`.

### Design System (`src/styles/globals.css`)

CSS variables define the color palette:
- `--color-primary: #667eea`, `--color-primary-dark: #764ba2`
- `--gradient-bg: linear-gradient(135deg, #E8E0FF 0%, #FFE8F5 50%, #E0F4FF 100%)`
- Pastel icon backgrounds: `--icon-bg-blue`, `--icon-bg-pink`, etc.
- Text hierarchy: `--text-primary`, `--text-secondary`, `--text-muted`, `--text-light`

Component patterns:
- Cards: `bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/50`
- Buttons Primary: `bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full`
- Buttons Secondary (cyan): `bg-cyan-500 hover:bg-cyan-600 text-white rounded-full`
- Logo component uses `WalletIcon` in gradient box + `gradient-text` class

### Type System (`src/types/index.ts`)

Core entities: `User`, `Article`, `Product`, `Transaction`, `Budget`, `Purchase`, `CartItem`, `Review`, `ConnectedAccount`. All pages use strict TypeScript—avoid `any` types.

### Mock Data (`src/data/`)

All data is mocked in `mockArticles.ts`, `mockProducts.ts`, `mockTransactions.ts`, `mockUsers.ts`. New pages must render with real-looking mock data from these files.

## Development Guidelines

1. **Always read `agentic-coding-prompt.md`** before structural changes. It contains the complete blueprint, implementation phases, and strict rules.

2. **Styling**: Never use inline styles. Use Tailwind classes with the pre-configured CSS variables. The `container-1280` class enforces max-width 1280px (matches Figma exports).

3. **Components**: Extract reusable UI elements to `src/components/ui/` if used more than twice. Feature-specific components go in `src/components/features/`.

4. **Icons**: Always use `lucide-react`. Never use emoji icons in production code.

5. **Hover States**: All interactive elements must have `hover:` transitions.

6. **Empty States**: All lists and tables must handle empty states.

7. **Git Workflow**: Commit messages follow pattern: `type: description` (e.g., `feat: add login page`, `fix: button hover state`).

## Key Dependencies

```json
{
  "react": "^19.2.5",
  "react-router-dom": "^7.15.0",
  "tailwindcss": "^4.2.4",
  "@tailwindcss/postcss": "^4.3.0",
  "lucide-react": "^1.14.0",
  "recharts": "^3.8.1",
  "react-hook-form": "^7.75.0",
  "zod": "^4.4.3",
  "react-hot-toast": "^2.6.0"
}
```

## Live Deployment

The app deploys to Vercel at: `https://workshop-ui-fintrace.vercel.app/`
