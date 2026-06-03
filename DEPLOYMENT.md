# Deployment Guide

This document outlines steps for deploying GlobalBridge to Vercel or Netlify.

## Prerequisites

- Node.js 20+ installed
- `npm install` completed in the repository root
- Environment variables configured for Supabase if using production auth
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`

> For local smoke test and QA automation, the app supports a mock auth mode when Supabase variables are missing.

## Vercel

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Visit https://vercel.com and create a new project.
3. Import the `globalbridge` repository.
4. Set the framework preset to `Vite` if not auto-detected.
5. Configure environment variables under Project Settings:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - optionally `VITE_MOCK_AUTH=true` for demo/test deploys without a Supabase backend
6. Use the default build command:
   - `npm run build`
7. Use the default output directory:
   - `dist`
8. Deploy and verify the site.

## Continuous Integration (GitHub Actions)

We recommend adding a CI workflow to run tests and build on every push and pull request. A sample workflow is included at `.github/workflows/ci.yml` in this repository.

The CI should run the following steps:
- Install Node and dependencies (`npm ci`).
- Run type-checking and linting (`npm run lint`).
- Run the production build (`npm run build`).
- Run accessibility and E2E smoke tests (`npm run test:a11y` and `npm run test:e2e`).

Ensure repository secrets are set for any environment variables used in tests (for example, `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` when testing against a real Supabase instance). For Playwright, the workflow should call `npx playwright install --with-deps` before running tests.

## Netlify

1. Connect your repository to Netlify.
2. Under site settings, set the build command:
   - `npm run build`
3. Set the publish directory:
   - `dist`
4. Add the same environment variables as above.
5. Deploy the site and verify the homepage.

## Local Verification

Run the project locally before deploying:

```bash
npm install
npm run dev -- --host 127.0.0.1 --port 4173
```

Then open:

```
http://127.0.0.1:4173
```

## QA & E2E Validation

Use Playwright tests for smoke validation and accessibility checks:

```bash
npm run test:e2e
npm run test:a11y
```

Note: In CI, ensure Playwright browsers are installed and the `webServer` URL in `playwright.config.ts` matches the server started by the CI (the workflow below starts the dev server automatically during tests).

## Notes

- The app now uses React lazy loading for route-level code-splitting.
- A global `ErrorBoundary` prevents a single module crash from taking down the entire app.
- The Dashboard includes launch activity tracking for posted job requests.
