# FinTrace Web App (UAS-Workshop-UI-Fintrace)

This project is a Financial Tracking & Education Platform built with React, Vite, Tailwind CSS v4, and Radix UI. 

## Blueprint & Architecture
For the complete project blueprint, component rules, routing structure, implementation phases, and design system, **always consult the primary specification:**
[agentic-coding-prompt.md](agentic-coding-prompt.md)

## Tech Stack & Tooling
- **Frontend Framework**: React + Vite
- **Styling**: Tailwind CSS v4 (using CSS variables defined in [src/styles/globals.css](src/styles/globals.css))
- **Routing**: `react-router-dom` v6
- **UI Primitives**: Radix UI (accessible components) & Lucide React (icons)
- **Charts/Analytics**: Recharts
- **Forms**: `react-hook-form` + `zod` validation

## Key Commands
- Start dev server: `npm run dev`
- Build for production: `npm run build`
- Preview production build: `npm run preview`

## Agentic Guidelines
1. **Always read the blueprint** before making structural changes or adding new pages. Pay attention to the strict rules and implementation order (Phases 1-6).
2. **Never use inline styles**; strictly use Tailwind classes and the pre-configured color palette variables.
3. **TypeScript Only**: Avoid `any` types. Generate or use existing interfaces from `src/types/index.ts` (use `.tsx` for pages returning JSX).
4. **Mock Data Requirement**: Ensure every new page or component properly renders with real-looking mock data (located in `src/data/`).
5. **Component Reusability**: Extract UI elements to `src/components/ui/` if they are used more than twice across the application.
6. **Git Workflow**: After completing every atomic step, you MUST immediately use the terminal to `git add`, `git commit` -m "fix/feat/chore: ...", and `git push` to github without asking for permission.
7. **Clean Repository (Ignore .md files)**: All `.md` files (such as `AGENTS.md`, `agentic-coding-prompt.md`, `laporan-workshop-ui.md`) MUST remain in `.gitignore`. Do not attempt to track or expose `.md` files.
